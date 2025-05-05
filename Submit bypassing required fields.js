/* 
  Authored by:
  James Krolik

Objective:  Submit a form when fields are still marked as required but unset.
Use Case:   We have a form with one or multiple fields we do not want set on submission in order to speed processing up.
            In this case, a button labeled 'More Information Needed' and a radio button for approval as part of a collection of unknown size.
            To speed this up, we can just temporarily hide the field(s) and allow submission.
            We use an asynchronous function call with an await in order to ensure the field(s) hide before continuing to process.

Button Label:    More Information Needed
Target fieldID:  44 

Note, due to HTML rendering, any spaces must be %20 in accordance with HTML encoding.

*/
LFForm.onFormSubmission(async function (event) {
// Get the submission button value.
const btnSubmitValue = event.data.action.value;
if (btnSubmitValue === "More%20Information%20Needed") {
  await LFForm.hideFields({fieldId: 44});
}
});
