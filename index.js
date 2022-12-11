const noblox = require('noblox.js') // getting noblox module
const dotenve = require('dotenv').config()
const koa = require('koa')

const cookie = process.env.COOKIE
//VARIABLES
var groupId = 15146559
var message = "JK LOL"
var userId = 436670185
var rankName = "Founders"

function Shout(){
    noblox.shout(groupId, message)
    console.log("Shout successful!")
}
// Setting our cookie
function setRank(){
    noblox.setRank(groupId, userId, rankName)
    console.log(`Ranked ${noblox.getUsernameFromId(userId)} to ${rankName}!`)
}

noblox.setCookie(cookie).then(function(){ //cookie log in from json
    console.log('Logged in successfully')

    setRank()

}).catch(function(err){
    console.log(`Error logging in, full error: ${err}`)
})



// "ItemID: "
// 123450234
// "Buying (that item id)"