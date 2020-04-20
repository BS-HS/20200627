$(document).ready(function(){
    modalUi();
    $('.draw').sakura();
    $("img").lazyload({
        threshold : 300,
    });

    // Set the date we're counting down to
    var countDownDate = new Date("jun 27, 2020").getTime();

// Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24) + 2);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = "D - " + days + " day";

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
    $(window).load(function () {
        var headertop = $('.cont_box.main').innerHeight();
        var headertop01 = $('.cont_box.sub01').innerHeight();
        var headertop02 = $('.cont_box.sub02').innerHeight();
        var headertop03 = $('.cont_box.sub03').innerHeight();

        $('.lnb .main_link').on('click', function () {
            $('section').scrollTop(0);
        });

        $('.lnb .sub01_link').on('click', function () {
            $('section').scrollTop(headertop + 50);
        });

        $('.lnb .sub02_link').on('click', function () {
            $('section').scrollTop(headertop + headertop01 + 1);
        });

        $('.lnb .sub03_link').on('click', function () {
            $('section').scrollTop(headertop + headertop01 + headertop02 + 1);
        });
        $('.lnb .sub04_link').on('click', function () {
            $('section').scrollTop(headertop + headertop01 + headertop02 + headertop03);
        });
    });
    $('section').scroll(function () {
        var scrollValue = $('section').scrollTop();
        var headertop = $('.cont_box.main').innerHeight();
        var headertop01 = $('.cont_box.sub01').innerHeight();
        var headertop02 = $('.cont_box.sub02').innerHeight();
        var headertop03 = $('.cont_box.sub03').innerHeight();
        // var scrollValue2 = $('section').scrollHeight();

        if (scrollValue < 168){
            $('.dday').removeClass('fadeIn');
            // $('.dday').addClass('fadeOut');
            $('.dday').css({position : 'relative'});
        }
        if (scrollValue > 168){
            $('.dday').addClass('fadeIn');
            $('.dday').removeClass('fadeOut');
            $('.dday').css({position : 'fixed', top:0});
        }
        if (scrollValue < headertop){
            $('header').css({position : 'relative', top:0});
            $('.sub01').css({marginTop : 0});
            $('.lnb .main_link').addClass('on');
            $('.lnb .sub02_link').removeClass('on');
            $('.lnb .sub03_link').removeClass('on');
            $('.lnb .sub04_link').removeClass('on');
            $('.lnb .sub01_link').removeClass('on');
        }
        if (scrollValue > headertop/2){
            $('.sub01 .cont_title').addClass('animated fadeInDown');
            $('.sub01 .text').addClass('animated fadeInUp');
        }
        if (scrollValue > headertop){
            $('header').css({position : 'fixed', top:0});
            $('.sub01').css({marginTop : 40});
            $('.dday').css({position : 'relative', top:0});
            $('.sub01 .calendar').addClass('animated fadeInUp');
            $('.lnb .main_link').removeClass('on');
            $('.lnb .sub02_link').removeClass('on');
            $('.lnb .sub03_link').removeClass('on');
            $('.lnb .sub04_link').removeClass('on');
            $('.lnb .sub01_link').addClass('on');
        }
        if (scrollValue > headertop + headertop01 - (headertop01/2)){
            $('.sub02 .cont_title').addClass('animated fadeInDown');
            $('.sub02 .img_list li.ft').addClass('animated fadeInUp');
        }
        if (scrollValue > headertop + headertop01 - (headertop01/3)){
            $('.sub02 .img_list li.st').addClass('animated fadeInUp');
        }
        if (scrollValue > headertop + headertop01){
            $('.lnb .main_link').removeClass('on');
            $('.lnb .sub01_link').removeClass('on');
            $('.lnb .sub03_link').removeClass('on');
            $('.lnb .sub04_link').removeClass('on');
            $('.lnb .sub02_link').addClass('on');
            $('.sub02 .img_list li.lt').addClass('animated fadeInUp');
        }
        if (scrollValue > headertop + headertop01 + headertop02 - (headertop02/2)){
            $('.sub03 .cont_title h2').addClass('animated fadeInDown');
            $('.sub03 .cont_title p').addClass('animated fadeIn');
        }
        if (scrollValue > headertop + headertop01 + headertop02 - (headertop02/3)){
            $('.sub03 .map').addClass('animated fadeIn');
        }
        if (scrollValue > headertop + headertop01 + headertop02){
            $('.lnb .main_link').removeClass('on');
            $('.lnb .sub01_link').removeClass('on');
            $('.lnb .sub03_link').addClass('on');
            $('.lnb .sub04_link').removeClass('on');
            $('.lnb .sub02_link').removeClass('on');
        }
        if(scrollValue > headertop + headertop01 + headertop02 + headertop03 - (headertop03/2)){
            $('.sub04 .cont_title').addClass('animated fadeInDown');
        }
        if(scrollValue > headertop + headertop01 + headertop02 + headertop03 - (headertop03/3)){
            $('.lnb .main_link').removeClass('on');
            $('.lnb .sub01_link').removeClass('on');
            $('.lnb .sub03_link').removeClass('on');
            $('.lnb .sub04_link').addClass('on');
            $('.lnb .sub02_link').removeClass('on');
            $('.sub04 .contact_box li').addClass('animated fadeIn');
        }
    });

    var modal = $("#myModal"); //팝업 div

    $(".img_list li> a.slide-1").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(0, 0);
    });

    $(".img_list li> a.slide-2").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(1, 0);
    });
    $(".img_list li> a.slide-3").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(2, 0);
    });

    $(".img_list li> a.slide-4").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(3, 0);
    });

    $(".img_list li> a.slide-5").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(4, 0);
    });

    $(".img_list li> a.slide-6").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(5, 0);
    });

    $(".img_list li> a.slide-7").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(6, 0);
    });

    $(".img_list li> a.slide-8").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(7, 0);
    });

    $(".img_list li> a.slide-9").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(8, 0);
    });

    $(".img_list li> a.slide-10").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(9, 0);
    });

    $(".img_list li> a.slide-11").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(10, 0);
    });

    $(".img_list li> a.slide-12").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(11, 0);
    });
    $(".img_list li> a.slide-13").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(12, 0);
    });
    $(".img_list li> a.slide-14").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(13, 0);
    });
    $(".img_list li> a.slide-15").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(14, 0);
    });
    $(".img_list li> a.slide-16").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(15, 0);
    });
    $(".img_list li> a.slide-17").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(16, 0);
    });
    $(".img_list li> a.slide-18").on("click", function () {
        modal.show(); //팝업 열기
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            simulateTouch: false,
        });
        swiper.slideTo(17, 0);
    });

    $(".close").on("click", function () {

        modal.hide(); //팝업 닫기

    });

    window.addEventListener("hashchange", function(e) {
        $('.modal .close').trigger('click')
    })


});

