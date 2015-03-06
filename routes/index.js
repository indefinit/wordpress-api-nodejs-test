
/*
 * GET home page.
 */
//require the wordpress rest api
var WP = require( 'wordpress-rest-api' );

//assuming we're running a Vagrant VM
//this endpoint would get replaced if we wanted to use a different endpoint for our WP-API server
var wp = new WP({ endpoint: 'http://vagrant.local/wp-json/wp' });

exports.index = function(req, res){
  // Promises
  wp.posts().then(function( data ) {
    console.log(data);
    data.forEach(function(datum){
      //render our wordpress title and content in our index template.  
      //see index.jade for more info
      res.render('index', { wpTitle: datum.title, wpContent: datum.content});      
    })

  }).catch(function( err ) {
      console.log(err);
  });

};

