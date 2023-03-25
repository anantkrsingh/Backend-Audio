const {RtcTokenBuilder, RtcRole} = require('agora-access-token');
const meetingSchema  = require('../Models/Meeting')



exports.createMeeting = (req,res) =>{
    console.log(req.body);
    const {
        roomId , host , maxParticipant  } = req.body;
    meetingSchema.findOne ({roomId :roomId }).exec((error,meeting) =>{
            if(meeting) res.status(201).json({
                meesage : "Please Enter Different Room Id"
            })
            else {
                const uid = 0;
                const role = RtcRole.PUBLISHER;
                const expirationTimeInSeconds = 360000
                const currentTimestamp = Math.floor(Date.now() / 1000)
                console.log(currentTimestamp);
                const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds
                const roomToken = RtcTokenBuilder.buildTokenWithUid(process.env.APP_ID, process.env.APP_CERTIFICATE, roomId ,  uid , role , privilegeExpiredTs  )
                console.log("Token Generated" , roomToken);
                const _meeting = new meetingSchema({
                        host,roomId,roomToken,maxParticipant
                });
                _meeting.save((error,message) =>{
                    if(error) res.status(201).json({message:error})
                    else{
                        res.status(201).json({
                            status:1,
                            message:"Token Generated",
                            recievedToken: roomToken
                        })
                    }
                })
               
            }

    })

}


exports.getRooms = (req,res) => {
    meetingSchema.find({
    }).exec((error,rooms)=>{
        if(error) res.status(400).json({status:0,message:"Error Occurred"})
        res.status(201).json({
            status:1,
            message:"Success",
            rooms:rooms
        })
    })

}