// content.js

// Ensure smooth transitions for background and font changes
document.body.style.transition = "background-color 0.5s ease, font-family 0.5s ease";

// State variable to track the visibility of <ol> elements
let olHidden = false; // Track whether ol elements are hidden or not

function injectHoverStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Hover animation for divs with the correct class */
        .no-draggable.group.relative.rounded-lg.active\\:opacity-90.hover\\:bg-token-sidebar-surface-secondary {
            transition: transform 0.3s ease, background-color 0.3s ease, border-radius 0.3s ease, margin-left 0.3s ease;
            transform-origin: center center;
        }

        /* Hover effect for parent div */
        .no-draggable.group.relative.rounded-lg.active\\:opacity-90.hover\\:bg-token-sidebar-surface-secondary:hover {
            transform: scale(1.05); /* Slightly enlarge on hover */
            overflow: visible;
            background-color: rgba(255, 255, 255, 0.8);
            white-space: normal;
            color: black; /* Set text color to black */
            font-weight: 600;
            border-radius: 16px; /* Add rounded corners */
            margin-left: 8px; /* Reduce left margin */
        }

        /* Optional: Add styling for child elements if required */
        .no-draggable.group.relative.rounded-lg.active\\:opacity-90.hover\\:bg-token-sidebar-surface-secondary:hover .relative.grow.overflow-hidden.whitespace-nowrap {
            white-space: normal;
            padding: 5px;
            padding-left: 2px; /* Reduce left-side padding */
            border-radius: 4px;
        }
    `;
    document.head.appendChild(style);
    console.log("Updated hover styles injected for the correct div.");
}



// Function to change the background color of the body and the target div
function applyBackgroundColor(color) {
    // Change the body's background color
    document.body.style.backgroundColor = color;

    // Change the background color of the target div
    const targetDiv = document.querySelector(
        ".draggable.no-draggable-children.sticky.top-0.p-3.mb-1\\.5.flex.items-center.justify-between.z-10.h-header-height.font-semibold.bg-token-main-surface-primary.max-md\\:hidden"
    );

    if (targetDiv) {
        targetDiv.style.backgroundColor = color;
        targetDiv.style.transition = "background-color 0.5s ease"; // Smooth transition for the div
        console.log("Background color applied to target div:", color);
    } else {
        console.error("Target div for background color not found.");
    }
}

// Function to apply a font style
function applyFontStyle(font) {
    document.body.style.fontFamily = font;
    console.log(`Font applied: ${font}`);
}

// Function to apply the animated gradient to specific text
function applyGradientToText() {
    const targetElement = document.querySelector(
        ".relative.inline-flex.justify-center.text-center.text-2xl.font-semibold.leading-9 h1"
    );

    if (targetElement) {
        // Apply gradient styling
        targetElement.style.background = "linear-gradient(90deg, blue, violet, yellow)";
        targetElement.style.backgroundSize = "400% 400%";
        targetElement.style.webkitBackgroundClip = "text";
        targetElement.style.webkitTextFillColor = "transparent";

        // Add animation for the gradient
        targetElement.style.animation = "gradientShift 3s ease infinite";
        console.log("Gradient applied to target element.");
    } else {
        console.error("Target element for gradient not found.");
    }
}

// Function to hide specific elements from the target div
function hideElementsFromDiv() {
    const targetDiv = document.querySelector(".relative.flex.items-stretch.gap-x-2.gap-y-4.overflow-hidden.py-2.sm\\:gap-y-2.xl\\:gap-x-2.5.xl\\:gap-y-2.5.flex-nowrap.justify-start");
    if (targetDiv) {
        // Get all child elements (buttons) inside the div
        const buttons = targetDiv.querySelectorAll("button");
        if (buttons.length > 0) {
            // Hide specific elements based on the index or conditions
            buttons.forEach((button, index) => {
                if (index === 1 || index === 2) { // Example: Hide the 2nd and 3rd buttons
                    button.style.display = "none"; // Hides the button
                    console.log(`Button ${index + 1} hidden.`);
                }
            });
        } else {
            console.log("No buttons found in the target div for hiding.");
        }
    } else {
        console.error("Target div for hiding elements not found.");
    }
}

// Function to hide <ol> elements
function hideOlElements() {
    const targetDiv = document.querySelector(".relative.mt-5.first\\:mt-0.last\\:mb-5");
    if (targetDiv) {
        const olElements = targetDiv.querySelectorAll("ol > *");
        if (olElements.length > 0) {
            olElements.forEach((element) => {
                element.style.display = "none"; // Hide the element
                console.log("Element under <ol> hidden:", element);
            });
        } else {
            console.log("No elements found under <ol> in the target div.");
        }
    } else {
        console.error("Target div for <ol> elements not found.");
    }
}

// Function to show <ol> elements
function showOlElements() {
    const targetDiv = document.querySelector(".relative.mt-5.first\\:mt-0.last\\:mb-5");
    if (targetDiv) {
        const olElements = targetDiv.querySelectorAll("ol > *");
        if (olElements.length > 0) {
            olElements.forEach((element) => {
                element.style.display = ""; // Revert to default display
                console.log("Element under <ol> shown:", element);
            });
        } else {
            console.log("No elements found under <ol> in the target div to show.");
        }
    } else {
        console.error("Target div for <ol> elements not found.");
    }
}

// Function to add a dropdown button to the target div
function addDropdownButton() {
    console.log("addDropdownButton called"); // Debugging statement

    // Select the target div using the provided selector
    const targetDiv = document.querySelector(".sticky.bg-token-sidebar-surface-primary.top-0.z-20");

    console.log("Target Div for Dropdown Button:", targetDiv); // Debugging statement

    if (targetDiv) {
        // Ensure the target div is a flex container for proper alignment
        targetDiv.style.display = "flex";
        targetDiv.style.alignItems = "center"; // Vertically align items in the center

        // Check if the dropdown button already exists to prevent duplicates
        if (!document.getElementById("customDropdownButton")) {
            // Create the button element
            const dropdownButton = document.createElement("button");
            dropdownButton.id = "customDropdownButton"; // Assign an ID for future reference
            dropdownButton.innerHTML = "&#9662;"; // Button label with a down arrow

            // Style the button for inline alignment
            dropdownButton.style.marginLeft = "auto"; // Pushes the button to the right in a flex container
            dropdownButton.style.padding = "4px 8px"; // Reduced padding
            dropdownButton.style.backgroundColor = "transparent"; // Match the background (transparent)
            dropdownButton.style.border = "none"; // Remove border to match the background
            dropdownButton.style.cursor = "pointer"; // Pointer cursor on hover
            dropdownButton.style.fontSize = "14px";
            dropdownButton.style.fontWeight = "bold";
            dropdownButton.style.transition = "color 0.3s ease, transform 0.3s ease"; // Smooth color and transform transition for hover

            // Optional: Add hover effect (change text color instead of background)
            dropdownButton.style.color = "#000"; // Default text color
            dropdownButton.addEventListener("mouseover", () => {
                dropdownButton.style.color = "#555"; // Lighter text color on hover
            });
            dropdownButton.addEventListener("mouseout", () => {
                dropdownButton.style.color = "#000"; // Restore default text color
            });

            // Append the dropdown button to the target div
            targetDiv.appendChild(dropdownButton);
            console.log("Dropdown button added to target div.");

            // **Add the click event to toggle hiding/showing <ol> elements**
            dropdownButton.addEventListener("click", () => {
                if (!olHidden) {
                    hideOlElements();
                    olHidden = true;
                    console.log("olHidden set to true");
                } else {
                    showOlElements();
                    olHidden = false;
                    console.log("olHidden set to false");
                }
            });
        } else {
            console.log("Dropdown button already exists.");
        }
    } else {
        console.error("Target div for dropdown button not found.");
    }
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "changeBackgroundColor") {
        applyBackgroundColor(request.color);
        chrome.storage.sync.set({ backgroundColor: request.color }, () => {
            console.log("Background color saved to storage:", request.color);
        });
        sendResponse({ status: "success", message: `Background changed to ${request.color}` });
    } else if (request.action === "changeFont") {
        applyFontStyle(request.font);
        chrome.storage.sync.set({ fontStyle: request.font }, () => {
            console.log("Font style saved to storage:", request.font);
        });
        sendResponse({ status: "success", message: `Font changed to ${request.font}` });
    } else if (request.action === "changeGradientText") {
        chrome.storage.sync.set({ gradientEnabled: true }, () => {
            console.log("Gradient persistence enabled");
        });
        applyGradientToText();
        sendResponse({ status: "success", message: "Animated gradient applied to text" });
    } else if (request.action === "resetStyles") {
        chrome.storage.sync.set({ gradientEnabled: false }, () => {
            console.log("Gradient persistence disabled");
        });
        chrome.storage.sync.remove(["fontStyle", "backgroundColor"], () => {
            console.log("Font style and background color cleared from storage.");
        });
        document.body.style.backgroundColor = "";
        document.body.style.fontFamily = "";
        const targetDiv = document.querySelector(
            ".draggable.no-draggable-children.sticky.top-0.p-3.mb-1\\.5.flex.items-center.justify-between.z-10.h-header-height.font-semibold.bg-token-main-surface-primary.max-md\\:hidden"
        );
        if (targetDiv) {
            targetDiv.style.backgroundColor = ""; // Reset target div background
        }
        console.log("All styles reset to default.");
        sendResponse({ status: "success", message: "Styles reset to default" });
    } else if (request.action === "hideElements") {
        hideElementsFromDiv();
        sendResponse({ status: "success", message: "Elements hidden from target div" });
    }
    // **Handle Add Dropdown Button Action**
    else if (request.action === "addDropdownButton") {
        addDropdownButton();
        sendResponse({ status: "success", message: "Dropdown button added to target div" });
    }
    // **Handle Hide Elements Under <ol> Action**
    else if (request.action === "hideOlElements") {
        if (!olHidden) {
            hideOlElements();
            olHidden = true;
            console.log("olHidden set to true via message");
        } else {
            showOlElements();
            olHidden = false;
            console.log("olHidden set to false via message");
        }
        sendResponse({ status: "success", message: "Toggle <ol> elements visibility." });
    }
});

// Function to add a dropdown button and inject hover styles
function initializeContentScript() {
    injectHoverStyles(); // Inject the hover styles when the content script initializes
    addDropdownButton(); // Add the dropdown button on initial load
}

// Observe DOM changes to ensure gradient effect and dropdown button persist if enabled
const observer = new MutationObserver(() => {
    chrome.storage.sync.get(["gradientEnabled", "fontStyle", "backgroundColor"], (data) => {
        if (data.gradientEnabled) {
            applyGradientToText();
        }
        if (data.fontStyle) {
            applyFontStyle(data.fontStyle);
        }
        if (data.backgroundColor) {
            applyBackgroundColor(data.backgroundColor);
        }
        hideElementsFromDiv(); // Ensure elements are hidden
        addDropdownButton();  // Ensure the dropdown button is present after DOM changes
    });
});

// Start observing changes in the body
observer.observe(document.body, {
    childList: true, // Observe direct children
    subtree: true,   // Observe all descendants
});

// Apply gradient, font style, background color, and add dropdown button initially if persistence is enabled
chrome.storage.sync.get(["gradientEnabled", "fontStyle", "backgroundColor"], (data) => {
    if (data.gradientEnabled) {
        applyGradientToText();
    }
    if (data.fontStyle) {
        applyFontStyle(data.fontStyle);
    }
    if (data.backgroundColor) {
        applyBackgroundColor(data.backgroundColor);
    }
    hideElementsFromDiv(); // Ensure elements are hidden initially
    addDropdownButton();  // Add the dropdown button on initial load
    injectHoverStyles();  // Inject hover styles on initial load
});

// Initialize the content script
initializeContentScript();
