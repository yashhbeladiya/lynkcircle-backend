import WorkDetail from "../models/workdetail.model.js";

export const createWorkDetail = async (req, res) => {
    try {
        const { servicesOffered, hourlyRate, availability } = req.body;
        const newWorkDetail = new WorkDetail({
        user: req.user._id,
        servicesOffered,
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
        const workDetails = await WorkDetail.find({ user: req.params.username });
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
        workDetail.servicesOffered = req.body.servicesOffered;
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