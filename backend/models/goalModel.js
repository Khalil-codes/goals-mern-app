const mongoose = require("mongoose");

// Goal Schema
const goalSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, "Please add text"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Goal", goalSchema);
