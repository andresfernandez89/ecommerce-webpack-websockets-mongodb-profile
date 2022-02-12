/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Chat.js":
/*!*********************!*\
  !*** ./src/Chat.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar log4js = __webpack_require__(/*! ./logger */ \"./src/logger.js\");\n\nvar logger = log4js.getLogger();\nvar loggerApi = log4js.getLogger(\"apisError\");\n\n__webpack_require__(/*! ./db.js */ \"./src/db.js\");\n\nvar Chats = __webpack_require__(/*! ./models/Chats.js */ \"./src/models/Chats.js\");\n\nvar Chat = /*#__PURE__*/function () {\n  function Chat() {\n    _classCallCheck(this, Chat);\n  }\n\n  _createClass(Chat, [{\n    key: \"save\",\n    value: function () {\n      var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {\n        var msn;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                msn = new Chats({\n                  author: {\n                    id: data.email,\n                    name: data.name,\n                    lastname: data.lastname,\n                    age: data.age,\n                    alias: data.alias,\n                    avatar: data.avatar\n                  },\n                  date: data.date,\n                  message: data.message\n                });\n                _context.next = 4;\n                return msn.save();\n\n              case 4:\n                return _context.abrupt(\"return\", console.log(\"File saved successfully\"));\n\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                loggerApi.error(\"The file cannot be written.\");\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }));\n\n      function save(_x) {\n        return _save.apply(this, arguments);\n      }\n\n      return save;\n    }()\n  }, {\n    key: \"getAll\",\n    value: function () {\n      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var chats;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.prev = 0;\n                _context2.next = 3;\n                return Chats.find();\n\n              case 3:\n                chats = _context2.sent;\n\n                if (!chats) {\n                  _context2.next = 6;\n                  break;\n                }\n\n                return _context2.abrupt(\"return\", chats);\n\n              case 6:\n                _context2.next = 11;\n                break;\n\n              case 8:\n                _context2.prev = 8;\n                _context2.t0 = _context2[\"catch\"](0);\n                loggerApi.error(\"The file cannot be read.\");\n\n              case 11:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[0, 8]]);\n      }));\n\n      function getAll() {\n        return _getAll.apply(this, arguments);\n      }\n\n      return getAll;\n    }()\n  }, {\n    key: \"deleteAll\",\n    value: function () {\n      var _deleteAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.prev = 0;\n                _context3.next = 3;\n                return Chats.deleteMany();\n\n              case 3:\n                _context3.next = 8;\n                break;\n\n              case 5:\n                _context3.prev = 5;\n                _context3.t0 = _context3[\"catch\"](0);\n                loggerApi.error(\"The file cannot be read.\");\n\n              case 8:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, null, [[0, 5]]);\n      }));\n\n      function deleteAll() {\n        return _deleteAll.apply(this, arguments);\n      }\n\n      return deleteAll;\n    }()\n  }]);\n\n  return Chat;\n}();\n\nmodule.exports = Chat;\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/Chat.js?");

/***/ }),

