//  rotor.js code by Dan McKeown http://danmckeown.info
//  copyright 2016 Licensed under MIT License
//  v0.1.0-beta4
//  http://rotor.pacificio.com

'use strict';
//  this script effects the DOM in order to swap elements
//  by default the visible child[ren] of div#rotor fades out and the 'next' child fades in
//  child elements should each have a unique id
var flipPic = (next, current, parentSelector, childSelector, call1 = 'fadeOut()', call2 = 'fadeIn()') => {
//  implicit default values currently set in the code:
//  current = $( childSelector + ":visible" )   //  set as selector to disappear
//  next = $(current).next()                    //  set as selector to appear
//  parentSelector = 'div#rotor'        //  the parent div that contains the divs
//  childSelector = 'div.rotor_image'   //  the class given to each child div

    var nth_pos;
    var flip_pos;
    var current_id;
    var n_selector;
    var f_selector;

    if ((typeof childSelector === 'undefined') || (childSelector === 'null')) {
        childSelector = 'div.rotor_image';
    }
    if ((typeof parentSelector === 'undefined') || (parentSelector === 'null')) {
        parentSelector = 'div#rotor';
    }

    var current_check = current;
    var maxPos = $(parentSelector).children().length;

    if ((typeof current_check !== 'undefined') && (current_check !== 'null')) {
        console.log('using current parameter');
        nth_pos = $(current_check).index() + 1;
    }
    else if ((typeof current_check === 'undefined') || (current_check === 'null')) {
        current = $(  childSelector + ":visible" );
        console.log('current id is:');
        current_id = $(current).attr( 'id' );
        console.log(current_id);
        n_selector = '#' . current_id;
    }

    if ((typeof next === 'undefined') || (next === 'null')) {  //   if no parameters:
        console.log('using no params');
        current = $( childSelector + ":visible" );
        console.log('current id is:');
        current_id = $(current).attr( 'id' );
        console.log(current_id);
        let zero_n_selector = current;
        n_selector = zero_n_selector.selector;
        nth_pos = $(current).index() + 1;
        console.log('nth_pos: ' + nth_pos + "   flip_pos: " + flip_pos);
        let zero_f_selector;
        if (nth_pos == maxPos) {
            zero_f_selector = $(parentSelector + ' div:first-child');
        }
        else {
            zero_f_selector = $(current).next();
        }
        f_selector = "#" + zero_f_selector[0].id;
    }
    else if ((typeof next !== 'undefined') || (next !== 'null')) {
        flip_pos = $(next).index() + 1;
        if (typeof current !== 'undefined') {
            nth_pos = $(current).index() + 1;
        }
        console.log('nth_pos: ' + nth_pos + "   flip_pos: " + flip_pos);
    }

    console.log('current is:');
    console.log(current);
    console.log('maxPos:' + maxPos);

    if (flip_pos === 1) {
        nth_pos = maxPos;
    }

    if (typeof n_selector === 'undefined') {
        console.log('nth_pos: ' + nth_pos + "   flip_pos: " + flip_pos);
        n_selector = "div div:nth-child(" + nth_pos + ")";
    }
    if (typeof f_selector === 'undefined') {
        f_selector = "div div:nth-child(" + flip_pos + ")";
    }

    console.log('n_selector: ');
    console.log(n_selector);
    console.log('f_selector: ');
    console.log(f_selector);

    var callback1 = "$('" + n_selector + "')." + call1;
    var callback2 = "$('" + f_selector + "')." + call2;

    console.log(callback1);
    console.log(callback2);

    let callRunner = function() {
        let runCalls = (callback1, callback2) => {
            let c1 = ( new Function( 'return ' + callback1 ) )();
            let c2 = ( new Function( 'return ' + callback2 ) )();
        }
        runCalls(callback1, callback2);
    }

    callRunner();
}
