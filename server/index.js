import express from 'express';
import bodypParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import userRouter from './routes/user.js';
import requestRouter from './routes/request.js';

const app = express();

app.use(bodypParser.json({limit: "30mb", extender: true}));
app.use(bodypParser.urlencoded({limit: "30mb", extender: true}));
app.use(cors())

app.use('/user', userRouter)
app.use('/request', requestRouter)

const databaseURI = "mongodb+srv://Purujit:sanitasPassword@sanitascluster.l9jds.mongodb.net/SanitasCluster?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(databaseURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
		app.listen(PORT, () => console.log(`Server running: ${PORT}`))
	})
	.catch((error) => console.log(error.message))
