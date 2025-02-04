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

// Set default active tab
document.querySelector('.tab').click();
