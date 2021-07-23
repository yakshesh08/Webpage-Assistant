// close button to connect to Webside 

$(document).ready(function () {
    function showModel() {
        $('#popup').show();
        // $('html body').css('overflow','hidden');
    }

    function closeModel() {
        $('#popup').hide();
    }

    setTimeout(showModel, 3000);

    $('#close').click(function () {
        closeModel();
    })
});


$(document).ready(function () {
    function showModel() {
        $('#popup').show();
    }

    function closeModel() {
        $('#popup').hide();
    }

    setTimeout(showModel, 3000);

    $('#start-btn').click(function () {
        closeModel();
    })
});

// preW and Next Button Work

var visibleDiv = 0;

function showDiv() {
    $(".assistant_box").hide();
    $(".assistant_box:eq(" + visibleDiv + ")").show();
}
showDiv()

function showNext(para) {
    if (visibleDiv == $(".assistant_box").length - 1) {
        visibleDiv = 0;
    } else {
        visibleDiv++;
    }
    setImage(para)
    showDiv();
}

function showPrew(para) {
    if (visibleDiv == 0) {
        visibleDiv = $(".assistant_box").length - 1;
    } else {
        visibleDiv--;
    }
    setImage(para)
    showDiv();
}

var images = ['Assistant1.png', 'Assistant2.png', 'Assistant3.png', 'Assistant4.png', 'Assistant5.png', 'Assistant6.png', 'Assistant7.png'];
// var i = 0; //Current Image Index
function setImage(para) {
    document.getElementById("image_slider").src = "img/" + para;
}

// function showPrew(){
//     if (i <= 0) i = images.length;
//     i--;
//     return setImg();
// }
// function showNext(){
//     if (i >= images.length-1 ) i = -1;
//     i++;
//     return setImg();
// }
//  function setImg(){
//      return slider_img.setAttribute('src', 'img/'+images[i]);
//  }





// $(document).ready(function(){
//     $('input[type="radio"]').click(function(){
//         var inputValue =$(this).attr("value");
//         var targetBox =$("."+ inputValue);
//         $(".interest left").not(targetBox).hide();
//         $(targetBox).show();
//     });
// })




// function fn1() {
//     var rd1 = document.getElementById("rd1")
//     var rd2 = document.getElementById("rd2")
//     var rd3 = document.getElementById("rd3")
//     var rd4 = document.getElementById("rd4")
//     var rd5 = document.getElementById("rd5")
//     var rd6 = document.getElementById("rd6")
//     var rd7 = document.getElementById("rd7")

// }



// document.getElementById("image_slider").src="img/bg1.jpg";


// var indexValue = 1;
// showImg(indexValue);
// function btn_slide(e){showImg(indexValue = e);}
// function side_slide(e) {
//     debugger;
//     showImg(indexValue += e);
// }

// function showImg(e) {
//     var i;
//     const img = document.querySelectorAll('img')
//     const sliders = document.querySelectorAll('.imgBx');
//     if (e > img.length) { indexValue = 1 }
//     if (e < 1) { indexValue = img.length }
//     for (i = 0; i < img.length; i++) {
//         img[i].style.display = "none";
//     }
//     for (i = 0; i < sliders.length; i++) {
//         sliders[i].style.background = "rgba(255,255,255,.1)";
//     }
//     img[indexValue - 1].style.display = "block";
//     sliders[indexValue - 1] && (sliders[indexValue - 1].style.background = "white");
// }