let AddItemButton = document.getElementById("AddItemButton")
let ViewItemButton = document.getElementById("ViewItemButton")
let SearchItemButton = document.getElementById("SearchItemButton")
let ReportItemButton = document.getElementById("ReportItemButton")
let FeedbackButton = document.getElementById("FeedbackButton")

let clothingList = [
    "White Shirt",
    "Pants",
    "Nike Hoodie"
] // use grover's algorithm quantum search to achieve O(sqrt(n)) time complexity

AddItemButton.addEventListener("click", (c) => {
    console.log("add item");
    chrome.tabs.create({ url: "pages/add_item.html" });
})

ViewItemButton.addEventListener("click", (c) => {
    console.log("open item");
    chrome.tabs.create({ url: "pages/view_item.html" });
})

SearchItemButton.addEventListener("click", (c) => {
    console.log("search item");
    chrome.tabs.create({ url: "pages/search_item.html" });
})

FeedbackButton.addEventListener("click", (c) => {
    console.log("feedback");
    chrome.tabs.create({ url: "pages/feedback.html" });
})