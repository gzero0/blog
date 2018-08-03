var mongoose=require("./connect.js");
var categorySchema=require("./schema/categorySchema.js");
var categoryModel=mongoose.model('cate',categorySchema);
function all(fn){
    categoryModel.find({},(err,categories)=>{
        if(!err){
            fn(categories)
        }
    })
}

module.exports = {
    model:categoryModel,
    all
};