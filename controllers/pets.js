const Pet = require('../models/pet');
const User = require('../models/user');
const S3 = require('aws-sdk/clients/s3')
const{ v4: uuidv4 } = require('uuid');
const user = require('../models/user');

const s3 = new S3()
const BUCKET_NAME = process.env.BUCKET_NAME;




module.exports={
    addPet,
    getAll,
    getOne
}

async function addPet(req, res) {
    try {
    //   const filePath = `${uuidv4()}/${req.file.originalname}`;
    //   const params = {
    //     Bucket: BUCKET_NAME,
    //     Key: filePath,
    //     Body: req.file.buffer,
    //   };
    //   s3.upload(params, async function (err, data) {
    //     if (err) {
    //       return res.json({ data: err });
    //     }
        const pet = await Pet.create({
          name: req.body.name,
          color: req.body.color,
          sex: req.body.sex,
          birthday: req.body.birthday,
          user: req.user,
        //   photoUrl: data.Location,
        });
        const populatedPet = await pet.populate("user").execPopulate();
        return res.status(201).json({ pet: populatedPet });
    //   });
    } catch (err) {
      console.log(err);
      return res.json({ err });
    }
  }

  async function getAll(req, res){
      console.log('hitiin it from the back')
      const pets = await Pet.find({}).populate('user').exec()
      console.log(pets)
      res.status(200).json({pets})
  }

  async function getOne(req, res){
      const pet = await Pet.findById(req.params.id)
      const petCreator = await User.findById(pet.user)
      res.status(200).json({pet:pet, author:petCreator})
  }