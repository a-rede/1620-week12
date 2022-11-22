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

// Using 
const clickMeButton = document.querySelector(".click-me");

function handClickMeButton() {
    alert("something");
}; 

clickMeButton.addEventListener("click", handClickMeButton, {once:true});
//* Example 3 - Multiple Event Handlers