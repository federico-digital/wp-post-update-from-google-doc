function postFormatter() {

var body = DocumentApp.getActiveDocument().getBody();
var text = body.editAsText();
var idc = text.getTextAttributeIndices(); 

var bold = [];
var bold2 = [];
var bold3 = [];

  for (var i = 0; i < idc.length; i++) {
    if (text.isBold(idc[i]) && idc[i+1] !== undefined) {
       bold.push(idc[i]);
       bold2.push(idc[i+1]);
    } 
    else if (text.isBold(idc[i]) && idc[i+1] == undefined) {
       bold.push(idc[i]);
    }
  }
  
   for (var i = 0; i < bold.length; i++) {
       if (bold2[i] !== undefined) {
       bold3.push(text.getText().slice(bold[i], bold2[i]));
       }
       else bold3.push(text.getText().slice(bold[i]));
   } 
bold3 = bold3.filter( function( item, index, inputArray ) {
  return inputArray.indexOf(item) == index;
});
 
  for (var i = 0; i < bold3.length; i++) {
       body.replaceText(bold3[i], "<strong>" + bold3[i] + "</strong>");
  } 
  
Logger.log(idc);
Logger.log(bold);
Logger.log(bold2);
Logger.log(bold3);

var idc = text.getTextAttributeIndices(); 
var bold = [];
var bold2 = [];
var bold3 = [];

  for (var i = 0; i < idc.length; i++) {
    if (text.isItalic(idc[i]) && idc[i+1] !== undefined) {
       bold.push(idc[i]);
       bold2.push(idc[i+1]);
    } 
    else if (text.isItalic(idc[i]) && idc[i+1] == undefined) {
       bold.push(idc[i]);
    }
  }
  
   for (var i = 0; i < bold.length; i++) {
       if (bold2[i] !== undefined) {
       bold3.push(text.getText().slice(bold[i], bold2[i]));
       }
       else bold3.push(text.getText().slice(bold[i]));
   } 
bold3 = bold3.filter( function( item, index, inputArray ) {
  return inputArray.indexOf(item) == index;
});
 
  for (var i = 0; i < bold3.length; i++) {
       body.replaceText(bold3[i], "<em>" + bold3[i] + "</em>");
  } 

Logger.log(idc);
Logger.log(bold);
Logger.log(bold2);
Logger.log(bold3);

}
