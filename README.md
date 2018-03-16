# Feed Reeder Testing
Using [Jasmine](http://jasmine.github.io/) write a number of tests against a pre-existing web-based application that reads RSS feeds.

## Test suites

#### RSS feeds suite
Test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
Test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
#### The menu suite
Test that ensures the menu element is hidden by default.
Test that ensures the menu changes visibility when the menu icon is clicked (menu is shown) and clicked again(menu is hidden).
#### Initial Entries suite
Test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
#### New Feed Selection suite
Test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

## Installation
Clone GitHub repository and open `index.html` file in browser. Jasmine test results are on the bottom of the Feed Reeder page.
