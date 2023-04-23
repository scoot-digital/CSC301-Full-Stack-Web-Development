//  //  //  -------------------------   Global variables and onLoad function    -------------------------   //  //  //

//  Declare a constant variable to hold all of the calculator containers
var calculators = null;

//  Decalre a constant variable to hold all of the input fields in each calculator
var calculatorInputs = null;

//  Hide all calculators when webpage loads
window.onload = function() {initialiseListenersShapeSelection(), hideCalculators(), showCalculator('square')};


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
    clearCalculators();
    
}

//  -----   Function to clear all calculators   -----   //
function clearCalculators(){

    // Get all inputs from all calculators
    calculatorInputs = document.getElementsByClassName("form-control");

    //  For each element in the variable storing all the calculator inputs
    for (let i = 0; i < calculatorInputs.length; i++) {

        //  Reset the element
        calculatorInputs[i].value = "";
        
    }

}


//  -----   Function to listen to shape selection links and show required calculator on click   -----   //

function initialiseListenersShapeSelection(){

    // Get the list of shape selection links
    var shapeSelectionList = document.getElementById("shape-selection-list");    

    // Get all the links in the list
    var links = shapeSelectionList.getElementsByTagName("a");  

    //  Get all the shape icon SVGs in the list
    var shapes = shapeSelectionList.getElementsByTagName("svg");  

    // For each shape and link in the list of shape selection links
    for (var i = 0; i < links.length; i++) {   
    
        //  Listen for clicks on the link
        links[i].addEventListener("click", function() {     
            
            // For each link in the list of shape selection links
            for (var i = 0; i < links.length; i++) {

                //  Reset all shapes so none are highlighted
                shapes[i].className.baseVal = "me-1 align-middle bi text-secondary";
                
                //  Reset all links so none are highlighted
                links[i].className = "link-secondary";

            }                  
            
            //  Highlight the clicked link
            this.className = "link-primary";

            //  Get the shape associated with this link
            associatedShape = this.previousElementSibling;
            
            //  Highlight the shape associated with this link
            associatedShape.className.baseVal = "me-1 align-middle bi text-primary";
    
        });
    
    }

}


//  -----   Function to show specific calculator based on string passed in    -----   //

function showCalculator(_shape, _shapeLink){

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

//  -----   Function to show/hide history    -----   //
function toggleHistory(){

    //  Get the toggle which hides/shows calculator history
    historySwitch = document.getElementById("history-switch");
    
    //  Get the container that shows the history of what the user has calculated
    historyContainer = document.getElementById("history-container");

    if (historySwitch.is(':checked')){
    
        //  Show the calculator history
        requiredCalculator.style.display = "block";

    } else {

        //  Hide the calculator history
        requiredCalculator.style.display = "none";

    }

}