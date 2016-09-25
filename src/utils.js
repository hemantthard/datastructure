function isNumber(num){
	return !isEmpty(num) && !isNaN(num)
}

function isUndefined(element){
	return typeof element == 'undefined' ;
}

function isNull(element){
	return typeof element == 'object' && !element 
}

function isEmpty(element) {
	return isUndefined(element) || isNull(element) ;
}

function getNumber(element) {
	return Number(element) ;
}

function isArray(element) {
	return Array.isArray(element);
}

export default {
	isNumber : isNumber ,
	isUndefined : isUndefined ,
	isNull : isNull ,
	isEmpty : isEmpty,
	getNumber : getNumber ,
	isArray : isArray 
}