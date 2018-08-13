// $(function(){
// $(".carousel").jCarouselLite({
// 		btnNext: ".next",
// 		btnPrev: ".prev"
// 	});
// });



$(function(){
$(".externalControl .carousel").jCarouselLite({
    visible: 1,
    start: 0,
    btnNext: ".externalControl .next",
    btnPrev: ".externalControl .prev",
    btnGo:
    [".externalControl .one", ".externalControl .two",
    ".externalControl .three",".externalControl .four",
    ".externalControl .five",".externalControl .six"]
});
});