/***/ "./src/Contenedor.js":
/*!***************************!*\
  !*** ./src/Contenedor.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar helpers = __webpack_require__(/*! ./helpersProduct */ \"./src/helpersProduct.js\");\n\nvar Contenedor = /*#__PURE__*/function () {\n  function Contenedor(path) {\n    _classCallCheck(this, Contenedor);\n\n    this.products = {};\n    this.path = path;\n  }\n\n  _createClass(Contenedor, [{\n    key: \"save\",\n    value: function () {\n      var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(product) {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return helpers.writeProduct(product);\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function save(_x) {\n        return _save.apply(this, arguments);\n      }\n\n      return save;\n    }()\n  }, {\n    key: \"editById\",\n    value: function () {\n      var _editById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(obj) {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return helpers.reWriteProduct(obj);\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function editById(_x2) {\n        return _editById.apply(this, arguments);\n      }\n\n      return editById;\n    }()\n  }, {\n    key: \"getById\",\n    value: function () {\n      var _getById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {\n        var fileExists, obj;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return helpers.readProduct(this.path);\n\n              case 2:\n                fileExists = _context3.sent;\n\n                if (!fileExists) {\n                  _context3.next = 8;\n                  break;\n                }\n\n                obj = fileExists.find(function (element) {\n                  return element.id == id;\n                });\n\n                if (!obj) {\n                  _context3.next = 7;\n                  break;\n                }\n\n                return _context3.abrupt(\"return\", obj);\n\n              case 7:\n                return _context3.abrupt(\"return\", null);\n\n              case 8:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function getById(_x3) {\n        return _getById.apply(this, arguments);\n      }\n\n      return getById;\n    }()\n  }, {\n    key: \"getAll\",\n    value: function () {\n      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return helpers.readProduct(this.path);\n\n              case 2:\n                return _context4.abrupt(\"return\", _context4.sent);\n\n              case 3:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, this);\n      }));\n\n      function getAll() {\n        return _getAll.apply(this, arguments);\n      }\n\n      return getAll;\n    }()\n  }, {\n    key: \"deleteById\",\n    value: function () {\n      var _deleteById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {\n        return regeneratorRuntime.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                _context5.next = 2;\n                return helpers.deleteProduct(id);\n\n              case 2:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5);\n      }));\n\n      function deleteById(_x4) {\n        return _deleteById.apply(this, arguments);\n      }\n\n      return deleteById;\n    }()\n  }]);\n\n  return Contenedor;\n}();\n\nmodule.exports = Contenedor;\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/Contenedor.js?");

/***/ }),

/***/ "./src/auth/index.js":
/*!***************************!*\
  !*** ./src/auth/index.js ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = function authorize(req, res, next) {\n  if (req.isAuthenticated()) {\n    return next();\n  }\n\n  res.redirect(\"/login\");\n};\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/auth/index.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = {\n  mongoDb: {\n    cnxUrl: process.env.MONGO_URL,\n    secret: process.env.MONGO_SECRET\n  },\n  mysql: {\n    client: process.env.MYSQL_CLIENT,\n    host: process.env.MYSQL_HOST,\n    port: process.env.MYSQL_PORT,\n    user: process.env.MYSQL_USER,\n    pass: process.env.MYSQL_PASS,\n    database: process.env.MYSQL_DATABASE\n  }\n};\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/config.js?");

/***/ }),

/***/ "./src/db.js":
/*!*******************!*\
  !*** ./src/db.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var config = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\nvar log4js = __webpack_require__(/*! ./logger */ \"./src/logger.js\");\n\nvar logger = log4js.getLogger();\n/*********************************  Knex Mysql *********************************/\n\nvar knex = __webpack_require__(/*! knex */ \"knex\")({\n  client: config.mysql.client,\n  connection: {\n    host: config.mysql.host,\n    port: config.mysql.port,\n    user: config.mysql.user,\n    password: config.mysql.pass,\n    database: config.mysql.database\n  },\n  pool: {\n    min: 2,\n    max: 8\n  }\n});\n\nknex.schema.hasTable(\"products\").then(function (exists) {\n  if (!exists) {\n    return knex.schema.createTable(\"products\", function (table) {\n      table.increments(\"id\").primary(), table.string(\"title\", 70), table.integer(\"price\").notNullable(), table.string(\"thumbnail\", 128);\n    });\n  }\n});\n/*********************************  Mongoose *********************************/\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nmongoose.connect(config.mongoDb.cnxUrl, {\n  serverSelectionTimeoutMS: 5000\n}).then(function () {\n  return logger.info(\"Database Connected\");\n})[\"catch\"](function () {\n  return logger.error(\"Failed to connect to Database\");\n});\nmodule.exports = knex;\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/db.js?");

/***/ }),

