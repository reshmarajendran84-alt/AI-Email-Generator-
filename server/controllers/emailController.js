import Email from "../models/Email.js";

export const generateEmailController = async (req, res,next) => {
    try {
        const { topic } = req.body;

        if (!topic) {
            return res.status(400).json({
                message: "Topic is required"
            });
        }

const generatedEmail = await generateEmail(topic);
const email =await Email.create({
    user:req.user.id,
    topic,
    generatedEmail,
});
        res.status(201).json({
            success: true,
            email,
        });

    } catch (error) {
       next(error);
    }
};



export const getEmailHistory =async(req,res,next)=>{
try{
    const emails=await Email.find({
        user:req.user.id

    }).sort({createdAt:-1});
    res.status(200).json({
        success:true,
        count:emails.length,
        emails
    });
}
catch(error){
          next(error);

}
};

export const deleteEmail=async(req,res,next)=>{

    try{
        const{id}=req.params;
        const email =await Email.findOneAndDelete({
            _id:id,
            user:req.user.id
        });
        if(!email){
            return res.status(404).json({
                message:"Email not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"Email deleted successfully"
        });

    }catch(error){
               next(error);

    }
};

export const updateEmail =async(req,res,next)=>{

    try{
const { topic, generatedEmail } = req.body;
        const email =await Email.findOneAndUpdate({
            _id:id,
            user:req.user.id
        },
    {topic,
        generatedEmail
    },
{new:true}
);
        if(!email){
            return res.status(404).json({
                message:"Email not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"Email updated succefully",
            email
        });
    }catch(error){
               next(error);

    }
};