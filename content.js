// Function disabling notify watchers in the DOM
function unWatch(){
    checkbox = document.getElementById("notifyWatchers");
    if(checkbox.checked) {
        checkbox.click();
    }
    console.log("The 'Notify watchers' checkbox was unset for this page");
}

// If we have a notifyWatchers element, let's disable it
if (document.getElementById("notifyWatchers")) {
    chrome.runtime.sendMessage({ status: "check" }, function (response) {
        if (response.status == true) {
            unWatch();
        }
    });
}
// Otherwise, we setup a listener, when a display page switches to edit mode, we'll get an event
document.getElementById("content").addEventListener("DOMSubtreeModified", function (event) {
    if (event.target.id != 'notifyWatchers') {
        return false;
    };
    chrome.runtime.sendMessage({ status: "check" }, function (response) {
        if (response.status == true) {
            unWatch();
        }
    });
});