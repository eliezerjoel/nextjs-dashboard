import { connectToDB } from "../../../utils/database";
import Customer from "../../../models/customer";

const addCustomer = async () =>{
    await connectToDB
    await Customer.create({
        name: 'Jojo',
        email: 'lovelies@newmail',
        image_url: 'ftp://locahost'
    })
}

addCustomer()