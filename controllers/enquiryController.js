import Enquiry from "../models/Enquiry.js";

export const createEnquiry = async (req, res) => {
  try {
    const { name, email, courseInterest } = req.body;
    const enquiry = new Enquiry({ name, email, courseInterest });
    await enquiry.save();
    res.status(201).json({ message: "Enquiry submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getPublicEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find({ claimedBy: null });
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getPrivateEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find({ claimedBy: req.user.id });
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const claimEnquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const enquiry = await Enquiry.findById(id);
    if (!enquiry) return res.status(404).json({ message: "Enquiry not found" });
    if (enquiry.claimedBy) return res.status(400).json({ message: "Already claimed" });

    enquiry.claimedBy = req.user.id;
    await enquiry.save();
    res.json({ message: "Enquiry claimed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
