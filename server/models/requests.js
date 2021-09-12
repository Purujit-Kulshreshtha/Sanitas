import mongoose from 'mongoose';

const requestSchema = mongoose.Schema({
	username: { type: String, requried: true},
	email: { type: String, requried: true},
})

export default mongoose.model("Request", requestSchema);