function modalUi() {
    $('a.modalLoad').on('click',function(){
        var $self = $(this);
        var $thisrel = $self.attr('rel');
        var $target = $('#'+ $thisrel);

        // open and focusin
        $target.attr('tabindex', '0').fadeIn(250).focus();
        $target.css({ display: 'table' });
        $target.attr('class', 'modal open');
        // create sizing
        var layerHeight = $target.outerHeight();
        var layerWidth = $target.outerWidth();
        $target.css({
            marginLeft : -layerWidth/2,
            marginTop : -layerHeight/2
        });

        // create background
        createDim();

        // keydown focus repeat
        $target.find(".close").on('keydown', function(e){
            if(e.which=='9'){
                $target.attr('tabindex', '0').focus();
            }
        });

        // close and focusout
        $target.find(".close").on('click',function(e){
            e.preventDefault();
            $target.fadeOut(250);
            removeDim();
            $self.focus();
            $(this).off('click');
            $target.attr('class', 'modal');
            var isVisible = $target.is(':visible');
            var modalLength = $('.modal:visible').length;

            if (isVisible) {
                if (modalLength > 1) {
                    $target.fadeOut(250);
                } else {
                    $('.dim').fadeOut(250);
                }
            }
        });

        $target.find(".modalLoad").on('click',function(e){
            e.preventDefault();
            $target.fadeOut(250);
            $self.focus();
            var isVisible = $target.is(':visible');
            var modalLength = $('.modal:visible').length;

            if (isVisible) {
                if (modalLength > 1) {
                    $target.fadeOut(250);
                } else {
                    $('.dim').fadeOut(250);
                }
            }
        });

        $(document).on("keyup", function(e){
            if(e.which=='27'){
                $target.fadeOut(250);
                removeDim();
                $self.focus();
                $target.attr('class', 'modal');
            }
        });
    });
    $('table .modalLoad').on('dblclick',function(){
        var $self = $(this);
        var $thisrel = $self.attr('rel');
        var $target = $('#'+ $thisrel);

        // open and focusin
        $target.attr('tabindex', '0').fadeIn(250).focus();
        $target.css({ display: 'table' });
        $target.attr('class', 'modal open');
        // create sizing
        var layerHeight = $target.outerHeight();
        var layerWidth = $target.outerWidth();
        $target.css({
            marginLeft : -layerWidth/2,
            marginTop : -layerHeight/2
        });

        // create sizing
        // var layerHeight = $target.outerHeight();
        //         // var layerWidth = $target.outerWidth();
        //         // $target.css({
        //         //     marginLeft : -layerWidth/2,
        //         //     marginTop : -layerHeight/2
        //         // });

        // create background
        createDim();

        // keydown focus repeat
        $target.find(".close").on('keydown', function(e){
            if(e.which=='9'){
                $target.attr('tabindex', '0').focus();
            }
        });

        // close and focusout
        $target.find(".close").on('click',function(e){
            e.preventDefault();
            $target.fadeOut(250);
            removeDim();
            $self.focus();
            $(this).off('click');
            $target.attr('class', 'modal');
            var isVisible = $target.is(':visible');
            var modalLength = $('.modal:visible').length;

            if (isVisible) {
                if (modalLength > 1) {
                    $target.fadeOut(250);
                } else {
                    $('.dim').fadeOut(250);
                }
            }
        });

        $target.find(".modalLoad").on('click',function(e){
            e.preventDefault();
            $target.fadeOut(250);
            $self.focus();
            var isVisible = $target.is(':visible');
            var modalLength = $('.modal:visible').length;

            if (isVisible) {
                if (modalLength > 1) {
                    $target.fadeOut(250);
                } else {
                    $('.dim').fadeOut(250);
                }
            }
        });

        $(document).on("keyup", function(e){
            if(e.which=='27'){
                $target.fadeOut(250);
                removeDim();
                $self.focus();
                $target.attr('class', 'modal');
            }
        });
    });
}






