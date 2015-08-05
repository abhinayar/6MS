$(document).ready(function(){
   // place your images in this array
    var images = ['Thoreau.jpg', 'Pascal.jpg', 'Buber.jpg', 'Einstein.jpg'];
    $('#content').css({'background-image': 'url(landing/images/' + images[Math.floor(Math.random() * images.length)] + ')'+ ' no-repeat' + ' center' +  ' center' + ' fixed'});

});