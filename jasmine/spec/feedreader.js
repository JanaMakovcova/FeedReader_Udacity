/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against application.
 */

/* Our tests are within the $() function,
 * since some of these tests may require DOM elements.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* It tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('allFeeds is defined and not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         * Compares if length of url is not 0.
         */
         it('url of all feeds defined and not empty', function() {
           allFeeds.forEach(function(feed) {
               expect(feed.url).toBeDefined();
               expect(feed.url.length).not.toBe(0);
           });
         });
        /* Test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name of all feeds defined and not empty', function() {
           allFeeds.forEach(function(feed) {
               expect(feed.name).toBeDefined();
               expect(feed.name.length).not.toBe(0);
           });
         });
    });
    /* Test suite for menu
    */
    describe('The menu', function() {
      var bodyElement;
      beforeEach(function(){
        bodyElement = document.getElementsByTagName('body')[0];
      });
        /* Test that ensures the menu element is
         * hidden by default. Checking if body has class 'menu-hidden'
         */
         it('hidden menu by default', function() {
           expect($(bodyElement).hasClass('menu-hidden')).toBe(true);
         });
         /*Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again. Checking if body class 'menu-hidden'
          * dissapear when menuIcon is clicked and appear when clicked again.
          */
          it('visibility menu', function() {
            var menuIcon = document.getElementsByClassName('menu-icon-link')[0];
            expect($(bodyElement).hasClass('menu-hidden')).toBe(true);
            menuIcon.click();
            expect($(bodyElement).hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($(bodyElement).hasClass('menu-hidden')).toBe(true);
          });
        });
      /* Test suite for entries to Feeds
      */
      describe('Initial Entries', function() {
      /*loadFeed() is asynchronous so this test require
      * the use of Jasmine's beforeEach and asynchronous done() function.
      */
        beforeEach(function(done){
          loadFeed(0, function(){
            done();
          });
        });
        /* save first element with class 'feed' to variable container
        */
        var container = document.getElementsByClassName('feed')[0];
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Checking if variable container has any child nodes
         */
        it('loadFeed complete', function(done) {
        expect(container.hasChildNodes()).toBe(true);
        expect($(container.firstElementChild.firstElementChild).hasClass('entry')).toBe(true);
        done();
        });
      });
      /* Test suite for new feed selection
      */
       describe('New Feed Selection', function() {
         var firstFeed, secondFeed;
         /*loadFeed() is asynchronous so this test require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         Saving 2 different loads of feed to variables.
         */
         beforeEach(function(done){
           loadFeed(0, function(){
             firstFeed = document.getElementsByClassName('feed')[0].innerHTML;
             loadFeed(1, function(){
               secondFeed = document.getElementsByClassName('feed')[0].innerHTML;
               done();
             });
           });
         });

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('newFeed changed', function(done) {
        expect(firstFeed).not.toBe(secondFeed);
        done();
        });
       });
}());
