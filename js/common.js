
var page = (function(){
    function init() {
        initCarousel();
        headTop();
    }
    
    function initCarousel(){
        $(".externalControl .carousel").jCarouselLite({
            visible: 1,
            btnNext: ".externalControl .next",
            btnPrev: ".externalControl .prev",
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
    };
    return {
        init: init
    };
}());

$(document).ready(page.init);


var checkbox = (function() {
    var checkboxes = [
        {id: "subscribe", state:0},
        {id: "agree", state:0, check:true}
    ],
    checkClass = "checked";

    var check = function() {
        var $self = $(this);
        var id = $self.attr("id");
        var check = checkboxes.find(function(item){
            return item.id === id
        });
        var $child = $self.children("div");
        
        if(check.state === 1){
            $child.removeClass(checkClass);
            check.state = 0;
            if (check.check){
                $("#btnEditing").addClass("colorOrange");
            }
        } else {
            $child.addClass(checkClass);
            check.state = 1;
            if (check.check){
                $("#btnEditing").removeClass("colorOrange");
            }
        }
    }

    var checkboxs = function(){
        checkboxes.forEach(function(element) {
            $("#" + element.id).click(check);
        });
    }
    return{
        cb: checkboxs
    };
})();
checkbox.cb();