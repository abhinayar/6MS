/* $(function(){
		if ($('#home').is(':visible')) {
            $('#contact-link').click(function () {
                $('#home').hide();
                $('#contact-us').show();
            });
        } else {
            $('#contact-link').click(function () {
                $('#contact-us').hide();
                $('#home').show();
            });
        }
    
        setTimeout(test, 5000);
	}); */

//code to make hashes in url work w/ AJAX
$(function() {
    var current_hash = 'home';
    setInterval(function() {
        if(window.location.hash != current_hash) {
            current_hash = window.location.hash;
            $('#' + current_hash).show();
        }        
    }, 100);    
});


function setIntervalAndExecute(fn, t) {
    fn();
    return (setInterval(fn, t));
}

$(document).ready(function () {
    $('#contact-link').click(function () {
        $('#home').hide();
        $('#about-us').hide();
        $('#findyoursolitude').hide();
        $('#the-competition').hide();
        $('#30-day-challenge').hide();
        $('#contact-us').fadeIn(1500).show();
        $(".active").removeClass("active");
        $(this).addClass('active');
        window.location.hash = this.hash;
    });

    $('#about-link').click(function () {
        $('#home').hide();
        $('#findyoursolitude').hide();
        $('#contact-us').hide();
        $('#the-competition').hide();
        $('#30-day-challenge').hide();
        $('#about-us').fadeIn(1500).show();
        $('#about-wrapper.hidden').fadeIn(2000).removeClass('hidden');
        $(".active").removeClass("active");
        $(this).addClass('active');
        window.location.hash = this.hash;
    });
    
    $('#findyoursolitude-link').click(function () {
        $('#home').hide();
        $('#contact-us').hide();
        $('#about-us').hide();
        $('#the-competition').hide();
        $('#30-day-challenge').hide();
        $('#findyoursolitude').fadeIn(1500).show();
        $(".active").removeClass("active");
        $(this).addClass('active');
        window.location.hash = this.hash;
    });
    
    $('#the-competition-link').click(function () {
        $('#home').hide();
        $('#contact-us').hide();
        $('#about-us').hide();
        $('#findyoursolitude').hide();
        $('#30-day-challenge').hide();
        $('#the-competition').fadeIn(1500).show();
        $(".active").removeClass("active");
        $(this).addClass('active');
        window.location.hash = this.hash;
    });
    
    $('#30-day-challenge-link').click(function () {
        $('#home').hide();
        $('#contact-us').hide();
        $('#about-us').hide();
        $('#the-competition').hide();
        $('#findyoursolitude').hide();
        $('#30-day-challenge').fadeIn(1500).show();
        $(".active").removeClass("active");
        $(this).addClass('active');
        window.location.hash = this.hash;
    });

    $('#logo-image').click(function () {
        $('#contact-us').hide();
        $('#about-us').hide();
        $('#findyoursolitude').hide();
        $('#the-competition').hide();
        $('#30-day-challenge').hide();
        $('#home').fadeIn(1500).show();
        $(".active").removeClass("active");
        window.location.hash = 'home';
    });
});
    


$.fn.slideShow = function(timeOut) {
   var $elem = this;
   this.children(':gt(0)').hide();
   setInterval(function() {
    $elem.children().eq(0).fadeOut(300, function() {$elem.children().eq(0).next().fadeIn(500).end().appendTo($elem);});
   }, timeOut || 30000);
  };

  $(function() {
   $('#home').slideShow();
  });

$('#home').slideShow();