// ==UserScript==
// @name         Mastodon 800px height
// @namespace    http://crazypanda.Fr
// @version      0.1
// @description  Change default Mastodon Theme and adding 800px height for pictures.
// @author       Arthur Lemoine
// @match        *://*/web/*

// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

GM_addStyle ('.media-gallery { height: auto !important; max-height: 800px !important; min-height: 110px !important;}');

})();