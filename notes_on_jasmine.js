
describe('basic matchers ', function(){
	it('tobe :: === ',function{
		expect(5).tobe(5,'Not a five') ;
		expect('5').not.tobe('5',"hey not a five string") ;
		expect({a:5,b:10}).not.tobe({a:5,b:10},'same object');
	});

	it('tobe :: === + object implementation',function{
	// behave similar to toEqual except for Objects and Arrays..
		expect(5).toEqual(5);
		expect('5').toEqual(5) // will fail ;

		// this will pass..
		expect([1,2,3]).toEqual([1,2,3]);
		expect({a:5,b:10}).toEqual({a:5,b:10});
		expect(function(){}).not.toEqual(function(){}) ;
	});

	it('regex exp',function(){
		expect('hello world').toMatch('hello');
		expect('hello world').toMatch(/WORLD/ A/i);
	});

	it('to be defined' ,function(){
		var a = 5 ;
		expect(a).toBeDefined();

		var b;
		expect(b).not.toBeDefined();

		var m = {} ;
		expect(m.a).not.toBeDefined();

	});

	it('to be undefined' ,function(){
		var a = 5 ;
		expect(a).not.toBeUndefined();

		var b;
		expect(b).toBeUndefined();

		var m = {} ;
		expect(m.a).toBeUnDefined();

	});

	it('to be null', function(done){
		var x = null , b;
		expect(x).toBeNull();
		expect(b).not.toBeUndefined() ;

		function async(cb){
			cb(null,'some paramater')
		}

		async(function(data,error){
			expect(data).not.toBeNull() ;
			done();
		});
	});
	it('tobetruthy',function(){
			expect('').not.toBeTruthy();
			expect([]).toBeTruthy();
			expect({}).toBeTruthy();
			expect(0).not.toBeTruthy();
			expect('0').toBeTruthy();
			expect(false).not.toBeTruthy();
		});

	it('tobefalsy',function(){
		expect('').toBeFalsy();
		expect([]).not.toBeFalsy();
		expect({}).not.toBeFalsy();
		expect(0).toBeTruthy();
		expect('0').not.toBeFalsy();
		expect('false').not.toBefalsy();
		expect(NaN).toBeFalsy();
		expect(undefined).toBeFalsy();
		expect(-1).toBeFalsy();
		expect(null).toBeFalsy();
	});

	it("contains for Array and like objects",function(done){
		expect([1,2,3]).not.toContain('3');
		expect([1,2,3]).not.toContain(undefined);
		expect(arguments).toContain(done);
		done() ;
	});

	// 
	it('toBeGreaterThan/toBeLessThan',function(){
		expect('5').toBeGreaterThan(3);
		expect(5).toBeLessThan(-Infinity) ;
	});

	// flaats to be consider..
	it('toBeCloseTo',function(){
		// the second argument is the precision.
		expect(1.2).toBeCloseTo(1,0); 
		expect(1.2).not.toBeCloseTo(1,1);

	});

	it('toThrows',function(){
		function throwsError(){
			throw new Error('Throws_Error ')
		}
		function notThrowsError(){}

		expect(throwsError).toThrow();
		expect(notThrowsError).not.toThrow();

	})

	it('throws error',function(){
		function throwsError(){
			throw new RangeError('Throws_Error ')
		}

		expect(throwsError).toThrowError('Throws_Error');
		expect(throwsError).toThrowError(/Error/);
		expect(throwsError).toThrowError(RangeError);
	});
});