/***/ "./src/helpersProduct.js":
/*!*******************************!*\
  !*** ./src/helpersProduct.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar log4js = __webpack_require__(/*! ./logger */ \"./src/logger.js\");\n\nvar logger = log4js.getLogger();\nvar loggerApi = log4js.getLogger(\"apisError\");\n/*********************************  Knex with MYSQL *********************************/\n\nvar knex = __webpack_require__(/*! ./db */ \"./src/db.js\");\n\nvar writeProduct = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return knex(\"products\").insert(data).then(function (d) {\n              return logger.info(\"File saved successfully\");\n            })[\"catch\"](function (error) {\n              return loggerApi.error(\"The file cannot be written.\");\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function writeProduct(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar readProduct = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(table) {\n    var d;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return knex.from(table).then(function (data) {\n              var results = JSON.parse(JSON.stringify(data));\n              return results;\n            })[\"catch\"](function (error) {\n              return loggerApi.error(\"The file cannot be read.\");\n            });\n\n          case 2:\n            d = _context2.sent;\n            return _context2.abrupt(\"return\", d);\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function readProduct(_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar deleteProduct = /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(objId) {\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return knex(\"products\").where({\n              id: objId\n            }).del();\n\n          case 3:\n            _context3.next = 8;\n            break;\n\n          case 5:\n            _context3.prev = 5;\n            _context3.t0 = _context3[\"catch\"](0);\n            loggerApi.error(_context3.t0);\n\n          case 8:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 5]]);\n  }));\n\n  return function deleteProduct(_x3) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nvar reWriteProduct = /*#__PURE__*/function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.prev = 0;\n            _context4.next = 3;\n            return knex(\"products\").where({\n              id: data.id\n            }).update({\n              title: data.title,\n              price: data.price,\n              thumbnail: data.thumbnail\n            });\n\n          case 3:\n            _context4.next = 8;\n            break;\n\n          case 5:\n            _context4.prev = 5;\n            _context4.t0 = _context4[\"catch\"](0);\n            loggerApi.error(_context4.t0);\n\n          case 8:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[0, 5]]);\n  }));\n\n  return function reWriteProduct(_x4) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\nmodule.exports = {\n  readProduct: readProduct,\n  writeProduct: writeProduct,\n  deleteProduct: deleteProduct,\n  reWriteProduct: reWriteProduct\n};\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/helpersProduct.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n/************************Babel Polyfill*********************************/\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/*********************************  Express *********************************/\n\n\nvar express = __webpack_require__(/*! express */ \"express\");\n/*********************************  Cluster  *********************************/\n\n\nvar cluster = __webpack_require__(/*! cluster */ \"cluster\");\n\nvar numCPUs = (__webpack_require__(/*! os */ \"os\").cpus)().length;\n/*********************************  Dotenv *********************************/\n\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n\nvar config = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/*********************************  Minimist *********************************/\n\n\nvar parseArg = __webpack_require__(/*! minimist */ \"minimist\");\n/*********************************  Logger *********************************/\n\n\nvar log4js = __webpack_require__(/*! ./logger */ \"./src/logger.js\");\n\nvar logger = log4js.getLogger();\nvar loggerRoute = log4js.getLogger(\"routeNotExist\");\n/*********************************  Sessions *********************************/\n\nvar session = __webpack_require__(/*! express-session */ \"express-session\");\n\nvar MongoStore = __webpack_require__(/*! connect-mongo */ \"connect-mongo\");\n\nvar advancedOptions = {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n};\n/*********************************  Passport *********************************/\n\nvar passport = __webpack_require__(/*! passport */ \"passport\");\n/*********************************  Redis *********************************/\n\n/* const redis = require(\"redis\");\r\nconst RedisStore = require(\"connect-redis\")(session);\r\nlet redisClient = redis.createClient({host: \"localhost\", port: 6379, legacyMode: true});\r\n(async () => {\r\n\tredisClient.connect();\r\n})(); */\n\n/*********************************  Routes *********************************/\n\n\nvar loginRoutes = __webpack_require__(/*! ./routes/auth */ \"./src/routes/auth.js\");\n\nvar homeRoutes = __webpack_require__(/*! ./routes/home */ \"./src/routes/home.js\");\n\nvar productsRoutes = __webpack_require__(/*! ./routes/products */ \"./src/routes/products.js\");\n\nvar infoRoutes = __webpack_require__(/*! ./routes/info */ \"./src/routes/info.js\");\n\nvar randomRoutes = __webpack_require__(/*! ./routes/random */ \"./src/routes/random.js\");\n\nvar Contenedor = __webpack_require__(/*! ./Contenedor */ \"./src/Contenedor.js\");\n\nvar store = new Contenedor(\"products\");\n\nvar Chat = __webpack_require__(/*! ./Chat.js */ \"./src/Chat.js\");\n\nvar chat = new Chat();\n\nvar _parseArg = parseArg(process.argv.slice(2), {\n  \"default\": {\n    PORT: 8080,\n    SERVER: \"FORK\"\n  }\n}),\n    PORT = _parseArg.PORT,\n    SERVER = _parseArg.SERVER;\n\nvar http = __webpack_require__(/*! http */ \"http\");\n\nif (cluster.isPrimary && SERVER === \"CLUSTER\") {\n  for (var i = 0; i < numCPUs; i++) {\n    cluster.fork();\n  }\n\n  cluster.on(\"exit\", function (worker, code, signal) {\n    logger.info(\"Worker \".concat(worker.process.pid, \" died.\"));\n  });\n} else {\n  var app = express();\n  var server = http.createServer(app);\n  /*********************************  Engine *********************************/\n\n  app.set(\"views\", \"./views\");\n  app.set(\"view engine\", \"ejs\");\n  /*********************************  Middlewares *********************************/\n\n  app.use(express.json());\n  app.use(express.urlencoded({\n    extended: true\n  }));\n  app.use(express[\"static\"](process.cwd() + \"/public\"));\n  app.use(\n  /*********************************  Store de sessiones en Redis *********************************/\n\n  /* session({\r\n  \tstore: new RedisStore({client: redisClient}),\r\n  \tsecret: \"secreto123\",\r\n  \tresave: true,\r\n  \tsaveUninitialized: true,\r\n  \trolling: true,\r\n  \tcookie: {maxAge: 60000},\r\n  }) */\n\n  /*********************************  Store de sessiones en MongoDb *********************************/\n  session({\n    store: MongoStore.create({\n      mongoUrl: config.mongoDb.cnxUrl,\n      mongoOptions: advancedOptions\n    }),\n    secret: config.mongoDb.secret,\n    resave: true,\n    saveUninitialized: true,\n    rolling: true,\n    cookie: {\n      maxAge: 600000\n    }\n  }));\n  /* redisClient.on(\"ready\", () => {\r\n  \tlogger.info(\"Conected to redis Successfully!\");\r\n  });\r\n  redisClient.on(\"error\", (err) => {\r\n  \tlogger.error(err);\r\n  }); */\n\n  app.use(passport.initialize());\n  app.use(passport.session());\n\n  if (PORT == 8081 && SERVER === \"CLUSTER\") {\n    app.use(\"/api/randoms\", randomRoutes);\n  }\n\n  if (PORT == 8082 || 8083 || 0 || 0) {\n    app.use(\"/api/randoms\", randomRoutes);\n  }\n\n  app.use(\"/info\", infoRoutes);\n  app.use(\"/\", loginRoutes);\n  app.use(homeRoutes);\n  app.use(productsRoutes);\n  app.use(function (req, res, next) {\n    loggerRoute.warn(\"Quisieron ingresar a \".concat(req.path));\n    res.status(404).send(\"Route not found!\");\n  });\n  /* app.get(\"*\", (req, res) => {\r\n  \tlogger.info(`Quisieron ingresar a ${req.path}`);\r\n  \tres.status(404).send(\"ruta no encontrada\");\r\n  }); */\n\n  /*********************************  Server *********************************/\n\n  server.listen(PORT, function () {\n    logger.info(\"Servidor http escuchando en el puerto: \".concat(server.address().port));\n  });\n  server.on(\"error\", function (error) {\n    return logger.error(\"Error en servidor: \".concat(error));\n  });\n  /*********************************  Normalizr *********************************/\n\n  var _require = __webpack_require__(/*! ./normalizacion/index */ \"./src/normalizacion/index.js\"),\n      chatSchema = _require.chatSchema,\n      normalize = _require.normalize,\n      denormalize = _require.denormalize,\n      print = _require.print;\n  /*********************************  Socket *********************************/\n\n\n  var io = __webpack_require__(/*! socket.io */ \"socket.io\")(server);\n\n  io.on(\"connection\", function (socket) {\n    logger.info(\"Client Conected\");\n    store.getAll().then(function (data) {\n      return io.sockets.emit(\"productsList\", data);\n    });\n    socket.on(\"addProduct\", /*#__PURE__*/function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(product) {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return store.save(product);\n\n              case 2:\n                store.getAll().then(function (data) {\n                  return io.sockets.emit(\"productsList\", data);\n                });\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n    socket.on(\"editProduct\", /*#__PURE__*/function () {\n      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(product) {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return store.editById(product);\n\n              case 2:\n                store.getAll().then(function (data) {\n                  return io.sockets.emit(\"productsList\", data);\n                });\n\n              case 3:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n    socket.on(\"deleteProduct\", /*#__PURE__*/function () {\n      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(d) {\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                //Al eliminar un producto no me toma el refresh de la lista, y por lo tanto no se actualiza la lista. Debo hacer click nuevamente para que eso ocurra.\n                store.getAll().then(function (data) {\n                  return io.sockets.emit(\"productsList\", data);\n                });\n\n              case 1:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x3) {\n        return _ref3.apply(this, arguments);\n      };\n    }()); // Chat\n\n    chat.getAll().then(function (data) {\n      if (data.length > 0) return io.sockets.emit(\"chat\", data);\n    });\n    socket.on(\"msn\", /*#__PURE__*/function () {\n      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(msn) {\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return chat.save(msn);\n\n              case 2:\n                io.sockets.emit(\"email\", msn.email);\n                _context4.next = 5;\n                return chat.getAll().then(function (data) {\n                  var normalizedData = normalize({\n                    id: \"messages\",\n                    messages: data\n                  }, chatSchema); //print(normalizedData);\n\n                  //print(normalizedData);\n                  if (data.length > 0) return io.sockets.emit(\"chat\", data);\n                });\n\n              case 5:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      return function (_x4) {\n        return _ref4.apply(this, arguments);\n      };\n    }());\n    socket.on(\"disconnect\", function () {\n      chat.deleteAll();\n      logger.info(\"User disconnected\");\n    });\n  });\n}\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/index.js?");

