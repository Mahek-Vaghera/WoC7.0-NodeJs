const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required: [true, "Please enter product name"]
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default : 0
        },

        image: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true // Corrected: "Allows us to add two more extra fields"
    }
);

const Product = mongoose.model("Product", ProductSchema)
/*mongoose.model():
--->This is a function provided by Mongoose to create a model.
--->It connects a schema (which defines the structure and rules for the data) to a specific MongoDB collection.*/
module.exports = Product; //When you write module.exports, you are specifying what part of your module should be made available to other files when they require() it.