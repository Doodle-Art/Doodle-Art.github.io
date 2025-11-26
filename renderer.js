//let history = [];
//let currentIndex = -1;
//let bookmarks = [];
//let tabs = [{ id: 1, history: [], currentIndex: -1 }];
//let activeTab = 1;

//document.addEventListener("DOMContentLoaded", () => {
//    document.getElementById("toggle-theme").addEventListener("click", toggleDarkMode);
 //   document.getElementById("url").addEventListener("keypress", (event) => {
  //      if (event.key === "Enter") {
   //         loadPage();
    //    }
  //  });
//});

//function loadPage() {
  //  let url = document.getElementById('url').value;
    
 //   if (!url.startsWith('http') && !url.includes(".")) {
   //     let engine = document.getElementById("search-engine").value;
     //   url = engine + encodeURIComponent(url);
  //  } else if (!url.startsWith('http')) {
   //     url = 'https://' + url;
  //  }

//    let currentTab = tabs.find(t => t.id === activeTab);
 //   currentTab.history.push(url);
  //  currentTab.currentIndex = currentTab.history.length - 1;

//    updateNavigationButtons();
//    fetchPage(ur/l);
//}

//async function fetchPage(url) {
 //   const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

//    try {
  //      document.getElementById('output').innerHTML = "<p>Loading...</p>";
    //    const response = await fetch(proxyUrl);
      //  const data = await response.json();
   //     document.getElementById('output').innerHTML = data.contents;
  //  } catch (error) {
   //     document.getElementById('output').innerText = 'Error loading page: ' + error.message;
   // }
//}

//function goBack() {
//    let currentTab = tabs.find(t => t.id === activeTab);
  //  if (currentTab.currentIndex > 0) {
 //       currentTab.currentIndex--;
 //       let url = currentTab.history[currentTab.currentIndex];
 //       document.getElementById('url').value = url;
  //      fetchPage(url);
 //  // }
  //  updateNavigationButtons();
//}

//function goForward() {
  //  let currentTab = tabs.find(t => t.id === activeTab);
   // if (currentTab.currentIndex < currentTab.history.length - 1) {
    //    currentTab.currentIndex++;
     //   let url = currentTab.history[currentTab.currentIndex];
      //  document.getElementById('url').value = url;
       // fetchPage(url);
   // }
    //updateNavigationButtons();
//}

//funpction updateNavigationButtons() {
  //  let currentTab = tabs.find(t => t.id === activeTab);
    //document.querySelector("button[onclick='goBack()']").disabled = currentTab.currentIndex <= 0;
   // document.querySelector("button[onclick='goForward()']").disabled = currentTab.currentIndex >= currentTab.history.length - 1;
//}

// ⭐ Bookmark System
//function bookmarkPage() {
 //   let url = document.getElementById('url').value;
  //  if (url && !bookmarks.includes(url)) {
    //    bookmarks.push(url);
     //   updateBookmarks();
    //}
//}

//function updateBookmarks() {
 //   let list = document.getElementById('bookmarks');
  //  list.innerHTML = "";
   // bookmarks.forEach(url => {
    //    let item = document.createElement('li');
     //   item.innerHTML = `<a href="#" onclick="loadBookmarkedPage('${url}')">${url}</a>`;
      //  list.appendChild(item);
//    });
//}

//function loadBookmarkedPage(url) {
 //   document.getElementById('url').value = url;
  //  loadPage();
//}

// 🌙 Dark Mode Toggle
//function toggleDarkMode() {
 //   document.body.classList.toggle("dark-mode");
//}

// 🗂 Multiple Tabs
//function newTab() {
  //  let newTabId = tabs.length + 1;
   // tabs.push({ id: newTabId, history: [], currentIndex: -1 });

 //   let tab = document.createElement('button');
   // tab.className = "tab";
    //tab.innerText = `Tab ${newTabId}`;
   // tab.onclick = () => switchTab(newTabId);
   // document.getElementById('tabs').appendChild(tab);

//    switchTab(newTabId);
//}

//function switchTab(tabId) {
 //   activeTab = tabId;
  //  let currentTab = tabs.find(t => t.id === activeTab);
    
 //   let url = currentTab.history[currentTab.currentIndex] || "";
   // document.getElementById('url').value = url;
 //   if (url) fetchPage(url);

  //  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active-tab"));
  //  document.querySelectorAll(".tab")[tabId - 1].classList.add("active-tab");
//}
