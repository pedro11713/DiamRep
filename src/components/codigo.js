
let slideIndex = 1;  
function changeImage() {
let img = document.getElementById("festivalImg")

    img.addEventListener("mouseover", function() {
    img.style.opacity = "0";
    });

    img.addEventListener("mouseout", function() {
    img.style.opacity = "1";
    });
}

document.addEventListener("DOMContentLoaded",changeImage());


function validarTexto(event) {
    event.preventDefault(); 
    
    
    let textarea = document.getElementById("comment");
    let texto = document.getElementById("comment").value.toLowerCase();
    let palavrasProibidas = ["abécula", "abentesma", "achavascado", "alimária", "andrajoso", "barregã", "biltre", "cacóstomo", "cuarra", "estólido", "estroso", "estultilóquio", "nefelibata", "néscio", "pechenga", "sevandija", "somítico", "tatibitate", "xexé", "cheché", "xexelento"];
    
    for (let palavra of palavrasProibidas) {
        if (texto.includes(palavra)) {
            alert(`Palavra proibida detectada: "${palavra}". Remova antes de enviar.`);
            textarea.value="";
            return false;  
        }
    }
    alert(`Comentario aceite`);
    document.location.href= "/foiAceite.html";  // Cambia la URL a la página de destino

    return true;

    
}

document.addEventListener("DOMContentLoaded",validarTexto());

showSlides(slideIndex);

// Mostrar el primer slide al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length > 0) {
        slides[0].style.display = "block";
    }
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