/***/ }),

/***/ "./src/logger.js":
/*!***********************!*\
  !*** ./src/logger.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var log4js = __webpack_require__(/*! log4js */ \"log4js\");\n\nlog4js.configure({\n  appenders: {\n    loggerConsole: {\n      type: \"console\"\n    },\n    loggerWarm: {\n      type: \"file\",\n      filename: \"warn.log\"\n    },\n    loggerError: {\n      type: \"file\",\n      filename: \"error.log\"\n    }\n  },\n  categories: {\n    \"default\": {\n      appenders: [\"loggerConsole\"],\n      level: \"info\"\n    },\n    routeNotExist: {\n      appenders: [\"loggerWarm\"],\n      level: \"warn\"\n    },\n    apisError: {\n      appenders: [\"loggerError\"],\n      level: \"error\"\n    }\n  }\n});\nmodule.exports = log4js;\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/logger.js?");

/***/ }),

/***/ "./src/mocks/products.js":
/*!*******************************!*\
  !*** ./src/mocks/products.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var faker = __webpack_require__(/*! faker */ \"faker\");\n\nvar mocksProducts = function mocksProducts() {\n  var productsTest = [];\n\n  for (var i = 0; i < 5; i++) {\n    productsTest.push({\n      title: faker.commerce.productName(),\n      price: faker.commerce.price(),\n      picture: faker.image.fashion()\n    });\n  }\n\n  return productsTest;\n};\n\nmodule.exports = mocksProducts;\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/mocks/products.js?");

