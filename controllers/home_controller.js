module.exports.home = (req,res)=>{
     console.log('Inside home-controller');

     res.end('<h1>Hello i am from home</h1>');
}