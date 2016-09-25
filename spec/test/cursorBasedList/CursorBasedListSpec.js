import CursorBasedList from './../../../src/cursorBasedList/CursorBasedList' ;


describe('Cursor Based List Implementation ::: ', function(){
	describe('addFirst function ::', function(){
		beforeEach(function(){
			this.list = new CursorBasedList(5) ;
		});

		it('Add first element to the list', function(){
			this.list.addFirst('a');
			expect(this.list.getElementAtPosition(1)).toBe('a') ;
		});

		it('Add 3 element to the list and check first element', function(){
			this.list.addFirst('a');
			this.list.addFirst('b');
			this.list.addFirst('c');
			expect(this.list.getElementAtPosition(1)).toBe('c') ;
		});

		it('Add 3 element to the list and check second element', function(){
			this.list.addFirst('a');
			this.list.addFirst('b');
			this.list.addFirst('c');
			expect(this.list.getElementAtPosition(2)).toBe('b') ;
		});

		it('Add 3 element to the list and check last element', function(){
			this.list.addFirst('a');
			this.list.addFirst('b');
			this.list.addFirst('c');
			expect(this.list.getElementAtPosition(3)).toBe('a') ;
		});
	});


	describe('addLast function ::', function(){
		beforeEach(function(){
			this.list = new CursorBasedList(5) ;
		});

		it('Add first element to the list', function(){
			this.list.addLast('a');
			expect(this.list.getElementAtPosition(1)).toBe('a') ;
		});

		it('Add 3 element to the list and check first element', function(){
			this.list.addLast('a');
			this.list.addLast('b');
			this.list.addLast('c');
			expect(this.list.getElementAtPosition(1)).toBe('a') ;
		});

		it('Add 3 element to the list and check second element', function(){
			this.list.addLast('a');
			this.list.addLast('b');
			this.list.addLast('c');
			expect(this.list.getElementAtPosition(2)).toBe('b') ;
		});

		it('Add 3 element to the list and check last element', function(){
			this.list.addLast('a');
			this.list.addLast('b');
			this.list.addLast('c');
			expect(this.list.getElementAtPosition(3)).toBe('c') ;
		});
	});

	describe('add function ::', function(){
		beforeEach(function(){
			this.list = new CursorBasedList(5) ;
		});

		it('Add first element to the list', function(){
			this.list.add('a');
			expect(this.list.getElementAtPosition(1)).toBe('a') ;
		});

		it('Add 3 element to the list and check first element', function(){
			this.list.add('a',0);
			this.list.add('b',0);
			this.list.add('c',0);
			expect(this.list.getElementAtPosition(1)).toBe('c') ;
		});

		it('Add 3 element to the list and check second element', function(){
			this.list.add('a',0);
			this.list.add('b',1);
			this.list.add('c',0);
			expect(this.list.getElementAtPosition(2)).toBe('a') ;
		});

		it('Add 3 element to the list and check last element', function(){
			this.list.add('a',0);
			this.list.add('b',0);
			this.list.add('c',2);
			expect(this.list.getElementAtPosition(3)).toBe('c') ;
		});
	});

	describe('add 5 element at different position and test 1 ::', function(){
		beforeEach(function(){
			this.list = new CursorBasedList(5) ;
			this.list.add('a',0);
			this.list.add('b',0);
			this.list.add('c',1);
			this.list.add('d',0);
			this.list.add('e',3);
		});

		it('First element', function(){
			expect(this.list.getElementAtPosition(1)).toBe('d') ;
		});

		it('Second element', function(){
			expect(this.list.getElementAtPosition(2)).toBe('b') ;
		});
		it('Third element', function(){
			expect(this.list.getElementAtPosition(3)).toBe('c') ;
		});
		it('fourth element', function(){
			expect(this.list.getElementAtPosition(4)).toBe('e') ;
		});
		it('fifth element', function(){
			expect(this.list.getElementAtPosition(5)).toBe('a') ;
		});
	});

	describe('add 5 element at different position and test 2 ::', function(){
		beforeEach(function(){
			this.list = new CursorBasedList(5) ;
			this.list.add('a',0);
			this.list.add('b');
			this.list.add('c',0);
			this.list.add('d',1);
			this.list.add('e',2);
		});

		it('First element', function(){
			expect(this.list.getElementAtPosition(1)).toBe('c') ;
		});

		it('Second element', function(){
			expect(this.list.getElementAtPosition(2)).toBe('d') ;
		});

		it('Third element', function(){
			expect(this.list.getElementAtPosition(3)).toBe('e') ;
		});

		it('fourth element', function(){
			expect(this.list.getElementAtPosition(4)).toBe('a') ;
		});

		it('fifth element', function(){
			expect(this.list.getElementAtPosition(5)).toBe('b') ;
		});
	});

	describe('removeFirst function ::', function(){
		beforeAll(function(){
			this.list = new CursorBasedList(5) ;
			this.list.add('a');
			this.list.add('b');
			this.list.add('c');
		});

		it('remove first element to the list', function(){
			var x = this.list.removeFirst();
			expect(this.list.getElementAtPosition(1)).toBe('b') ;
		});

		it('remove second element to the list', function(){
			var x = this.list.removeFirst();
			expect(this.list.getElementAtPosition(1)).toBe('c') ;
		});

		it('remove Last element to the list', function(){
			var x = this.list.removeFirst();
			expect(this.list.getElementAtPosition(1)).toBeNull() ;
		});
	});

	describe('removeLast function ::', function(){
		beforeAll(function(){
			this.list = new CursorBasedList(5) ;
			this.list.add('a');
			this.list.add('b');
			this.list.add('c');
		});

		it('removeLast element on this list', function(){
			this.list.removeLast();
			var size = this.list.getSize() ;
			expect(this.list.getElementAtPosition(size)).toBe('b') ;
		});

		it('removeLast element on this list', function(){
			this.list.removeLast();
			var size = this.list.getSize() ;
			expect(this.list.getElementAtPosition(size )).toBe('a') ;
		});

		it('removeLast element on this list', function(){
			this.list.removeLast();
			var size = this.list.getSize() ;
			expect(this.list.getElementAtPosition(size)).toBeNull() ;
		});
	});


	describe('remove function test 1 ::', function(){
		beforeAll(function(){
			this.list = new CursorBasedList(5) ;
			this.list.add('a');
			this.list.add('b');
			this.list.add('c');
			this.list.add('d');
			this.list.add('e');
		});

		it('remove 3rd element on ths list of size 5', function(){
			var elementRemoved = this.list.remove(3);
			var size = this.list.getSize() ;
			expect(this.list.getSize()).toBe(4) ;
			expect(elementRemoved).toBe('c') ;
			expect(this.list.getElementAtPosition(2)).toBe('b') ;
		});

		it('remove 2nd element on ths list of size 4', function(){
			var elementRemoved = this.list.remove(2);
			var size = this.list.getSize() ;
			expect(this.list.getSize()).toBe(3) ;
			expect(elementRemoved).toBe('b') ;
			expect(this.list.getElementAtPosition(1)).toBe('a') ;
			expect(this.list.getElementAtPosition(2)).toBe('d') ;
		});

		it('remove 1st element on ths list of size 3', function(){
			var elementRemoved = this.list.remove(1);
			var size = this.list.getSize() ;
			expect(this.list.getSize()).toBe(2) ;
			expect(elementRemoved).toBe('a') ;
			expect(this.list.getElementAtPosition(1)).toBe('d') ;
			expect(this.list.getElementAtPosition(2)).toBe('e') ;
		});

		it('remove last element on ths list of size 2', function(){
			var elementRemoved = this.list.remove(1);
			var size = this.list.getSize() ;
			expect(this.list.getSize()).toBe(1) ;
			expect(elementRemoved).toBe('d') ;
			expect(this.list.getElementAtPosition(1)).toBe('e') ;
		});

		it('remove last element on ths list of size 1', function(){
			var elementRemoved = this.list.remove(0);
			var size = this.list.getSize() ;
			expect(this.list.getSize()).toBe(0) ;
			expect(elementRemoved).toBe('e') ;
			expect(this.list.getElementAtPosition(1)).toBeNull() ;
		});
	});

})