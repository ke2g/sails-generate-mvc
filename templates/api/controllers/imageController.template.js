/**
 * ImageController
 *
 * @description :: Server-side logic for managing image uploads
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */


module.exports = {
	
  upload: function(req,res){   
    image.upload(req, 'image', function (err, image) {
      if (err) {
        console.error(err);
        return res.json({
          code: 500
        });
      } else {
        return res.json({
          code: 200,
          filename: image.filename,
          path: image.path
        });
      }
    });
  }

};

