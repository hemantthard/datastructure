import Utils from "./../../src/utils.js" ;


describe("A suite to validate Utility function ", function() {


	describe('Validation for Utility isNumber function',function(){
		it('value is number', function(){
			expect(Utils.isNumber(10)).toBe(true) ;
		});

		it('value is string number', function(){
			expect(Utils.isNumber("10")).toBe(true) ;
		});

		it('value is NaN', function(){
			expect(Utils.isNumber(NaN)).toBe(false) ;
		});

		it('value is string',function(){
			expect(Utils.isNumber('abs')).toBe(false);
		});

		it('value is 0',function(){
			expect(Utils.isNumber(0)).toBe(true);
		})


	})

	describe('Validation for Utility isEmpty function',function(){
		var x ;
		it('value is not defined', function(){
			expect(Utils.isEmpty(x)).toBe(true) ;
		});

		var y = null ;
		it('value is null ', function(){
			expect(Utils.isEmpty(y)).toBe(true) ;
		});

		var z = undefined ;
		it('value is undefined ', function(){
			expect(Utils.isEmpty(z)).toBe(true) ;
		});

		it('value is -1 ', function(){
			expect(Utils.isEmpty(-1)).toBe(false) ;
		});

		it('value if 0', function(){
			expect(Utils.isEmpty(0)).toBe(false) ;
		});

		it('value if empty object', function(){
			expect(Utils.isEmpty({})).toBe(false) ;
		});

		it('value if empty array', function(){
			expect(Utils.isEmpty([])).toBe(false) ;
		});
	});

	describe('Validation for utility isNull function', function(){
		var x ;
		it('value is not defined', function(){
			expect(Utils.isNull(x)).toBe(false) ;
		});
		
		var y = null ;
		it('value is null ', function(){
			expect(Utils.isNull(y)).toBe(true) ;
		});

		it('value is 0 ', function(){
			expect(Utils.isNull(0)).toBe(false) ;
		});

		it('value is -1 ', function(){
			expect(Utils.isNull(-1)).toBe(false) ;
		});

		it('value is NaN ', function(){
			expect(Utils.isNull(NaN)).toBe(false) ;
		});

		it('value is empty object ', function(){
			expect(Utils.isNull({})).toBe(false) ;
		});

		it('value is Boolean false', function(){
			expect(Utils.isNull(false)).toBe(false) ;
		});
		
	} );

	describe('Validation for utility isUndefined function', function(){
		var x ;
		it('value is not defined', function(){
			expect(Utils.isUndefined(x)).toBe(true) ;
		});

		var y = null ;
		it('value is null ', function(){
			expect(Utils.isUndefined(y)).toBe(false) ;
		});

		var z = undefined ;
		it('value is undefined', function(){
			expect(Utils.isUndefined(z)).toBe(true) ;
		});

		it('value is 0 ', function(){
			expect(Utils.isUndefined(0)).toBe(false) ;
		});

		it('value is -1 ', function(){
			expect(Utils.isUndefined(-1)).toBe(false) ;
		});

		it('value is NaN ', function(){
			expect(Utils.isUndefined(NaN)).toBe(false) ;
		});

		it('value is empty object ', function(){
			expect(Utils.isUndefined({})).toBe(false) ;
		});

		it('value is Boolean false', function(){
			expect(Utils.isUndefined(false)).toBe(false) ;
		});

	} );

	describe('Validate isNumber function' , function(){
		it("isNumber is a number ", function() {
		    expect(Utils.isNumber(12)).toBe(true);
		});

		it("isNumber is a numeric string ", function() {
		    expect(Utils.isNumber("12")).toBe(true);
		});

		it("isNumber is a alpa string ", function() {
		    expect(Utils.isNumber("asd")).toBe(false);
		});

		it("isNumber is a undefined ", function() {
		    expect(Utils.isNumber()).toBe(false);
		});

		it("isNumber is a null ", function() {
		    expect(Utils.isNumber(null)).toBe(false);
		});

		it("isNumber is a Object ", function() {
		    expect(Utils.isNumber({a:10})).toBe(false);
		});

		it("isNumber is a function ", function() {
		    expect(Utils.isNumber(function(){})).toBe(false);
		});

	}) ;


	describe('Validate isArray function' , function(){
		it("if input is a string, isArray should return false ", function() {
		    expect(Utils.isArray("12")).toBe(false);
		});

		it("if input is an argument, isArray should return false", function() {
		    expect(Utils.isArray(arguments)).toBe(false);
		});

		it("if input is array, isArray should return true", function() {
		    expect(Utils.isArray([])).toBe(true);
		});

		it("if input is Array object, isArray should return true", function() {
		    expect(Utils.isArray(new Array())).toBe(true);
		});

		it("if input is undefined, isArray should return false", function() {
		    expect(Utils.isArray(undefined)).toBe(false);
		});

		it("if input is null, isArray should return false", function() {
		    expect(Utils.isArray(null)).toBe(false);
		});

		it("if input is an object, isArray should return false", function() {
		    expect(Utils.isArray({})).toBe(false);
		});

	})

  
});