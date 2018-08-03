var mongoose=require("./connect.js");
var articleSchema=require("./schema/articleSchema.js");
var articleModel=mongoose.model('article',articleSchema);


function getBycid(cid,fn){
    var options = cid ? {cid:cid}:{};
    // console.log(options,'options');
    articleModel.find(options,(err,articles)=>{
        fn(articles);
    })
}
module.exports = {
    model:articleModel,
    getBycid
};