/***/ }),

/***/ "./src/models/Chats.js":
/*!*****************************!*\
  !*** ./src/models/Chats.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! mongoose */ \"mongoose\"),\n    Schema = _require.Schema,\n    model = _require.model;\n\nvar ChatSchema = new Schema({\n  author: {\n    id: {\n      type: String,\n      required: true\n    },\n    name: {\n      type: String,\n      required: true\n    },\n    lastname: {\n      type: String,\n      required: true\n    },\n    age: {\n      type: Number,\n      required: true,\n      min: 18\n    },\n    alias: {\n      type: String,\n      required: true\n    },\n    avatar: {\n      type: String,\n      required: true\n    }\n  },\n  date: {\n    type: String,\n    required: true\n  },\n  message: {\n    type: String,\n    required: true\n  }\n});\nmodule.exports = model(\"chat\", ChatSchema);\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/models/Chats.js?");

/***/ }),

/***/ "./src/models/Users.js":
/*!*****************************!*\
  !*** ./src/models/Users.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! mongoose */ \"mongoose\"),\n    Schema = _require.Schema,\n    model = _require.model;\n\nvar UserSchema = new Schema({\n  username: {\n    type: String,\n    required: true\n  },\n  password: {\n    type: String,\n    required: true\n  }\n});\nmodule.exports = model(\"user\", UserSchema);\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/models/Users.js?");

