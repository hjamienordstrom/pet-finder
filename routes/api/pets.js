const express = require('express');
const router = express.Router();
const petsCtrl = require('../../controllers/pets');
const multer = require('multer');
const upload = multer();
/*---------- Public Routes ----------*/
router.post('/addpet', upload.single('photo'), petsCtrl.addPet);
router.get('/index', petsCtrl.getAll)
router.get('/pet/:id', petsCtrl.getOne)

/*---------- Protected Routes ----------*/




module.exports = router;