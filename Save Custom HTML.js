/* 
  Authored by:
  James Krolik

  Objective:    Saving a form with a custom HTML code block on the page.
  Use Case:     Laserfiche automatically discards custom HTML blocks when saving.  This
                inherently is useful when trying to present something in a well formatted block.

  Example:      A well presented form that requires a signature be saved along with the 
                block of HTML text.

  Requirements: A form that contains a rich text field, a custom HTML block, and a SQL table to reference.
  
  Laserfiche Designer:  Laserfiche Modern Designer

  The following elements are on the page:
                A text box containing the relevant policy name (fieldId 1, variable name _POLICY_TEXT__HIDDEN)
                A rich text box to pre-load the HTML, field rule to hide, but save data, marked as read only.
                The HTML block (fieldId 2)

  We also have the following lookup rule:
                Match policy type and fill in the rich text field and the text box with the contents of the HTML data.
*/

LFForm.onLookupDone(function () {
  //Assign the looked up policy text to the variable policyText
  var policyText = LFForm.getFieldValues({variableName: "_POLICY_TEXT__HIDDEN"});

  //Set the looked up policy text to the HTML field
  LFForm.changeFieldSettings( {fieldId: 2}, {content: policyText} );

}, {lookupRuleId: 1}); 

//Now when the form is saved with the current process data, it will be passed through.
