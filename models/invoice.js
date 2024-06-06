import { model, models, Schema } from 'mongoose'

const InvoiceSchema = new Schema({
    customer_id: { type: String },
    amount: {
        type: Number,
        float: true
    },
    date: { type: String },



})

const Invoice = models.Invoice || model("Customer", InvoiceSchema)


// export type Invoice = {
//     id: string;
//     customer_id: string;
//     amount: number;
//     date: string;
//     // In TypeScript, this is called a string union type.
//     // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
//     status: 'pending' | 'paid';
// };