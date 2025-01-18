const mongoose = require('mongoose')

const EmailSchema = new mongoose.Schema({
    name : {
        type : String,
        require: true
    },
    email: {
        type: String,
        required: true,
    },
    catagory: { type: String, enum: ["Academic", "Administrative"], required: true}
});

const Email = mongoose.model("Email", EmailSchema);

module.exports = Email;

