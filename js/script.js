
//Hide and Show Desktop Header
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hide-header").style.top = "0";
  } else {
    document.getElementById("hide-header").style.top = "-55px"; /* adjust this value to the height of your header */
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function(){


//click on eye to show a div -jQ
$(".ri-eye-fill").click(function(){ //.hover works fine.
  var container = $("#description-box");

  container.fadeIn(300);

});


//click outside div to close -jQ
$(document).mouseup(function (e) {

  if ($(e.target).closest(".popout-box").length=== 0) {
    
  $(".popout-container").fadeOut(300);
  }
  });


// same above -js
var btn = document.querySelector('#menu-icon'),
   view = document.querySelector('.navbar'),
   body = document.body;

btn.onclick = (e) =>{
  e.stopPropagation();
  view.classList.toggle('active')} // toggle menu

//same above -js
body.onclick = () =>{
  if(view.classList.contains('active')){
    view.classList.remove('active');
    } 
} // close after click outside


const searchBox = document.querySelector(".search-box")
const searchBtn = document.querySelector(".search-icon")

searchBtn.onclick = () =>{
  searchBox.classList.toggle("active") 
  searchBtn.classList.toggle("active")
                          }

$('.home-slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  dots:true,
  loop:true
  });

  $("#appetizer").css({"background":"#8fe6b356" , "color":"#27ae60"})

  $("#appetizer").click(function(){
    $("#main-course, #dessert, #drinks").css({"background":"none" , "color":"none"})
    $(this).css({"background":"#8fe6b356" , "color":"#27ae60"})
    $(".main-course, .dessert, .drinks").hide()
    $(".appetizer").slideDown()
  
  })
$("#main-course").click(function(){
  $("#appetizer, #dessert, #drinks").css({"background":"none" , "color":"none"})
  $(this).css({"background":"#8fe6b356" , "color":"#27ae60"})
  $(".appetizer, .dessert, .drinks").hide()
  $(".main-course").slideDown()

})
  $("#dessert").click(function(){
    $("#main-course, #appetizer, #drinks").css({"background":"none" , "color":"none"})
    $(this).css({"background":"#8fe6b356" , "color":"#27ae60"})
    $(".appetizer, .main-course, .drinks").css("display", "none");
    $(".dessert").slideDown();
  })
  $("#drinks").click(function(){
    $("#main-course, #appetizer, #dessert").css({"background":"none" , "color":"none"})
    $(this).css({"background":"#8fe6b356" , "color":"#27ae60"})
    $(".appetizer, .main-course, .dessert").css("display", "none");
    $(".drinks").slideDown();
  })

}) //end of doc.ready "jquery"