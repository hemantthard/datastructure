import SingleEndedNode from "./../../src/singleEndedNode" ;

describe('SingleEndedNode Test',function(){

	describe('New Node creation',function(){

		beforeAll(function(){
			this.node = new SingleEndedNode('first_node') ;
		});

		it('element is present and not undefined ' , function(){
			expect(this.node.getElement()).toBe('first_node') ;
		});

		it('nextNode is null' , function(){
			expect(this.node.getNextNode()).toBe(null) ;
		});

		it('hasReferenceToNextNode is false ' , function(){
			expect(this.node.hasReferenceToNextNode()).toBe(false) ;
		});

	}) ;


	describe('Check for node reference',function(){

		beforeAll(function(){
			this.firstNode = new SingleEndedNode('first_node') ;
			this.secondNode = new SingleEndedNode('second_node') ;

			this.firstNode.setNextNode(this.secondNode) ;
		});

		it('First node points to next node',function(){
			expect(this.firstNode.getNextNode()).toBe(this.secondNode) ;
		});

		it('firstNode has reference to next node' , function(){
			expect(this.firstNode.hasReferenceToNextNode()).toBe(true) ;
		});

	}) ;

	describe('Check for node delete',function(){
		beforeAll(function(){
			var firstNode = new SingleEndedNode('first_node') ;
			var secondNode = new SingleEndedNode("second_node");
			var thirdNode = new SingleEndedNode("third_node") ;

			firstNode.setNextNode(secondNode) ;
			secondNode.setNextNode(thirdNode) ;

			this.firstNode = firstNode;
			this.secondNode = secondNode;
			this.thirdNode= thirdNode ;
		}) ;

		
		it('delete thirdNode',function(){
			expect(this.secondNode.deleteNextNode()).toBe(this.thirdNode);
			expect(this.secondNode.getNextNode()).toBe(null) ;
			expect(this.secondNode.hasReferenceToNextNode()).toBe(false) ;
		})
	})
	
	


})