import LinkedList from './../../src/LinkedList' ;

describe('Linked List Implementation ::: ',function(){
	describe('function addFirst ::: ',function() {
		beforeEach(function(){
			this.linkedList = new LinkedList() ;
		});

		it('insert first element to new linked list',function(){
			expect(this.linkedList.addFirst('a')).toBe(true) ;
		});

		it('Check size of the linked list after adding first element',function(){
			this.linkedList.addFirst('a') ;
			expect(this.linkedList.getSize()).toBe(1) ;
		}) ;

		it('insert 2 element and check size',function(){
			this.linkedList.addFirst('a') ;
			this.linkedList.addFirst('b') ;
			expect(this.linkedList.getSize()).toBe(2) ;
		}) ;

		it('insert 2 element and check Head Node',function(){
			this.linkedList.addFirst('a') ;
			this.linkedList.addFirst('b') ;
			expect(this.linkedList.getElementAtPosition(0)).toBe('b') ;
		}) ;

		it('insert 2 element and check second Node',function(){
			this.linkedList.addFirst('a') ;
			this.linkedList.addFirst('b') ;
			expect(this.linkedList.getElementAtPosition(1)).toBe('a') ;
		}) ;
	});

	describe('function addLast ::: ',function() {
		beforeEach(function(){
			this.linkedList = new LinkedList() ;
		});

		it('insert last element to new linked list',function(){
			expect(this.linkedList.addLast('a')).toBe(true) ;
		});

		it('Check size of the linked list after adding first element',function(){
			this.linkedList.addLast('a') ;
			expect(this.linkedList.getSize()).toBe(1) ;
		}) ;

		it('insert 2 element and check size',function(){
			this.linkedList.addLast('a') ;
			this.linkedList.addLast('b') ;
			expect(this.linkedList.getSize()).toBe(2) ;
		}) ;

		it('insert 2 element and check Head Node',function(){
			this.linkedList.addLast('a') ;
			this.linkedList.addLast('b') ;
			expect(this.linkedList.getElementAtPosition(0)).toBe('a') ;
		}) ;

		it('insert 2 element and check second Node',function(){
			this.linkedList.addLast('a') ;
			this.linkedList.addLast('b') ;
			expect(this.linkedList.getElementAtPosition(1)).toBe('b') ;
		}) ;
	});

	describe('function add ::: ',function(){
		beforeEach(function(){
			this.linkedList = new LinkedList() ;
		});

		it('insert element at postion 2 of empty list should throw exception', function(){
			expect(this.linkedList.add.bind(this.linkedList,'a',2)).toThrow() ;
		});

		it('Element on empty list without passing postion parameter should insert at first position ', function(){
			this.linkedList.add('a') ;
			expect(this.linkedList.getElementAtPosition(0)).toBe('a') ;
		});

		it('Element on list without passing postion parameter should insert at last position ', function(){
			this.linkedList.add('a') ;
			this.linkedList.add('b') ;
			this.linkedList.add('c') ;
			expect(this.linkedList.getElementAtPosition(2)).toBe('c') ;
		});

		it('Insert element at position 1 and check element',function(){
			this.linkedList.add('a') ;
			this.linkedList.add('b') ;
			this.linkedList.add('c') ;
			this.linkedList.add('x',1);

			expect(this.linkedList.getElementAtPosition(1)).toBe('x');
		});
	});

	describe('function removeFirst ::: ',function(){

		beforeEach(function(){
			this.linkedList = new LinkedList() ;
		});

		it('return false when list is empty',function(){
			expect(this.linkedList.removeFirst()).toBe(null) ;
		});

		it('return removed element when only one element is present on the list',function(){
			this.linkedList.addFirst('a') ;
			expect(this.linkedList.removeFirst()).toBe('a') ;
		});

		it('expect head to point to null after deleting only element of the list',function(){
			this.linkedList.addFirst('a') ;
			this.linkedList.removeFirst();
			expect(this.linkedList.head).toBe(null) ;
		});

		it('return removed element when more than one element is present on the list',function(){
			this.linkedList.addFirst('a') ;
			this.linkedList.addFirst('b') ;
			expect(this.linkedList.removeFirst()).toBe('b') ;
		});

	});

	describe('function removeLast ::: ',function(){

		beforeEach(function(){
			this.linkedList = new LinkedList() ;
		});

		it('return false when list is empty',function(){
			expect(this.linkedList.removeLast()).toBe(null) ;
		});

		it('return removed element when only one element is present on the list',function(){
			this.linkedList.addLast('a') ;
			expect(this.linkedList.removeLast()).toBe('a') ;
		});

		it('expect head to point to null after deleting only element of the list',function(){
			this.linkedList.addLast('a') ;
			this.linkedList.removeLast();
			expect(this.linkedList.head).toBe(null) ;
		});

		it('return removed element when more than one element is present on the list',function(){
			this.linkedList.addLast('a') ;
			this.linkedList.addLast('b') ;
			expect(this.linkedList.removeLast()).toBe('b') ;
		});
	});

	describe('function remove ::: ',function(){

		beforeEach(function(){
			this.linkedList = new LinkedList() ;
		});

		it('return false when list is empty',function(){
			expect(this.linkedList.remove(0)).toBe(null) ;
		});

		it('return removed element when only one element is present on the list',function(){
			this.linkedList.add('a',0) ;
			expect(this.linkedList.remove(0)).toBe('a') ;
		});

		it('expect head to point to null after deleting only element of the list',function(){
			this.linkedList.add('a',0) ;
			this.linkedList.remove(0);
			expect(this.linkedList.head).toBe(null) ;
		});

		it('return removed element when more than one element is present on the list',function(){
			this.linkedList.add('a',0) ;
			this.linkedList.add('b',0) ;
			expect(this.linkedList.remove(0)).toBe('b') ;
		});

		it('return removed element when position is the middle of list',function(){
			this.linkedList.add('a',0) ;
			this.linkedList.add('b',0) ;
			this.linkedList.add('c',0) ;
			expect(this.linkedList.remove(1)).toBe('b') ;
		});
	});
	
});