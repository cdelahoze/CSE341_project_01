import {Schema, model} from "mongoose";

//create Schema

const contactsSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    favoriteColor: String, 
    birthday: String 
})

//Create model

export default model('Contacts', contactsSchema);

