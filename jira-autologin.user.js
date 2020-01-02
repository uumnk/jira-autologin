// ==UserScript==
// @name         JIRA autologin
// @namespace    https://github.com/uumnk/jira-autologin
// @version      1.0
// @description  Tampermonkey script for automatic login into new JIRA (jira.unicorn.com).
// @author       Monika
// @match        https://jira.unicorn.com/login.jsp*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const DESTINATION_PAGE_URL_PARAM_NAME = "os_destination";
    const LOG_IN_BUTTON_SELECTOR = ".compact-form-fields > div.form-buttons > input.aui-button[value=\"Log in\"]";

    function main() {
        let url = new URL(window.location.href);

        let logInButton = document.querySelector(LOG_IN_BUTTON_SELECTOR);
        if (logInButton != null) {
            // Log in and replace URL:
            let destinationPage = url.searchParams.get(DESTINATION_PAGE_URL_PARAM_NAME);
            let destinationUrl = url.protocol + "//" + url.host + destinationPage;
            if (destinationUrl) {
                window.onunload = event => onUnloadEventListener(event, destinationUrl);
            }
            logInButton.click();
        }
    }

    function onUnloadEventListener(event, destinationUrl) {
        window.location.replace(destinationUrl);
    }

    main();
})();