
chrome.tabs.query({active: true}, function(tabs) {
    if (tabs[0].url?.startsWith("chrome://")) return undefined;
    tabs.forEach(function(tab) {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['content.js'],
            // allFrames: true
        });
    });
});

// Listen for tab activation events and re-inject the content script as needed
chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab) {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['content.js'],
            // allFrames: true
        });
    });
});
