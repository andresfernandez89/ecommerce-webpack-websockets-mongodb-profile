const autocannon = require("autocannon");
const {PassThrough} = require("stream");

function run(url) {
	const buf = [];
	const outputStream = new PassThrough();
	const instance = autocannon({
		url,
		connections: 100,
		duration: 20,
	});

	autocannon.track(instance, {outputStream});

	outputStream.on("data", (data) => buf.push(data));
	instance.on("done", () => {
		process.stdout.write(Buffer.concat(buf));
	});
}

console.log("Running all benchmarks in parallel...");
run("http://localhost:8080/info");
