/*...............................Menu Toggle..................................*/
var myToggle = document.querySelector(".menu-toggle");
var mySidebar = document.querySelector(".sidebar");
var blurSection = document.querySelector("#blurSection");
var social = document.querySelector(".nav-social");

//To Open the Sidebar
function menuToggle(){
    mySidebar.classList.toggle("active");
    myToggle.classList.toggle("active");
    blurSection.classList.toggle("active");
    social.classList.toggle("active");
}
//To Close Sidebar
function closeNav() {
    mySidebar.classList.remove("active");
    myToggle.classList.remove("active");
    blurSection.classList.remove("active");
    social.classList.remove("active");
}

$(document).click(function(e) {
	if (!$(e.target).is('#sidebar')&& !$(e.target).is('#menu-toggle')){	
        closeNav();    
    }
});
/*.....................preloader................................*/
//Loader termination function
function preloader(){
	var preload = document.querySelector("#preloader");
	preload.style.display = 'none';
	preload.style.opacity = 0;
}
/*..............................On Scroll Navbar.................................*/
//navbar scrolling effects
$(window).on("scroll",function(){
	if($(window).scrollTop() > 200){
		$('header').addClass('navcolor');
	}else{
		$('header').removeClass('navcolor');
	}
});
/*..............................skills progress bar........................ */
$(function(){
    $('.circlechart').circlechart();
});
/*..............................Animation with wow.js and animation.css..............................*/
new WOW().init();
/*.......................................Scrolling activation effect..........................................*/
$(function(){
    $('.scrolling').scrollWatchMapTo('nav ul li a');
});
/*............................Project Pop Up.............................*/ 
$("#project-more").click(function(){
	$(".popup").fadeIn(200,function(){
		$(this).addClass("visibility-popup");
		$("#project-more").delay(3000).queue(function(){
			var url="https://github.com/SohelRaja?tab=repositories";
			$(location).prop("href",url);
		});
	});
});
$(".popupclose").click(function(){
	$(".popup").fadeOut(200,function(){
		$(this).removeClass("visibility-popup");
	});
});           
/*------------Skills Pop-up----------------------- */
$(document).ready(function() {
	$('.skills-popup').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 400,
		mainClass:'mfp-fade'
	});
	$('.projects-popup').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 400,
		mainClass:'mfp-fade'
	});
});