/*
The copy right of geo-bootstrap was belong to Divshot. https://github.com/divshot/geo-bootstrap
This chrome extension was developed by Eric Li.
Instrcutor: Cory Forsyth.
*/

console.log("back to win 95");

var img = [
  chrome.extension.getURL("images/7upspot.gif"),
  chrome.extension.getURL("images/americanflag.gif"),
  chrome.extension.getURL("images/community.gif"),
  chrome.extension.getURL("images/computer-01.gif"),
  chrome.extension.getURL("images/computer.gif"),
  chrome.extension.getURL("images/construction.gif"),
  chrome.extension.getURL("images/counter2.gif"),
  chrome.extension.getURL("images/drudgesiren.gif"),
  chrome.extension.getURL("images/hacker.gif"),
  chrome.extension.getURL("images/heart.gif"),
  chrome.extension.getURL("images/hot.gif"),
  chrome.extension.getURL("images/mailkitten.gif"),
  chrome.extension.getURL("images/mchammer.gif"),
  chrome.extension.getURL("images/new.gif"),
  chrome.extension.getURL("images/new2.gif"),
  chrome.extension.getURL("images/noframes.gif"),
  chrome.extension.getURL("images/notepad.gif"),
  chrome.extension.getURL("images/spinningearth.gif"),
  chrome.extension.getURL("images/wabwalk.gif"),
  chrome.extension.getURL("images/webtrips.gif"),
  chrome.extension.getURL("images/yahooweek.gif")
]


var pathToCSS = chrome.extension.getURL('/geo.css');
console.log(pathToCSS);
$("link").attr("href",pathToCSS);


$("img").each(function(){
  $(this).attr({
  src:img[Math.floor(Math.random()*img.length)],
  srcset:img[Math.floor(Math.random()*img.length)]
  })
})

$("source").each(function(){
  $(this).attr({
  src:img[Math.floor(Math.random()*img.length)],
  srcset:img[Math.floor(Math.random()*img.length)]
  })
})
