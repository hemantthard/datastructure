import Utils from "./utils" ;
import Node from "./singleEndedNode"


function LinkedList(){
	this.head = null ;
	this.__size = 0 ;
}

LinkedList.prototype.__incrementSize = function(){
	return ++this.__size ;
}

LinkedList.prototype.__decrementSize = function(){
	return this.__size > 0 ? --this.__size : -1  ;
}

LinkedList.prototype.getSize = function(){
	return this.__size
}

LinkedList.prototype.__getLastNode =function(){
	return this.__getNodeAtPosition(this.getSize() - 1);  ;
}

LinkedList.prototype.__createNode = function(element){
	return  new Node(element) ;
}

/* Insert a new Node after 'node' .. */
LinkedList.prototype.__addNextNode = function(node,element){
	var n = this.__createNode(element);

	if(node instanceof Node){
		node.setNextNode(n) ;
	}else {
		this.head = n ;
	}
	this.__incrementSize();
	return n ;
}
/* Deletes Next Node after 'node'*/
LinkedList.prototype.__deleteNextNode = function(node) {
	var nextNode, nextToNextNode ;
	if(Utils.isEmpty(node) && Utils.isEmpty(node.getNextNode()) ) {
		return null ;
	}

	nextNode = node.getNextNode();
	if(nextNode && nextNode.hasReferenceToNextNode()){
		nextToNextNode = nextNode.getNextNode() ;
		node.setNextNode(nextToNextNode) ;
	}else{
		node.setNextNode(null);
	}
	
	this.__decrementSize();

	return nextNode ;
}

/* Find Note at any position */
/* Posititon should start at 0 */
LinkedList.prototype.__getNodeAtPosition = function(position){
	var currentPos = 0, currentNode = this.head ;

	if(Utils.isEmpty(position) 
		|| position < 0 
		|| position > this.getSize()){
		return null
	}

	position = Utils.getNumber(position) ; 

	while(currentPos < position 
			&& currentNode.hasReferenceToNextNode()){
		currentPos++ ;
		currentNode = currentNode.getNextNode() ;
	}
	if(currentPos == position) {
		return currentNode ;
	}else{
		return null ;
	}

}

LinkedList.prototype.addFirst = function(element){
	var n = this.__createNode(element) ;
	n.setNextNode(this.head);
	this.head = n ;
	this.__incrementSize();
	return true ;
}

LinkedList.prototype.addLast = function(element){

	var lastNode = this.__getLastNode();
	if(Utils.isEmpty(lastNode)) { 
		return this.addFirst(element);
	}
	lastNode = this.__getLastNode();
	this.__addNextNode(lastNode,element);

	return true ;
}

/*
* Insert at any position or if not specified, then last
*/
LinkedList.prototype.add = function(element,position) {

	var isInserted = false ;

	/*if no position is specified, insert at last */
	if(!Utils.isNumber(position) && Utils.isEmpty(position) ) {
		return this.addLast(element)
	}

	if(!Utils.isNumber(position)){
		throw new Error('Position should be a valid Number or null' , position);
	}

	position = Utils.getNumber(position) ; 

	if(position == 0) {
		return this.addFirst(element);
	}

	/* Follows code for inserting element at 'position' */

	var n,currentNode, currentPos = 0, nextNode;
	var nodeAtPos = this.__getNodeAtPosition(position - 1);
	if(!Utils.isEmpty(nodeAtPos)) {
		nextNode = nodeAtPos.getNextNode() ;
		n = this.__addNextNode(nodeAtPos,element )
		n.setNextNode(nextNode) ;
		isInserted = true ;

	}else{
		throw new Error("Invalid Node Position " + position);
	}

	return isInserted ;
}

LinkedList.prototype.removeFirst = function(){
	var node = null, ret = null ;

	if(this.getSize() == 0){
		return ret ;
	}

	if(!Utils.isEmpty(this.head)){
		node = this.head ;
		this.head = node.getNextNode();
		node.setNextNode(null) ;
		this.__decrementSize();
		ret = node.getElement() ;
	}
	
	return ret ;
}

/* The other option would have been to get total element in the */
LinkedList.prototype.removeLast = function() {
	var nodeAtLastButOnePos ,
		ret = null ,
		size = this.getSize(),
		deletedNode   ;

	if(size == 0) {
		return ret ;
	}

	if(size == 1){
		return this.removeFirst();
	}
	// size starts with 1 whereas postion starts with 0 ;
	nodeAtLastButOnePos = this.__getNodeAtPosition(size - 2) ;
	deletedNode = this.__deleteNextNode(nodeAtLastButOnePos) ;

	if(deletedNode){
		ret = deletedNode.getElement() ;
	}

	return ret ;
}



LinkedList.prototype.remove = function(position){
	var currentNode, element, prevNode,
		size = this.getSize() ,
		isDeleted = false , ret = null, deletedNode=null ;

	if(Utils.isEmpty(position)) return ret ;
	position = Utils.getNumber(position) ; 
	if(size == 0 || position > (size -1) ) return ret ;

	if(position == 0) return this.removeFirst() ;
	if(position == (size - 1)) return this.removeLast();
	prevNode = this.__getNodeAtPosition(position - 1) ;

	deletedNode = this.__deleteNextNode(prevNode) ;
	if(deletedNode){
		ret = deletedNode.getElement();
	}
	return ret ;

};

LinkedList.prototype.getElementAtPosition = function(position){
	var node = this.__getNodeAtPosition(position) ;
	if(node){
		return node.getElement() ;
	}
	return null ;

}


export default LinkedList ;