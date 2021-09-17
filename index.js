const Mongoose = require('mongoose');
const connect=()=>{
    return Mongoose.connect('mongodb://localhost:27017/DataBase');
    //return a promice;
}
//define a blog schma
const blog=new Mongoose.Schema({
// takes a object
title:{
    type:String,
    required:true
},
description: String,
tags:[{type:String}]
},{timestamps:true});

const Blog=Mongoose.model('blog',blog);
connect()//promice
.then(async connection => {
    const d=await Blog.create({title:'Learn Graph ',description:'Learn Graph at here with fun'});
    console.log(d);
})
.catch((err) => {
    console.log(err);
});