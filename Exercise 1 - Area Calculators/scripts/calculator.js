// // // -----  Class methods  -----   //  //  //

//  -----  Function to calculate the area of a given shape -----   //
function calculateArea(_shape){

    //  Empty the answer field so that any previous answers are hidden
    //emptyAnswer();

    //  Show the calculator required based on the string passed in    
    switch (_shape) {

        case 'square':  

            //  Get value of side of square from form
            a = document.getElementById("squareInput").value;

            //  Calculate area of square
            areaCalculated = a * a;
            
            break;

        case 'circle':

            //  Get value of radius of circle from form
            r = document.getElementById("circleInput").value;

            //  Calculate area of circle
            areaCalculated = Math.PI * (r * r);
            
            break;

        case 'trapezoid':

            areaCalculated = "Area of Trapezoid";
            
            break;
    
        default:

            break;

    }

    //  Show the calculated area
    alert(areaCalculated);

    //  Destroy the variable which stores the calculated area
    delete areaCalculated;

}