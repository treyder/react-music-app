describe('app main search function', function() {

    
    browser.waitForAngularEnabled(false);

    it("search for LOTR", function() {
        browser.get("/");
        element(by.id("searchText")).sendKeys("lord");
        element(by.id("submitButton")).click().then(() => {
            browser.sleep(3000);
            let searchResultCount = element.all(by.css(".movieItemList")).then(function(items) {
                expect(items.length).toBe(4);
            });
        });
    });
});