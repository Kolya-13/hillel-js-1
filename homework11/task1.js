function delayedLog(text, milliseconds) {
    setTimeout(() => {
        console.log(text);
    }, milliseconds);
}


delayedLog("Hello, this text will appear in 2 seconds", 2000);
delayedLog("And this one in 1 second", 1000);