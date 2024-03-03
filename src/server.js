import express from 'express'; //utiliza express como servidor
import {connect} from 'mongoose';
import {dirname, join} from 'path';// importa el path donde está el archivo
import {fileURLToPath} from 'url'//importa el path
import indexRoute from './routes/index.js'
import morgan from 'morgan'
import Contacts from './models/contacts.js'
import 'dotenv/config'


// Initializations
const app = express();

// Settings
const _dirname = dirname(fileURLToPath(import.meta.url))//importa el path

console.log(join(_dirname, 'views'))

app.set('views', join(_dirname, 'views'))// indica la carpeta en donde están 
app.set('view engie', 'ejs')// ejs modulo que permite crear la página HTML
app.use(indexRoute)

// midlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.post('/contacts/add', async (req, res) =>{
    
   const contacts = Contacts(req.body)
   const contactsSaved = await contacts.save()


   console.log(contactsSaved)
    res.send('saved')
});

// Conexión a Base de datos



const user = 'cdelahoze';
const password = 'M0ng0S3rv3rS7ar7';
const dbname = 'CSE341_Project01';
const uri = `mongodb+srv://${user}:${password}@cluster0.881tnvp.mongodb.net/${dbname}`;

await connect(uri)
    .then(() => console.log('Database connected')) .catch(e => console.log(e))



// Start the server
app.listen(8080);
console.log("Server is listening on port", 8080);