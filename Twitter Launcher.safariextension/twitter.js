// from http://stackoverflow.com/questions/3026686/safari-extension-questions
function getMessage(msgEvent) {

    window.location=msgEvent.message + window.location.pathname.substring(1);

}

//safari.self.tab.dispatchMessage("getSettingValue", "urlHandler"); // ask for value
safari.self.tab.dispatchMessage("getSettingValue", "chooseHandler"); // ask for value
safari.self.addEventListener("message", getMessage, false); // wait for reply


