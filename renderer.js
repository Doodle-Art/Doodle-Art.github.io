let history = [];
let currentIndex = -1;

async function loadPage() {
    let url = document.getElementById('url').value;
    if (!url.startsWith('http')) {
        url = 'https://' + url;
    }

    // Add URL to history and update navigation
    history.push(url);
    currentIndex = history.length - 1;
    updateNavigationButtons();

    fetchPage(url);
}

async function fetchPage(url) {
    // Use a proxy to bypass CORS restrictions
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

    try {
        document.getElementById('output').innerHTML = "<p>Loading...</p>";
        const response = await fetch(proxyUrl);
        const data = await response.json();
        document.getElementById('output').innerHTML = data.contents;
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
