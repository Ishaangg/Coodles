chrome.runtime.onInstalled.addListener(() => {
    // Initialize focusMode state when extension is installed
    chrome.storage.sync.set({ focusModeEnabled: false });
  });
  