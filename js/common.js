var page = (function(){
    var color = "colorOrange",
        checked = "checked",
        goFocus = "go-focus"

    function init() {
        var carousels = $(".externalControl");
        var carouselLength = carousels.length;
        for(var i = 0; i < carouselLength; i++){
            initCarousel($(carousels[i]));
        }


        headTop();
    }
    
        /*Карусель*/
    
    function initCarousel($control) {
        var $buttonsNext = $control.find(".slick-next"),
            $buttonsPrev = $control.find(".slick-prev"),
            $go = $control.find('a.go'),
            go = Array.from($go).map(function(item){return $(item)}),
            goLength = go.length,
            index = 0;

            
        go[index].addClass(goFocus);

        $control.find(".carousel").jCarouselLite({
            visible: 1,
            speed: 500,
            btnNext: $buttonsNext,
            btnPrev: $buttonsPrev,
            btnGo: $go
        });

        function buttonClick(dir) {
            go[index].removeClass(goFocus);

            if(dir) {
                if(index === goLength - 1) {
                    index = 0;
                } else {
                    index++;
                }
            } else {
                if(index === 0) {
                    index = goLength - 1;
                } else {
                    index--;
                }
            }

            go[index].addClass(goFocus);
        }

        function pointClick(i) {
            go[index].removeClass(goFocus);
            index = i;
            go[index].addClass(goFocus);
        }

        $($buttonsNext).bind("click", buttonClick.bind(null, true));
        $($buttonsPrev).bind("click", buttonClick.bind(null, false));

        for(var i = 0; i <= goLength - 1; i++) {
            go[i].bind("click", pointClick.bind(null, i));
        }        
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

