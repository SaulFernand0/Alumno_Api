const { Router } = require('express')

const router = Router();

const AlumnoCtrl = require('../controllers/alumno.controller')

    router.get('/listar/', AlumnoCtrl.readAlumno); 
    router.get('/listar/:id', AlumnoCtrl.readAlumnoID);
    router.post('/add/', AlumnoCtrl.createAlumno); 
    router.delete('/del/:id', AlumnoCtrl.deleteAlumno); 
    router.put('/update/:id', AlumnoCtrl.updateAlumno); 

module.exports = router;