import http from "http";
import express from "express";
import path from "path";
import fs from "fs";
import favicon from 'serve-favicon';
import Config from "@/config";

class HttpServer {
	constructor() {
		this.app = express();
		this.server = http.createServer(this.app);
	}

	init() {
		return new Promise((resolve, reject) => {
			this.start()
				.then(() => {
					this.initMiddleware();
					this.initView();
					this.initGetHandlers();
				})
				.then(resolve)
				.catch(reject);
		});
	}

	start() {
		return new Promise(resolve => {
			this.server.listen(Config.port, Config.host, () => {
				global.console.log(
					`${new Date()} Server ${Config.host} is listening on port ${Config.port}`
				);
				resolve();
			});
		});
	}

	initMiddleware() {
		// this.app.use(helmet.noCache());
		// this.app.use(helmet.frameguard());
		//
		// this.app.use(bodyParser.json());
		// this.app.use(
		// 	bodyParser.urlencoded({
		// 		extended: true
		// 	})
		// );

		this.app.use(favicon("./public/style/img/favicon.ico"));

		this.app.use((req, res, next) => {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Credentials", true);
			res.header("Access-Control-Allow-Methods", "GET, POST");
			res.header("Access-Control-Allow-Headers", "Cache-Control");
			next();
		});
	}

	initView() {
		this.app.use("/public", express.static("public"));
	}

	initGetHandlers() {
		// this.app.get("/favicon.ico", (req, res) => res.sendStatus(204));

		this.app.get("/md*", (req, res) => {
			let mark = `404 for GET: ${req.url}`;

			try {
				mark = fs.readFileSync(path.resolve(`./build/${req.url}.md`), "utf8");
			} catch (e) {
				global.console.log(mark);
			}
			res.json({ message: mark });
		});

		this.app.get('*', (req, res) => {
			res.sendFile(path.resolve('./index.html'));
		});
	}
}

const server = new HttpServer();
server.init();