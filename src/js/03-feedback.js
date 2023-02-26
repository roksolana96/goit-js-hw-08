import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea')
const email = document.querySelector('input');

populateTextarea();

form.addEventListener('submit', onFormSubmit);
email.addEventListener('input', throttle(onTextInput, 500));
textarea.addEventListener('input', throttle(onTextInput, 500));

// Виписуємо 'feedback-form-state' та input в localStorage
function onTextInput (event){
    localStorage.setItem('feedback-form-state', JSON.stringify({
        email: email.value,
        message: textarea.value,
      })
    );
}

// Виводимо у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Під час сабміту форми очищуй сховище і поля форми
function onFormSubmit (event){
    event.preventDefault();

    if (email.value === '' || textarea.value === '') {
        return alert('Warning! All fields are not filled!');   
    };

    console.log({
        email: email.value,
        message: textarea.value,
      });
    
    localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();


};


// Збережені паля з данними після перезавантаження сторінки
function populateTextarea(){
    const saveMessage = localStorage.getItem('feedback-form-state');
        if(saveMessage) {
            const textForms = JSON.parse(saveMessage);
            email.value = textForms.email;
            textarea.value = textForms.message;
        };

};









// import throttle from 'lodash.throttle';


// const form = document.querySelector('.feedback-form');
// // const textarea = document.querySelector('textarea')
// const email = document.querySelector('input');

// const formData = {};
// populateTextarea();

// form.addEventListener('submit', onFormSubmit);
// email.addEventListener('input', throttle(onTextInput, 500));

// form.addEventListener('input', event => {
//     formData[event.target.name] = event.target.value;
//     localStorage.setItem('feedback-form-state', JSON.stringify(formData));
//     // console.log(formData);
// })

// function onFormSubmit (event){
//     event.preventDefault();
//     // console.log('Send your message')
//     event.currentTarget.reset();
//     localStorage.removeItem('feedback-form-state');
    
// }

// function onTextInput (event){
//     const message = event.target.value;
// localStorage.setItem('feedback-form-state', message)
// }

// function populateTextarea(){
//     const saveMessage = localStorage.getItem('feedback-form-state');

//     if(saveMessage) {
//         console.log(saveMessage);
//         email.value = saveMessage;
//     }
    
// };