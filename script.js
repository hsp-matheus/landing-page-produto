function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensagem enviada!");
});
