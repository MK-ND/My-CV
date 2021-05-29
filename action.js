/* Clicked nav effect*/

$(".nav-item").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
})

/* Clicked Nav Action*/
const clickedNavItem= document.querySelectorAll(".tab")

function display(panelofIndex){
    clickedNavItem.forEach(function(node){
        node.style.display= "none";
    })
    clickedNavItem[panelofIndex].style.display="block";


}
display(0);