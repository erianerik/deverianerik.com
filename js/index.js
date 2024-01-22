let numberPage = 0;

const containerPrincipal = $(".conteudo-principal");
const containerAboutUs = $(".container-about-us");
const skillContainer = $(".main-skills");

const page = {
    "index": 1,
    "aboutMe": 2,
    "skills": 3,
    "footer": 4
}

$(".prox-container").click(function () {
    numberPage++;

    if (numberPage == page.index) {
        containerPrincipal.hide();
        containerAboutUs.show();
        return;
    }

    if (numberPage == page.aboutMe) {
        containerAboutUs.hide();
        skillContainer.show();
        return;
    }

    if (numberPage == page.skills) {
        $(".footer").css("display", "flex");
        $(".prox-arrow").css("animation", "animation:rotateArrow 1s").addClass("rotate-arrow");
        return;
    }

    if (numberPage == page.footer) {
        $(".footer").hide();
        $(".prox-arrow").removeClass("rotate-arrow");
        skillContainer.hide();
        containerPrincipal.show();
        numberPage -= numberPage;
        return;
    }
})

$(".info-contact").click(function () {
    $(".contact").show().addClass("add-animation");
})

$(".contact-close").click(function () {
    $(".contact").hide();
})