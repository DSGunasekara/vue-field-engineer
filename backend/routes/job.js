const router = require("express").Router()
const Job = require("../models/Job")
const Engineer = require("../models/Engineer")

//get all jobs
router.get("/", async (req, res)=>{
    try{
        const jobs = await Job.find({})
        return res.status(200).send(jobs)
    }catch (error){
        return res.status(500).send(error)
    }
})

//get one job
router.get("/:id", async (req, res)=>{
    try {
        const job = await Job.findOne({_id: req.params.id})
        if(!job) return res.status(404).send("Job does not exits")
        return res.status(200).send(job)
    }catch (error){
        return res.status(500).send(error)
    }
})

//post a job
router.post("/", async (req, res)=>{
    try{
        const job = new Job({...req.body})
        if(job.engineer){
            const engineer = await Engineer.findOne({_id: job.engineer})
            if(!engineer) return res.status(404).send("Engineer does not exits")
            engineer.jobList.push(job)
        }
        await job.save((error, _)=>{
            if(error) return res.status(400).send(error)
            return res.status(200).send(job)
        })

    }catch (error){
        return res.status(500).send(error)
    }
})

//update a job
router.patch("/:id", async (req, res)=>{
    try {
        const job = await Job.findOne({_id: req.params.id})
        if(!job) return res.status(404).send("Job does not exits")

        const updatedJob = await Job.updateOne({_id: req.params.id}, req.body)

        const { engineer } = req.body

        const checkEngineer = await Engineer.findOne({_id: engineer})
        if(!checkEngineer) return res.status(404).send("Engineer does not exits")

        checkEngineer.jobList.push(req.params.id)
        await checkEngineer.save()

        return res.status(200).send("Job updated")

    }catch (error){
        return res.status(500).send(error)
    }
})

//delete a job
router.delete("/:id", async (req, res)=>{
    try {
        const job = await Job.findOne({_id: req.params.id})
        if(!job) return res.status(404).send("Job does not exits")
        await job.remove(async (error, _)=>{
            if(error) return res.status(400).send(error)
            if(job.engineer){
                const engineer = await Engineer.findOne({_id: job.engineer})
                engineer.jobList.remove(job)
            }
            return res.status(200).send("Job deleted")
        })
    }catch (error){
        return res.status(500).send(error)
    }
})

module.exports = router;



