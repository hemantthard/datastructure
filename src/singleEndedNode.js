function Node(element){
	this.__element = element ;
	this.__nextNode = null ;
}

Node.prototype.hasReferenceToNextNode =function(){
	return !!this.__nextNode ;
}

Node.prototype.setNextNode =function(nextNode){
	return this.__nextNode = nextNode ;
}

Node.prototype.getNextNode =function(){
	return this.__nextNode ;
}

Node.prototype.deleteNextNode =function() {
	var nextNode = this.__nextNode ;
	this.__nextNode = null ;
	return nextNode ;
}

Node.prototype.getElement =function(){
	return this.__element ;
}

export default Node ;