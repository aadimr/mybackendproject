const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();



//problem 1 
router.get('/movies' , function(req ,res) { 
    let movies1 = ["Rang de Basanti" , "The Shining" , "Lord of the rings " , "Batman Begins"]
    console.log("The List Of The Movies ",movies1)
    res.send("List of movies " + movies1)
    
    })
    // // problem 2
    router.get('/movies/:indexNumber' , function(req,res){
        const movie$arr = ["Rang De Basanti" , "The Shining" , "Lord of the rings" , "Batman Begins"]
        const index = req.params.indexNumber
        console.group("print movie name using index" , movie$arr)
        res.send ("Movie name by Index " + movie$arr[index])
    })
    // //problem 3
    router.get('/movies/:index',function(req,res){
        const myParam=req.params
        const moviesList=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
        
        const myIndex=myParam.index
        if(myIndex>3 || myIndex<0){
            res.send("Your index is invalid ")
        
        }
        else
        {
            res.send(moviesList[myIndex])
        }
    })
    // //problem 4
    router.get('/films',function(req,res){
        const filmsObject=[ {
            "id": 1,
            "name": "tare jameen pe"
           }, {
            "id": 2,
            "name": "3 idiots"
           }, {
            "id": 3,
            "name": "chhichhore"
           }, {
            "id": 4,
            "name": "malang"
           }]
    
           res.send(filmsObject)
           
    })
    module.exports = router;
    //problem 5
    router.get('/films/:filmId',function(req,res){
        const myParam=req.params
        const filmsObject=[ {
            "id": 1,
            "name": "tare jameen pe"
           }, {
            "id": 2,
            "name": "3 idiots"
           }, {
            "id": 3,
            "name": "chhichhore"
           }, {
            "id": 4,
            "name": "malang"
           }]
    
          
           for(let i=0;i<filmsObject.length;i++){
            const myId=myParam.filmId
            if(i==myId-1 ){
                res.send(filmsObject[i])
                break;
    
            }
            else if(i==filmsObject.length-1){
            res.send("no such movie with this id")
           }
           }
        })

    module.exports = router;