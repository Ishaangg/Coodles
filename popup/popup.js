// Apply selected background color
document.getElementById("apply-color").addEventListener("click", () => {
    const color = document.getElementById("color-picker").value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(
            tabs[0].id,
            { action: "changeBackgroundColor", color: color },
            (response) => {
                if (chrome.runtime.lastError) {
                    console.error("Error:", chrome.runtime.lastError.message);
                } else {
                    console.log("Response from content script:", response);
                }
            }
        );
    });
});

// Apply selected font
document.getElementById("apply-font").addEventListener("click", () => {
    const font = document.getElementById("font-picker").value;
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
        tabs.forEach((tab) => {
            chrome.tabs.sendMessage(
                tab.id,
                { action: "changeFont", font: font },
                (response) => {
                    if (chrome.runtime.lastError) {
                        console.error("Error:", chrome.runtime.lastError.message);
                    } else {
                        console.log("Response from content script:", response);
                    }
                }
            );
        });
    });
});

// Apply gradient to the specific text and enable persistence
document.getElementById("apply-gradient").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(
            tabs[0].id,
            { action: "changeGradientText" },
            (response) => {
                if (chrome.runtime.lastError) {
                    console.error("Error:", chrome.runtime.lastError.message);
                } else {
                    console.log("Response from content script:", response);
                }
            }
        );
    });
});


// Reset all styles
document.getElementById("reset-styles").addEventListener("click", () => {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
        tabs.forEach((tab) => {
            chrome.tabs.sendMessage(
                tab.id,
                { action: "resetStyles" },
                (response) => {
                    if (chrome.runtime.lastError) {
                        console.error("Error:", chrome.runtime.lastError.message);
                    } else {
                        console.log("Response from content script:", response);
                    }
                }
            );
        });
    });
});


// Utility function to send a message to the active tab
function sendMessageToActiveTab(action, data = {}) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) {
            console.error("No active tab found.");
            return;
        }
        chrome.tabs.sendMessage(
            tabs[0].id,
            { action, ...data },
            (response) => {
                if (chrome.runtime.lastError) {
                    console.error("Error:", chrome.runtime.lastError.message);
                } else {
                    console.log("Response from content script:", response);
                }
            }
        );
    });
}

// Apply selected background color
document.getElementById("apply-color").addEventListener("click", () => {
    const color = document.getElementById("color-picker").value;
    sendMessageToActiveTab("changeBackgroundColor", { color });
});

// Apply selected font
document.getElementById("apply-font").addEventListener("click", () => {
    const font = document.getElementById("font-picker").value;
    sendMessageToActiveTab("changeFont", { font });
});

// Apply gradient to the specific text and enable persistence
document.getElementById("apply-gradient").addEventListener("click", () => {
    sendMessageToActiveTab("changeGradientText");
});

// Reset all styles
document.getElementById("reset-styles").addEventListener("click", () => {
    sendMessageToActiveTab("resetStyles");
});

// Add dropdown button to the target div
document.getElementById("add-dropdown").addEventListener("click", () => {
    sendMessageToActiveTab("addDropdownButton");
});

document.getElementById("hide-ol-elements").addEventListener("click", () => {
    sendMessageToActiveTab("hideOlElements");
});
