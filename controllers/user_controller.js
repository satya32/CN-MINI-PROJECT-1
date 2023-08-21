module.exports.profile = (req,res)=>{
    console.log('Inside user profile controller');

   return res.render('home',{
    title:'This is home',
   })

}