const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String },
    age: {
        type: Number,
        min: 1,
        max: 125,
        validate: {
            validator: v => (v % 2 === 0),
            message: props => (`${props.value} is not an even number`)
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => (Date.now())
    },
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    hobbies: [String],
    address: {
        street: String
    }
});

module.exports = mongoose.model("User", UserSchema);