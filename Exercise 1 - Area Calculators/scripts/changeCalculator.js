//  //  //  -------------------------   Global variables and onLoad function    -------------------------   //  //  //

//  Declare a constant variable to hold all of the calculator containers
var calculators = null;

//  Decalre a constant variable to hold all of the input fields in each calculator
var calculatorInputs = null;

//  Hide all calculators when webpage loads
window.onload = function() {hideCalculators(), showCalculator('square')};


// // // ----------------------------------------  Class methods   ----------------------------------------   //  //  //

//  -----  Function to hide all calculators -----   //
function hideCalculators(){

    //  --- Hide calculators    ---

    //  Get all calculators and store in a variable 
    calculators = document.getElementsByClassName("calculatorContainer");

    //  For each element in the calculators variable
    for (let c = 0; c < calculators.length; c++) {

        //  Hide the element
        calculators[c].style.display = 'none';
        
    }

    //  ---  Reset all calculator inputs ---

    // Get all inputs from all calculators
    calculatorInputs = document.getElementsByClassName("form-control");

    //  For each element in the variable storing all the calculator inputs
    for (let i = 0; i < calculatorInputs.length; i++) {

        //  Reset the element
        calculatorInputs[i].value = "";
        
    }
    
}

//  -----   Function to show specific calculator based on string passed in    -----   //

function showCalculator(_shape){

    //  Hide all calculators so that currently shown calculator is hidden
    hideCalculators();

    //  Show the calculator required based on the string passed in    
    switch (_shape) {

        case 'square':  

            requiredCalculator = document.getElementById("squareCalculatorContainer");
            
            break;

        case 'circle':

            requiredCalculator = document.getElementById("circleCalculatorContainer");
            
            break;

        case 'trapezoid':

            requiredCalculator = document.getElementById("trapezoidCalculatorContainer");
            
            break;
    
        default:

            break;
            
    }

    //  Show the required calculator
    requiredCalculator.style.display = "block";

    //  Destroy the variable which stores the calculator required
    delete requiredCalculator;

}