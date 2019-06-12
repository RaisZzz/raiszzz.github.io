$(window).scroll(function() {
    if($(window).width() > 968){
        if ($(this).scrollTop() >= 200) {
            $('#brandbook').css('animation', 'h2b 2s forwards');
            $('.b-bg').css('animation', 'b-bg 1.5s forwards');
            $('.first-img').css('animation', 'first-img 2s forwards');
            $('.second-img').css('animation', 'second-img 2.5s forwards');
            $('.third-img').css('animation', 'third-img 3s forwards');
            $('.four-img').css('animation', 'four-img 3.5s forwards');
            $('.five-img').css('animation', 'five-img 4s forwards');
            $('.brand-svg>img:nth-child(1)').css('animation', 'svg-1 2s forwards');
            $('.brand-svg>img:nth-child(2)').css('animation', 'svg-2 1s forwards 2s');
            $('.brand-svg>img:nth-child(3)').css('animation', 'svg-2 1s forwards 2.3s');
            $('.brand-svg>img:nth-child(4)').css('animation', 'svg-2 1s forwards 2.6s');
            $('.brand-svg>img:nth-child(5)').css('animation', 'svg-2 1s forwards 2.9s');
            $('.brand-svg>img:nth-child(6)').css('animation', 'svg-2 1s forwards 3.2s');
            $('.brand-svg>img:nth-child(7)').css('animation', 'svg-2 1s forwards 3.5s');
            $('.brand-svg>img:nth-child(8)').css('animation', 'svg-2 1s forwards 3.8s');
            $('.brand-svg>img:nth-child(9)').css('animation', 'svg-3 1s forwards 4.1s');
            $('.brand-svg>img:nth-child(10)').css('animation', 'svg-4 1s forwards 4.1s');
            $('.brand-svg>img:nth-child(11)').css('animation', 'svg-2 1s forwards 4.4s');
            $('.brand-svg>img:nth-child(12)').css('animation', 'svg-5 1s forwards 4.7s');
            $('.brand-svg>img:nth-child(13)').css('animation', 'svg-2 1s forwards 5.7s');
            function write(){
                $('.brand-svg>img:nth-child(3)').addClass('write');
                $('.brand-svg>img:nth-child(4)').addClass('write');
                $('.brand-svg>img:nth-child(5)').addClass('write');
                $('.brand-svg>img:nth-child(6)').addClass('write');
                $('.brand-svg>img:nth-child(7)').addClass('write');
                $('.brand-svg>img:nth-child(8)').addClass('write');
            }
            setTimeout(write, 6200)
        }
        if($(this).scrollTop() >= 300) {
            $('.header-bottom').css('opacity', '0');
        }
        if($(this).scrollTop() < 300) {
            $('.header-bottom').css('opacity', '1');
        }
        if($(this).scrollTop() >= 1100){
            $('#sites').css('animation', 'h2b 2s forwards');
            $('.s-bg').css('animation', 's-bg 2.5s forwards');
            $('.left>.parallax>img:nth-child(1)').css('animation', 's-img1 2s forwards');
            $('.left>.parallax>img:nth-child(2)').css('animation', 's-img2 2s forwards 2s');
            $('.s-svg>img:nth-child(1)').css('animation', 'svg-2 1s forwards 2s');
            $('.s-svg>img:nth-child(2)').css('animation', 'svg-2 1s forwards 2.3s');
            $('.s-svg>img:nth-child(3)').css('animation', 'svg-2 1s forwards 2.6s');
            $('.s-svg>img:nth-child(4)').css('animation', 'svg-2 1s forwards 2.9s');
            $('.s-svg>img:nth-child(5)').css('animation', 'svg-2 1s forwards 3.2s');
            $('.s-svg>img:nth-child(6)').css('animation', 'svg-2 1s forwards 3.5s');
            $('.s-svg>img:nth-child(7)').css('animation', 'svg-2 1s forwards 3.8s');
            $('.s-svg>img:nth-child(8)').css('animation', 'svg-2 1s forwards 4.1s');
            $('.s-svg>img:nth-child(9)').css('animation', 'svg-2 1s forwards 4.4s');
            $('.s-svg>img:nth-child(10)').css('animation', 'svg-2 1s forwards 4.7s');
            function write(){
                $('.s-svg>img:nth-child(3)').addClass('write');
                $('.s-svg>img:nth-child(10)').addClass('write');
            }
            setTimeout(write, 5200)
        }
        if($(this).scrollTop() >= 2300){
            $('#mobile').css('animation', 'h2b 2s forwards');
            $('.m-bg').css('animation', 'b-bg 2.5s forwards');
            $('#mobile>.container>.right>img:nth-child(1)').css('animation', 'm-img1 2s forwards');
            $('#mobile>.container>.right>img:nth-child(2)').css('animation', 'm-img2 2s forwards 0.5s');
            $('.mobile-svg>img:nth-child(1)').css('animation', 'svg-2 1s forwards 2s');
            $('.mobile-svg>img:nth-child(2)').css('animation', 'svg-2 1s forwards 2.3s');
            $('.mobile-svg>img:nth-child(3)').css('animation', 'svg-2 1s forwards 2.6s');
            $('.mobile-svg>img:nth-child(4)').css('animation', 'svg-2 1s forwards 2.9s');
            $('.mobile-svg>img:nth-child(5)').css('animation', 'svg-2 1s forwards 3.2s');
            $('.mobile-svg>img:nth-child(6)').css('animation', 'svg-2 1s forwards 3.5s');
            function rotate(){
                $('.mobile-svg>img:nth-child(5)').addClass('rotate');
                $('.mobile-svg>img:nth-child(6)').addClass('rotate');
            }
            setTimeout(rotate, 4000)
        }
        if($(this).scrollTop() >= 2800){
            $('#business').css('animation', 'h2b 2s forwards');
            $('.slider-3').css('animation', 'laptop 2s forwards');
            $('.bus-svg>img:nth-child(1)').css('animation', 'svg-2 1s forwards 2s');
            $('.bus-svg>img:nth-child(2)').css('animation', 'svg-2 1s forwards 2.3s');
            $('.bus-svg>img:nth-child(3)').css('animation', 'svg-2 1s forwards 2.6s');
            $('.bus-svg>img:nth-child(4)').css('animation', 'svg-2 1s forwards 2.9s');
            $('.bus-svg>img:nth-child(5)').css('animation', 'svg-2 1s forwards 3.2s');
            $('.bus-svg>img:nth-child(6)').css('animation', 'svg-2 1s forwards 3.5s');
            function write(){
                $('.bus-svg>img:nth-child(2)').addClass('write');
                $('.bus-svg>img:nth-child(3)').addClass('write');
                $('.bus-svg>img:nth-child(4)').addClass('write');
            }
            setTimeout(write, 4000)
        }
        if($(this).scrollTop() >= 3600){
            $('#footer').css('animation', 'h2b 2s forwards');
        }
    }else if($(window).width() <= 968 && $(window).width()>767){
        if ($(this).scrollTop() >= 200) {
            $('#brandbook').css('animation', 'h2b 2s forwards');
            $('.brand-svg>img:nth-child(1)').css('animation', 'svg-1 2s forwards');
            $('.brand-svg>img:nth-child(2)').css('animation', 'svg-2 1s forwards 2s');
            $('.brand-svg>img:nth-child(3)').css('animation', 'svg-2 1s forwards 2.3s');
            $('.brand-svg>img:nth-child(4)').css('animation', 'svg-2 1s forwards 2.6s');
            $('.brand-svg>img:nth-child(5)').css('animation', 'svg-2 1s forwards 2.9s');
            $('.brand-svg>img:nth-child(6)').css('animation', 'svg-2 1s forwards 3.2s');
            $('.brand-svg>img:nth-child(7)').css('animation', 'svg-2 1s forwards 3.5s');
            $('.brand-svg>img:nth-child(8)').css('animation', 'svg-2 1s forwards 3.8s');
            $('.brand-svg>img:nth-child(9)').css('animation', 'svg-3 1s forwards 4.1s');
            $('.brand-svg>img:nth-child(10)').css('animation', 'svg-4 1s forwards 4.1s');
            $('.brand-svg>img:nth-child(11)').css('animation', 'svg-2 1s forwards 4.4s');
            $('.brand-svg>img:nth-child(12)').css('animation', 'svg-5 1s forwards 4.7s');
            $('.brand-svg>img:nth-child(13)').css('animation', 'svg-2 1s forwards 5.7s');
            function write(){
                $('.brand-svg>img:nth-child(3)').addClass('write');
                $('.brand-svg>img:nth-child(4)').addClass('write');
                $('.brand-svg>img:nth-child(5)').addClass('write');
                $('.brand-svg>img:nth-child(6)').addClass('write');
                $('.brand-svg>img:nth-child(7)').addClass('write');
                $('.brand-svg>img:nth-child(8)').addClass('write');
            }
            setTimeout(write, 6200)
        }
        if($(this).scrollTop() >= 900){
            $('#sites').css('animation', 'h2b 2s forwards');
            $('.s-svg>img:nth-child(1)').css('animation', 'svg-2 1s forwards 0.5s');
            $('.s-svg>img:nth-child(2)').css('animation', 'svg-2 1s forwards 0.8s');
            $('.s-svg>img:nth-child(3)').css('animation', 'svg-2 1s forwards 1.1s');
            $('.s-svg>img:nth-child(4)').css('animation', 'svg-2 1s forwards 1.4s');
            $('.s-svg>img:nth-child(5)').css('animation', 'svg-2 1s forwards 1.7s');
            $('.s-svg>img:nth-child(6)').css('animation', 'svg-2 1s forwards 2s');
            $('.s-svg>img:nth-child(7)').css('animation', 'svg-2 1s forwards 2.3s');
            $('.s-svg>img:nth-child(8)').css('animation', 'svg-2 1s forwards 2.6s');
            $('.s-svg>img:nth-child(9)').css('animation', 'svg-2 1s forwards 2.9s');
            $('.s-svg>img:nth-child(10)').css('animation', 'svg-2 1s forwards 3.2s');
            function write(){
                $('.s-svg>img:nth-child(3)').addClass('write');
                $('.s-svg>img:nth-child(10)').addClass('write');
            }
            setTimeout(write, 3700)
        }
        if($(this).scrollTop() >= 1100){
            $('#mobile').css('animation', 'h2b 2s forwards');
            $('.mobile-svg>img:nth-child(1)').css('animation', 'svg-2 1s forwards 0.5s');
            $('.mobile-svg>img:nth-child(2)').css('animation', 'svg-2 1s forwards 0.8s');
            $('.mobile-svg>img:nth-child(3)').css('animation', 'svg-2 1s forwards 1.2s');
            $('.mobile-svg>img:nth-child(4)').css('animation', 'svg-2 1s forwards 1.5s');
            $('.mobile-svg>img:nth-child(5)').css('animation', 'svg-2 1s forwards 1.8s');
            $('.mobile-svg>img:nth-child(6)').css('animation', 'svg-2 1s forwards 2.1s');
           function rotate(){
                $('.mobile-svg>img:nth-child(5)').addClass('rotate');
                $('.mobile-svg>img:nth-child(6)').addClass('rotate');
            }
            setTimeout(rotate, 2600)
        }
        if($(this).scrollTop() >= 1700){
            $('#business').css('animation', 'h2b 2s forwards');
            $('.bus-svg>img:nth-child(1)').css('animation', 'svg-2 1s forwards 0.5s');
            $('.bus-svg>img:nth-child(2)').css('animation', 'svg-2 1s forwards 0.8s');
            $('.bus-svg>img:nth-child(3)').css('animation', 'svg-2 1s forwards 1.2s');
            $('.bus-svg>img:nth-child(4)').css('animation', 'svg-2 1s forwards 1.5s');
            $('.bus-svg>img:nth-child(5)').css('animation', 'svg-2 1s forwards 1.8s');
            $('.bus-svg>img:nth-child(6)').css('animation', 'svg-2 1s forwards 2.1s');
            function write(){
                $('.bus-svg>img:nth-child(2)').addClass('write');
                $('.bus-svg>img:nth-child(3)').addClass('write');
                $('.bus-svg>img:nth-child(4)').addClass('write');
            }
            setTimeout(write, 2600)
        }
        if($(this).scrollTop() >= 2100){
            $('#footer').css('animation', 'h2b 2s forwards');
        }
    } else{
        if ($(this).scrollTop() >= 80) {
            $('#brandbook').css('animation', 'h2b 2s forwards');
            $('.brand-svg>img:nth-child(1)').css('animation', 'svg-1 2s forwards');
            $('.brand-svg>img:nth-child(2)').css('animation', 'svg-2 1s forwards 2s');
            $('.brand-svg>img:nth-child(3)').css('animation', 'svg-2 1s forwards 2.3s');
            $('.brand-svg>img:nth-child(4)').css('animation', 'svg-2 1s forwards 2.6s');
            $('.brand-svg>img:nth-child(5)').css('animation', 'svg-2 1s forwards 2.9s');
            $('.brand-svg>img:nth-child(6)').css('animation', 'svg-2 1s forwards 3.2s');
            $('.brand-svg>img:nth-child(7)').css('animation', 'svg-2 1s forwards 3.5s');
            $('.brand-svg>img:nth-child(8)').css('animation', 'svg-2 1s forwards 3.8s');
            $('.brand-svg>img:nth-child(9)').css('animation', 'svg-3 1s forwards 4.1s');
            $('.brand-svg>img:nth-child(10)').css('animation', 'svg-4 1s forwards 4.1s');
            $('.brand-svg>img:nth-child(11)').css('animation', 'svg-2 1s forwards 4.4s');
            $('.brand-svg>img:nth-child(12)').css('animation', 'svg-5 1s forwards 4.7s');
            $('.brand-svg>img:nth-child(13)').css('animation', 'svg-2 1s forwards 5.7s');
            function write(){
                $('.brand-svg>img:nth-child(3)').addClass('write');
                $('.brand-svg>img:nth-child(4)').addClass('write');
                $('.brand-svg>img:nth-child(5)').addClass('write');
                $('.brand-svg>img:nth-child(6)').addClass('write');
                $('.brand-svg>img:nth-child(7)').addClass('write');
                $('.brand-svg>img:nth-child(8)').addClass('write');
            }
            setTimeout(write, 6200)
        }
        if($(this).scrollTop() >= 1050){
            $('#sites').css('animation', 'h2b 2s forwards');
            $('.s-svg>img:nth-child(1)').css('animation', 'svg-2 1s forwards 0.5s');
            $('.s-svg>img:nth-child(2)').css('animation', 'svg-2 1s forwards 0.8s');
            $('.s-svg>img:nth-child(3)').css('animation', 'svg-2 1s forwards 1.1s');
            $('.s-svg>img:nth-child(4)').css('animation', 'svg-2 1s forwards 1.4s');
            $('.s-svg>img:nth-child(5)').css('animation', 'svg-2 1s forwards 1.7s');
            $('.s-svg>img:nth-child(6)').css('animation', 'svg-2 1s forwards 2s');
            $('.s-svg>img:nth-child(7)').css('animation', 'svg-2 1s forwards 2.3s');
            $('.s-svg>img:nth-child(8)').css('animation', 'svg-2 1s forwards 2.6s');
            $('.s-svg>img:nth-child(9)').css('animation', 'svg-2 1s forwards 2.9s');
            $('.s-svg>img:nth-child(10)').css('animation', 'svg-2 1s forwards 3.2s');
            function write(){
                $('.s-svg>img:nth-child(3)').addClass('write');
                $('.s-svg>img:nth-child(10)').addClass('write');
            }
            setTimeout(write, 3700)
        }
        if($(this).scrollTop() >= 1500){
            $('#mobile').css('animation', 'h2b 2s forwards');
            $('.mobile-svg>img:nth-child(1)').css('animation', 'svg-2 1s forwards 0.5s');
            $('.mobile-svg>img:nth-child(2)').css('animation', 'svg-2 1s forwards 0.8s');
            $('.mobile-svg>img:nth-child(3)').css('animation', 'svg-2 1s forwards 1.2s');
            $('.mobile-svg>img:nth-child(4)').css('animation', 'svg-2 1s forwards 1.5s');
            $('.mobile-svg>img:nth-child(5)').css('animation', 'svg-2 1s forwards 1.8s');
            $('.mobile-svg>img:nth-child(6)').css('animation', 'svg-2 1s forwards 2.1s');
           function rotate(){
                $('.mobile-svg>img:nth-child(5)').addClass('rotate');
                $('.mobile-svg>img:nth-child(6)').addClass('rotate');
            }
            setTimeout(rotate, 2600)
        }
        if($(this).scrollTop() >= 2300){
            $('#business').css('animation', 'h2b 2s forwards');
            $('.bus-svg>img:nth-child(1)').css('animation', 'svg-2 1s forwards 0.5s');
            $('.bus-svg>img:nth-child(2)').css('animation', 'svg-2 1s forwards 0.8s');
            $('.bus-svg>img:nth-child(3)').css('animation', 'svg-2 1s forwards 1.2s');
            $('.bus-svg>img:nth-child(4)').css('animation', 'svg-2 1s forwards 1.5s');
            $('.bus-svg>img:nth-child(5)').css('animation', 'svg-2 1s forwards 1.8s');
            $('.bus-svg>img:nth-child(6)').css('animation', 'svg-2 1s forwards 2.1s');
            function write(){
                $('.bus-svg>img:nth-child(2)').addClass('write');
                $('.bus-svg>img:nth-child(3)').addClass('write');
                $('.bus-svg>img:nth-child(4)').addClass('write');
            }
            setTimeout(write, 2600)
        }
        if($(this).scrollTop() >= 2700){
            $('#footer').css('animation', 'h2b 2s forwards');
        }
    }
});