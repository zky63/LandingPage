const reqButton = document.querySelector('#inputButton');
const input = document.querySelector('#email');
const errorText = document.querySelector('#errorText');

reqButton.addEventListener('click', function(){
    const inputValue = input.value;
    console.log(inputValue);
    if(!inputValue){
        errorText.innerText = 'Oops! Please add your email';
        errorText.style.color = 'red';
    }
    else if (!(inputValue.includes('@')) && inputValue){
        errorText.innerText = 'Oops! Please check your email';
        errorText.style.color = 'red';
    }
    else if (inputValue && inputValue.includes('@')) {
        errorText.innerText = '.';
        errorText.style.color = 'black';
    }
})




