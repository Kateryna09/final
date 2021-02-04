
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
$(document).ready(function(){
    var $element = $('.work');
    let counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        var offset = $element.offset().top

        if (scroll > offset && counter == 0) {
                //$(".number").countUp({delay:10,time:1000})
                var options = {
                    useEasing: true,
                    useGrouping: true,
                    separator: ',',
                    decimal: '.',
                    prefix: '',
                    suffix: ''
                };
                var demo = new CountUp("number", 0, 420, 0, 2.5, options);
                demo.start();
                var demo = new CountUp("number2", 0, 310, 0, 2.5, options);
                demo.start();
                var demo = new CountUp("number3", 0, 720, 0, 2.5, options);
                demo.start();
                var demo = new CountUp("number1", 0, 990, 0, 2.5, options);
                demo.start();
            counter++;
        }
    });

});
