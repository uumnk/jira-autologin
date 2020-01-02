// ==UserScript==
// @name         JIRA autologin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  because new JIRA keeps logging me off
// @author       Monika
// @match        https://jira.unicorn.com/login.jsp*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let loginUrl = document.getElementById("plus4uLogin").href;
    window.location.replace(loginUrl);
})();