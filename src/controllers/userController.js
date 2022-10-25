// const UserModel= require("../models/userModel")
const bookmodel = require("../models/bookmodel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

const createBook =  async function (req, res) {
    let Data = req.body;
    let saveData = await bookmodel.create(Data)
    res.send({msg:saveData})
}

const getBook = async function (req, res) {
    let allBook = await bookmodel.find()
    res.send({msg:allBook})
}

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
module.exports.createBook = createBook
module.exports.getBook = getBook