pipButton.addEventListener("click", async () => {
    const player = document.querySelector("#player");
  
    if (!document.pictureInPictureEnabled) {
      console.error("Picture-in-Picture is not supported by this browser.");
      return;
    }
  
    if (!player) {
      console.error("Player element not found.");
      return;
    }
  
    try {
      if (document.pictureInPictureElement) {
        // If already in Picture-in-Picture, exit it
        await document.exitPictureInPicture();
      } else {
        // Request Picture-in-Picture on the video element
        await player.requestPictureInPicture();
      }
    } catch (error) {
      console.error("Error with Picture-in-Picture:", error);
    }
  });
  