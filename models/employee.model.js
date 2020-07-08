const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'This field is required.'
    },
    Surname:{
        type:String,
    },
    email: {
        type: String
    },
    gender: {
        type:String
    },
    profession:{
        type:String
    },
    age:{
        type:String
    },
    postcode:{
        type:String
    },
    fatherorigin:{
        type:String
    },
    facebookname:{type:String},
    facebooklink:{type:String},
    instagramname:{type:String},
    instagramlink:{type:String},

});


// Custom validation for email
employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Employee', employeeSchema);