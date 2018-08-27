$(document).ready(function(){
   
    var navLine = $('.hero__top-line')
    $('.js--nav-break').waypoint(function(direction){
        if (direction == "down") {
            
            navLine.addClass('sticky');
        } else {
            
            navLine.removeClass('sticky');
        }
    }, {offset:'-3px;'
});


$('.navigation-button--close').click(function(){
    
    var checkBox = $('.navigation__checkbox')[0];
    if (checkBox.checked == true) {
        checkBox.checked =false;
    } 
});

// var carImgs = $('.carousel__img');
// $('.carousel__radio').click(reorderCarousel);


// function reorderCarousel() {
    
//     for (var step = 0; step < carImgs.length; step++) {
//         var obj = carImgs[step];

//         if ($(obj).hasClass('carousel__img-1')) {
//             removeAddClass($(obj), 'carousel__img-2', 'carousel__img-1');
//         } else if ($(obj).hasClass('carousel__img-2')) {
//             removeAddClass($(obj), 'carousel__img-3', 'carousel__img-2');
//         } else if ($(obj).hasClass('carousel__img-3')) {
//             removeAddClass($(obj), 'carousel__img-1', 'carousel__img-3');
//         } else {
//             alert("not right");
//         }
//     }
// }

// function removeAddClass(obj, class1, class2) {
//     obj.addClass(class1);
//     obj.removeClass(class2);
// //    alert('added' + class1 + 'and removed' + class2);
// }

$('.slick-carousel').slick({
    centerMode: true,
  centerPadding: '30px',
  slidesToShow: 4,
   variableWidth: true,
  infinite:true,
  dots:true,
  arrows: false,
  touchThreshold: 10,
  focusOnSelect: true,
//   variableWidth: true,
  responsive: [
    {
      breakpoint: 751,
      settings: {
        slidesToShow: 4,
        variableWidth: true,
      }
    },
]

});

$('#read-more').click(function(){
    $('.section-chat__expand').toggleClass('expanded');
    setTimeout(function(){
        $('#read-more__text').text() === "閉じる" ? $('#read-more__text').text("続きを読む") : $('#read-more__text').text("閉じる");
    }, 400);
    
    $('#read-more__icon').toggleClass('expanded');


})


});