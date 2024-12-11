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
        
        .absolute.bottom-0.top-0 {
            background: linear-gradient(to left, var(--token-sidebar-surface-primary), var(--token-sidebar-surface-secondary));
            overflow: hidden;
        }

        /* Hover effect for parent div */
        .no-draggable.group.relative.rounded-lg.active\\:opacity-90.hover\\:bg-token-sidebar-surface-secondary:hover {
            transform: scale(1.05);
            overflow: hidden;
            background-color: rgba(255, 255, 255, 0.8);
            white-space: normal;
            color: black;
            font-weight: 600;
            border-radius: 10px;
            margin-left: 8px;
        }

        /* Optional: Add styling for child elements if required */
        .no-draggable.group.relative.rounded-lg.active\\:opacity-90.hover\\:bg-token-sidebar-surface-secondary:hover .relative.grow.overflow-hidden.whitespace-nowrap {
            white-space: normal;
        
        }

        /* Matching hover effect for button */
        .no-draggable.group.relative.rounded-lg.active\\:opacity-90.hover\\:bg-token-sidebar-surface-secondary:hover .flex.items-center.justify-center.text-token-text-secondary.transition.hover\\:text-token-text-primary.radix-state-open\\:text-token-text-secondary{
            background-color: inherit;
            color: black;
            font-weight: 600;
            border-radius: 10px;
        }

        /* Increase Text Size in the Target Div */
        .px-2.text-xs.font-semibold.text-ellipsis.overflow-hidden.break-all.pt-3.pb-2.text-token-text-primary {
            font-size: 1.5em;
        }

        .sticky.bg-token-sidebar-surface-primary.top-0.z-20{
            background-color: inherit
            position: absolute
        }

        /* Dropdown Button Styling */
        #customDropdownButton {
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 18px; /* Increased size */
            font-weight: bold;
            transition: transform 0.3s ease, color 0.3s ease; /* Smooth transitions */
            padding: 4px 8px;
            margin-left: auto;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        #customDropdownButton:hover {
            color: #555;
        }

        /* Rotated state for the button when toggled */
        #customDropdownButton.rotated {
            transform: rotate(180deg);
        }

        /* Transition for ol elements */
        ol > * {
            opacity: 1;
            max-height: 1000px;
            transition: opacity 0.5s ease, max-height 0.5s ease;
            overflow: hidden;
        }

        ol > *.hidden-ol-element {
            opacity: 0;
            max-height: 0;
        }
    `;
    document.head.appendChild(style);
    console.log("Updated hover styles and dropdown button styles injected.");
}

// Function to change the background color of the body and the target divs
function applyBackgroundColor(color) {
    // Change the body's background color
    document.body.style.backgroundColor = color;

    // Object mapping selectors to their respective colors
    const targets = [
        {
            selector: ".draggable.no-draggable-children.sticky.top-0.p-3.mb-1\\.5.flex.items-center.justify-between.z-10.h-header-height.font-semibold.bg-token-main-surface-primary.max-md\\:hidden",
            color: color
        },
        {
            selector: ".draggable.relative.h-full.w-full.flex-1.items-start.border-white\\/20",
            color: "#101820FF" // Navy Blue
        },
        {
            selector: ".absolute.bottom-0.top-0",
            color: "#101820FF" // Navy Blue
        },
    ];

    // Loop through each target and apply styles
    targets.forEach((target) => {
        const targetDiv = document.querySelector(target.selector);
        if (targetDiv) {
            targetDiv.style.backgroundColor = target.color;
            targetDiv.style.transition = "background-color 0.5s ease"; // Smooth transition for the div
            console.log(`Background color applied to div with selector: ${target.selector}`);
        } else {
            console.error(`Target div not found for selector: ${target.selector}`);
        }
    });
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

// Function to hide <ol> elements gracefully
function hideOlElements() {
    const targetDiv = document.querySelector(".relative.mt-5.first\\:mt-0.last\\:mb-5");
    if (targetDiv) {
        const olElements = targetDiv.querySelectorAll("ol > *");
        if (olElements.length > 0) {
            olElements.forEach((element) => {
                element.classList.add("hidden-ol-element"); 
                console.log("Element under <ol> hidden with transition:", element);
            });
        } else {
            console.log("No elements found under <ol> in the target div.");
        }
    } else {
        console.error("Target div for <ol> elements not found.");
    }
}

// Function to show <ol> elements gracefully
function showOlElements() {
    const targetDiv = document.querySelector(".relative.mt-5.first\\:mt-0.last\\:mb-5");
    if (targetDiv) {
        const olElements = targetDiv.querySelectorAll("ol > *");
        if (olElements.length > 0) {
            olElements.forEach((element) => {
                element.classList.remove("hidden-ol-element");
                console.log("Element under <ol> shown with transition:", element);
            });
        } else {
            console.log("No elements found under <ol> in the target div to show.");
        }
    } else {
        console.error("Target div for <ol> elements not found.");
    }
}

// Function to add a dropdown button to all target divs
function addDropdownButton() {
    console.log("addDropdownButton called");

    // Select all target divs
    const targetDivs = document.querySelectorAll(".sticky.bg-token-sidebar-surface-primary.top-0.z-20");
    
    // If no target divs found, log an error and return
    if (targetDivs.length === 0) {
        console.error("No target divs found for dropdown button.");
        return;
    }

    targetDivs.forEach((targetDiv, divIndex) => {
        targetDiv.style.display = "flex";
        targetDiv.style.alignItems = "center";

        // Check if a dropdown button already exists in this targetDiv
        let dropdownButton = targetDiv.querySelector(".customDropdownButton");
        if (!dropdownButton) {
            dropdownButton = document.createElement("button");
            dropdownButton.classList.add("customDropdownButton");
            dropdownButton.innerHTML = "&#9662;"; // Down arrow initially

            targetDiv.appendChild(dropdownButton);
            console.log(`Dropdown button added to target div #${divIndex + 1}.`);

            dropdownButton.addEventListener("click", () => {
                // Toggle rotation class for nice transition
                dropdownButton.classList.toggle("rotated");

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
            console.log(`Dropdown button already exists in target div #${divIndex + 1}.`);
        }
    });
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
    else if (request.action === "addDropdownButton") {
        addDropdownButton();
        sendResponse({ status: "success", message: "Dropdown button added to target div" });
    }
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
        hideElementsFromDiv(); // Ensure elements are hidden if needed
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


