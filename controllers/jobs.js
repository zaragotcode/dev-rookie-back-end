const { BelongsTo } = require('sequelize');
const { Job, Profile } = require('../models')

const index = async (req, res) => {
  try {
    const jobs = await Job.findAll()
      res.status(200).json(jobs)
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: error })
  }
}

const createJob = async(req, res) => {
  try {
    req.body.jobPoster = req.user.profile.id 
    const job = await Job.create(req.body)
    res.status(201).json(job)
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: error })
  }
}



module.exports = {
  index,
  createJob,
  updateJob
}