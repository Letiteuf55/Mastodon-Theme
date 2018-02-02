// ==UserScript==
// @name         Mastodon 800px height
// @namespace    http://crazypanda.Fr
// @version      0.1
// @description  The default thumbnail size in the timeline keeps the original ratio.
// @author       Arthur Lemoine
// @match        *://*/web/*

// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

GM_addStyle ('.media-gallery { height: auto !important; max-height: 800px !important; min-height: 110px !important;}');
GM_addStyle ('.media-gallery__item-gifv-thumbnail { height: auto !important; height: 100%; top: 0%; -webkit-transform: translateY(0%); transform: translateY(0%);}'); 

})();
