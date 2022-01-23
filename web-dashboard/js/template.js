(function($) {
  'use strict';
  $(function() {
    var body = $('body');
    var contentWrapper = $('.content-wrapper');
    var scroller = $('.container-scroller');
    var footer = $('.footer');
    var sidebar = $('.sidebar');
    var navbar = $('.navbar').not('.top-navbar');


    //Add active class to nav-link based on url dynamically
    //Active class can be hard coded directly in html file also as required

    function addActiveClass(element) {
      if (current === "") {
        //for root url
        if (element.attr('href').indexOf("index.html") !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
        }
      } else {
        //for other url
        if (element.attr('href').indexOf(current) !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
          if (element.parents('.submenu-item').length) {
            element.addClass('active');
          }
        }
      }
    }

    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    $('.nav li a', sidebar).each(function() {
      var $this = $(this);
      addActiveClass($this);
    })

    //Close other submenu in sidebar on opening any

    sidebar.on('show.bs.collapse', '.collapse', function() {
      sidebar.find('.collapse.show').collapse('hide');
    });


    //Change sidebar and content-wrapper height
    applyStyles();

    function applyStyles() {
      //Applying perfect scrollbar
    }

    $('[data-toggle="minimize"]').on("click", function() {
      if (body.hasClass('sidebar-toggle-display')) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }
    });

    //checkbox and radios
    $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');


    // fixed navbar on scroll
    $(window).scroll(function() {
      if(window.matchMedia('(min-width: 991px)').matches) {
        if ($(window).scrollTop() >= 197) {
          $(navbar).addClass('navbar-mini fixed-top');
          $(body).addClass('navbar-fixed-top');
        } else {
          $(navbar).removeClass('navbar-mini fixed-top');
          $(body).removeClass('navbar-fixed-top');
        }
      }
      if(window.matchMedia('(max-width: 991px)').matches) {
        $(navbar).addClass('navbar-mini fixed-top');
        $(body).addClass('navbar-fixed-top');
      }
    });
  });

  $("#login").submit(function(event){
    event.preventDefault();
    var username = $("input[name='username']",this).val();
    var password = $("input[name='password']",this).val();
    $("#login").addClass("is-loading");
    setTimeout(function() {
      $("#login").removeClass("is-loading");
      if((username === "admin" || username === "dataentry" || username === "dataentry@prisoners" || username === "dataentry@visitors" || username === "dataentry@packages" || username === "observer" || username === "projector") && password === "aifacerecognition@prison") {
        localStorage.setItem("userUID", username);
        localStorage.setItem("userName", username);
        localStorage.setItem("userAccount", username);
        if(username === "register") localStorage.setItem("userAccount", "mtn");
        if(username === "accountant") localStorage.setItem("userAccount1", "");
        if(username === "admin") localStorage.setItem("userAccount", "");
        alert("Login Successfully. Continue as "+ "\""+ username.toUpperCase() +"\"");
        if(username === "admin") {
          window.location.replace("../dashboard/");
        }else if(username === "dataentry") {
          window.location.replace("../register/");
        }else if(username === "dataentry@prisoners") {
          window.location.replace("../prisoner/");
        }else if(username === "dataentry@visitors") {
          window.location.replace("../register/");
        }else if(username === "dataentry@packages") {
          window.location.replace("../packages/");
        }else if(username === "projector") {
          window.location.replace("../screen-projector/");
        }else if(username === "observer") {
          window.location.replace("../dashboard/");
        }
      }else {
        alert("Invalid Username or Password !!!  Please try again.");
      }
    }, 2000);

  });

})(jQuery);