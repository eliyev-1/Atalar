
$('.events__content__sorting__items').slick({

infinite: true,
autoplay: true,
autoplaySpeed: 2000,
speed: 300,
slidesToShow: 4,
slidesToScroll: 1,

prevArrow:'.rightArrow',
nextArrow:'.leftArrow',
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 2,
slidesToScroll: 1,
infinite: true,
dots: false


}
},
{
breakpoint: 800,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
dots: true
}
},


]
});
$('.photos__content__items').slick({
dots: false,
infinite: true,
speed: 300,
slidesToShow: 1,

variableWidth: true,
prevArrow:'.photosLeftArrow',
nextArrow:'.photosRightArrow',
});


$('.autoplay').slick({
prevArrow:'.videosRightArrow',
nextArrow:'.videosLeftArrow',
dots: false,
slidesToShow: 3,
slidesToScroll: 3,
autoplay: true,
autoplaySpeed: 2000,
responsive: [

{
breakpoint: 1200,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: false


}
},
{
breakpoint: 1000,
settings: {
slidesToShow: 1,
slidesToScroll: 3,
infinite: true,
dots: true


}
},



]
});
$('.partners__content__items').slick({
dots: false,
infinite: true,
speed: 300,
slidesToShow: 3,

variableWidth: true,
prevArrow:'.partnersLeftArrow',
nextArrow:'.partnersRightArrow',
});
