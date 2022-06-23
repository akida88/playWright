Feature('add in linkedin');

Scenario('Test linkedin', ({ I }) => {
	I.amOnPage("https://www.linkedin.com");
	I.click("text=Jobs");
	I.fillField('[placeholder="Search job titles or companies"]',"Linkmobility");
	I.fillField('[placeholder="Location"]', 'Sofia, Sofia City, Bulgaria');
	I.pressKey("Enter");
	I.wait(2);
	I.click(locate('a').withText('Product Owner'));
	I.wait(2);
	I.click(locate('a').withText("Apply on company website"));
	I.changeTab(2);
	// I.switchToNextTab(2);
	// I.seeInCurrentUrl("https://careers.linkmobility.com/apply/product-owner/c7cmy");

});
