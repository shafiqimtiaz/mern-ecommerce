require("dotenv/config");
const app = require("./app");
const mongoose = require("mongoose");

const DB = process.env.REMOTE_MONGO_DB;

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log("Connected to MongoDB!"))
	.catch((err) => console.error("MongoDB Connection Failed!"));

const port = process.env.PORT || 3001;

app.listen(port, () => {
	console.log(`App running on port ${port}!`);
});