/***/ }),

/***/ "./src/normalizacion/index.js":
/*!************************************!*\
  !*** ./src/normalizacion/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! normalizr */ \"normalizr\"),\n    normalize = _require.normalize,\n    denormalize = _require.denormalize,\n    schema = _require.schema;\n\nvar util = __webpack_require__(/*! util */ \"util\");\n\nvar authorSchema = new schema.Entity(\"author\", {}, {\n  idAttribute: \"id\"\n});\nvar messageSchema = new schema.Entity(\"message\", {\n  author: authorSchema\n});\nvar chatSchema = new schema.Entity(\"messages\", {\n  author: authorSchema,\n  messages: [messageSchema]\n});\n\nfunction print(obj) {\n  console.log(util.inspect(obj, false, 12, true));\n}\n\nmodule.exports = {\n  chatSchema: chatSchema,\n  normalize: normalize,\n  denormalize: denormalize,\n  print: print\n};\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/normalizacion/index.js?");

/***/ }),

/***/ "./src/passport.js":
/*!*************************!*\
  !*** ./src/passport.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar LocalStrategy = (__webpack_require__(/*! passport-local */ \"passport-local\").Strategy);\n\nvar log4js = __webpack_require__(/*! ./logger */ \"./src/logger.js\");\n\nvar logger = log4js.getLogger();\n\n__webpack_require__(/*! ./db.js */ \"./src/db.js\");\n\nvar User = __webpack_require__(/*! ./models/Users.js */ \"./src/models/Users.js\");\n\npassport.use(\"local-login\", new LocalStrategy( /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(username, password, done) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return User.findOne({\n              username: username,\n              password: password\n            }, function (err, user) {\n              if (err) return done(err);\n\n              if (!user) {\n                logger.warn(\"User not found.\");\n                return done(null, false);\n              }\n\n              return done(null, user);\n            }).clone();\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}()));\npassport.use(\"local-signup\", new LocalStrategy({\n  usernameField: \"username\",\n  passwordField: \"password\",\n  passReqToCallback: true\n}, /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, username, password, done) {\n    var user, newUser;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return User.findOne({\n              username: username,\n              password: password\n            });\n\n          case 2:\n            user = _context2.sent;\n\n            if (!user) {\n              _context2.next = 6;\n              break;\n            }\n\n            logger.warn(\"User already exists.\");\n            return _context2.abrupt(\"return\", done(null, false));\n\n          case 6:\n            newUser = new User({\n              username: username,\n              password: password\n            });\n            _context2.next = 9;\n            return newUser.save();\n\n          case 9:\n            return _context2.abrupt(\"return\", done(null, newUser));\n\n          case 10:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x4, _x5, _x6, _x7) {\n    return _ref2.apply(this, arguments);\n  };\n}()));\npassport.serializeUser(function (user, done) {\n  done(null, user._id);\n});\npassport.deserializeUser(function (id, done) {\n  User.findById(id, done);\n});\nmodule.exports = passport;\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/passport.js?");

