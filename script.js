const infoContainer = document.querySelector(".info")
const shareContainer = document.querySelector(".share")
const shareButton = document.getElementById("share-image")
const closeButton = document.getElementById("close-image")

shareButton.addEventListener("click", () => {
    shareContainer.classList.remove("hidden")
    infoContainer.style.display = "none"
});
