    import mongoose from "mongoose";

    const connectToMongoDB = async()=>{
        try {
            await mongoose.connect(process.env.Mongo_DB_URL);
            console.log("Connected to MongoDB");
        } catch (err) {
            console.log("Error while Connecting to MongoDB ",err.message);
        }
    };

    export default connectToMongoDB;