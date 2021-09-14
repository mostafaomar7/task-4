$(document).ready(function(){
    $('.home ').animate({
        width : 'auto',
        height : '10px'
    },5000,function(){
        $('.home').animate({
            height :'100%'
        },100,function(){
            $('.home').css('background-color','#e7e8ff ')
            
        })
    })
})
$(document).ready(function(){
    $(".home .con").animate({
        width:'-10px',
        height:'130px'
    },2000,function(){
        $('.corona-img').animate({
            width:'100%',
           height:'10px'
        },function(){
            $('.corona-img').animate({
                height:'100vh'
            },6000,function(){
                $('.home .bt').animate({
                    width:'100%',
                    height:'100px'
                },1000)
            })
        })
    })
})

