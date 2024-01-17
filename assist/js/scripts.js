jQuery(document).ready(function(){
  
  // humbar icon js start hare
  var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
  // humbar icon js end hare
  // navbar active js
    jQuery(".main-navbar ul li a").click(function() {
      jQuery(".main-navbar ul li a").removeClass("activete");
      jQuery(this).addClass("activete");
    });

    jQuery(".hamburger").click(function(){
      jQuery(".main-navbar ul").slideToggle();
    })

	// accordion js start
    jQuery(".accordion-button").click(function() {
      jQuery(this).toggleClass("arrow-up").siblings(".accordion-button").removeClass("arrow-up");
      jQuery(this).next().slideToggle('slow').siblings(".accordion-content").slideUp('slow');
    })
    // accordion js end hare
    // service carousel js 
    $(".service-carousel").owlCarousel({
      autoplay:true,
      loop:true,
      items: 1,
      nav:true,
      dots:false,
    });
    // work carousel js

    $(".work-carousel").owlCarousel({
      autoplay:true,
      loop:true,
      items: 1,
      nav:true,
      dots:false,
    });










})