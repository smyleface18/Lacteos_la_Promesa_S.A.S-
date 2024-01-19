
 /*///////////////// //////////  click icon menu  ///////////////////////*/




const button     = document.querySelector("#container_icon_menu");
const title_menu = document.querySelector("#title_menu");


button.addEventListener("click",() =>{
    
 
    document.querySelector(".container_options").classList.toggle("click");
   
    
    title_menu.classList.toggle("click");

});






  /*///////////////// //////////  click hipervinculo ///////////////////////*/


  const hipervinculo = [...document.querySelectorAll(".hipervinculo")];


    for (let index = 0; index < hipervinculo.length; index++) {
        var element = hipervinculo[index];
        console.log("entro")
        element.addEventListener("click",()=>{

            document.querySelector(".container_options").classList.toggle("click");
            title_menu.classList.toggle("click");


        });

        
    }


/*///////////////// //////////  slider ///////////////////////*/

  function calc_width(width){
    var value = 0;
    
      if (width <= 560){
         value = 1;
      }
      else if (width <= 1000){
         value = 2;
      }
      else {
        value = 3;
     }
     return value;
  }

  var perview = calc_width(screen.width);

const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: perview,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
