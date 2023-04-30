let isChromeTab = '';

chrome.tabs.query({active: true}, function(tabs) {
    if (tabs[0].url?.startsWith("chrome://")) {
        isChromeTab = 'chrome';
    }
});
chrome.tabs.query({active: true}, function(tabs) {
    // if (tabs[0].url?.startsWith("chrome://")) return undefined;
    if(isChromeTab === 'chrome')  return undefined;
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
    if(isChromeTab === 'chrome')  return undefined;
    chrome.tabs.get(activeInfo.tabId, function(tab) {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['content.js'],
            // allFrames: true
        });
    });
});
