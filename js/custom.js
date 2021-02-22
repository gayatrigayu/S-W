/*===========================================
            --- chatbot ---
===========================================*/
/*$(document).ready(function(e) {
    var t = "socket.io",
        n = "8080",
        r = "localhost",
        i = "localhost/";
    var s = ("https:" == document.location.protocol ? "https://" : "http://") + i;
$.when(
    $.getScript( "/mypath/myscript1.js" ),
    $.getScript( "/mypath/myscript2.js" ),
    $.getScript( "/mypath/myscript3.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){

    //place your code here, the scripts are all loaded

});
    $.getScript("https://" + r + ":" + n + "/" + t + "/" + t + ".js", function() {
       
        $(".chat_message").animate({
            scrollTop: $(".chat_message").outerHeight() + 1e7
        }, 1e3);
        var e = $(".id").val();
        var t = $(".my_user").val();
        var i = io.connect("https://" + r + ":" + n);
        var s = "id=" + e;
        $.ajax({
            type: "POST",
            url: name + "chat/login_check.php",
            data: s,
            success: function(e) {
                if (e != "") {
                    i.emit("new_chat_js_user_enter", e)
                }
            }
        });
        $.validate({
            form: "#chat_form",
            onSuccess: function() {
                var e = $("#chat_form").serialize();
                $.ajax({
                    type: "POST",
                    url: name + "chat/login_user.php",
                    data: e,
                    success: function(e) {
                        var t = e.split("-");
                        $(".my_user").val(t[1]);
                        $(".logout").attr("name", e);
                        $(".chat_form")[0].reset();
                        $(".logout").show();
                        $(".chat_message").show();
                        $(".chat_text_area").show();
                        $(".chat_entry").hide();
                        i.emit("new_chat_js_user_enter", e)
                    }
                })
            }
        });
        i.on("admin_chat_status_update", function(t) {
            var n = t.user_id;
            var r = t.status;
            if (n == e) {
                if (r == "1") {
                    $(".no_provider").text("Operator Joined the Chat.")
                } else {
                    $(".no_provider").text("Sorry, no operators are currently available")
                }
            }
        });
        i.on("admin_message_emit_update", function(e) {
            var t = e.from_id;
            var n = e.to_id;
            var r = "from_id=" + t + "&to_id=" + n;
            $.ajax({
                type: "POST",
                url: name + "chat/get_last_message.php",
                data: r,
                success: function(e) {
                    $(".chat_message").append(e);
                    $(".chat_message div:last-child").hide().fadeIn("slow");
                    $(".chat_message").animate({
                        scrollTop: $(".chat_message").outerHeight() + 1e8
                    }, 1e3)
                }
            })
        });
        $(".messag_send").keypress(function(e) {
            if (e.which == 13) {
                var t = $(".id").val();
                var n = $(".my_user").val();
                var r = $(this).val();
                var s = $(this).val().replace(/(^[\s]+|[\s]+$)/g, "");
                var o = "message=" + r + "&id=" + t;
                if (s != "") {
                    $(".messag_send").val("");
                    $.ajax({
                        type: "POST",
                        url: name + "chat/message_send.php",
                        data: o,
                        success: function(e) {
                            i.emit("user_message_emit", {
                                from_id: n,
                                to_id: t
                            });
                            $(".chat_message").append(e);
                            $(".chat_message div:last-child").hide().fadeIn("slow");
                            $(".chat_message").animate({
                                scrollTop: $(".chat_message").outerHeight() + 1e8
                            }, 1e3)
                        }
                    })
                }
                return false
            }
        });
        $(".logout").click(function(e) {
            var t = $(this).attr("name");
            i.emit("user_left_chat", t);
            $.ajax({
                type: "POST",
                url: name + "chat/user_logout.php",
                success: function(e) {
                    $(".chat_message").text("");
                    $(".logout").hide();
                    $(".chat_message").hide();
                    $(".chat_text_area").hide();
                    $(".chat_entry").show();
                    $(".my_user").val("");
                    $(".logout").attr("name", "")
                }
            });
            return false
        })
    })
});
*/
$(function(){
    $(".c_h").click(function(e) {
             if ($(".chat_container").is(":visible")) {
                 $(".c_h .right_c .mini").text("+")
             } else {
                 $(".c_h .right_c .mini").text("-")
             }
             $(".chat_container").slideToggle("slow");
             return false
         });
 });
/*=============================
        services
==============================*/
$(document).ready(function () {

    // animate on scroll
    new WOW().init();
});
/*=============================
        admin-login
==============================*/
 let x = document.getElementById('login');
 let y = document.getElementById('register');
 let z = document.getElementById('btn');

 function register(){
     x.style.left = '-400px';
     y.style.left = '50px';
     z.style.left = '110px';
 }
 function login(){
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';
}


/*=============================
        work
==============================*/
$(document).ready(function () {
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*=============================
        Team
==============================*/
  /* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/

function cambiar_login() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
  document.querySelector('.cont_form_login').style.display = "block";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";               
  
  setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
    
  setTimeout(function(){    
  document.querySelector('.cont_form_sign_up').style.display = "none";
  },200);  
    }
  
  function cambiar_sign_up(at) {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.querySelector('.cont_form_sign_up').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";
    
  setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
  },100);  
  
  setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
  },400);  
  
  
  }    
  
  
  
  function ocultar_login_sign_up() {
  
  document.querySelector('.cont_forms').className = "cont_forms";  
  document.querySelector('.cont_form_sign_up').style.opacity = "0";               
  document.querySelector('.cont_form_login').style.opacity = "0"; 
  
  setTimeout(function(){
  document.querySelector('.cont_form_sign_up').style.display = "none";
  document.querySelector('.cont_form_login').style.display = "none";
  },500);  
    
    }
  
  
/*=============================
        Testimonial
==============================*/
$(document).ready(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
    });
});
/*=============================
        Stats
==============================*/

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });
});

/*=============================
        Clients
==============================*/

$(function () {
    $('#clients').owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 3,
            },
            768: {
                items: 5,
            }
        }
    });
});

/*=============================
        Navigation
==============================*/
// show/hide transparent black navigation

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //hide nav
            $("nav").removeClass("vesco-top-nav");

            //hide back-to-top button
            $("#back-to-top").fadeOut();
        } else {
            //show nav
            $("nav").addClass("vesco-top-nav");

            //show back-to-top button
            $("#back-to-top").fadeIn();
        }
    });
});

// smooth-scrolling

$(function () {

    $("a.smooth-scroll").click(function () {
        event.preventDefault();

        // get section id. e.g: #home
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });

});


// collapse mobile menu on click
$(document).ready(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    })
});