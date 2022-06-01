const batchModel = require("../models/batchdetails.js");
const mentorsModel = require("../models/mentors.js");
const technologyModel = require("../models/technologies.js");

const batchRegister = async (req, res, next) => {
  console.log(req.body);
  let {
    batchName,
    mentorName,
    batchId,
    empId,
    technologies,
    startDate,
    endDate,
    status,
  } = req.body;

  const batchIdExist = await batchModel.findOne({ batchId: batchId });

  try {
    if (batchIdExist) {
      res.status(409).json({
        error: true,
        message: "Batch Alreday Exist",
        data: null,
      });
    } else {
     const  mentorId = await mentorsModel.findOne({empId:empId});
      // console.log(mentorId);
      const batch = new batchModel({
        batchName,
        mentorName:mentorId.mentorName,
        batchId,
        empId:mentorId.empId,
        technologies: [],
        startDate,
        endDate,
        status,
      });

      const batchData = await batch.save();

      for (let i = 0; i < technologies.length; i++) {
        const technologyExist = await technologyModel.findOne({
          technologyName: technologies[i].technologyName,
        });
        if (technologyExist) {
          try {
            batchModel.findOne(
              { _id: batchData._id },
              async (err, batchid) => {
                  if(batchid){
                     batchid.technologies.push(technologyExist._id)
                     await batchid.save()

                     if(i === technologies.length -1){
                         res.status(200).json({
                             error:false,
                             message:"Batch Added Successfull",
                             data:batchid
                         })
                     }
                  }
                  else{
                      res.status(409).json({
                          error:true,
                          message:"Batch id did not found to add technology",
                          data:null
                      })
                  }
              }
            );
          } catch (err) {
            next(err);
          }
        }
        else{
              const technology = new technologyModel({
                  technologyName:technologies[i].technologyName
              })
              try{
                  const technologyData = await technology.save()
                  batchModel.findOne(
                    { _id: batchData._id },
                    async (err, batchid) => {
                        if(batchid){
                           batchid.technologies.push(technologyData._id)
                           await batchid.save()
      
                           if(i === technologies.length -1){
                               res.status(200).json({
                                   error:false,
                                   message:"Batch Added Successfull",
                                   data:batchid
                               })
                           }
                        }
                        else{
                            res.status(409).json({
                                error:true,
                                message:"Batch id did not found to add technology",
                                data:null
                            })
                        }
                    }
                  );
              }
              catch(err){
                  next(err)
              }
        }
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  batchRegister,
};
