$(document).ready(function(){
    modalUi();
    $('.draw').sakura();
    // $("img").lazyload({
    //     threshold : 300,
    // });

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
        document.getElementById("demo2").innerHTML = "D - Day  " + days ;

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
            document.getElementById("demo2").innerHTML = "EXPIRED";
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
            $('section').scrollTop(headertop + headertop01 + headertop02 + headertop03 + 50);
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
            $('.scroll_icon').removeClass('fadeOut');
        }
        if (scrollValue > 168){
            $('.dday').addClass('fadeIn');
            $('.dday').removeClass('fadeOut');
            $('.dday').css({position : 'fixed', top:0});
            $('.scroll_icon').addClass('fadeOut');
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
            $('.sub01 .dday2').addClass('animated fadeInUp');
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
        if (scrollValue > headertop + headertop01 - 50){
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
        if (scrollValue > headertop + headertop01 + headertop02 - 50){
            $('.lnb .main_link').removeClass('on');
            $('.lnb .sub01_link').removeClass('on');
            $('.lnb .sub03_link').addClass('on');
            $('.lnb .sub04_link').removeClass('on');
            $('.lnb .sub02_link').removeClass('on');
        }
        if(scrollValue > headertop + headertop01 + headertop02 + headertop03 - (headertop03/2)){
            $('.sub04 .cont_title').addClass('animated fadeInDown');
        }
        if(scrollValue > headertop + headertop01 + headertop02 + headertop03){
            $('.lnb .main_link').removeClass('on');
            $('.lnb .sub01_link').removeClass('on');
            $('.lnb .sub03_link').removeClass('on');
            $('.lnb .sub04_link').addClass('on');
            $('.lnb .sub02_link').removeClass('on');
            $('.sub04 .contact_box li').addClass('animated fadeIn');
        }
    });

    // var modal = $("#myModal"); //팝업 div

    var modal = {
        open : function(){
            $('#myModal').show();
        },
        close : function(){
            $('#myModal').hide();
        }
    };

    $(document).on('click', '.modal .close', function(){
        window.history.back();
    });


    $(document).on('click', '.img_list li > button', function(){
        window.history.pushState({},'modal', '/modal');
        modal.open();
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        if($(this).hasClass('slide-1')){
            swiper.slideTo(0, 0);
            swiper.update();
        } if($(this).hasClass('slide-2')){
            swiper.slideTo(1, 0);
            swiper.update();
        } if($(this).hasClass('slide-3')){
            swiper.slideTo(2, 0);
            swiper.update();
        } if($(this).hasClass('slide-4')){
            swiper.slideTo(3, 0);
            swiper.update();
        }if($(this).hasClass('slide-5')){
            swiper.slideTo(4, 0);
            swiper.update();
        }if($(this).hasClass('slide-6')){
            swiper.slideTo(5, 0);
            swiper.update();
        }if($(this).hasClass('slide-7')){
            swiper.slideTo(6, 0);
            swiper.update();
        }if($(this).hasClass('slide-8')){
            swiper.slideTo(7, 0);
            swiper.update();
        }if($(this).hasClass('slide-9')){
            swiper.slideTo(8, 0);
            swiper.update();
        }if($(this).hasClass('slide-10')){
            swiper.slideTo(9, 0);
            swiper.update();
        }if($(this).hasClass('slide-11')){
            swiper.slideTo(10, 0);
            swiper.update();
        }if($(this).hasClass('slide-12')){
            swiper.slideTo(11, 0);
            swiper.update();
        }if($(this).hasClass('slide-13')){
            swiper.slideTo(12, 0);
            swiper.update();
        }if($(this).hasClass('slide-14')){
            swiper.slideTo(13, 0);
            swiper.update();
        }if($(this).hasClass('slide-15')){
            swiper.slideTo(14, 0);
            swiper.update();
        }if($(this).hasClass('slide-16')){
            swiper.slideTo(15, 0);
            swiper.update();
        }if($(this).hasClass('slide-17')){
            swiper.slideTo(16, 0);
            swiper.update();
        }if($(this).hasClass('slide-18')){
            swiper.slideTo(17, 0);
            swiper.update();
        }
    });
    window.onpopstate = history.onpushstate = function(e) {
        if(window.location.href.split('/').pop().indexOf('modal')===-1){ // 마지막 segment가 cards라면 모달이 아닌 리스트인 상태이어야한다.
            modal.close(); // 현재의 모달을 닫는다.
        }
    }



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






