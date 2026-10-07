// ==UserScript==
// @name         Tulip Function Trigger Newline
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Puts each trigger argument on a newline to improve readability
// @match        https://*.tulip.co/*
// @grant        GM_addStyle
// @updateURL    https://github.com/TechplexEngineer/Tulip_Pretty_Triggers_User_Script/raw/refs/heads/main/tulip_pretty_triggers.user.js
// @downloadURL  https://github.com/TechplexEngineer/Tulip_Pretty_Triggers_User_Script/raw/refs/heads/main/tulip_pretty_triggers.user.js
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
