// chrome.runtime.onInstalled.addListener(function () {
//   var audio = new Audio"https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1");

//   audio.play();
// });


// Allows cross browser functionality
const bgAPI = (typeof browser !== 'undefined') ? browser : chrome;
 
let videoId = null;
let reminder; 

function waterNotification(){
  bgAPI.notifications.create({
    type:"basic",
    iconUrl: "moodz.png",
    title: "Water Reminder",
    message: "It's time to drinkk water!",
    priority: 2
  });
}
function startWaterReminder(){
  clearInterval(reminderInterval);
    reminderInterval = setInterval(sendWaterNotification, 3600000);
}
function stopWaterReminder() {
  clearInterval(reminderInterval);
}


bgAPI.runtime.onInstalled.addListener(function () {
  openVideo(); // opens when extension is installed 
});

function openVideo(){
  if (videoId !== null){ 
    bgAPI.tabs.update(videoId, { active: true});
  }else {
    bgAPI.tabs.create({ url: "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1"}, (tab) => {
      videoId = tab.id; 
        });
    }
  }
bgAPI.runtime.onSuspend.addListener(function () {
  if (videoId !== null) {
      bgAPI.tabs.remove(videoId);
      videoId = null;
  }
});
 
bgAPI.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "startReminder") {
      startWaterReminder();
      sendResponse({ status: "Water reminders started." });
  } else if (request.action === "stopReminder") {
      stopWaterReminder();
      sendResponse({ status: "Water reminder has stopped." });
  }
});

bgAPI.runtime.onSuspend.addListener(function () {
  if (videoId !== null) {
      bgAPI.tabs.remove(videoId);
      videoId = null;
  }
});


// let timerInterval;
// let totalSeconds = 24 * 60; 
// let isTimerRunning = false;
 
// function startTimer() {
//   if (totalSeconds =)
// }