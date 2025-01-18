const Email = require('../models/email.model.js')

const create = async (req, res) => {
    try {
        console.log(req.body); // Add this line to debug
        const email = await Email.create(req.body);
        res.status(200).json(email);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllEmails = async (req,res) => {
    try {
        const emails = await Email.find({});
        res.status(200).json(emails);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateEmail = async (req, res) => {
    try {
        const { email } = req.params; // Extract email from URL
        const updatedEmail = await Email.findOneAndUpdate(
            { email: email }, // Match the document by email
            req.body,         // Update with the data from the request body
            { new: true }     // Return the updated document
        );

        if (!updatedEmail) {
            return res.status(404).json({ message: "Email not found" });
        }

        res.status(200).json(updatedEmail); // Send the updated document
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteEmail = async (req,res) => {
    try {
        const {email} = req.params;
        const deletedEmail = await Email.findOneAndDelete({email: email});
        if(!deletedEmail) {
            return res.status(404).json({message: "Email not found"});
        }
        res.status(200).json({message:"Email successfully deleted!"});
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

module.exports = {
    create,
    getAllEmails,
    updateEmail,
    deleteEmail
}