describe('Custom Matchers',function(){
	it("Custom Matchers",function(){
			//jasmine.any() // matches instanceOf or typeof 
			expect({}).toEqual(jasmine.any(Object)) ;
			expect([]).toEqual(jasmine.any(Array)) ;
			expect(null).toEqual(jasmine.any(Object)) ;
			expect(5).toEqual(jasmine.any(Number)) ;
			expect(function(){}).toEqual(jasmine.any(Function)) ;
	});

	it('custom matchers',function(){
		var User = function(){} ;
		var user = new User();
		expect(user).toEqual(Jasmine.any(Object)) ;
	}) ;

	it('with prototypal inheritance',function(){
		var Person = function(){} ;
		var User = function(){Person.call(this)} ;
		User.prototype = Object.create(Person.prototype) ;
		User.prototype.constructor = User ;
		var user = new User() ;

		expect(user).toEqual(Jasmine.any(Object)) ;
		expect(user).toEqual(Jasmine.any(User)) ;
		expect(user).toEqual(Jasmine.any(Person)) ;

	});

	// expect anything othr the null or undefined .. 
	it('anything',function(){
		expect(true).toEqual(jasmine.anything());
		expect(false).toEqual(jasmine.anything());
		expect('').toEqual(jasmine.anything());
		expect(0).toEqual(jasmine.anything());
		expect(null).not.toEqual(jasmine.anything());
	}) ;

}) ;

describe('splic for containing anything',function(){
	beforeAll(function(){
		this.obj = { a : 10, b : 20} ;
	});
	it('contains a with 10',function(){
		expect(this.obj).toEqual(jasmine.objectContaining({a:10}));
	}) ;

	it('contain anything',function(){
		expect(this.obj).toEqual(jasmine.objectContaining( {a : jasmine.anything() } )) ;

		expect(this.obj).toEqual(jasmine.objectContaining( {a : jasmine.any(String) })) ;
	})
});

describe('splic for array',function(){
	beforeAll(function(){
		this.array = [ 10, 20, 30 ]
	});
	it('contains a with 10',function(){
		expect(this.array).toEqual(jasmine.arrayContaining([ 10,20])); // Order doesnot matter .. 
	}) ;

	it('contain anything',function(){
		expect(this.array).toEqual(jasmine.arrayContaining( a : jasmine.anything())) ;

		expect(this.obj).toEqual(jasmine.arrayContaining( a : jasmine.any(String))) ;
	})
});



/*Creating a custom typecheck */ 

var customType = {
	toBeType : function(util, customEqualityTester){
		compare : function(expected, actual, message) {
			var ret = {} ;
			if(typeof actual == 'string') {
				ret.done = (typeof actual == expected  )
			}else if(typeof actual == 'function'){
				ret.done = (instanceof actual == expected  )
			}

			return ret ;
		},
		negativeCompare : function(actual,message){
			return { 
				pass : !actual ,
				message : message + " not" 
			}
		}
	}
}

beforeEach(function(){
	jasmine.addMatchers(customType) ;
}) ;



// Basic Spying .. 

describe('a basic syping example' , function(){
	beforEach(function(){
		this.increment = function(number){
			++number ;
		}
		/*Note : when we spy on anything, it doesnt return the return value.*/
		sypOn(this,'increment') ;
	})

	it('check if function is called ', function(){
		this.increment(33) ;
		expect(this.increment.toHaveBeenCalled();
	});

	it('check the argument passed to increment function', function(){
		this.increment(33,'mark') ;
		expect(this.increment).toHaveBeenCalledWith(33,'mark') ;
		expect(this.increment).toHaveBeenCalledWith(jasmine.any(Number)) ;
	}) ;

	it('return value of spyied function is undefined' , function(){
		var next = this.increment() ;
		expect(next).toBeUndefined() ;
	}) ;

	it('spies on a function and call through', function(){
		this.increment.and.callThrough;
		var next = this.increment(33) ;
		expect(this.increment).toHaveBeenCalledWith(33) ;
		expect(next).toEqual(34) ;
	});

	it('spies on a function and any return value and underline fnction not called', 
			function(){
			this.increment.and.returnValue(99);
			var next = this.increment(33) ;
			expect(this.increment).toHaveBeenCalledWith(33) ;
			expect(next).toEqual(99) ;
			// return the spyied function to original form.
			this.increment.and.stub();
	});

	it('multiple function calling and tracking argument passed', function(){
		this.increment(33) ;
		this.increment(331) ;
		this.increment(323) ;

		expect(this.increment.calls.count()).toBe(3) ;
		expect(this.increment.calls.argsFor(1)).toEqual([33]) ;
	})

});
