// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');
    

    // TODO: Call your apply function(s) here
    //applyFilter(reddify);
    //applyFilter(decreaseBlue);
    //applyFilter(increaseGreenByBlue);
    applyFilterNoBackground(reddify);



    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
    //looping so it applies to every square
    for (var r = 0; r < image.length; r++) {
        for (var c = 0; c < image[r].length; c++) {
            var rgbString = image[r][c];
            var rgbNumbers = rgbStringToArray(rgbString);
            //rgbNumbers[RED] = 255;
            filterFunction(rgbNumbers);
            rgbString = rgbArrayToString(rgbNumbers);
            image[r][c] = rgbString;
            
        }
}
}

// TODO 6: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
    for (var r = 0; r < image.length; r++) {
        for (var c = 0; c < image[r].length; c++) {
            // checking if pixel equals first pixel
            if (image[r][c] != image[0][0]) {
                var rgbString = image[r][c];
                var rgbNumbers = rgbStringToArray(rgbString);
                //rgbNumbers[RED] = 255;
                filterFunction(rgbNumbers);
                rgbString = rgbArrayToString(rgbNumbers);
                image[r][c] = rgbString;
            }
            
        }
    }
}





// TODO 3 & 5: Create filter functions
function reddify(array) {
    array[RED] = 255;
}

function keepInBounds(num){
    Math.min(Math.max(num, 0), 255);
    var result = Math.min(Math.max(num, 0), 255);
    return result
}
//console.log(keepInBounds(-2000));

function decreaseBlue(array) {
    array[BLUE] = keepInBounds(array[BLUE] - 50);
}

function increaseGreenByBlue(array) {
    array[GREEN] = keepInBounds(array[GREEN] + array[BLUE]);
}









// CHALLENGE code goes below here
