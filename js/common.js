function HeadTop (){ 
    var $toppanel = $("#TopPanel"); //Получаем нужный объект var
    var topOftoppanel = $toppanel.offset().top; //Получаем начальное расположение нашего блока 
    $(window).scroll(function () {
        var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно 
        
        if (windowScroll > topOftoppanel){ // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
            $toppanel.removeClass("subs").addClass("topWindow");
            
        } else {
            $toppanel.removeClass("topWindow").addClass("subs");
        }; 
        console.log("windowScroll " + windowScroll + ", topOftoppanel" + topOftoppanel); 
    });
};


function init(){
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

    HeadTop();
}

$(document).ready(init);

