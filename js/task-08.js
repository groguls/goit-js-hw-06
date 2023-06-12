
const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();

    const {elements: 
        {email: 
            {value: email}, 
        password: 
            {value: password}
        }
    } = event.currentTarget;

    if (email === "" || password === ""){
        return alert("Будь ласка, заповніть усі поля форми");
    };

    const formData = {
        email,
        password,
    };

    console.log(formData);

    event.currentTarget.reset();
};