const log4js = require("./logger");
const logger = log4js.getLogger();
const loggerApi = log4js.getLogger("apisError");

require("./db.js");
const Chats = require("./models/Chats.js");

class Chat {
	constructor() {}

	async save(data) {
		try {
			let msn = new Chats({
				author: {
					id: data.email,
					name: data.name,
					lastname: data.lastname,
					age: data.age,
					alias: data.alias,
					avatar: data.avatar,
				},
				date: data.date,
				message: data.message,
			});
			await msn.save();
			return console.log("File saved successfully");
		} catch (error) {
			loggerApi.error("The file cannot be written.");
		}
	}

	async getAll() {
		try {
			const chats = await Chats.find();
			if (chats) return chats;
		} catch (error) {
			loggerApi.error("The file cannot be read.");
		}
	}

	async deleteAll() {
		try {
			await Chats.deleteMany();
		} catch (error) {
			loggerApi.error("The file cannot be read.");
		}
	}
}

module.exports = Chat;
