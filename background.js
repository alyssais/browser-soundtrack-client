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
        chrome.notifications.create(Math.random().toString(), {
          type: "basic",
          title: "Song Title",
          message: "Song Artist",
          iconUrl: "https://i.scdn.co/image/ac20df0f8ff65572239294c04c5c1c0e56940767"
        }, function() {});
      }
    };
    request.send();
  }
});
