// // Function to initialize the search bar functionality
// function initializeSearchBar() {
//     // Get the search bar input element
//     const searchBar = document.getElementById("history-search-bar");

//     // Get all history list items
//     const historyList = document.querySelectorAll("ol li");

//     if (!searchBar || historyList.length === 0) {
//         console.error("Search bar or history list items not found");
//         return;
//     }

//     // Add an input event listener to the search bar
//     searchBar.addEventListener("input", () => {
//         const keyword = searchBar.value.toLowerCase().trim();

//         // Iterate over all history items
//         historyList.forEach((item) => {
//             // Find the title element inside the current list item
//             const titleElement = item.querySelector("div[title]");

//             if (titleElement) {
//                 // Get the value of the title attribute
//                 const title = titleElement.getAttribute("title").toLowerCase();

//                 // Show or hide the list item based on the match
//                 if (title.includes(keyword)) {
//                     item.style.display = "block"; // Show the matching item
//                 } else {
//                     item.style.display = "none"; // Hide the non-matching item
//                 }
//             }
//         });
//     });
// }

// // Wait for the DOM to fully load before initializing
// document.addEventListener("DOMContentLoaded", () => {
//     initializeSearchBar();
// });