/***/ }),

/***/ "./src/routes/auth.js":
/*!****************************!*\
  !*** ./src/routes/auth.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar Router = express.Router;\nvar router = new Router();\n\nvar passport = __webpack_require__(/*! ../passport.js */ \"./src/passport.js\");\n\nvar log4js = __webpack_require__(/*! ../logger */ \"./src/logger.js\");\n\nvar loggerRoute = log4js.getLogger(\"routeNotExist\");\nrouter.post(\"/signup\", passport.authenticate(\"local-signup\", {\n  successRedirect: \"/login\",\n  failureRedirect: \"/failSignup\"\n}));\nrouter.post(\"/login\", passport.authenticate(\"local-login\", {\n  successRedirect: \"/home\",\n  failureRedirect: \"/failLogin\"\n}));\nrouter.get(\"/\", function (req, res) {\n  try {\n    res.render(\"pages/signup\");\n  } catch (error) {\n    loggerRoute.warn(error);\n  }\n});\nrouter.get(\"/login\", function (req, res) {\n  try {\n    res.render(\"pages/login\");\n  } catch (error) {\n    loggerRoute.warn(error);\n  }\n});\nrouter.get(\"/failLogin\", function (req, res) {\n  try {\n    res.render(\"pages/failLogin\");\n  } catch (error) {\n    loggerRoute.warn(error);\n  }\n});\nrouter.get(\"/failSignup\", function (req, res) {\n  try {\n    res.render(\"pages/failSignup\");\n  } catch (error) {\n    loggerRoute.warn(error);\n  }\n});\nrouter.post(\"/logout\", function (req, res) {\n  try {\n    nameUser = req.user.username;\n    req.logout();\n    res.render(\"pages/logout\", {\n      nameUser: nameUser\n    });\n  } catch (error) {\n    loggerRoute.warn(error);\n  }\n});\nmodule.exports = router;\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/routes/auth.js?");

/***/ }),

/***/ "./src/routes/home.js":
/*!****************************!*\
  !*** ./src/routes/home.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var authorize = __webpack_require__(/*! ../auth/index.js */ \"./src/auth/index.js\");\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar Router = express.Router;\nvar router = new Router();\n\nvar log4js = __webpack_require__(/*! ../logger */ \"./src/logger.js\");\n\nvar loggerRoute = log4js.getLogger(\"routeNotExist\");\nrouter.get(\"/home\", authorize, function (req, res) {\n  try {\n    res.render(\"pages/home\", {\n      nameUser: req.user.username,\n      title: \"List of products\"\n    });\n  } catch (error) {\n    loggerRoute.warn(error);\n  }\n});\nmodule.exports = router;\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/routes/home.js?");

/***/ }),

/***/ "./src/routes/info.js":
/*!****************************!*\
  !*** ./src/routes/info.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar Router = express.Router;\nvar router = new Router();\n\nvar numCPUs = (__webpack_require__(/*! os */ \"os\").cpus)().length;\n\nvar log4js = __webpack_require__(/*! ../logger */ \"./src/logger.js\");\n\nvar loggerRoute = log4js.getLogger(\"routeNotExist\");\n\nvar compression = __webpack_require__(/*! compression */ \"compression\");\n\nrouter.use(compression());\nrouter.get(\"/\", function (req, res) {\n  try {\n    res.send(\"<pre>\" + JSON.stringify({\n      Numero_procesadores_en_servidor: numCPUs,\n      Argumentos_de_entrada: process.argv.slice(2),\n      Nombre_plataforma: process.platform,\n      Version_Node: process.version,\n      Memoria_RSS: process.memoryUsage.rss(),\n      Path_ejecucion: process.execPath,\n      Process_id: process.pid,\n      Carpeta_proyecto: process.cwd()\n    }, null, 2) + \"</pre>\");\n  } catch (error) {\n    loggerRoute.warn(error);\n  }\n});\nmodule.exports = router;\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/routes/info.js?");

/***/ }),

