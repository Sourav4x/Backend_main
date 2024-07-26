const asynchandler=(reqh) =>{(req,res,next)=>{
    Promise.resolve(reqh(req,res,next)).reject((err) => next(err));
}}
export {asynchandler};

/*const asynch=(r) => async(req,res,next) =>
{
    try{
        await r(req,res,next)
    }catch(error){ 
        res.status(error.code || 500).json({
            success:false,
            message : error.message
        })
    }
}*/
