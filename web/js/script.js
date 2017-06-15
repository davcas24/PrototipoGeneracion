/*var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

<div id='back' class="col-md-1">
  <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
</div>
<img class="mySlides" src="images/adidas1.jpg" style="width:100%">
<img class="mySlides" src="images/nike2.jpg" style="width:100%">
<img class="mySlides" src="images/adidas2.jpg" style="width:100%">
<div  id='front'>class="col-md-1">
  <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
</div>
*/


$(document).ready( function () {

  var actual=1;

  $('#front input').on({
    mouseover : function () {
      $(this).css({
        'cursor': 'pointer','border-color':'red'
      });

    },

    mouseout : function () {
      $(this).css({
        'cursor': 'default','border-color':'grey'
      });
    },


    click :function () {
      actual++;
       if (actual==5) {
        actual=1;
      }
        $('#img').attr('src',"images/img"+actual+".jpg");

    }
  });



  $('#back input').on({
    mouseover : function () {
      $(this).css({
        'cursor': 'pointer','border-color':'red'
      });

    },

    mouseout : function () {
      $(this).css({
        'cursor': 'default','border-color':'grey'
      });
    },


    click :function () {
      actual--;
       if (actual==0) {
        actual=4;
      }

        $('#img').attr('src',"images/img"+actual+".jpg");

    }
  });
});
