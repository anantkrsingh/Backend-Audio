const User = require("../Models/user");
const jwt =  require('jsonwebtoken');
const user = require("../Models/user");

exports.signup = (req, res, next) => {
  User.findOne({ email: req.query.email }).exec((error, user) => {
    if (user)
      res.status(201).json({ status: 1, message: "User Already Registered" });
    else {
      const { name, email, phone, password } = req.query;
      const _user = new User({
        name,
        email,
        phone,
        password,
        isVerified: false,
      });
      _user.save((error, data) => {
        if (error) res.status(500).json({ status: 0, message: error });
        if (data) {
          const token = jwt.sign({
            email:req.query.email
          },process.env.JWT_SECRET,{
            expiresIn:"10min"
          });
          const link  = `http://10.16.24.229:3000/api/verify/?token=${token}`
          console.log(link);
            req.email = req.query.email,
            req.link = link;
        //   res
        //     .status(201)
        //     .json({ status: 1, message: "User Successfully Registered" }),
            next();
        }
      });
    }
  });
};

exports.login = (req, res) => {
  User.findOne({ email: req.query.email }).exec((error, user) => {
    if (error) res.status(201).json({});
  });
};

exports.verify = (req,res) =>{

  User.updateOne({email:req.user.email},{isVerified : true},((error,user)=>{
        if(error) res.status(500).json({message:error})
        if(user) res.status(201).json({message:'Update Success'})
  }))
}

