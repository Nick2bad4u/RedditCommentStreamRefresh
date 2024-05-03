// ==UserScript==
// @name         Reddit-Stream Auto-Refresh 
// @namespace    nick2bad4u
// @description  Auto-Refreshes your Reddit-Stream.com page every 30 seconds. Modify the script and change to any time you want.
// @author       Nick2bad4u
// @match        https://reddit-stream.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit-stream.com
// @version      1.3
// @grant        none
// @homepage     https://github.com/Nick2bad4u/RedditCommentStreamRefresh
// @homepageURL  https://github.com/Nick2bad4u/RedditCommentStreamRefresh
// @supportURL   https://github.com/Nick2bad4u/RedditCommentStreamRefresh/issues
// @downloadURL  https://raw.githubusercontent.com/Nick2bad4u/RedditCommentStreamRefresh/main/Auto-Refresh-Reddit-Stream.js
// @updateURL    https://raw.githubusercontent.com/Nick2bad4u/RedditCommentStreamRefresh/main/Auto-Refresh-Reddit-Stream.js
// @license      The Unlicense; https://unlicense.org/
// ==/UserScript==

(function () {
  'use strict';
  setTimeout(function () {
    location.reload();
  }, 30 * 1000);
})();
