var mongoose = require('mongoose')
var Photo = mongoose.model('Photo')

exports.getPhoto = function(req,res){
	Photo.findOne({_id: req.query.photoId})
	.exec(function(err,photo){
		if(!photo){
			res.status(404).json({msg:'Photo not found'})
		}else {
			res.json(photo)
		}
	})
}

exports.getPhotos = function(req,res){
	Photo.find()
	.exec(function(err,photos){
		if(!photos){
			res.status(404).json({msg:'Photos not found'})
		}else{
			res.json(photos)
		}
	})
}