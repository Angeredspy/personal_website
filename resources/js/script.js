$(document).ready(function() { 
    
    /*For the sticky navigation*/
    $('.js--section-aboutme').waypoint(function(direction) {
      if (direction =="down") {
          $('nav').addClass('sticky');
      }  else {
          $('nav').removeClass('sticky');
      }
    }, { 
       offset:'60px;'
    }); 
    
    /* Scroll on buttons*/ 
    $('.js--scroll-to-contact').click(function () { 
    $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000)
    }); 
    
    $('.js--scroll-to-education').click(function () { 
    $('html, body').animate({scrollTop: $('.js--section-education').offset().top}, 1000)
    }); 
    
    $('.js--scroll-to-skills').click(function () { 
    $('html, body').animate({scrollTop: $('.js--section-skills').offset().top}, 1000)
    }); 
    
     $('.js--scroll-to-aboutme').click(function () { 
    $('html, body').animate({scrollTop: $('.js--section-aboutme').offset().top}, 1000)
    }); 
    
    /* Animations on scroll*/ 
    
    $('.js--wp-1').waypoint(function(direction){ 
    $('.js--wp-1').addClass('animated fadeIn');    
    }, { 
    offset:'65%'
    });  
    
    $('.js--wp-2').waypoint(function(direction){ 
    $('.js--wp-2').addClass('animated fadeInUp');    
    }, { 
    offset:'65%'
    }); 
    
    $('.js--wp-3').waypoint(function(direction){ 
    $('.js--wp-3').addClass('animated fadeInLeft');    
    }, { 
    offset:'35%'
    }); 
    
    $('.js--wpp-1').waypoint(function(direction){ 
    $('.js--wpp-1').addClass('animated fadeIn');    
    }, { 
    offset:'85%'
    });
    
    $('.js--wpp-2').waypoint(function(direction){ 
    $('.js--wpp-2').addClass('animated fadeIn');    
    }, { 
    offset:'75%'
    });
    
    $('.js--wpp-3').waypoint(function(direction){ 
    $('.js--wpp-3').addClass('animated fadeIn');    
    }, { 
    offset:'95%'
    }); 
    
    $('.js--wppp-1').waypoint(function(direction){ 
    $('.js--wppp-1').addClass('animated fadeIn');    
    }, { 
    offset:'50%'
    });
    
    $('.js--wppp-2').waypoint(function(direction){ 
    $('.js--wppp-2').addClass('animated fadeIn');    
    }, { 
    offset:'70%'
    });
    
    $('.js--wppp-3').waypoint(function(direction){ 
    $('.js--wppp-3').addClass('animated fadeIn');    
    }, { 
    offset:'95%'
    });
    
    /*Mobile Navigation*/  
    $('.js--nav-icon').click(function () {
        var nav=$('.js--main-nav');
        var icon=$('.js--nav-icon i'); 
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round'); 
            icon.removeClass('ion-navicon-round');
        } else { 
        icon.addClass('ion-navicon-round'); 
        icon.removeClass('ion-close-round');
        }
        
        nav.slideToggle(200);
    })
    

});              