/* -------------------------------------------
   ARROW KEY NAVIGATION BETWEEN CHAT MESSAGES
   ------------------------------------------- */

// Variables to track the current selected message
let currentMessageIndex = -1;
let messageElements = [];

function updateMessageElements() {
    // Collect all chatboxes from multiple containers
    const containers = document.querySelectorAll(".flex.w-full.flex-col.gap-1.empty\\:hidden.items-end.rtl\\:items-start");
    if (containers.length > 0) {
        messageElements = [];
        containers.forEach(container => {
            // Append all child divs of each container to the messageElements array
            messageElements.push(...Array.from(container.children));
        });
        console.log("Message elements updated. Total Count:", messageElements.length, messageElements);
    } else {
        messageElements = [];
        console.log("No chatbox containers found.");
    }
}

function highlightMessage(index) {
    if (!messageElements.length || index < 0 || index >= messageElements.length) return;
    messageElements.forEach((el, i) => {
        el.style.outline = i === index ? "2px solid blue" : "none";
    });
    console.log("Highlighted message index:", index, messageElements[index]);
}

document.addEventListener('keydown', (e) => {
    // Check if Ctrl key is pressed along with ArrowDown or ArrowUp
    if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && e.ctrlKey) {
        updateMessageElements();
        if (!messageElements.length) {
            console.log("No messages to navigate.");
            return;
        }

        console.log("Current Index before key press:", currentMessageIndex, "Total messages:", messageElements.length);

        if (e.key === 'ArrowDown') {
            // If no selection yet, go to the first message
            if (currentMessageIndex === -1) {
                currentMessageIndex = 0;
            } else if (currentMessageIndex < messageElements.length - 1) {
                currentMessageIndex++;
            }
        } else if (e.key === 'ArrowUp') {
            // If no selection yet, go to the last message
            if (currentMessageIndex === -1) {
                currentMessageIndex = messageElements.length - 1;
            } else if (currentMessageIndex > 0) {
                currentMessageIndex--;
            }
        }

        console.log("Current Index after key press:", currentMessageIndex);

        if (currentMessageIndex >= 0 && currentMessageIndex < messageElements.length) {
            highlightMessage(currentMessageIndex);
            messageElements[currentMessageIndex].scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }
});
