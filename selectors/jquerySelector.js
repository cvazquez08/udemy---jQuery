// Selecting with jQyuery is very similiar to querySelectorAll, 
// in that we provide a CSS style selector and jQuery will return all matching elements


// select all img tags
// $('img")

// select all elements with class name sale
// $('.sale')

// select all elements with id bonus
// $('#bonus')

// ** MANIPULATING STYLE ***

// the .css() method is jQuery's interface to styling

// $(selector).css(property, value)

// select elem with id 'special; and give it a border
// $('special').css('border', '2px solid red')

// we can also pass in an object with styles
// var styles = {
//   backgroundColor : 'pink',
//   fontWeight : 'bold'
// };

// $('special').css(styles);