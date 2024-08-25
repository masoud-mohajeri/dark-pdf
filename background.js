chrome?.action?.onClicked?.addListener((tab) => {
    chrome?.scripting?.executeScript({
        target: {tabId: tab.id},
        function: ()=>document.body.getElementsByTagName("embed")[0].style.filter = "invert(0.85)"
    });
});
