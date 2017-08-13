/*jslint browser: true, devel: true*/
/*global $, jQuery, alert*/

// Shoe Catalog
// Loading data from Google Sheet using JSON link
// Creating html for the handlebars template
var requestShoes = new XMLHttpRequest();
requestShoes.open('GET', 'https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1mBVHh_Mw1QBAlcf-zlN2ZXB_3wX0_TgT-KF2PsN49b8&sheet=Shoes');
requestShoes.onload = function(){
    var data = JSON.parse(requestShoes.responseText);
    //console.log(data.Shoes[0]);
    createShoeCatalog(data);
};
requestShoes.onerror = function() {
  console.log("Connection error..");
};
requestShoes.send();

function createShoeCatalog(shoeData){
  var rawShoeTemplate = document.getElementById("shoeTemplate").innerHTML;
  var compiledTemplate = Handlebars.compile(rawShoeTemplate);
  var generatedHTML = compiledTemplate(shoeData);
  var shoe_Catalog = document.getElementById("shoeCatalog");
  shoe_Catalog.innerHTML = generatedHTML;
}
// Burger menu animated
function animateMenu(x) {
   "use strict";
		if ($(window).width()>1080){
			return;
		}
		if (document.getElementById("mySidenav").style.width == "100%") {
			closeNav(x);
		}
		else{
			openNav(x);
		}
}
function fromContent(x){
	if(document.getElementById("mySidenav").style.width == "100%"){
		animateMenu(x);
	}
	else {
		return;
	}
}
function changeMenu(x){
	x.classList.toggle("change");
}
// Side menu for Mobile
function openNav(x) {
		changeMenu(x);
   document.getElementById("mySidenav").style.width = "100%";
}
function closeNav(x) {
	changeMenu(x);
  document.getElementById("mySidenav").style.width = "0%";
}
//-----------------

// Smooth Scrolling
function smoothScroll() {
		console.log("smooth");
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

						$('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
							window.location.hash = hash;
            });
        } // End if
    });
}
// Parallax
$(window).scroll(function(){
  var parallaxScroll = $(this).scrollTop();
  $('.landingShoe').css({
    'transform' : 'translate(0px, '+ parallaxScroll *-.1 +'%)'
  });
  $('#release').css({
    'transform' : 'translate(0px, '+ parallaxScroll *-.3 +'%)'
  });
  $('.exploreButton').css({
    'transform' : 'translate(0px, '+ parallaxScroll *-3 +'%)'
  });
});

/* Menubar hiding
var scrolls = [];
var i = 0;
$(window).scroll(function(){
  scrolls[i++] = $(this).scrollTop();
  hideMenu();
});
// Scrolling down
function  hideMenu(){
console.log(scrolls[i-2], scrolls[i-1])
  if(i > 50){
    if(scrolls[i-2]  < scrolls[i-1]){
      $('.bar').animate({
        opacity : 0
      }, 200);
    }
    if(scrolls[i-2]  > scrolls[i-1]){
      $('.bar').animate({
        opacity : 1
      }, 200);
    }
  }
}*/
