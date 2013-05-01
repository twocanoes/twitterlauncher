// from http://stackoverflow.com/questions/3026686/safari-extension-questions
function getMessage(msgEvent) {

    if (msgEvent.name == "settingValueIs")
	if(window.location.href.match(/^https:\/\/twitter.com.*/)){window.location=msgEvent.message}

}

safari.self.tab.dispatchMessage("getSettingValue", "urlHandler"); // ask for value
safari.self.addEventListener("message", getMessage, false); // wait for reply


