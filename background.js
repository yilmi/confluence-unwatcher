// Extension icon status change handler
function setCanvas(isEnabled){
    fill = isEnabled ? "#2E64FE" : "gray";
    // Create the canvas and get context
    var canvas = document.createElement('canvas');
    canvas.width = 20;
    canvas.height = 20;
    var context = canvas.getContext('2d');
    // Circle
    context.fillStyle = fill;
    context.arc(10,10,10,0,2 * Math.PI);
    context.fill();
    // Text
    context.fillStyle = "#FFFFFF";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 16px Sans-Serif";
    context.fillText("C",10,11);

    chrome.browserAction.setIcon({    imageData: context.getImageData(0, 0, 20, 20)    });
}

// Install setup
chrome.runtime.onInstalled.addListener(function(){
    setCanvas(true);
    chrome.storage.sync.set({status: true}, function() {
        console.log('Confluence Unwatcher extension is enabled');
    });
});

// Extension icon click handler
chrome.browserAction.onClicked.addListener(function () {
    chrome.storage.sync.get(['status'], function(result){
        chrome.storage.sync.set({status: !result.status}, function() {
            setCanvas(!result.status);
            console.log('Confluence Unwatcher is ' + (!result.status ? "enabled":"disabled"));
        })
    });
});

// Listens to content script messages replying with the current extension status
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.status == "check"){
        chrome.storage.sync.get(['status'], function(result){
            sendResponse({status: result.status});
        });
    }
    // Required for sendMessage to be sent asynchronously and succeed
    return true;
});

