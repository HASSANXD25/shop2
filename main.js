function openCity(evt, menu) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(menu).style.display = "block";
    evt.currentTarget.className += " active";
  }
  // 1 
  var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("dot1");
  if (n > slides1.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";  
  }
  for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";  
  dots1[slideIndex1-1].className += " active";
}
// code slideshow
$(function() {
  var showcase = $("#showcase")

  showcase.Cloud9Carousel( {
        yPos: 42,
        yRadius: 48,
        mirrorOptions: {
              gap: 12,
              height: 0.2
        },
        buttonLeft: $(".nav > .left"),
        buttonRight: $(".nav > .right"),
        autoPlay: true,
        bringToFront: true,

        onRendered: showcaseUpdated,
        onLoaded: function() {
              showcase.css( 'visibility', 'visible' )
              showcase.css( 'display', 'none')
              showcase.fadeIn( 1500 )
        }
  })

  function showcaseUpdated( showcase ) {
        var title = $("#item-title").html(
              $(showcase.nearestItem()).attr( 'alt' )
        )

        var c = Math.cos((showcase.floatIndex() % 1) * 2 * Math.PI)
        title.css('opacity', 0.5 + (0.5 * c))
  }

  $('.nav > button').click( function( e ) {
        var b = $(e.target).addClass( 'down' )
        setTimeout( function() { b.removeClass( 'down' ) }, 80)
  } )

  $(document).keydown( function( e ) {
        switch( e.keyCode ) {
              case 37:
              $('.nav > .left').click()
              break

              case 39:
              $('.nav > .right').click()
        }
  })
})