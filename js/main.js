$(document).ready(function(){
    $('.home ').animate({
        width : 'auto',
        height : '0px'
    },2500,function(){
        $('.home').animate({
            height :'0%'
        },100,function(){
            // $('.home').css('background-color','#e7e8ff ')
            
        })
    })
})
$(document).ready(function(){
    $(".home .con").animate
    ({
        width:'-10px',
        height:'130px'
    },1700,function(){
        $('.corona-img').animate({
            width:'100%',
           height:'10px'
        },1000,function(){
            $('.corona-img').animate({
                height:'100vh'
            },2000,function(){
                $('.home .bt').animate({
                    // width:'100%',
                    // height:'100px'
                },800)
            })
        })
    })
})
let btn =document.querySelector (".btn11")
let div = document.querySelector("#body")
let p= document.querySelector(".prcontainer .im1 p")
let p2= document.querySelectorAll(".prcontainer .im2 p")
let p3= document.querySelector(".con h2")
let p4= document.querySelector(".con span h2")
let p5=document.querySelector(".b1 h6")
let p6=document.querySelector(".b2 h6")
let p7=document.querySelector(".b3 h6")
let p8=document.querySelector(".b1 h5")
let p9=document.querySelector(".b2 h5")
let p10=document.querySelector(".b3 h5")
let p1= document.getElementsByClassName("pr")
let h1 =document.querySelectorAll("h1")
let nh3 =document.querySelector("nav h3")
let ni =document.querySelector("nav button i")
let sec =document.querySelector('#news')
let sec1 =document.querySelector('#do')
let sec2 =document.querySelector('#treatment')
let sec3 =document.querySelector('#wash')
let sec4 =document.querySelector('.stcon')
let sec5 =document.querySelector('#Prevention')
let sec6 =document.querySelector('#Symptoms')
let sec7 =document.querySelector('#spread')
let sec8 =document.querySelector('#home')
let sec9=document.querySelector('nav')
console.log(sec9);
btn.onclick =function(){
    if (div.classList.contains("dark") ){
        div.classList.remove("dark")
        btn.innerText="Dark mood"
        btn.classList="btn btn-dark"
        p.style.color ="black"
        p1[0].style.color ="black"
        p1[1].style.color ="black"
        p2[0].style.color ="black"
        p2[1].style.color ="black"
        p2[2].style.color ="black"
        p3.style.color="#50658e"
        p4.style.color="#50658e"
        p5.style.color ="#50658e"
        p6.style.color ="#50658e"
        p7.style.color ="#50658e"
        p8.style.color ="#50658e"
        p9.style.color ="#50658e"
        p10.style.color ="#50658e"
        sec.style.backgroundColor=("#F7F9FE")
        sec1.style.backgroundColor=("#ddd")
        sec2.style.backgroundColor=("#2766bb")
        sec3.style.backgroundColor=("#F7F9FE")
        sec4.style.backgroundColor=("white")
        sec5.style.backgroundColor=("#F7F9FE")
        sec6.style.backgroundColor=("#F7F9FE")
        sec7.style.backgroundColor=("rgba(155, 72, 155, 0.6)")
        sec8.style.backgroundColor=("#F7F9FE")
        sec9.style.backgroundColor=("white")
        h1[0].style.color ="#50658e"
        h1[1].style.color ="#50658e"
        h1[2].style.color ="#50658e"
        h1[3].style.color ="#50658e"
        h1[4].style.color ="#50658e"
        h1[5].style.color ="#50658e"
        h1[6].style.color ="#50658e"
        h1[7].style.color ="#50658e"
        nh3.style.color ="#394B6C"
        ni.style.color="#222"
    }
    else{  
        div.classList.add("dark")
        btn.innerText="light mood"
        btn.classList="btn btn-light"
        p.style.color ="white"
        p1[0].style.color ="white"
        p1[1].style.color ="white"
        p2[0].style.color ="white"
        p2[1].style.color ="white"
        p2[2].style.color ="white"
        p3.style.color="#679946"
        p4.style.color="#679946"
        p5.style.color ="#679946"
        p6.style.color ="#679946"
        p7.style.color ="#679946"
        p8.style.color ="#679946"
        p9.style.color ="#679946"
        p10.style.color ="#679946"
        h1[0].style.color ="white"
        h1[1].style.color ="white"
        h1[2].style.color ="white"
        h1[3].style.color ="white"
        h1[4].style.color ="white"
        h1[5].style.color ="white"
        h1[6].style.color ="white"
        h1[7].style.color ="white"
        nh3.style.color ="beige"
        ni.style.color="#fff"
        sec.style.backgroundColor=("#222")
        sec1.style.backgroundColor=("#222")
        sec2.style.backgroundColor=("#222")
        sec3.style.backgroundColor=("#222")
        sec4.style.backgroundColor=("#222")
        sec5.style.backgroundColor=("#222")
        sec6.style.backgroundColor=("#222")
        sec7.style.backgroundColor=("#222")
        sec8.style.backgroundColor=("#222")
        sec9.style.backgroundColor=("#222")
    }
    
  
}