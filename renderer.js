let history = [];
let currentIndex = -1;
let bookmarks = [];
let tabs = [];

async function loadPage() {
    let url = document.getElementById('url').value;
    if (!url.startsWith('http') && !url.includes(".")) {
        let engine = document.getElementById("search-engine").value;
        url = engine + encodeURIComponent(url);
    } else if (!url.startsWith('http')) {
        url = 'https://' + url;
    }

    history.push(url);
    currentIndex = history.length - 1;
    updateNavigationButtons();
    fetchPage(url);
}

async function fetchPage(url) {
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

// ⭐ Bookmark System
function bookmarkPage() {
    let url = document.getElementById('url').value;
    if (!bookmarks.includes(url)) {
        bookmarks.push(url);
        updateBookmarks();
    }
}

function updateBookmarks() {
    let list = document.getElementById('bookmarks');
    list.innerHTML = "";
    bookmarks.forEach(url => {
        let item = document.createElement('li');
        item.innerHTML = `<a href="#" onclick="loadBookmarkedPage('${url}')">${url}</a>`;
        list.appendChild(item);
    });
}

function loadBookmarkedPage(url) {
    document.getElementById('url').value = url;
    loadPage();
}

// 🌙 Dark Mode Toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// 🗂 Multiple Tabs
function newTab() {
    let newTabId = tabs.length + 1;
    let tab = document.createElement('button');
    tab.className = "tab";
    tab.innerText = `Tab ${newTabId}`;
    tab.onclick = () => switchTab(newTabId);
    document.getElementById('tabs').appendChild(tab);
    tabs.push({ id: newTabId, history: [] });
}

function switchTab(tabId) {
    tabs.forEach(tab => {
        if (tab.id === tabId) {
            history = tab.history;
            currentIndex = history.length - 1;
            document.getElementById('url').value = history[currentIndex] || '';
            fetchPage(history[currentIndex] || '');
        }
    });
}
