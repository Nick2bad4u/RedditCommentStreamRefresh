[![CodeQL](https://github.com/Nick2bad4u/RedditCommentStreamRefresh/actions/workflows/codeql.yml/badge.svg)](https://github.com/Nick2bad4u/RedditCommentStreamRefresh/actions/workflows/codeql.yml)
[![Dependabot Updates](https://github.com/Nick2bad4u/RedditCommentStreamRefresh/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/Nick2bad4u/RedditCommentStreamRefresh/actions/workflows/dependabot/dependabot-updates)
[![Dependency Review](https://github.com/Nick2bad4u/RedditCommentStreamRefresh/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/Nick2bad4u/RedditCommentStreamRefresh/actions/workflows/dependency-review.yml)
[![pages-build-deployment](https://github.com/Nick2bad4u/RedditCommentStreamRefresh/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Nick2bad4u/RedditCommentStreamRefresh/actions/workflows/pages/pages-build-deployment)
[![Scorecard supply-chain security](https://github.com/Nick2bad4u/RedditCommentStreamRefresh/actions/workflows/scorecards.yml/badge.svg)](https://github.com/Nick2bad4u/RedditCommentStreamRefresh/actions/workflows/scorecards.yml)
[![Semgrep](https://github.com/Nick2bad4u/RedditCommentStreamRefresh/actions/workflows/semgrep.yml/badge.svg)](https://github.com/Nick2bad4u/RedditCommentStreamRefresh/actions/workflows/semgrep.yml)

![RepoBeats](https://repobeats.axiom.co/api/embed/73ad0205c384f1b5e41e03d65e9dcbbed31c1b4f.svg "Repobeats analytics image")
A quick userscript to refresh reddit-stream every 30 seconds.

```userscript
    // ==UserScript==
    // @name         Reddit-Stream Auto-Refresh 
    // @namespace    nick2bad4u
    // @description  Auto-Refreshes your Reddit-Stream.com page every 30 seconds. Modify the script and change to any time you want.
    // @author       Nick2bad4u
    // @match        https://reddit-stream.com/*
    // @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit-stream.com
    // @version      1.6
    // @grant        none
    // @homepage     https://github.com/Nick2bad4u/RedditCommentStreamRefresh
    // @homepageURL  https://github.com/Nick2bad4u/RedditCommentStreamRefresh
    // @supportURL   https://github.com/Nick2bad4u/RedditCommentStreamRefresh/issues
    // @downloadURL  https://raw.githubusercontent.com/Nick2bad4u/RedditCommentStreamRefresh/main/Auto-Refresh-Reddit-Stream.js
    // @updateURL    https://raw.githubusercontent.com/Nick2bad4u/RedditCommentStreamRefresh/main/Auto-Refresh-Reddit-Stream.meta.js
    // @license CC-BY-SA-3.0; http://creativecommons.org/licenses/by-sa/3.0/
    // @license MIT
    // ==/UserScript==
    
    (function () {
      'use strict';
      setTimeout(function () {
        location.reload();
      }, 30 * 1000);
    })();
```
