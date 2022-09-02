# 🎭 Playwright

## [Documentation](https://playwright.dev) | [API reference](https://playwright.dev/docs/api/class-playwright/)

Playwright is a framework for Web Testing and Automation. It allows testing [Chromium](https://www.chromium.org/Home), [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [WebKit](https://webkit.org/) with a single API. Playwright is built to enable cross-browser web automation that is **ever-green**, **capable**, **reliable** and **fast**.

Headless execution is supported for all the browsers on all platforms. Check out [system requirements](https://playwright.dev/docs/library#system-requirements) for details.

Looking for Playwright for [Python](https://playwright.dev/python/docs/intro), [.NET](https://playwright.dev/dotnet/docs/intro), or [Java](https://playwright.dev/java/docs/intro)?

## Installation

First install Node.js

### Download Node.js

Binaries, installers, and source tarballs are available at
<https://nodejs.org/en/download/>.

#### Current and LTS releases

<https://nodejs.org/download/release/>

The [latest](https://nodejs.org/download/release/latest/) directory is an
alias for the latest Current release. The latest-_codename_ directory is an
alias for the latest release from an LTS line. For example, the
[latest-fermium](https://nodejs.org/download/release/latest-fermium/) directory
contains the latest Fermium (Node.js 14) release.

### Install all the dependencies

```Shell
# Run from your project's root directory
npm install

npx playwright install
```
That's it.

## Running the project

### Run all the tests

```Shell
# Run from your project's root directory
npx playwright test
```

### Run tests base on test file name

```Shell
# Run from your project's root directory
# Will run all the desktop tests
npx playwright test desktop

# Will run the desktop tests for hotel booking
npx playwright test desktop-hotel
```

### Run tests with options

```Shell
# Run from your project's root directory
# Will run the desktop test for hotel booking in head mode
npx playwright test desktop-hotel --headed

# Will run the desktop test for hotel booking in debug mode
npx playwright test desktop-hotel --debug

# Will run the desktop test for hotel booking in head mode 5 times
npx playwright test desktop-hotel --headed --repeated-each 5
```
More command line options [here](https://playwright.dev/docs/test-cli)

## Test Generator
Playwright comes with the ability to generate tests out of the box.

### Generate tests
Run codegen and perform actions in the browser. Playwright will generate the code for the user interactions. codegen will attempt to generate resilient text-based selectors.

```Shell
# Run from your project's root directory
npx playwright codegen traveloka.com
```

### Preserve authenticated state
Run codegen with --save-storage to save cookies and localStorage at the end of the session. This is useful to separately record authentication step and reuse it later in the tests.
```Shell
# Run from your project's root directory
npx playwright codegen --save-storage=auth.json traveloka.com
# Perform authentication and exit.
# auth.json will contain the storage state.
```
Run with --load-storage to consume previously loaded storage. This way, all cookies and localStorage will be restored, bringing most web apps to the authenticated state.
```Shell
# Run from your project's root directory
npx playwright open --load-storage=auth.json traveloka.com
npx playwright codegen --load-storage=auth.json traveloka.com
# Perform actions in authenticated state.
```

### Emulate devices
You can record scripts and tests while emulating a device.
```Shell
# Run from your project's root directory
# Emulate iPhone 11.
npx playwright codegen --device="iPhone 11" traveloka.com
```

### Emulate other
You can also record scripts and tests while emulating various browser properties.
```Shell
# Run from your project's root directory
# Emulate screen size and color scheme.
npx playwright codegen --viewport-size=800,600 --color-scheme=dark twitter.com

# Emulate timezone, language & location
# Once page opens, click the "my location" button to see geolocation in action
npx playwright codegen --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" maps.google.com
```
[Codegen documentation](https://playwright.dev/docs/codegen)

## Resources

* [Documentation](https://playwright.dev/docs/intro)
* [API reference](https://playwright.dev/docs/api/class-playwright/)