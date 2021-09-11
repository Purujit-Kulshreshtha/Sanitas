import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	username: { type: String, requried: true},
	email: { type: String, requried: true},
	password: {type: String, requried: true},
	workData: {type: Array},
	foodData: {type: Array},
	gameData: {type: Object }
})

export default mongoose.model("User", userSchema);