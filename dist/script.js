let button = document.querySelector('.btn');

function live() {
    window.location.replace("../login/login.html");
}

// Attach the event listener to the button
button.addEventListener('click', live);

let inp = document.querySelector(".inpt");
function input(event){
    if(inp.value == "Smartphone" && event.key === "Enter"){
        window.location.replace("../smartphone/smartphone.html");
        event.preventDefault();
    }
}
