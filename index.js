const navBar = document.getElementById("nav-bar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links")
const closeButton = document.getElementById("close-menu");
const getQuoteBtn = document.getElementById("get-quote");
const wrapper = document.getElementById("wrapper");
const popupContainer = document.getElementById("popup-container");
const closePopupBtn = document.getElementById("close-popup");
const popupForm = document.getElementById("popup-form");
const popupSubmitBtn = document.getElementById("popup-submit");
const userForm = document.getElementById("user-signup");


function handleClick(e){
    /*the second condition allows the click event to trigge even if one of the bars in 
    the hamburger menu is clicked*/
    if(e.target === hamburger || e.target.classList.contains("bars")){
        if(window.innerWidth <= 400){
            navLinks.style.left = "20%";
        }
        else{
            navLinks.style.left = "50%";
        }
    }
    else if(e.target === closeButton){
        navLinks.style.left = "100%";
    }
    else if(e.target === getQuoteBtn){
        popupContainer.style.display = "flex";
        wrapper.style.maxHeight = "100vh";
        wrapper.style.overflow = "hidden";
    }
}

navBar.addEventListener("click", handleClick);

closePopupBtn.addEventListener("click", function(){
    popupContainer.style.display = "none";
    wrapper.style.maxHeight = "auto";
    wrapper.style.overflow = "visible";
})

popupForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nameInput = document.getElementById("firstName");
    const emailInput = document.getElementById("email");
    const cityInput = document.getElementById("city");
    let errorMessages = [];

    if(nameInput.value === ""){
        nameInput.style.borderColor = "crimson";
        errorMessages.push("Enter Name");
    }
    else{
        nameInput.style.borderColor = "#000";
    }
    if(emailInput.value === ""){
        emailInput.style.borderColor = "crimson";
        errorMessages.push("Enter email");
    }
    else{
        emailInput.style.borderColor = "#000";
    }
    if(cityInput.value === ""){
        cityInput.style.borderColor = "crimson";
        errorMessages.push("Enter your city");
    }
    else{
        cityInput.style.borderColor = "#000";
    }

    if(!errorMessages.length){
        nameInput.disabled = true;
        emailInput.disabled = true;
        cityInput.disabled = true;
        popupSubmitBtn.innerText = "Submitted";
        popupSubmitBtn.disabled = true;
    }
})

if(userForm){
    userForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const nameInput = document.getElementById("userName");
        const emailInput = document.getElementById("userEmail");
        const submitBtn = document.getElementById("form-submit");
        let errorMessages = [];
    
        if(nameInput.value === ""){
            nameInput.style.borderColor = "crimson";
            errorMessages.push("Enter Name");
        }
        else{
            nameInput.style.borderColor = "#000";
        }
        if(emailInput.value === ""){
            emailInput.style.borderColor = "crimson";
            errorMessages.push("Enter email");
        }
        else{
            emailInput.style.borderColor = "#000";
        }
        if(!errorMessages.length){
            nameInput.disabled = true;
            emailInput.disabled = true;
            submitBtn.innerText = "Submitted";
            submitBtn.disabled = true;
        }
    })
}


