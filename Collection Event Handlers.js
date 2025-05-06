/* 
  Authored by:
  James Krolik

  Objective:  Have custom event handlers for each individual element in a collection.
  Use Case:   We have a form with a collection of an unknown size and we want to capture if
              one of the form elements is modified and I want to programmatically reset others 
              adjacent to it
  
  Laserfiche Designer:  Laserfiche Modern Designer
*/


/*
  First we set up our main listeners via subscription
  When triggered, they will call the function 'fieldActions' and pass in the index of the object and the fieldID that is the caller.
  Add as many as needed, an example of two has been provided.
*/

const subscribeToHandles = [{fieldId: 43},{fieldId: 27}].forEach(field =>
	LFForm.onFieldChange((event) => 
    fieldActions(event.options[0].index,event.options[0].fieldId), 
                       {fieldId: field['fieldId']})
)
/*
  This is the calling function.  Due to us dealing with a collection, everything must have an index supplied to specifically target it.
  One thing to note is if there isn't a subscription handler, the function will not be called, so every fieldID must be previously defined in
  the subscribeToHandles definition.
  By re-using the same index, we can effectively interact with elements that are in the same collection space.
*/

function fieldActions(index,fieldID) {
  //This can be viewed by pressing F12 in most browsers and selecting the Console tab to get verbose output and is super useful for debugging.
  console.log("actionID: " + fieldID + "  index: " + index);
  
  if (fieldID == 43) {
        //Full element targets can be found on the Laserfiche website.
        //Radio button value
      var radioButtonValue == LFForm.getFieldValues({fieldId: 43, index: index}).value;
        
        //Set a text box of FieldID 26 which accepts a string as for setting the value.
      LFForm.setFieldValues({fieldId: 26, index: index}, radioButtonValue);   
      return;  //Return from the function if you want to exit without further processing.
   }
    
   else {  
   } 
}
