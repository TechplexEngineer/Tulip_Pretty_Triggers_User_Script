// ==UserScript==
// @name         Tulip Function Trigger Newline
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Puts each trigger argument on a newline to improve readability
// @match        https://*.tulip.co/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  // Add bottom margin to TaskGroup elements
  GM_addStyle(`
    .action-body .imports-triggers-editor-client-styles--triggerUnitStyles {
      display: flex !important;
      width: 100% !important;
    }
  `);

})();
