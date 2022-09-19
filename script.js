const mongoose=require('mongoose');
const User=require('./User');

run();
async function run(){
   try{
    // var user=await User.create({name:"kyle",email:"Test@test.com",age:26,hobbies:["weght lifting","dancing"],bestFriend:"6323f533b7fd04fe715eed13"});
    var user=await User.where("bestFriend").equals('6323f533b7fd04fe715eed13');
    
    console.log(user);
   }
   catch(e){
    console.error(e.message)
   }
}

mongoose.connect("mongodb://localhost/testDB",()=>{
    console.log("connected successfully");
},e=>{console.error(e)});