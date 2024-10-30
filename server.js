import express from 'express'
import 'dotenv/config'
import cors from 'cors';
import { db } from './config/db-config.js';
import bodyParser from 'body-parser';
import * as router from './routes/index.js';

// app config
const app = express();
const port = process.env.SERVER_PORT;

// middlewares 
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

//database connection
const connectDB = async ()=>{
  try {
    await db.authenticate();
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
}
connectDB();

//app routes
app.use("/api", router.productRouter);

// app listening
app.listen(port, ()=>{
  console.log(`Server running on port ${port}`);  
})