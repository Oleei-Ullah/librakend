import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

const server = async () => {
  try {
    if (!config.database_uri) {
      throw new Error('❌ Database uri is not defined in config!');
    }
    await mongoose.connect(config.database_uri);
    console.log(`✅ Connected to MongoDB Atlas`);
    app.listen(config.port, () => {
      console.log(`🚀 Server is running on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

server();
