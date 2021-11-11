const express = require('express')
const morgan = require( 'morgan')

const alumnoRoutes = require('./routes/alumno.routes')

const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/', function(req, res, next) {
    res.send('SERVIDOR  CORRIENDO SATISFACTORIAMENTE...!');
});

app.use('/alumno', alumnoRoutes);

module.exports = app;