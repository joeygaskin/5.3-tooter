var models = require('models');
var views = require('views');

$(document).ready(function(){
  $('body').prepend(JST.application());


$('.js-create-post-form').on('submit', function(event) {}
  event.preventDefault();
  $('document').trigger('create:post', [{title: "Cool", body: "Cool"}])

});

});
