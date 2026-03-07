(function($) {
  
  "use strict";  

  $(window).on('load', function() {

    /* 
   MixitUp
   ========================================================================== */
  $('#portfolio').mixItUp();

  /* 
   One Page Navigation & wow js
   ========================================================================== */
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });
  
  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
        closedSymbol: '<i class="icon-arrow-right"></i>',
        openedSymbol: '<i class="icon-arrow-down"></i>',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    /* Counter
    ========================================================*/
    $('.counterUp').counterUp({
     delay: 10,
     time: 1000
    });


    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

      /* Skill Bar Animation on Hover
      ========================================================*/
      
      function initSkillBarHover() {
        const progressElements = document.querySelectorAll('.skills-bar .progress');
        
        progressElements.forEach((progress) => {
          progress.style.cursor = 'pointer';
          
          progress.addEventListener('mouseenter', function() {
            const bars = this.querySelectorAll('.progress-bar');
            const percentBar = bars[1]; // Second bar is the percentage
            
            if (percentBar && !percentBar.dataset.animating) {
              percentBar.dataset.animating = 'true';
              
              // Get target width
              const currentStyle = percentBar.getAttribute('style');
              const widthMatch = currentStyle.match(/width\s*:\s*([\d.]+%)/);
              const target = widthMatch ? widthMatch[1] : '60%';
              
              // Reset
              percentBar.style.width = '0%';
              
              // Trigger reflow
              void percentBar.offsetWidth;
              
              // Animate
              percentBar.style.width = target;
            }
          });
          
          progress.addEventListener('mouseleave', function() {
            const bars = this.querySelectorAll('.progress-bar');
            const percentBar = bars[1];
            if (percentBar) {
              percentBar.dataset.animating = 'false';
            }
          });
        });
      }
      
      // Initialize
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSkillBarHover);
      } else {
        initSkillBarHover();
      }


  });      

}(jQuery));