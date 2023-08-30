import { StatusCodes } from "http-status-codes";
import user from "../models/userModel.js";
import job from "../models/jobModel.js";

export const getCurrentUser = async(req, res) => {
    res.status(StatusCodes.OK).json({msg: 'get current user'});
}

export const getApplicationStats = async(req, res) => {
    res.status(StatusCodes.OK).json({msg: 'application stats'});
}

export const updateUser = async(req, res) => {
    res.status(StatusCodes.OK).json({msg: 'update user'});
}