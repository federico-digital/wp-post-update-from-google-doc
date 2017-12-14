function postFormatter() {

// This script adds <strong> and <em> tags to the text, preparing it to be uploaded in the WordPress database    
var body = DocumentApp.getActiveDocument().getBody();
var text = body.editAsText();
var idc = text.getTextAttributeIndices(); 

var bold = [];
var bold2 = [];
var bold3 = [];

// Identify where the Bold text is (indexes), and push it into arrays  
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
  
// Add HTML tags for Bold  
  for (var i = 0; i < bold3.length; i++) {
       body.replaceText(bold3[i], "<strong>" + bold3[i] + "</strong>");
  } 


var idc = text.getTextAttributeIndices(); 
var bold = [];
var bold2 = [];
var bold3 = [];

// Identify where the Emphasized text is (indexes), and push it into arrays  
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

// Add HTML tags for Emphasized text
  for (var i = 0; i < bold3.length; i++) {
       body.replaceText(bold3[i], "<em>" + bold3[i] + "</em>");
  } 
  
}
