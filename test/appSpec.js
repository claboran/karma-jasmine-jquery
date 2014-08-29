describe('console html content',function (){

	beforeEach(function () {
		jasmine.getFixtures().fixturesPath = 'base/view/';
		loadFixtures("index.html");
	});

	it('index html',function(){
		expect($("h2")).toBeInDOM();
		console.log("h2 text is :", $("h2").text());
		expect($("h2")).toContainText("this is index page");
	})
})