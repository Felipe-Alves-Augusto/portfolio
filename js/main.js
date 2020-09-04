$(function(){

 /* slider */

    var amt;
    var maxIndex = Math.ceil($('slider-projetos').length / 1) - 1;
    var atual = 0;


    initSlider();
    modal();
    clickArrow();
    menuDinamico();
    menuMobile();

 
    function initSlider(){

        amt = $('.slider-projetos').length;

        console.log()

        var sizeBox = 100 / amt;
        var sizeContainer = 100 * amt;

        $('.slider-projetos').css('width', sizeBox+'%');
        $('.scroll-wraper').css('width', sizeContainer+'%');

    }
 
/*************************************SLIDER AUTOMATICO************************** 
    alterar()
    function alterar(){

        setInterval(function(){

            atual++
            if(atual == amt){
                atual = 0
            }

            goSlider(atual);

        },2000)
    }
    

    function goSlider(atual){

        var offsetX = $('.slider-projetos').eq(atual).offset().left - $('.scroll-wraper').offset().left
        $('.scroll-equipe').animate({'scrollLeft':offsetX})

    }
    */
    

  
    function clickArrow(){

        $('#arrow-right').click(function(){

           
            if(amt > maxIndex){

                atual++
                var ellOff = $('.slider-projetos').eq(atual*1).offset().left - $('.scroll-wraper').offset().left
                $('.scroll-equipe').animate({'scrollLeft': ellOff});
                
            };

            $(".bullets span").css("background-color", "#ccc");
            $(".slider-projetos").eq(atual).stop().fadeIn(2000);
            $(".bullets span").eq(atual).css("background-color", "#000");
            


        })

        $('#arrow-left').click(function(){

            if(amt > 0){
                atual--
                var ellOff = $('.slider-projetos').eq(atual*1).offset().left - $('.scroll-wraper').offset().left
                $('.scroll-equipe').animate({'scrollLeft': ellOff});
            }

            
            $(".bullets span").css("background-color", "#ccc");
            $(".slider-projetos").eq(atual).stop().fadeIn(2000);
            $(".bullets span").eq(atual).css("background-color", "#000");

        })


        
    }

   
    /* menu dinamico */

    function menuDinamico(){

        $('.menu-list a').click(function(){

            var href = $(this).attr('href');
    
            var openSet = $(href).offset().top;
    
            $('html,body').animate({'scrollTop':openSet});
    
            return false
    
        })
    }

    // menu mobile
    function menuMobile(){

        $('.logo-menu').click(function(){

            $('.menu-mobile').slideToggle();

        })

    }
    
    
    //modal
    
    function modal(){
        $('.menu-list ,#open-desktop').click(function(){

            $('.contato').fadeIn();

            $('.close').click(function(){

                $('.contato').fadeOut();

            })
    
        })
    }

    cliqueSlider();
    function cliqueSlider(){
        $(".bullets span").click(function(){
            $(".slider-projetos").eq(atual)
            atual = $(this).index();
            $(".slider-projetos").eq(atual)
            $(".bullets span").css("background-color", "#ccc");
            $(this).css("background-color", "#000");
            
        });
    }




})