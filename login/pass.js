const pass_show = document.querySelector('.show-pass');

function pass_show_hide(event) {
    event.preventDefault();
    const passwordInput = document.querySelector('.pass_input');
    const image= document.querySelector('.im');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        image.src="hide.png";
        pass_show.classList.add("active");
    } else {
        passwordInput.type = "password";
        image.src="vision.png";
    }
}
pass_show.addEventListener('click', pass_show_hide);
