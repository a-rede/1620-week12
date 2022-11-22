//* Example 1 - JS and DOM Events

const clickMeButton = document.querySelector(".click-me");

clickMeButton.addEventListener("click", () => {
    alert('Something');
});

// clickMeButton.addEventListener("click", handClickMeButton);

// function handClickMeButton() {
//     alert("something");
// }; 
