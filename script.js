functlet tabCounter = 2; // Start counting from 2 because we already have 2 tabs by default

function openTab(event, tabId) {
    // Hide all tab content
    let tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tabs
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the clicked tab content and add active class to the tab
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Function to handle search
function handleSearch(event) {
    if (event.key === 'Enter') {
        search();
    }
}

// Function to perform the search action
function search() {
    const query = document.getElementById('search-bar').value.trim();
    if (query) {
        const activeTab = document.querySelector('.tab.active');
        const tabId = activeTab.getAttribute('onclick').split('=')[1].replace("'", "").replace("'", "");

        const iframe = document.getElementById(`${tabId}-iframe`);
        iframe.src = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

// Add a new tab
function addNewTab() {
    tabCounter++;
    const newTabId = `tab${tabCounter}`;

    // Create a new tab element
    const newTab = document.createElement('div');
    newTab.classList.add('tab');
    newTab.setAttribute('onclick', `openTab(event, '${newTabId}')`);
    newTab.innerHTML = `<span class="tab-title">Tab ${tabCounter}</span>
                        <button class="close-tab" onclick="closeTab(event, '${newTabId}')">x</button>`;

    // Add the new tab to the tabs section
    document.querySelector('.tabs').appendChild(newTab);

    // Create a new iframe for the tab content
    const newTabContent = document.createElement('div');
    newTabContent.classList.add('tab-content');
    newTabContent.id = newTabId;
    newTabContent.innerHTML = `<iframe id="${newTabId}-iframe" src="about:blank" width="100%" height="500px"></iframe>`;

    // Add the new tab content to the content section
    document.querySelector('.content').appendChild(newTabContent);

    // Automatically open the new tab
    newTab.click();
}

// Close a tab
function closeTab(event, tabId) {
    event.stopPropagation(); // Prevent triggering the tab switch when clicking 'x'

    // Remove the tab element
    document.getElementById(tabId).remove();

    // Remove the tab content
    document.getElementById(`${tabId}-iframe`).parentElement.remove();

    // If the active tab was closed, open the next available tab
    const remainingTabs = document.querySelectorAll('.tab');
    if (remainingTabs.length > 0) {
        remainingTabs[remainingTabs.length - 1].click();
    }
}

// Set default active tab
document.querySelector('.tab').click();
