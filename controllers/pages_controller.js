var mongoose = require('mongoose')
var Page = mongoose.model('Page')

exports.getPage = function(req,res){
	Page.findOne({name:req.query.pageName})
	.exec(function(err,page){
		if(!page){
			res.status(404).json({msg:'Page not found'})
		}else{
			res.json(page)
		}
	})
}