chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'reload') {
        chrome.browsingData.removeCache({}, () => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                if (tabs[0]) {
                    chrome.tabs.reload(tabs[0].id, { bypassCache: true }, () => {
                        sendResponse({ success: true });
                    });
                } else {
                    sendResponse({ success: false });
                }
            });
        });
        // Return true to indicate you want to send a response asynchronously
        return true;
    }
});
