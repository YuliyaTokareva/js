export const createLogger = () => {
	let records = [];
	// let time = new Date().toLocaleTimeString();
	function warn(message) {
		records.push({
			message,
			dateTime: new Date(),
			type: "warn",
		});
	}
	function error(message) {
		records.push({
			message,
			dateTime: new Date(),
			type: "error",
		});
	}
	function log(message) {
		records.push({
			message,
			dateTime: new Date(),
			type: "log",
		});
	}
	function getRecords(type) {
		if (type) {
			return records
				.filter((el) => el.type === type)
				.sort((a, b) => b.dateTime - a.dateTime);
		}
		return records.sort((a, b) => b.dateTime - a.dateTime);
	}

	return {
		warn,
		error,
		log,
		getRecords,
	};
};
const logger = createLogger();

logger.log("User logged in");

logger.warn("User try to restricted page");

logger.log("User logged out");

logger.error("Unexpected error on the site");

logger.getRecords(); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger.getRecords());
logger.getRecords("log"); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger.getRecords("log"));
logger.getRecords("error"); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger.getRecords("error"));
logger.getRecords("warn"); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]
