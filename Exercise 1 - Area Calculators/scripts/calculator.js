// // // -----  Class methods  -----   //  //  //

//  -----   Function to round a float and format to a given number of decimals  -----   //
function formatFloat(value, decimals){

    //  Round the given value to the number of decimal places given and convert it to a float to remove trailing zeros
    return parseFloat(Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(decimals));

}

//  -----  Function to calculate the area of a given shape -----   //
function calculateArea(_shape){

    //  Show the calculator required based on the string passed in    
    switch (_shape) {

        case 'square':  

            //  Get value of side of square from form
            a = parseFloat(document.getElementById("squareInput").value);

            //  Calculate area of square
            areaCalculated = a * a;
            
            break;

        case 'circle':

            //  Get value of radius of circle from form
            r = parseFloat(document.getElementById("circleInput").value);

            //  Calculate area of circle
            areaCalculated = Math.PI * (r * r);
            
            break;

        case 'trapezoid':

            // Get value of base a of trapezoid from form
            a = parseFloat(document.getElementById("trapezoidInputA").value);

            // Get value of base b of trapezoid from form
            b = parseFloat(document.getElementById("trapezoidInputB").value);        

            // Get height of trapezoid from form
            h = parseFloat(document.getElementById("trapezoidInputH").value);
        
            //  Calculate area of trapezoid
            areaCalculated = a + b;
            areaCalculated = areaCalculated / 2;
            areaCalculated = areaCalculated * h;
            
            break;
    
        default:

            break;

    }

    //  Show the calculated area
    alert(formatFloat(areaCalculated, 2));

    //  Destroy the variable which stores the calculated area
    delete areaCalculated;

}