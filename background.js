chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.hasOwnProperty("url")) {
    console.log("tab #" + tabId + " changed URL to " + changeInfo.url);
    var request = new XMLHttpRequest();
    request.open("GET", "http://cryptic-anchorage-3829.herokuapp.com/" + changeInfo.url, true);
    request.onload = function() {
      console.log(this.status, this.response);
    };
    request.onerror = function() {
      console.log(this.error, this);
      debugger;
    };
  }
});
