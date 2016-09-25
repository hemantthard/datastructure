import Utils from "./../utils" ;
import Node from "./../singleEndedNode" ;


const getNewNode = (element) => {
	return new Node(element) ;
}

export default class CursorBasedList {
	constructor(spaceLength) {
		this.elements = new Array(spaceLength) ;
		this.head = -1 ; // stores the position of head index in array. 

		/* This keeps track of the last position 
			in the array where element can be added.
		*/
		this.__lastPos = -1 ; 
		
		this.__maxlength = spaceLength;
		this.__count = 0 ; // this stores the count of element in the list
	}

	getElementAtPosition(position){
		var node = this.__getNodeAtPosition(position) ;
		if(node){
			return node.getElement() ;
		}
		return null ;
	}

	addFirst(element) { 
		const n = getNewNode(element);
		if( this.head != -1 ) n.setNextNode(this.head)
		var index = this.__addToList(n) ;
		this.head = index  ;
	}

	addLast(element) {
		var lastPos = this.__lastPos, index = -1 , {elements} = this;
		index = this.__addToList( getNewNode(element) ) ;
		if(lastPos == -1 ){
			this.head = index;
		}else{
			elements[lastPos].setNextNode(index) ;	
		}	
	}

	add(element, position = null) {
		
		if(Utils.isNull(position)) {
			return this.addLast(element) ;
		}
		if( !Utils.isNumber( position) ) {
			throw new Error("Position should be a number " + position) ;
		}
		position = Utils.getNumber(position) ;

		if(position == 0) {
			return this.addFirst(element) ;
		}

		var nodeAtPreviousPos = this.__getNodeAtPosition(position) ;
		if(nodeAtPreviousPos){
			var n = getNewNode(element) ;
			var index = this.__addToList(n) ;
			n.setNextNode(nodeAtPreviousPos.getNextNode()) ;
			nodeAtPreviousPos.setNextNode(index);
		}

	}

	removeFirst(){
		var head = this.head , position = null, {elements} = this, 
		node = null   ;
		if(head != -1) { 
			var node = elements[head] ;
			position = elements[head].getNextNode();
			this.__removeFromList(head) ;
			this.head = position ;
			return node.getElement();
		}
		return null;
	}

	removeLast() {
		return this.remove();
	}

	remove(position = this.__count ) {

		if(position <= 1){
			return this.removeFirst();
		}
		
		var {head , elements }  = this , count = this.__count, position ,
			 prevNode, nextNode , nodeToDelete , positionOfNextNode ;
		if(!Utils.isEmpty(head) ) {
			prevNode = this.__getNodeAtPosition( position - 1 ) ;
			if(!Utils.isNull(prevNode)) {
				position = prevNode.getNextNode() ;
				nodeToDelete = elements[position] ;
				if(!Utils.isNull(nodeToDelete)){
					positionOfNextNode = nodeToDelete.getNextNode() ;
					this.__removeFromList(position) ;	
					prevNode.setNextNode(positionOfNextNode);
					return nodeToDelete.getElement() ;
				}
			}
		}
		return null;
	}

	getSize(){
		return this.__count ;
	}

	// this is to get the position of an element in cursor based list
	__getPositionOfElement(element) {
		const headPos = this.head, elements = this.elements ;
		let currentPos = headPos, currentNode = elements[currentPos] ;

		if(!Utils.isEmpty(elements)){
			while(currentNode) {
				if(currentNode.getElement()  === element ){
					break;
				}
				currentPos = elements[currentPos].getNextNode() ;
				currentNode = elements[currentPos]
			}
		};

		if(currentPos) {
			return currentPos ;
		}else{
			return null ;
		}
	}

	/*Position starts with 1 */
	__getNodeAtPosition(position) {

		const headPos = this.head, elements = this.elements ;
		let currentCount = 0 , currentPos = headPos ;

		if(!Utils.isUndefined(elements)){
			while(currentCount < (position - 1) && 
					elements[currentPos] && 
					elements[currentPos].hasReferenceToNextNode() ) {
				currentPos = elements[currentPos].getNextNode() ;
				currentCount++ ;
			}
		};

		if(currentCount == position -1 ) {
			return elements[currentPos] ;
		}else{
			return null ;
		}
		
	}

	__addToList(node){
		this.elements[++this.__lastPos] = node ;
		this.__count++ ;
		return this.__lastPos ;
	}

	__removeFromList(position) {
		this.elements[position] = null ;
		this.__count-- ;
	}

	__reshuffel(){
		var {head, elements} = this ;
		 
	}

	
}