/***/ "./src/routes/products.js":
/*!********************************!*\
  !*** ./src/routes/products.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar Router = express.Router;\nvar router = new Router();\n\nvar Contenedor = __webpack_require__(/*! ../Contenedor */ \"./src/Contenedor.js\");\n\nvar store = new Contenedor(\"products\");\n\nvar mocksProducts = __webpack_require__(/*! ../mocks/products */ \"./src/mocks/products.js\");\n\nvar authorize = __webpack_require__(/*! ../auth/index.js */ \"./src/auth/index.js\");\n\nvar log4js = __webpack_require__(/*! ../logger */ \"./src/logger.js\");\n\nvar loggerRoute = log4js.getLogger(\"apisError\");\nvar logger = log4js.getLogger();\nrouter.get(\"/:id\", authorize, function (req, res) {\n  try {\n    var id = parseInt(req.params.id);\n    store.getById(id).then(function (data) {\n      try {\n        if (data) {\n          res.render(\"pages/product\", {\n            title: \"Product Detail\",\n            data: data\n          });\n          return;\n        }\n\n        res.json({\n          Error: \"Product not found\"\n        });\n      } catch (error) {\n        logger.error(\"Product not found\");\n        logger.error(error);\n      }\n    });\n  } catch (error) {\n    loggerRoute.warn(error);\n  }\n});\nrouter[\"delete\"](\"/:id\", authorize, function (req, res) {\n  try {\n    var id = parseInt(req.params.id);\n    store.deleteById(id);\n  } catch (error) {\n    loggerRoute.warn(error);\n  }\n});\nrouter.get(\"/edit/:id\", authorize, function (req, res) {\n  try {\n    var id = parseInt(req.params.id);\n    store.getById(id).then(function (data) {\n      res.render(\"pages/editProduct\", {\n        title: \" Edit Product\",\n        data: data\n      });\n    })[\"catch\"](function (error) {\n      res.json({\n        Error: \"Product not found\"\n      });\n    });\n  } catch (error) {\n    loggerRoute.warn(error);\n  }\n});\nrouter.get(\"/api/products-test\", authorize, function (req, res) {\n  try {\n    res.send(mocksProducts());\n  } catch (error) {\n    loggerRoute.warn(error);\n  }\n});\nmodule.exports = router;\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/routes/products.js?");

/***/ }),

/***/ "./src/routes/random.js":
/*!******************************!*\
  !*** ./src/routes/random.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar Router = express.Router;\nvar router = new Router();\n\nvar _require = __webpack_require__(/*! child_process */ \"child_process\"),\n    fork = _require.fork;\n\nvar log4js = __webpack_require__(/*! ../logger */ \"./src/logger.js\");\n\nvar loggerApi = log4js.getLogger(\"apisError\");\n\nvar rand = function rand(cant) {\n  var randomNum = [];\n\n  for (var i = 0; i < cant; i++) {\n    var num = Math.floor(Math.random() * 1000) + 1;\n    randomNum.push(num);\n  }\n\n  var counts = {};\n  randomNum.forEach(function (n) {\n    counts[n] = (counts[n] || 0) + 1;\n  });\n  return counts;\n};\n\nrouter.get(\"/\", function (req, res) {\n  try {\n    var cant = req.query.cant || \"100000000\";\n    var random = rand(cant);\n    res.send(\"<pre>\".concat(JSON.stringify(random, null, 2), \"</pre>\"));\n  } catch (error) {\n    loggerApi.warn(error);\n  }\n});\nmodule.exports = router;\n\n//# sourceURL=webpack://ecommerce-webpack-websockets-mongodb-profile/./src/routes/random.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("babel-polyfill");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("connect-mongo");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-session");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("faker");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("knex");

/***/ }),

/***/ "log4js":
/*!*************************!*\
  !*** external "log4js" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("log4js");

/***/ }),

/***/ "minimist":
/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("minimist");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "normalizr":
/*!****************************!*\
  !*** external "normalizr" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("normalizr");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport-local");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("socket.io");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "cluster":
/*!**************************!*\
  !*** external "cluster" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("cluster");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;