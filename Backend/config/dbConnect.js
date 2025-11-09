const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error Details:");
    console.error("Error Message:", error.message);
    console.error("Error Code:", error.code);
    console.error("Error Name:", error.name);
    process.exit(1);
  }
};
module.exports = dbConnect;
