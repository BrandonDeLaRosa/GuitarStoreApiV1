const express = require('express');
const cors = require ('cors');
const morgan = require ('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const schoolAdminRoutes = require('./routes/schoolAdmin.route');
const customerRoutes = require('./routes/customers.routes');
const classesRoutes = require('./routes/classes.routes');


initModels();
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


db.authenticate()
.then(() => {
    console.log('Conexion exitosa a db :)');
})
.catch ((error) => {
    console.log(error);
});

db.sync()
// db.sync({ force: true})  //! Este ayuda a que al momento de ejecutar el servidor boprra bd y vuelv ea crear todo.  (SE RECOMIENDA NO USARLO A MENOS QUE SE TENGA UN BACKUP)
// db.sync({ alter: true})  //! permite alterar la base de datos.
.then(() => {
    console.log('Basae de datos sincronizada :)');
})
.catch((error) => {
    console.log(error);
})

const PORT =8000;

app.use(schoolAdminRoutes);
app.use(customerRoutes);
app.use(classesRoutes);

app.get('/', (req,res) => {
    res.send('Welcome to my API')
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puert ${PORT}`);
})