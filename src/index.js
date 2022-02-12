/************************Babel Polyfill*********************************/
require("babel-polyfill");

/*********************************  Express *********************************/
const express = require("express");

/*********************************  Cluster  *********************************/
const cluster = require("cluster");

const numCPUs = require("os").cpus().length;

/*********************************  Dotenv *********************************/
require("dotenv").config();

const config = require("./config");

/*********************************  Minimist *********************************/
const parseArg = require("minimist");

/*********************************  Logger *********************************/
const log4js = require("./logger");
const logger = log4js.getLogger();
const loggerRoute = log4js.getLogger("routeNotExist");

/*********************************  Sessions *********************************/
const session = require("express-session");
const MongoStore = require("connect-mongo");
const advancedOptions = {useNewUrlParser: true, useUnifiedTopology: true};

/*********************************  Passport *********************************/
const passport = require("passport");

/*********************************  Redis *********************************/
/* const redis = require("redis");
const RedisStore = require("connect-redis")(session);
let redisClient = redis.createClient({host: "localhost", port: 6379, legacyMode: true});
(async () => {
	redisClient.connect();
})(); */

/*********************************  Routes *********************************/

const loginRoutes = require("./routes/auth");
const homeRoutes = require("./routes/home");
const productsRoutes = require("./routes/products");
const infoRoutes = require("./routes/info");
const randomRoutes = require("./routes/random");

const Contenedor = require("./Contenedor");
const store = new Contenedor("products");

const Chat = require("./Chat.js");
const chat = new Chat();

const {PORT, SERVER} = parseArg(process.argv.slice(2), {default: {PORT: 8080, SERVER: "FORK"}});
const http = require("http");

if (cluster.isPrimary && SERVER === "CLUSTER") {
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}
	cluster.on("exit", (worker, code, signal) => {
		logger.info(`Worker ${worker.process.pid} died.`);
	});
} else {
	const app = express();
	const server = http.createServer(app);
	/*********************************  Engine *********************************/

	app.set("views", "./views");
	app.set("view engine", "ejs");

	/*********************************  Middlewares *********************************/

	app.use(express.json());
	app.use(express.urlencoded({extended: true}));
	app.use(express.static(process.cwd() + "/public"));

	app.use(
		/*********************************  Store de sessiones en Redis *********************************/
		/* session({
			store: new RedisStore({client: redisClient}),
			secret: "secreto123",
			resave: true,
			saveUninitialized: true,
			rolling: true,
			cookie: {maxAge: 60000},
		}) */

		/*********************************  Store de sessiones en MongoDb *********************************/

		session({
			store: MongoStore.create({
				mongoUrl: config.mongoDb.cnxUrl,
				mongoOptions: advancedOptions,
			}),
			secret: config.mongoDb.secret,
			resave: true,
			saveUninitialized: true,
			rolling: true,
			cookie: {maxAge: 600000},
		})
	);

	/*  redisClient.on("ready", () => {
		logger.info("Conected to redis Successfully!");
	});
	redisClient.on("error", (err) => {
		logger.error(err);
	}); */

	app.use(passport.initialize());
	app.use(passport.session());

	if (PORT == 8081 && SERVER === "CLUSTER") {
		app.use("/api/randoms", randomRoutes);
	}
	if (PORT == 8082 || 8083 || 8084 || 8085) {
		app.use("/api/randoms", randomRoutes);
	}

	app.use("/info", infoRoutes);
	app.use("/", loginRoutes);
	app.use(homeRoutes);
	app.use(productsRoutes);

	app.use(function (req, res, next) {
		loggerRoute.warn(`Quisieron ingresar a ${req.path}`);
		res.status(404).send("Route not found!");
	});
	/* app.get("*", (req, res) => {
		logger.info(`Quisieron ingresar a ${req.path}`);
		res.status(404).send("ruta no encontrada");
	}); */
	/*********************************  Server *********************************/
	server.listen(PORT, () => {
		logger.info(`Servidor http escuchando en el puerto: ${server.address().port}`);
	});
	server.on("error", (error) => logger.error(`Error en servidor: ${error}`));

	/*********************************  Normalizr *********************************/
	const {chatSchema, normalize, denormalize, print} = require("./normalizacion/index");

	/*********************************  Socket *********************************/
	const io = require("socket.io")(server);

	io.on("connection", (socket) => {
		logger.info("Client Conected");
		store.getAll().then((data) => {
			return io.sockets.emit("productsList", data);
		});
		socket.on("addProduct", async (product) => {
			await store.save(product);
			store.getAll().then((data) => {
				return io.sockets.emit("productsList", data);
			});
		});
		socket.on("editProduct", async (product) => {
			await store.editById(product);
			store.getAll().then((data) => {
				return io.sockets.emit("productsList", data);
			});
		});
		socket.on("deleteProduct", async (d) => {
			//Al eliminar un producto no me toma el refresh de la lista, y por lo tanto no se actualiza la lista. Debo hacer click nuevamente para que eso ocurra.
			store.getAll().then((data) => {
				return io.sockets.emit("productsList", data);
			});
		});

		// Chat

		chat.getAll().then((data) => {
			if (data.length > 0) return io.sockets.emit("chat", data);
		});

		socket.on("msn", async (msn) => {
			await chat.save(msn);
			io.sockets.emit("email", msn.email);
			await chat.getAll().then((data) => {
				const normalizedData = normalize({id: "messages", messages: data}, chatSchema);
				//print(normalizedData);
				if (data.length > 0) return io.sockets.emit("chat", data);
			});
		});
		socket.on("disconnect", () => {
			chat.deleteAll();
			logger.info("User disconnected");
		});
	});
}
