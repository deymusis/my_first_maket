var page = (function(){
    function init() {
        initCarouselOne();
        initCarouselTwo();
        initCarouselThree();
        headTop();
    }
    
        /*Карусель*/

    function initCarouselOne() {
        $(".externalControl-one .carousel-one").jCarouselLite({
            visible: 1,
            btnNext: ".externalControl-one .slick-next",
            btnPrev: ".externalControl-one .slick-prev",
            btnGo:
            [".externalControl-one .one", ".externalControl-one .two",
            ".externalControl-one .three"]
        });
    }

    function initCarouselTwo() {
        $(".externalControl-two .carousel-two").jCarouselLite({
            visible: 1,
            btnNext: ".externalControl-two .slick-next",
            btnPrev: ".externalControl-two .slick-prev",
            btnGo:
            [".externalControl-two .one", ".externalControl-two .two",
            ".externalControl-two .three",".externalControl-two .four",
            ".externalControl-two .five",".externalControl-two .six"]
        });
    }

    function initCarouselThree() {
        $(".externalControl-three .carousel-three").jCarouselLite({
            visible: 1,
            btnNext: ".externalControl-three .slick-next",
            btnPrev: ".externalControl-three .slick-prev",
            btnGo:
            [".externalControl-three .one", ".externalControl-three .two",
            ".externalControl-three .three",".externalControl-three .four",
            ".externalControl-three .five",".externalControl-three .six"]
        });
    }
    
        /*Прилипалка формы входа*/

    function headTop() { 
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

            /*Галочка для подписки*/

        $('#subscribe').click(toggleChecked);

            /*Галочка для согласия*/

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
        
            /*Активность кнопки*/

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

