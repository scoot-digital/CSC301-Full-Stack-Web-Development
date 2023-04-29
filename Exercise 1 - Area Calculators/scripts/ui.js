//  //  //  -------------------------   Global variables and onLoad function    -------------------------   //  //  //

//  Declare a constant variable to hold all of the calculator containers
calculators = null;

//  Decalre a constant variable to hold all of the input fields in each calculator
calculatorInputs = null;

//  Declare variables to represent the area to display output
areaOutputGroup = null;
areaOutputText = null;
areaOutputUnitsSelect = null;

//  Hide all calculators when webpage loads
window.onload = function() {applyGlobalVariables(), initialiseListenersShapeSelection(), initialiseCalculators(), showCalculator('square'), initialiseListenerOutputConversion()};


// // // ----------------------------------------  Class methods   ----------------------------------------   //  //  //

//  -----   Function to apply global variables  -----   //
function applyGlobalVariables(){

    //  Get all calculators and apply to global variable
    calculators = document.getElementsByClassName("calculatorContainer");

    //  Get all calculator inputs and apply to global variable
    calculatorInputs = document.getElementsByClassName("form-control");

    //  Get all calculator output and apply to global variable
    areaOutputGroup = document.getElementById("area-output-group");   

    areaOutputGroup = document.getElementById("area-output-group");
    areaOutputText = document.getElementById("area-output-text");
    areaOutputUnitsSelect = document.getElementById("area-output-units");

}


//  -----   Function to clear elements   -----   //
function clearElements(_elements){

    //  If the variable passed in is a collection of elements
    if(HTMLCollection.prototype.isPrototypeOf(_elements)){

        //  For each element in the _elements variable
        for (e = 0; e < _elements.length; e++) {    

            //  Clear the element
            _elements[e].value = "";

        }
    
    //  If a single element is passed in
    } else {

            //  Clear the element
            _elements.value = "";
        
    }     
    
    //  Clear the previous unit saved for measuring the output
    previousOutputUnits = null;

}


//  -----   Function to hide elements  -----   //
function hideElements(_elements){    

    //  If the variable passed in is a collection of elements
    if(HTMLCollection.prototype.isPrototypeOf(_elements)){

        //  For each element in the _elements variable
        for (e = 0; e < _elements.length; e++) {               

            //  Hide the element
            _elements[e].style.display = 'none';

        }
    
    //  If a single element is passed in
    } else {

        //  Hide the element
        _elements.style.display = 'none';

    }

}


//  -----   Function to show elements  -----   //
function showElements(_elements, _display){   

    //  If the variable passed in is a collection of elements
    if(HTMLCollection.prototype.isPrototypeOf(_elements)){

        //  For each element in the _elements variable
        for (e = 0; e < _elements.length; e++) {               

            //  Show the element
            _elements[e].style.display = _display;

        }
    
    //  If a single element is passed in
    } else {

        //  Show the element
        _elements.style.display = _display;

    }

}


//  -----  Function to inititialise all calculators -----   //
function initialiseCalculators(){

    //  --- Hide all calculators    ---
    hideElements(calculators);

    //  ---  Reset all calculator inputs ---
    clearElements(calculatorInputs);

    //  --- Hide calculator output  -----
    hideElements(areaOutputGroup);

}


//  -----   Function to listen to shape selection links and show required calculator on click   -----   //
function initialiseListenersShapeSelection(){

    // Get the list of shape selection links
    shapeSelectionList = document.getElementById("shape-selection-list");    

    // Get all the links in the list
    links = shapeSelectionList.getElementsByTagName("a");  

    //  Get all the shape icon SVGs in the list
    shapes = shapeSelectionList.getElementsByTagName("svg");  

    // For each shape and link in the list of shape selection links
    for (i = 0; i < links.length; i++) {   
    
        //  Listen for clicks on the link
        links[i].addEventListener("click", function() {     

            //  -----  Affect link visuals -----  //
            
            // For each link in the list of shape selection links
            for ( i = 0; i < links.length; i++) {

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

            //  -----   Show the required calculator    -----   //

            //  Get calculator to show from text value of link
            shape = this.innerHTML.trim().replace(/&nbsp;/g, '').toLowerCase();            
            
            //  Show calculator required by user
            showCalculator(shape);
    
        });
    
    }

}


//  -----   Function to clear the calculator inputs and outputs -----   //  
function clearCalculator(){

    //  Clear all calculator inputs
    clearElements(calculatorInputs);

    //  Hide the calculator output area
    hideElements(areaOutputGroup);

    //  Get all select statements representing units of measurement for inputs   
    inputUnits = document.querySelectorAll(".form-select");

    //  For all elements in the list of select statements representing units of measurement for inputs 
    for (i = 0; i < inputUnits.length; i++) {

        //  Set all units of measurement to the default
        inputUnits[i].value = "cm";

    }

}


//  -----   Function to show specific calculator based on string passed in    -----   //
function showCalculator(_shape){

    //  Hide all calculators
    hideElements(calculators);

    //  Clear all calculator inputs and outputs
    clearCalculator();

    //  Show the calculator required based on the string passed in    
    requiredCalculator = document.querySelector(`#${_shape}-calculator-container`);

    //  Show the required calculator
    showElements(requiredCalculator, "block");   

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