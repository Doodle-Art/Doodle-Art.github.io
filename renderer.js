let currentURL = "https://www.example.com";
const iframe = document.getElementById('browser-frame');
const urlInput = document.getElementById('url-input');

function loadURL() {
  let url = urlInput.value;

  // Ensure URL has http:// or https://
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'http://' + url;
  }

  // Update iframe source to the new URL
  iframe.src = url;
  currentURL = url;
  urlInput.value = url;
}

function updateURL() {
  currentURL = urlInput.value;
}

function reloadPage() {
  iframe.src = currentURL;
}

function goBack() {
  iframe.contentWindow.history.back();
}

function goForward() {
  iframe.contentWindow.history.forward();
}

// Update address bar when page is loaded or navigated
iframe.onload = function () {
  urlInput.value = iframe.src;
};
