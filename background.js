var audio = document.createElement("audio");
document.body.appendChild(audio);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.hasOwnProperty("url")) {
    audio.pause();
    var request = new XMLHttpRequest();
    request.open("GET", "http://cryptic-anchorage-3829.herokuapp.com/" + changeInfo.url, true);
    request.onload = function() {
      if (this.status == 200) {
        audio.src = this.response;
        audio.play();
      }
    };
    request.send();
  }
});
