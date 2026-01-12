# Project File Structure Overview

This document provides a brief overview of the files and directories in this project and their responsibilities.

## Root Directory

- **`.gitattributes`**: Defines attributes for pathnames in Git.
- **`.gitignore`**: Specifies intentionally untracked files to be ignored by Git.
- **`license`**: Contains the software license for the project.
- **`package.json`**: The heart of the Node.js project, defining metadata, dependencies, and scripts.
- **`README.md`**: The primary documentation for users and developers.
- **`yarn.lock`**:  Locks down the versions of dependencies for consistent installs across machines.

## `assets/`

This directory contains static image assets used within the application, such as screenshots for different operating systems.

- **`cargo_mac_home.png`, `cargo_mac_medium.png`, `cargo_mac_tabs.png`**: Screenshots of the application on macOS.
- **`cargo_win_github.png`, `cargo_win_tabs.png`**: Screenshots of the application on Windows.

## `docs/`

This directory holds the files for the project's documentation website.

- **`CNAME`**: For custom domain mapping on GitHub Pages.
- **`index.html`**: The main page of the documentation website.
- **`styles.css`**: The stylesheet for the documentation website.
- **`example.png`**, **`favicon.ico`**: Images and icon for the documentation website.

## `src/`

This is the main source code directory for the application.

- **`index.html`**: The main HTML file that serves as the entry point for the application's UI.
- **`index.js`**: The main JavaScript entry point, likely responsible for initializing the application.
- **`view.js`**: Manages the overall view and rendering of the application.
- **`window.js`**: Handles the creation and management of the application's browser window.

### `src/pages/`

This subdirectory contains the HTML files for different static pages within the application.

- **`about.html`**: The "About" page.
- **`crash.html`**: A page displayed when the application encounters a crash.
- **`error.html`**: A generic error page.
- **`home.html`**: The default home/welcome page.

### `src/static/`

This subdirectory contains static assets that are used by the application's frontend.

- **`icon.icns`, `icon.ico`, `icon.png`**: Application icons for different platforms.
- **`normalize.js`**: A script to normalize CSS for cross-browser consistency.
- **`nprogress.css`**: CSS for the nprogress loading bar.
- **`tld.js`**: A library for parsing top-level domains.
- **`vkey.js`**: A library for handling virtual key codes.
- **`simplebar/`**: Contains the SimpleBar library for custom scrollbars.
- **`theme/`**: Contains CSS files for different application themes (dark and light).

### `src/utils/`

This subdirectory contains general utility scripts.

- **`platform.js`**: A utility to detect the current operating system.

### `src/view/`

This subdirectory contains JavaScript modules responsible for managing different parts of the application's view.

- **`alert.js`**: Handles displaying alerts or dialogs.
- **`history.js`**: Manages the user's browsing history.
- **`keyboard.js`**: Manages keyboard shortcuts and input.
- **`menu.js`**: Creates and manages the application's menu.
- **`onboarding.js`**: Handles the first-time user onboarding experience.
- **`progress.js`**: Controls the progress bar.
- **`tabs.js`**: Manages the application's tab system.
- **`titlebar.js`**: Manages the custom title bar of the window.
- **`webview.js`**: Manages the webview container where web content is displayed.

#### `src/view/utils/`

This subdirectory contains utility scripts specifically for the view modules.

- **`betterURL.js`**: A utility for parsing and manipulating URLs.
- **`dotify.js`**: A small utility, likely for string manipulation.
- **`isCargoURL.js`**: A utility to check if a given URL is a Cargo-related URL.
- **`pages.js`**: A utility for managing the static pages.
- **`uuid.js`**: A utility for generating universally unique identifiers.
