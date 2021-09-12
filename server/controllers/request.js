import Request from '../models/requests.js';
import mongoose from 'mongoose';

export const forgotPassword = async (req, res) => {
	const {email, username} = req.body;

	try{
		const result = await Request.create({email, username})
		res.status(200).json({result})
	} catch (error) {
		console.log(error)
		res.status(500).json({message: "An error occoured."})
	}
}
