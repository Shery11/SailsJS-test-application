/**
 * ArticlesController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	list: function(req,res){
		// reaching for model
		Articles.find({}).exec(function(err,articles){
			if(err){
				res.send(500,{error:"Database error"})
			}
			res.view('list',{articles:articles})
		})
	},

	add :  function(req,res){
		res.view('add');
	},

	create : function(req,res){
		var title = req.body.title;
		var body = req.body.body;


		Articles.create({title:title,body:body}).exec(function(err){
			if (err) {
				res.send(500,{error:"Database error"})
			}
			res.redirect('/articles/list');
		})
	}
	
};

