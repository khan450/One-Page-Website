// JavaScript for Lightbox (Modal Image Gallery)
document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript loaded");

  // Get all images with class 'thumbnail'
  const thumbnails = document.querySelectorAll(".thumbnail");
  if (thumbnails.length === 0) {
    console.error("No thumbnails found on the page.");
    return;
  }
  
  console.log("Thumbnails found: ", thumbnails.length);

  const modal = document.createElement("div");
  const modalImg = document.createElement("img");
  const modalClose = document.createElement("span");

  // Set up modal structure
  modal.id = "lightbox";
  modal.style.display = "none"; // Hide initially
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "1000"; // Ensure it appears above all other content

  // Close button
  modalClose.innerHTML = "&times;";
  modalClose.style.position = "absolute";
  modalClose.style.top = "20px";
  modalClose.style.right = "30px";
  modalClose.style.color = "white";
  modalClose.style.fontSize = "40px";
  modalClose.style.cursor = "pointer";

  // Modal image
  modalImg.style.maxWidth = "80%";
  modalImg.style.maxHeight = "80%";

  modal.appendChild(modalImg);
  modal.appendChild(modalClose);
  document.body.appendChild(modal);

  // Add click event for closing the modal
  modalClose.onclick = function () {
    console.log("Closing modal");
    modal.style.display = "none";
  };

  // Add click event to each thumbnail to open the modal
  thumbnails.forEach((thumbnail) => {
    thumbnail.onclick = function () {
      const largeImageSrc = this.src.replace("_small", "_large"); // Assumes "_small" suffix for thumbnail and "_large" for large images
      console.log("Opening image: ", largeImageSrc);
      modalImg.src = largeImageSrc;
      modal.style.display = "flex";
    };
  });
});
