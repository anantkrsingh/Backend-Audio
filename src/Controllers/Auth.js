const User = require('../Models/user');


exports.signup = (req,res) =>  {
        User.findOne({email: req.query.name}).exec((error,user)=>{
            if(user) res.json({status:0,message:"User Already Registered"});
            else{
                const {name , email , phone , password } = req.query;
                const _user = new User({
                    name,
                    email,
                    phone,
                    password,
                    isVerified:false
                });
                _user.save((error,data)=>{
                    if(error) res.json({status:0,message:error})
                    if(data) res.json({status:1, message:"User Successfully Registered"})
                })
            }
           
        })
}