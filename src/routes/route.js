const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();



//problem 1 
// router.get('/movies' , function(req ,res) { 
//     let movies1 = ["Rang de Basanti" , "The Shining" , "Lord of the rings " , "Batman Begins"]
//     console.log("The List Of The Movies ",movies1)
//     res.send("List of movies " + movies1)
    
//     })
//     // // problem 2
//     router.get('/movies/:indexNumber' , function(req,res){
//         const moviesArr = ["Rang De Basanti" , "The Shining" , "Lord of the rings" , "Batman Begins"]
//         const index = req.params.indexNumber
//         console.log("print movie name using index " , moviesArr)
//         res.send ("Movie name by Index " + moviesArr[index])
//     })
//     // //problem 3
//     router.get('/movies/:index',function(req,res){
//         const myParam = req.params
//         const moviesList = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
        
//         const myIndex = myParam.index
//         if(myIndex>3 || myIndex<0){
//             res.send("Your index is invalid ")
        
//         }
//         else
//         {
//             res.send(moviesList[myIndex])
//         }
//     })
//     // //problem 4
//     router.get('/films',function(req,res){
//         const filmsObject=[ {
//             "id": 1,
//             "name": "tare jameen pe"
//            }, {
//             "id": 2,
//             "name": "3 idiots"
//            }, {
//             "id": 3,
//             "name": "chhichhore"
//            }, {
//             "id": 4,
//             "name": "malang"
//            }]
    
//            res.send(filmsObject)
           
//     })
//     module.exports = router;
//     //problem 5
//     router.get('/films/:filmId',function(req,res){
//         const myParam = req.params
//         const filmsObject = [ {
//             "id": 1,
//             "name": "tare jameen pe"
//            }, {
//             "id": 2,
//             "name": "3 idiots"
//            }, {
//             "id": 3,
//             "name": "chhichhore"
//            }, {
//             "id": 4,
//             "name": "malang"
//            }]
    
//           for(let i = 0; i < filmsObject.length; i++){
//             const myId = myParam.filmId
//             if(i == myId-1 ){
//                 res.send(filmsObject[i])
//                 break;
    
//             }
//             else if(i == filmsObject.length-1){
//             res.send("no such movie with this id")
//            }
//            }
//         })

//     module.exports = router;

    
 
   router.post('/players', function (req, res) {
 
       //LOGIC WILL COME HERE
       let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
       let newPlayer = req.body
       let playerExists=players.find(x =>x.name===newPlayer.name)
       if(playerExists){
       res.send('Player name already exists')
       }
       else{
   
           players.push(newPlayer)
    
           res.send({newPlayers:players})
       }
           
       });

       module.exports=router;