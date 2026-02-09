// ==UserScript==
// @name         Auto Unsave Reddit Posts
// @namespace    https://github.com/Zakaboy26
// @version      1.2
// @description  Automatically unsaves all posts on old.reddit.com
// @author       Zakaboy26
// @match        https://old.reddit.com/user/*/saved*
// @grant        none
// ==/UserScript==

(function() {
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    const BATCH_SIZE = 50;
    const BATCH_BREAK = 60000;
    const DELAY_MIN = 2000;
    const DELAY_MAX = 5000;

    let totalUnsaved = 0;

    async function getUnsaveLinks() {
        return $("a").filter(function() {
            return $(this).text().toLowerCase() === "unsave";
        }).toArray();
    }

    async function processLinks(links) {
        for (let i = 0; i < links.length; i++) {
            $(links[i]).click();
            totalUnsaved++;

            if (totalUnsaved % BATCH_SIZE === 0) {
                await wait(BATCH_BREAK);
            } else {
                const delay = Math.floor(Math.random() * (DELAY_MAX - DELAY_MIN + 1)) + DELAY_MIN;
                await wait(delay);
            }
        }
    }

    async function scrollAndUnsave() {
        let previousHeight = 0;
        let sameHeightCount = 0;

        while (true) {
            const links = await getUnsaveLinks();
            if (links.length === 0) break;

            await processLinks(links);

            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            await wait(2000);

            const currentHeight = document.body.scrollHeight;
            if (currentHeight === previousHeight) {
                sameHeightCount++;
                if (sameHeightCount >= 3) break;
            } else {
                sameHeightCount = 0;
                previousHeight = currentHeight;
            }
        }

        console.log(`Finished unsaving ${totalUnsaved} posts.`);

        setTimeout(() => location.reload(), 3000);
    }

    if (typeof $ === "undefined") {
        const script = document.createElement('script');
        script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        script.onload = scrollAndUnsave;
        document.head.appendChild(script);
    } else {
        scrollAndUnsave();
    }
})();
