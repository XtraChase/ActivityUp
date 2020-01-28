const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    type: {
        type: Schema.Types.String,
        default: "open"
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    date: [{
        type: Schema.Types.ObjectId,
        ref: "Date"
    }]
});

groupSchema.pre('save', function (next) {
    console.log("group saved");
    next();
})

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;