
const button     = document.querySelector("#container_icon_menu");
const title_menu = document.querySelector("#title_menu")


button.addEventListener("click",() =>{
    
 
    document.querySelector(".container_options").classList.toggle("click")
   
    
    title_menu.classList.toggle("title_menu")

});