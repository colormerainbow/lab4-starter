/* example showing global vs local scoped variables
var test = "5";

if (test == 5) {
    let test = "goodbye";
    //const test2 = "world";

    console.log(test);
};

//note that this will not retain the value "goodbye" if you use let in the command; 
console.log(test);

// review of boolean test
var testnum = "5";
if (testnum == 5) {
    console.log("loosely equiv");
};  
*/

/*
let area = document.querySelector('.area1');
console.log(area);
*/

let paras = document.querySelectorAll('p');

//paras is a list of things, add a class to each of the items
paras.forEach( (item) => {
    item.classList.add('myp');

    item.addEventListener('click', (e) => {
        e.target.classList.toggle('myp');

    });
});
// supposed to make the text toggle to black or red  when you click on the  p text in the webpage

console.log(paras);
console.log(document.body);

//now set up a toggle button on the page to switch from light to dark mode
let mainbody = document.getElementById('mainbody');

// define our button switcher
let switchButton = document.getElementById('switch');
console.log(switchButton);

// when the button gets clicked
switchButton.addEventListener('click', newtheme);

//define the function that runs when clicked, pass a parameter e to it
//the target is what was clicked (switchButton). and we are changing ths class of its parent node (body)
// toggle body to be a class of dark, which css picks up and applies
function newtheme(e) {
    e.target.parentNode.classList.toggle('dark');
};
