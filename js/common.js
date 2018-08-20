var page = (function(){
    var color = "colorOrange",
    checked = "checked";

    function init() {
        var carousels = $(".externalControl");
        var carouselLength = carousels.length;
        for(var i = 0; i< carouselLength; i++){
            initCarousel($(carousels[i]));
        }
        headTop();
    }
    
        /*Карусель*/
    
    function initCarousel($control) {
        var $buttonsNext = $control.find(".slick-next"),
            $buttonsPrev = $control.find(".slick-prev"),
            $go = $control.find('a.go')

        $control.find(".carousel").jCarouselLite({
            visible: 1,
            btnNext: $buttonsNext,
            btnPrev: $buttonsPrev,
            btnGo: $go
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
    
            if ($check.hasClass(checked)) {
                $check.removeClass(checked)
            } else {
                $check.addClass(checked)
            }
        }
        
            /*Активность кнопки*/

        function disableButton() {
            var $chk = $('.btn-start');
    
            if ($chk.hasClass(color)) {
                $chk.removeClass(color)
            } else {
                $chk.addClass(color)
            }
        }
    };
    return {
        init: init
    };
}());

$(document).ready(page.init);

