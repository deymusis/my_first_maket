var page = (function(){
    function init() {
        initCarousel();
        headTop();
    }
    
    function initCarousel(){
        $(".externalControl .carousel").jCarouselLite({
            visible: 1,
            btnNext: ".externalControl .slick-next",
            btnPrev: ".externalControl .slick-prev",
            btnGo:
            [".externalControl .one", ".externalControl .two",
            ".externalControl .three",".externalControl .four",
            ".externalControl .five",".externalControl .six"]
        });
    }
    
    function headTop (){ 
        var $topPanel = $("#topPanel"); //Получаем нужный объект var
        var topOfToppanel = $topPanel.offset().top; //Получаем начальное расположение нашего блока 
        $(window).scroll(function () {
            var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно 
            
            if (windowScroll > topOfToppanel){ // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
                $topPanel.removeClass("subs").addClass("topWindow");
                
            } else {
                $topPanel.removeClass("topWindow").addClass("subs");
            }; 
            console.log("windowScroll " + windowScroll + ", topOfToppanel" + topOfToppanel); 
        });

        $('#subscribe').click(toggleChecked);

        $('#agree').click(function() {
            toggleChecked.call(this);
            disableButton();
        });
    
        function toggleChecked() {
            var $check = $(this).children('div');
    
            if ($check.hasClass("checked")) {
                $check.removeClass("checked")
            } else {
                $check.addClass("checked")
            }
        }
    
        function disableButton() {
            var $chk = $('.btn-start');
    
            if ($chk.hasClass("colorOrange")) {
                $chk.removeClass("colorOrange")
            } else {
                $chk.addClass("colorOrange")
            }
        }
    };
    return {
        init: init
    };
}());

$(document).ready(page.init);

