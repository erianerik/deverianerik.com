var i = 0;

var containerPrincipal = $(".conteudo-principal");
var containerAboutUs =  $(".container-about-us");
var skillContainer = $(".main-skills");

$(".prox-container").click(function() { 
    i++;

    if(i == 1) {
        containerPrincipal.hide();
        containerAboutUs.show();
    }else if(i == 2) {
        containerAboutUs.hide();
        skillContainer.show();
    } else if(i == 3) {
        $(".footer").css("display","flex");
        $(".prox-arrow").css("animation", "animation:rotateArrow 1s").addClass("rotate-arrow");
    } else if (i == 4 ) {
        $(".footer").hide();
        $(".prox-arrow").removeClass("rotate-arrow");
        skillContainer.hide();
        containerPrincipal.show();

        i -= i;
    }
})

$(".info-contact").click(function(){
    $(".contact").show().addClass("add-animation");
})

$(".contact-close").click(function(){
    $(".contact").hide();
})