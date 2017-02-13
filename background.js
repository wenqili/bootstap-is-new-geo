console.log("this is the background scripts")

chrome.browserAction.onClicked.addListener(function(tab){
  console.log(tab.url);
  chrome.tabs.executeScript(null,{file:'jquery.js'},function(){
    chrome.tabs.executeScript(null,{file:'content.js'});
  });
})
