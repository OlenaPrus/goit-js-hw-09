
const form = document.querySelector('.feedback-form');
const local = 'feedback-form-state';

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
    const email = form.querySelector("input").value.trim();
    const message = form.querySelector("textarea").value.trim();

  if (email !== '' && message !== '') {
    const userData = {
      userEmail: email,
      userMessage: message,
    };
    console.log(userData);
    } else {
        alert('All inputs must be filled!');
    }

   form.reset();

   localStorage.removeItem(local);
});

form.addEventListener('input', (e) => {
    const { email, message } = e.currentTarget.elements;
    const userData = {
        userEmail: email.value.trim(),
        userMessage: message.value.trim(),
      };
      localStorage.setItem(local, JSON.stringify(userData));
    });

function renderPage() {
    const lsData = localStorage.getItem(local);
        if (lsData) {
        const userData = JSON.parse(lsData);
        const { email, message } = userData;
        
        const { email: emailInput, message: messageInput } = form.elements;
        emailInput.value = email;
        messageInput.value = message;
        }
    }