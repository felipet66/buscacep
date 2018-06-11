
(function(win, doc){
    'use strict';

    function DOM(elements){
        this.element = this.getDOMElements(elements);
    }

    DOM.prototype.on = function on(eventType, callback) {
        Array.prototype.forEach.call(this.element, function(element){
            element.addEventListener(eventType, callback, false);
        });
    }

    DOM.prototype.off = function off(eventType, callback) {
        Array.prototype.forEach.call(this.element, function(element){
            element.removeEventListener(eventType, callback, false);
        });
    }

    DOM.prototype.getDOMElements = function getDOMElements(elements){
        return doc.querySelectorAll(elements);
    }

    DOM.prototype.get = function get() {
        return this.element;
    }

    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply( this.element, arguments );
    };

    DOM.prototype.map = function map(){
        return Array.prototype.map.apply( this.element, arguments );
    };

    DOM.prototype.filter = function filter(){
        return Array.prototype.filter.apply( this.element, arguments );
    };

    DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply( this.element, arguments );
    };

    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply( this.element, arguments );
    };

    DOM.prototype.every = function every(){
        return Array.prototype.every.apply( this.element, arguments );
    };

    DOM.prototype.some = function some(){
        return Array.prototype.some.apply( this.element, arguments );
    };

    DOM.prototype.isNumber = function isNumber( param ){
        return Object.prototype.toString.call( param ) === '[object Number]';
    }

    DOM.prototype.isNumber = function isNumber( param ){
        return Object.prototype.toString.call( param ) === '[object String]';
    }

    DOM.prototype.isBoolean = function isBoolean( param ){
        return Object.prototype.toString.call( param ) === '[object Boolean]';
    }

    DOM.prototype.isNull = function isNull( param ){
        return Object.prototype.toString.call( param ) === '[object Null]'
        || Object.prototype.toString.call( param ) === '[object Undefined';
    }

    win.DOM = DOM;
})(window, document);