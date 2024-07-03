// setTimeout examples
setTimeout(function(){
    console.log("after 2 seconds");
}, 2000);

const display = function() {
    console.log("kuldeep");
}
setTimeout(display, 2000);

// Change statement function
const change_statmn = function() {
    document.querySelector('h1').innerHTML = "hlo from javascript";
}

// Store the timeout ID
const change_heading = setTimeout(change_statmn, 3000);

// Stop button functionality
document.querySelector('#stop').addEventListener('click', function() {
    clearTimeout(change_heading); // Use the timeout ID here
    console.log("STOPPPED");
});


//----setinterval--------

// Define the function
const sayDate = function(str) {
    console.log(str, Date.now());
}

// Set interval to call the function every second
const intervalID = setInterval(sayDate, 1000, "kuldeep");

// Clear the interval after some time (for example, after 5 seconds)
setTimeout(function() {
    clearInterval(intervalID);
    console.log("Interval cleared after 5 seconds.");
}, 5000);
