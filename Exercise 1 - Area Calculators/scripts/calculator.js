//  //  //  -------------------------   Global variables and onLoad function    -------------------------   //  //  //
previousOutputUnits = null;

// // // ----------------------------------------  Class methods   ----------------------------------------   //  //  //


//  //  -----   Calculation history methods -----   //  //








//  //  -----   Calculator methods  -----   //  //

//  -----   Function to convert values between different units of measurement    -----   //
function convertUnit(_valueA, _unitA, _unitB){

    //  Switch for converting normal units
    switch (_unitB) {

        case 'mm': 
        
            switch (_unitA){

                case 'mm':

                    break;

                case 'cm': 

                    _valueA = _valueA * 10
                    
                    break;

                case 'inch':

                    _valueA = _valueA * 25.4

                    break

            }

            return _valueA;           

        case 'cm':  

            switch (_unitA){

                case 'mm':

                    _valueA = _valueA / 10

                    break;

                case 'cm': 

                    
                    
                    break;

                case 'inch':

                    _valueA = _valueA * 2.54

                    break

            }

            return _valueA;

        case 'inch':  

            switch (_unitA){

                case 'mm':

                    _valueA = _valueA / 25.4

                    break;

                case 'cm': 

                    _valueA = _valueA / 2.54
                    
                    break;

                case 'inch':



                    break

            }

            return _valueA; 

        case 'mm2': 
        
            switch (_unitA){

                case 'mm2':

                    break;

                case 'cm2': 

                    _valueA = _valueA * 100
                    
                    break;

                case 'inch2':

                    _valueA = _valueA * 645.16

                    break

            }

            return _valueA;           

        case 'cm2':  

            switch (_unitA){

                case 'mm2':

                    _valueA = _valueA * 0.01

                    break;

                case 'cm2': 

                    
                    
                    break;

                case 'inch2':

                    _valueA = _valueA * 6.4516

                    break

            }

            return _valueA;

        case 'inch2':  

            switch (_unitA){

                case 'mm2':

                    _valueA = _valueA * 0.00155

                    break;

                case 'cm2': 

                    _valueA = _valueA * 0.155
                    
                    break;

                case 'inch2':



                    break

            }

            return _valueA; 

        default:

            break;

    }          
    
}


//  -----   Function to show output of area calculations    -----   //
function showOutput(_output, _outputUnits){

    //  Assign the output textbox text as the calculated area
    areaOutputText.value = formatFloat(_output, 2);

    //  Set global variable holding output units so that output conversions can be done when select element changed
    previousOutputUnits = _outputUnits;    

    //  Make the output of the units of measurement match the input
    areaOutputUnitsSelect.value = previousOutputUnits;    

    //  Show the calculated area
    showElements(areaOutputGroup, "flex");

}


//  -----   Function to round a float and format to a given number of decimals  -----   //
function formatFloat(value, decimals){

    //  Round the given value to the number of decimal places given and convert it to a float to remove trailing zeros
    return parseFloat(Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(decimals));

}


//  -----  Function to calculate the area of a given shape -----   //
function calculateArea(_shape){  

    //  -----   Work out which unit of measurement to use for output    -----   //

    //  Get list of calculator inputs
    inputs = document.querySelectorAll(`#${_shape}-input .form-select`);

    //  -----   Check if all the inputs are using the same unit of measurement  ----- 

    //  Instantiate a boolean representing that all the inputs have the same unit of measurement
    unitsEqual = true;

    //  Instantiate a variable to hold the unit of measurement for the first input
    inputUnits = inputs[0].value;

    //  For each element in the list of inputs
    for (i = 0; i < inputs.length; i++) {  

        //  Check to see if the unit of measurement for the input is the same as the first
        if(inputs[i].value != inputUnits){

            //  Change the bool representing that all the inputs have the same unit of measurement to false
            //  If they are not equal
            unitsEqual = false;        
            
            //  Stop checking for equality on the units of measurement for inputs
            break;

        }

    }

    //  -----   Determine which unit of measure to use for the output   -----

    //  If all the units of measurement are the same
    if (unitsEqual){

        //  Use the same unit of measurement for the output
        outputUnits = inputUnits + "2"; 

    //  If the units of measurement are all different
    } else {

        //  Make the units of measurement cm
        outputUnits = "cm2"

    }

    //  -----   Work out area of shape  -----   //

    //  Show the calculator required based on the string passed in    
    switch (_shape) {

        case 'square':

            //  Get value of side of square from form
            a = parseFloat(document.getElementById("square-a").value);

            //  Get value from unit of measurement select element            
            inputUnits = document.getElementById("square-a-units").value;              

            //  Convert value entered to mm
            aNormalised = convertUnit(a, inputUnits, "mm");         

            //  Calculate area of shape in mm
            areaCalculatedNormalised = aNormalised * aNormalised;   

            //  Convert area of shape to desired unit of measurement
            areaCalculated = convertUnit(areaCalculatedNormalised, "mm2", outputUnits);    
            
            break;

        case 'circle':        

            //  Get value of radius of circle from form
            r = parseFloat(document.getElementById("circle-r").value);

            //  Get value from unit of measurement select element            
            inputUnits = document.getElementById("circle-r-units").value;              

            //  Convert value entered to mm
            rNormalised = convertUnit(r, inputUnits, "mm");         

            //  Calculate area of shape in mm
            areaCalculatedNormalised = Math.PI * (rNormalised * rNormalised);  

            //  Convert area of shape to desired unit of measurement
            areaCalculated = convertUnit(areaCalculatedNormalised, "mm2", outputUnits);             
            
            break;

        case 'trapezoid':

            // Get value of base a of trapezoid from form
            a = parseFloat(document.getElementById("trapezoid-input-a").value);

            // Get value of base b of trapezoid from form
            b = parseFloat(document.getElementById("trapezoid-input-b").value);        

            // Get height of trapezoid from form
            h = parseFloat(document.getElementById("trapezoid-input-h").value);
        
            //  Calculate area of trapezoid
            areaCalculated = a + b;
            areaCalculated = areaCalculated / 2;
            areaCalculated = areaCalculated * h;
            
            break;
    
        default:

            break;

    }   

    //  Show the output of the calculation
    showOutput(areaCalculated, outputUnits);    

}


//  -----   Function to convert output as user changed value of select element  -----   //
function initialiseListenerOutputConversion(){

    //  Listen for changes to value in select element
    areaOutputUnitsSelect.addEventListener("click", function() {  

        console.log("trying to convert");

        convertedArea = convertUnit(parseFloat(areaOutputText.value), previousOutputUnits, areaOutputUnitsSelect.value);

        previousOutputUnits = areaOutputUnitsSelect.value;

        showOutput(convertedArea, previousOutputUnits);        

    });

}