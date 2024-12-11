import WorkDetail from "../models/workdetail.model.js";
import JobPortfolio from "../models/jobportfolio.model.js";
import User from "../models/user.model.js";

export const createWorkDetail = async (req, res) => {
    try {
        const { serviceOffered, description, hourlyRate, availability } = req.body;
        const newWorkDetail = new WorkDetail({
        user: req.user._id,
        description,
        serviceOffered,
        hourlyRate,
        availability,
        });
        await newWorkDetail.save();
        res.status(201).json({ message: "Work detail created successfully" });
    } catch (error) {
        console.log("Error in createWorkDetail: ", error.message);
        res.status(500).json({ message: "Server error" });
    }
    };

export const getWorkDetails = async (req, res) => {
    try {
        // Find the work details of username from url
        const user = await User.findOne({ username: req.params.username });
        const workDetails = await WorkDetail.find({ user: user._id }).populate("user", "firstName lastName headline profilePicture");
        if (!workDetails) {
            return res.status(404).json({ message: "Work details not found" });
        }
        res.status(200).json(workDetails);
    } catch (error) {
        console.log("Error in getWorkDetail: ", error.message);
        res.status(500).json({ message: "Server error" });
    }
}

export const updateWorkDetail = async (req, res) => {
    try {
        const workDetail = await WorkDetail.findOne({ user: req.user._id });
        if (!workDetail) {
            return res.status(404).json({ message: "Work detail not found" });
        }
        workDetail.serviceOffered = req.body.serviceOffered;
        workDetail.description = req.body.description;
        workDetail.hourlyRate = req.body.hourlyRate;
        workDetail.availability = req.body.availability;
        await workDetail.save();
        res.status(200).json({ message: "Work detail updated successfully" });
    } catch (error) {
        console.log("Error in updateWorkDetail: ", error.message);
        res.status(500).json({ message: "Server error" });
    }
};

export const deleteWorkDetail = async (req, res) => {
    try {
        await WorkDetail.findOneAndDelete({ user: req.user._id });
        res.status(200).json({ message: "Work detail deleted successfully" });
    } catch (error) {
        console.log("Error in deleteWorkDetail: ", error.message);
        res.status(500).json({ message: "Server error" });
    }
};

export const deleteWorkDetailbyId = async (req, res) => {
    try {
        await WorkDetail.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Work detail deleted successfully" });
    } catch (error) {
        console.log("Error in deleteWorkDetailbyId: ", error.message);
        res.status(500).json({ message: "Server error" });
    }
};

export const getWorkDetailsbyId = async (req, res) => {
    try {
        const workDetail = await WorkDetail.findById(req.params.id).populate("user", "firstName lastName headline profilePicture");
        if (!workDetail) {
            return res.status(404).json({ message: "Work detail not found" });
        }
        res.status(200).json(workDetail);
    }
    catch (error) {
        console.log("Error in getWorkDetailsbyId: ", error.message);
        res.status(500).json({ message: "Server error" });
    }
};

export const getJobPortfolioForService = async (req, res) => {
    try {
        const jobPortfolio = await JobPortfolio.find({ service: req.params.serviceId });
        if (!jobPortfolio) {
            return res.status(404).json({ message: "Job Portfolio not found" });
        }
        res.status(200).json(jobPortfolio);
    } catch (error) {
        console.log("Error in getJobPortfolioForService: ", error.message);
        res.status(500).json({ message: "Server error" });
    }
}

export const createJobPortfolio = async (req, res) => {
    try {
        console.log("Create job portfolio");
        const { service, jobTitle, description, images, video, dateCompleted, clientUsername, clientName, reviews } = req.body;
        const newJobPortfolio = new JobPortfolio({
            user: req.user._id,
            service,
            jobTitle,
            description,
            images,
            video,
            dateCompleted,
            clientUsername,
            clientName,
            reviews,
        });
        await newJobPortfolio.save();
        console.log(newJobPortfolio);
        res.status(201).json({ message: "Job Portfolio created successfully" });
    }
    catch (error) {
        console.log("Error in createJobPortfolio: ", error.message);
        res.status(500).json({ message: "Server error" });
    }
};

export const getJobPortfolioById = async (req, res) => {
    try {
        const jobPortfolio = await JobPortfolio.findById(req.params.id);
        if (!jobPortfolio) {
            return res.status(404).json({ message: "Job Portfolio not found" });
        }
        res.status(200).json(jobPortfolio);
    } catch (error) {
        console.log("Error in getJobPortfolioById: ", error.message);
        res.status(500).json({ message: "Server error" });
    }
}

export const updateJobPortfolio = async (req, res) => {
    try {
        const jobPortfolio = await JobPortfolio.findById(req.params.id);
        if (!jobPortfolio) {
            return res.status(404).json({ message: "Job Portfolio not found" });
        }
        jobPortfolio.jobTitle = req.body.jobTitle;
        jobPortfolio.description = req.body.description;
        jobPortfolio.images = req.body.images;
        jobPortfolio.videos = req.body.videos;
        jobPortfolio.dateCompleted = req.body.dateCompleted;
        jobPortfolio.clientUsername = req.body.clientUsername;
        jobPortfolio.clientName = req.body.clientName;
        jobPortfolio.reviews = req.body.reviews;
        await jobPortfolio.save();
        res.status(200).json({ message: "Job Portfolio updated successfully" });
    } catch (error) {
        console.log("Error in updateJobPortfolio: ", error.message);
        res.status(500).json({ message: "Server error" });
    }
};

export const deleteJobPortfolio = async (req, res) => {
    try {
        await JobPortfolio.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Job Portfolio deleted successfully" });
    } catch (error) {
        console.log("Error in deleteJobPortfolio: ", error.message);
        res.status(500).json({ message: "Server error" });
    }
};

