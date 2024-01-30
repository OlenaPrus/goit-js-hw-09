const form = document.querySelector('.feedback-form');
const userEmail = form.querySelector("input");
const userMessage = form.querySelector("textarea");

const feedback = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

function setValue({ email, message }) {
    userEmail.value = email || "";
    userMessage.value = message || "";
}

!feedback ? feedback = { email: "", message: "" } : setValue(feedback);

form.addEventListener('input', (e) => {
    const element = e.target.name;
    const value = e.target.value;
    feedback[element] = value;

    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
});

form.addEventListener('submit', (e) => {
    if (userEmail.value && userMessage.value) {
        e.preventDefault();

        localStorage.removeItem("feedback-form-state");
        userEmail.value = '';
        userMessage.value = '';

        console.log(feedback);
    } else {
        alert("All inputs must be filled!");
    }
});
