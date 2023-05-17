const btnEl = document.querySelector(".btn")
const inputEL = document.getElementById("input")
const copyIconEl = document.querySelector(".fa-copy")
const alertEl = document.querySelector(".alert-container")

btnEl.addEventListener("click", ()=>{
    createPassword()
})

copyIconEl.addEventListener("click", ()=>{
    copyPassword();
    if(inputEL.value) {
        alertEl.classList.remove("active");
    setTimeout(()=>{
        alertEl.classList.add("active")
    }, 2000);
    }
    
});

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLenght = 14;
    let password = ""

    for (let index = 0; index < passwordLenght; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }

    inputEL.value = password;
    alertEl.innerText = password + "  copied!";
}
    
   function copyPassword(){
        // inputEL.select();
        inputEL.setSelectionRange(0,9999);   //for mobile
        navigator.clipboard.writeText(inputEL.value);
        
    }
    