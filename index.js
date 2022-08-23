const paragraph = document.querySelector("p");
paragraph.addEventListener("click", () => {
  console.log("You are clicking the first paragraph on the page!");
});

// const buttons = document.querySelectorAll("button");
// for (let button of buttons) {
//   button.addEventListener("click", () => {
//     console.log("A button was clicked!");
//   });
// }

// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//   li.addEventListener("click", () => {
//     const ol = document.querySelector("ol");
//     const newLi = document.createElement("li");
//     newLi.textContent = "Click me to make more!";
//     ol.append(newLi);
//   });
// }

// const heading = document.querySelector("h1");
// heading.addEventListener("click", (event) => {
//   console.log("event.type:", event.type);
//   console.log("event.target.textContent:", event.target.textContent);
//   console.log(event);
// });
