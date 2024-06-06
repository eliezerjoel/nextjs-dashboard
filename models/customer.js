import { model, models, Schema} from 'mongoose'

const CustomerSchema = new Schema({
    name:{
        type: String,
    },
    email:{
        type: String,},
    image_url:{
        type: String,},
})


const Customer = models.Customer || model("Customer", CustomerSchema)

export default Customer