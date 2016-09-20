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

LinkedList.prototype.__getLastNode =function(){
	return this.__getNodeAtPosition(this.__size - 1);  ;
}

// TODO

LinkedList.prototype.__addPrevNode = function(node,element){
	var n = new Node(element) ;

	if(node instanceof Node){
		n.setNextNode(node) ;
	}else {
		this.head = n ;
	}
	this.__incrementSize();
	return n ;
}

LinkedList.prototype.__addNextNode = function(node,element){
	var n = new Node(element) ;

	if(node instanceof Node){
		node.setNextNode(n) ;
	}else {
		this.head = n ;
	}
	this.__incrementSize();
	return n ;
}
// TODO
LinkedList.prototype.__deleteNextNode = function(node) {
	var nextNode, nextToNextNode ;
	if(Utils.isEmpty(node) && Utils.isEmpty(node.getNextNode()) ) {
		return false ;
	}

	nextNode = node.getNextNode();
	if(nextNode && nextNode.hasReferenceToNextNode()){
		nextToNextNode = nextNode.getNextNode() ;
		node.setNextNode(nextToNextNode) ;
	}

	nextNode.setNextNode(null) ;
	this.__decrementSize();

	return nextNode ;
}

// TODO.. refactor code ...
LinkedList.prototype.__deleteHeadNode = function() {
	var ret = null, nextNode, node ;
	if( Utils.isEmpty(this.head)) {
		return ret ;
	}

	if(this.head){
		node = this.head ;
		nextNode = node.getNextNode();
		node.setNextNode(null) ;
		this.head = nextNode ;
	}
	
	this.__decrementSize();
	return node ;
}

/* Find Note at any position */
/* Postiton should start from 0 */
LinkedList.prototype.__getNodeAtPosition = function(position){
	var currentPos = 0, currentNode = this.head ;

	if(Utils.isEmpty(position) 
		|| position < 0 
		|| position > this.__size ){
		return null
	}

	position = Utils.getNumber(position) ; 

	while(currentPos < position && currentNode.hasReferenceToNextNode()){
		currentPos++ ;
		currentNode = currentNode.getNextNode() ;
	}
	if(currentPos == position) {
		return currentNode ;
	}else{
		return null ;
	}

}

LinkedList.prototype.insertFirst = function(element){

	this.head = this.__addPrevNode(this.head,element); 
	return true ;
}

LinkedList.prototype.insertLast = function(element){

	var lastNode = this.__getLastNode();
	if(Utils.isEmpty(lastNode)) 
		return this.insertFirst(element);

	this.__addNextNode(lastNode,element);

	return true ;
}

/*
* Insert at any position or if not specified, then last
*/
LinkedList.prototype.insertAtPosition = function(element,position) {

	var isInserted = false ;

	/*if no position is specified, insert last*/
	if(!Utils.isNumber(position) && Utils.isEmpty(position) ) {
		return this.insertLast(element)
	}

	if(!Utils.isNumber(position)){
		throw new Error('Position should be a valid Number or null' , position);
	}

	position = Utils.getNumber(position) ; 

	if(position == 0) {
		return this.insertFirst(element);
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

LinkedList.prototype.deleteFirst = function(){
	var ret = null ;

	if(this.__size == 0){
		return ret ;
	}
	var deletedNode = this.__deleteHeadNode() ;
	if(deletedNode){
		return deletedNode.getElement() ;
	}
	return ret ;
}

/* The other option would have been to get total element in the */
LinkedList.prototype.deleteLast = function() {
	var nodeAtLastButOnePos ,
		ret = null ,
		size = this.__size,
		deletedNode   ;

	if(size == 0) {
		return ret ;
	}

	if(size == 1){
		return this.deleteFirst();
	}
	// size starts with 1 whereas postion starts with 0 ;
	nodeAtLastButOnePos = this.__getNodeAtPosition(size - 2) ;
	deletedNode = this.__deleteNextNode(nodeAtLastButOnePos) ;

	if(deletedNode){
		ret = deletedNode.getElement() ;
	}

	return ret ;
}



LinkedList.prototype.deleteAtPos = function(position){
	debugger;
	var currentNode, element, prevNode,
		size = this.__size ,
		isDeleted = false , ret = null, deletedNode=null ;

	if(Utils.isEmpty(position)) return ret ;
	position = Utils.getNumber(position) ; 
	if(size == 0 || position > (size -1) ) return ret ;

	if(position == 0) return this.deleteFirst() ;
	if(position == (size - 1)) return this.deleteLast();
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
LinkedList.prototype.getSize = function(){
	return this.__size
}

export default LinkedList ;