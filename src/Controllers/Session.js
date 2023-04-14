const session = require("../Models/Session");
const meetingSchema = require("../Models/Meeting");

exports.enroll = (req, res) => {
  meetingSchema.findOne({ roomId: req.query.room }).exec((error, room) => {
    if (room) {
      meetingSchema.updateOne(
        { roomId: req.query.room },
        { enrolledUsers: room.enrolledUsers + 1 },
        (error, data) => {
          if (data) res.status(201).json({ status: 1, message: data });
        }
      );
    } else {
        res.status(201).json({ status: 0, message: "Internal Error" });
    }
  });
};



exports.enlist = (req,res) =>{
    meetingSchema.findOne({ roomId: req.query.room }).exec((error, room) => {
        if (room) {
            if(room.enrolledUsers == 1 || room.enrolledUsers == 0){
                meetingSchema.deleteOne({roomId:req.query.room}, (error,data)=>{
                    if(error) res.status(201).json({status:"Internal Error",message:"Intenal Error"})
                    else res.status(201).json({status:1,message:data})
                })
            } else{
                meetingSchema.updateOne(
                    { roomId: req.query.room },
                    { enrolledUsers: room.enrolledUsers - 1 },
                    (error, data) => {
                      if (data) res.status(201).json({ status: 1, message: "User Enrolled" });
                    }
                  );
            }
          
        } else {
            res.status(201).json({ status: 0, message: "Internal Error" });
        }
      });
}
