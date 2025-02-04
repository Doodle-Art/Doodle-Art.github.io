let history = [];
let currentIndex = -1;

function loadPage() {
    let url = document.getElementById('url').value;
    if (!url.startsWith('http')) {
        url = 'https://' + url;
    }

    history.push(url);
    currentIndex = history.length - 1;
    updateNavigationButtons();

    fetchPage(url);
}

async function fetchPage(url) {
    try {
        const response = await fetch(url, { mode: 'no-cors' });
        const text = await response.text();
        document.getElementById('output').innerText = text;
    } catch (error) {
        document.getElementById('output').innerText = 'Error loading page: ' + error.message;
    }
}

function goBack() {
    if (currentIndex > 0) {
        currentIndex--;
        document.getElementById('url').value = history[currentIndex];
        fetchPage(history[currentIndex]);
        updateNavigationButtons();
    }
}

function goForward() {
    if (currentIndex < history.length - 1) {
        currentIndex++;
        document.getElementById('url').value = history[currentIndex];
        fetchPage(history[currentIndex]);
        updateNavigationButtons();
    }
}

function updateNavigationButtons() {
    document.querySelector("button:nth-child(1)").disabled = currentIndex <= 0;
    document.querySelector("button:nth-child(2)").disabled = currentIndex >= history.length - 1;
}


// Update address bar when page is loaded or navigated
iframe.onload = function () {
  urlInput.value = iframe.src;
};
