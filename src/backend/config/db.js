import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await connect('mongodb+srv://subin:7012@cluster0.xifqxck.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
