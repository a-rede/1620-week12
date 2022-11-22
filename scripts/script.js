//* Example 1 - JS and DOM Events

// const clickMeButton = document.querySelector(".click-me");

// clickMeButton.addEventListener("click", () => {
//     alert('Something');
// });

// clickMeButton.addEventListener("click", handClickMeButton);

// function handClickMeButton() {
//     alert("something");
// }; 

//* Example 2 - Remove Event Handler

// Moving removeEventListener inside the function
// const clickMeButton = document.querySelector(".click-me");

// function handClickMeButton() {
//     alert("something");
//     clickMeButton.removeEventListener("click", handClickMeButton);
// }; 

// clickMeButton.addEventListener("click", handClickMeButton);

// Using the 3 argument of addEventListnener (option)
// const clickMeButton = document.querySelector(".click-me");

// function handClickMeButton() {
//     alert("something");
// }; 

// clickMeButton.addEventListener("click", handClickMeButton, {once:true});

//* Example 3 - Multiple Event Handlers

// const clickMeButton = document.querySelector(".click-me");

// function handleClickMeButton(event) {
//     console.log(event)
//     alert("something");
// };

// function changeBackgroundColor() {
//     // document.body.style.backgroundColor = 'pink';
//     document.body.classList.add('pink');
// }; 

// function changeText() {
//     if (clickMeButton.textContent === 'Click Me!'){
//         clickMeButton.textContent = 'Clicked!';
//     } else if (clickMeButton.textContent === 'Clicked!') {
//         clickMeButton.textContent = 'Click Me!';
//     };
// };

// clickMeButton.addEventListener("click", handleClickMeButton, {once:true});
// clickMeButton.addEventListener("click", changeBackgroundColor);
// clickMeButton.addEventListener('click', changeText);

//* Example 4 - Event Object.target

const clickMeButton = document.querySelector(".click-me");

function handleClickMeButton(event) {
    alert("something");
};

function changeBackgroundColor() {
    // document.body.style.backgroundColor = 'pink';
    document.body.classList.add('pink');
}; 

function changeText() {
    if (clickMeButton.textContent === 'Click Me!'){
        clickMeButton.textContent = 'Clicked!';
    } else if (clickMeButton.textContent === 'Clicked!') {
        clickMeButton.textContent = 'Click Me!';
    };
};

function createAddButton () {
    const purpleBtn = document.createElement('button');
    purpleBtn.textContent = 'Purple';
    purpleBtn.addEventListener('mouseover', changeBGGreen)
    document.body.appendChild(purpleBtn);
};

function createParagraph () {
    const para = document.createElement('p');
    para.textContent = 'Content'; 
    para.addEventListener('mouseover', changeBGGreen)
    document.body.appendChild(para);
};

function changeBGGreen(event) {
    event.target.classList.add("green-background");
};

clickMeButton.addEventListener("click", handleClickMeButton, {once:true});
clickMeButton.addEventListener("click", changeBackgroundColor);
clickMeButton.addEventListener('click', changeText);
clickMeButton.addEventListener('click', createAddButton);
clickMeButton.addEventListener('click', createParagraph);