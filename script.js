

// Select buttons (make sure you use the correct selectors)
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
        starterPrice.textContent = "$35"; // yearly
      } else {
        starterPrice.textContent = "$29"; // monthly
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.querySelector(".toggle ");
    const starterPrice = document.querySelector(".agency .price");
  
    togglebtn.addEventListener("click", () => {
      const checkbox = togglebtn.querySelector("input");
      if (checkbox.checked) {
        starterPrice.textContent = "$49"; // yearly
      } else {
        starterPrice.textContent = "$55"; // monthly
      }
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.querySelector(".toggle ");
    const starterPrice = document.querySelector(".team .price");
  
    togglebtn.addEventListener("click", () => {
      const checkbox = togglebtn.querySelector("input");
      if (checkbox.checked) {
        starterPrice.textContent = "$79"; // yearly
      } else {
        starterPrice.textContent = "$85"; // monthly
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.querySelector(".toggle1 ");
    const starterPrice = document.querySelector(" .price1");
  
    togglebtn.addEventListener("click", () => {
      const checkbox = togglebtn.querySelector("input");
      if (checkbox.checked) {
        starterPrice.textContent = "$35"; // yearly
      } else {
        starterPrice.textContent = "$29"; // monthly
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.querySelector(".toggle1 ");
    const starterPrice = document.querySelector(" .price1");
  
    togglebtn.addEventListener("click", () => {
      const checkbox = togglebtn.querySelector("input");
      if (checkbox.checked) {
        starterPrice.textContent = "$35"; // yearly
      } else {
        starterPrice.textContent = "$29"; // monthly
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.querySelector(".toggle1 ");
    const starterPrice = document.querySelector(" .price2");
  
    togglebtn.addEventListener("click", () => {
      const checkbox = togglebtn.querySelector("input");
      if (checkbox.checked) {
        starterPrice.textContent = "$49"; // yearly
      } else {
        starterPrice.textContent = "$55"; // monthly
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.querySelector(".toggle1 ");
    const starterPrice = document.querySelector(" .price3");
  
    togglebtn.addEventListener("click", () => {
      const checkbox = togglebtn.querySelector("input");
      if (checkbox.checked) {
        starterPrice.textContent = "$79"; // yearly
      } else {
        starterPrice.textContent = "$85"; // monthly
      }
    });
  });



  

  