const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    
    role: {
        type: String,
        enum: ['admin', 'user'], 
        default: 'user' 
    }

}, {
    timestamps: true
});








UserSchema.pre("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) return next();

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;

    return next();
});

UserSchema.methods.comparePassword = async function (password) {
    const user = this;
    return bcrypt.compareSync(password, user.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
