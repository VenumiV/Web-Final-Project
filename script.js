
const buttons = document.querySelectorAll(".flex button");
const btnFreelancers = document.querySelector(".btn-freelancer");
const btnOrg = document.querySelector(".btn-org");
const btnEveryO = document.querySelector(".btn-everyone")

function sent(text) {
    document.querySelector(".sent").textContent = text;
}



  document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.querySelector(".toggle ");
    const starterPrice = document.querySelector(".starter .price");
  
    togglebtn.addEventListener("click", () => {
      const checkbox = togglebtn.querySelector("input");
      if (checkbox.checked) {
        starterPrice.textContent = "$35"; 
      } else {
        starterPrice.textContent = "$29"; 
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.querySelector(".toggle ");
    const starterPrice = document.querySelector(".agency .price");
  
    togglebtn.addEventListener("click", () => {
      const checkbox = togglebtn.querySelector("input");
      if (checkbox.checked) {
        starterPrice.textContent = "$49"; 
      } else {
        starterPrice.textContent = "$55";
      }
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.querySelector(".toggle ");
    const starterPrice = document.querySelector(".team .price");
  
    togglebtn.addEventListener("click", () => {
      const checkbox = togglebtn.querySelector("input");
      if (checkbox.checked) {
        starterPrice.textContent = "$79"; 
      } else {
        starterPrice.textContent = "$85"; 
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.querySelector(".toggle1 ");
    const starterPrice = document.querySelector(" .price1");
  
    togglebtn.addEventListener("click", () => {
      const checkbox = togglebtn.querySelector("input");
      if (checkbox.checked) {
        starterPrice.textContent = "$35"; 
      } else {
        starterPrice.textContent = "$29"; 
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.querySelector(".toggle1 ");
    const starterPrice = document.querySelector(" .price1");
  
    togglebtn.addEventListener("click", () => {
      const checkbox = togglebtn.querySelector("input");
      if (checkbox.checked) {
        starterPrice.textContent = "$35"; 
      } else {
        starterPrice.textContent = "$29"; 
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.querySelector(".toggle1 ");
    const starterPrice = document.querySelector(" .price2");
  
    togglebtn.addEventListener("click", () => {
      const checkbox = togglebtn.querySelector("input");
      if (checkbox.checked) {
        starterPrice.textContent = "$49"; 
      } else {
        starterPrice.textContent = "$55";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.querySelector(".toggle1 ");
    const starterPrice = document.querySelector(" .price3");
  
    togglebtn.addEventListener("click", () => {
      const checkbox = togglebtn.querySelector("input");
      if (checkbox.checked) {
        starterPrice.textContent = "$79"; 
      } else {
        starterPrice.textContent = "$85"; 
      }
    });
  });

  const carousel = document.getElementById("carousel");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  let currentIndex = 0;
  const totalCards = 4;      
  const visibleCards = 2;     
  const totalSlides = Math.ceil(totalCards / visibleCards); 

  function updateCarousel() {
    const slideWidth = 100; 
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 1; 
    }
    updateCarousel();
  });