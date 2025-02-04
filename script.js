function openTab(event, tabName) {
    // Hide all tab content
    let tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tabs
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the clicked tab content and add active class to the tab
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Function to handle search input
function handleSearch(event) {
    // Only trigger search on "Enter" key
    if (event.key === 'Enter') {
        const query = document.getElementById('search-bar').value.trim();
        if (query) {
            // Get the active tab
            const activeTab = document.querySelector('.tab.active');
            const tabId = activeTab.textContent.toLowerCase().replace(' ', '');

            // Update the iframe with the search results
            const iframe = document.getElementById(`${tabId}-iframe`);
            iframe.src = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    }
}

// Set default active tab
document.querySelector('.tab').click();
