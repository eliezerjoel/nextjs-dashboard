import { model, models, Schema } from 'mongoose'

const UserSchema = new Schema({
    name: {
        type: String,
        unique: [true, 'Username already taken'],
        required: [true, 'Username is a required field']
    },
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is a required field']},
    password: {
        type: String,
        required: true
    },

})

const User = models.User || model("User", UserSchema)

export default User