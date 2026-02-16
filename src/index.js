import homepage from "./homepage.js";
import menu from "./menu.js";
import contact from "./contact.js";

function tab(){
    const navButtons = document.querySelectorAll("nav button");
    const firstBtn = navButtons[0]; 
    firstBtn.textContent = "Home";
    firstBtn.id = "homepage";
    const secondBtn = navButtons[1];
    secondBtn.textContent = "Menu";
    secondBtn.id = "menu";
    const thirdBtn = navButtons[2];
    thirdBtn.textContent = "Contact";
    thirdBtn.id = "contact";
    
    navButtons.forEach((btn) => {
        
        btn.addEventListener("click", () => {
            const content = document.querySelector('#content');
            content.innerHTML = "";
            if (btn.id === "homepage"){
                homepage()
            } else if (btn.id === "menu"){
                menu()
            } else if (btn.id === "contact") {
                contact()
            }
        });
    });
        

}

tab()

homepage()

