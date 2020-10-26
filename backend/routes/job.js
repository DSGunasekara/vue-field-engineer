const router = require("express").Router()
const Job = require("../models/Job")

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
        await job.save((error, savedJob)=>{
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
        await Job.updateOne({_id: req.params.id}, req.body)
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
        await job.remove((error, _)=>{
            if(error) return res.status(400).send(error)
            return res.status(200).send("Job deleted")
        })
    }catch (error){
        return res.status(500).send(error)
    }
})

module.exports = router;



