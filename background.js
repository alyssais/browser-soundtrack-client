chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.hasOwnProperty("url")) {
    console.log("tab #" + tabId + " changed URL to " + changeInfo.url);
  }
});
