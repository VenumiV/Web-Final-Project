
const buttons = document.querySelectorAll(".btn-option");
const btnFreelancers = document.querySelector(".btn-freelance");
const btnOrg = document.querySelector(".btn-org");
const btnEveryO = document.querySelector(".btn-everyone")

const heading = document.querySelector(".sent");


btnEveryO.addEventListener("click", () => {
    heading.textContent = "Kickstart with your project with those goals";
});

btnFreelancers.addEventListener("click", () => {
    btn
    heading.textContent = "Tech tools to kickstart freelance life";
   
  });

  btnOrg.addEventListener("click", () => {
    heading.textContent = "Share your plan and clarify project risk";
  
  });

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
  
      buttons.forEach((b) => {
        b.classList.remove("bg-indigo-500");
        b.classList.add("bg-slate-600");
      });
  
     
      btn.classList.remove("bg-slate-600");
      btn.classList.add("bg-indigo-500");
  
     
      if (btn.classList.contains("btn-everyone")) {
        heading.textContent = "Kickstart your project with these tools";
      } else if (btn.classList.contains("btn-freelance")) {
        heading.textContent = "Tech tools to kickstart freelance life";
      } else if (btn.classList.contains("btn-org")) {
        heading.textContent = "Share your plan and clarify project risk";
      }
    });
  });


function sent(text) {
    document.querySelector(".sent").textContent = text;
}

document.addEventListener("DOMContentLoaded", () => {
   
    const toggle1 = document.querySelector(".toggle");
    if (toggle1) {
      const checkbox1 = toggle1.querySelector("input");
  
      toggle1.addEventListener("click", () => {
        document.querySelector(".starter .price").textContent = checkbox1.checked ? "$35" : "$29";
        document.querySelector(".agency .price").textContent  = checkbox1.checked ? "$49" : "$55";
        document.querySelector(".team .price").textContent    = checkbox1.checked ? "$79" : "$85";
      });
    }
  
    
    const toggle2 = document.querySelector(".toggle1");
    if (toggle2) {
      const checkbox2 = toggle2.querySelector("input");
  
      toggle2.addEventListener("click", () => {
        document.querySelector(".price1").textContent = checkbox2.checked ? "$35" : "$29";
        document.querySelector(".price2").textContent = checkbox2.checked ? "$49" : "$55";
        document.querySelector(".price3").textContent = checkbox2.checked ? "$79" : "$85";
      });
    }
  });
  

  const carousel = document.getElementById("carousel");
  const cards = carousel.children;
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  let currentIndex = 0;
  const totalCards = 4;      
  const visibleCards = 2;     
  const totalSlides = Math.ceil(totalCards / visibleCards); 

  function updateCarousel() {
    const offsetLeft = cards[currentIndex * visibleCards].offsetLeft;
    carousel.style.transform = `translateX(-${offsetLeft}px)`;

    prevBtn.disabled = currentIndex == 0;
    prevBtn.classList.toggle("opacity-50", prevBtn.disabled);

    nextBtn.disabled = currentIndex === totalSlides - 1;
    nextBtn.classList.toggle("opacity-50", nextBtn.disabled);
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateCarousel();
    } 
    
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    } 
    
  });

  

  updateCarousel();