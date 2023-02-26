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
    req.body.profileId = req.user.profile.id
    req.body.jobId = req.user.profile.id
    const job = await Job.create(req.body)
    res.status(201).json(job)
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: error })
  }
}

const updateJob = async(req, res) => {
  try {
    const job = await Job.findOne( {
      where: {
        id: req.params.id,
        profileId: req.user.profile.id
      }
  })
    for (let key in req.body ) {
      if (job[key]) {
        job[key] = req.body[key]
      }
    }
    await job.save()
    console.log('job', job);
    res.status(200).json(job)
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