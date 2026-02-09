# Auto Unsave Reddit Posts

A userscript that fully automates the process of unsaving all posts on **old.reddit.com**. Designed to work with Tampermonkey, Greasemonkey, and Violentmonkey. Just copy and paste the script into your userscript manager, no cloning or installation needed.

## Features

- Automatically finds all saved posts on your old Reddit account.
- Unsaves posts in batches to avoid overloading Reddit.
- Randomized delays between unsaves to simulate natural usage.
- Scrolls through the page automatically until all posts are processed.
- Fully automatic once started.

## Installation

1. Install a userscript manager in your browser if you don't already have one:
   - [Tampermonkey](https://www.tampermonkey.net/)
   - [Greasemonkey](https://www.greasespot.net/)
   - [Violentmonkey](https://violentmonkey.github.io/)

2. Open the script in your browser: [`auto-unsave-reddit.user.js`](./auto-unsave-reddit.user.js)

3. Copy the entire script.

4. In your userscript manager, create a new script and paste the copied code.

5. Save and open your saved posts page on old Reddit (e.g., `https://old.reddit.com/user/YOUR_USERNAME/saved`).

6. The script will automatically start unsaving posts.

> Works on Firefox, Chrome, Edge, and other modern browsers.

## Notes

- The script is designed for **old.reddit.com** and may not work on the new Reddit layout.
- Unsaves posts in batches of 50 with randomized delays to avoid triggering rate limits.
- The script does not require page reloads to continue unsaving all posts.

## Disclaimer

Use at your own risk. Only run this on your own account. The author is not responsible for any account issues or rate-limiting actions taken by Reddit.

## Contributing
This is a personal project and does not currently accept contributions. You are welcome to fork it and make improvements for your own use, as I am unlikely to update it in the future.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Zakaboy26/auto-unsave-reddit/blob/main/LICENSE) file for details.

