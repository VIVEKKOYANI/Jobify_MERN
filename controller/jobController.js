import Job from '../models/jobModel.js';

export const getAllJobs = async (req, res) => {
   const jobs = await Job.find({});
   res.status(200).json({ jobs })
};

export const createJob = async (req, res) => {
   const job = await Job.create(req.body);
   res.status(200).json({ job })
};

export const getJob = async (req, res) => {
   const { id } = req.params;
   const job = await Job.findById(id);
   if (!job) {
      return res.status(400).json({ msg: `no job with id ${id}` });
   }
   res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
   
   const { id } = req.params;
   const updatedJob = await Job.findByIdAndUpdate(id , res.body, {new: true})
   if (!updatedJob) {
      return res.status(400).json({ msg: `no job with id ${id}` });
   }
   res.status(200).json({ msg: 'job modified', job: updatedJob });
};

export const deleteJob = async (req, res) => {
   const { id } = req.params;
   const removeJob = await Job.findByIdAndDelete(id);
   if (!removeJob) {
      return res.status(400).json({ msg: `no job with id ${id}` });
   }
   
   res.status(200).json({ msg: 'job deleted', job: removeJob });
};
