function links() {
 
var body = DocumentApp.getActiveDocument().getBody();
var text = body.editAsText();
var idc = text.getTextAttributeIndices(); 
var bold = [];
var bold2 = [];
var bold3 = [];
var bold4 = [];
var bold5 = [];
var bold6 = [];

// Retrieve the exact indices where links are, and save it in arrays together with the links URLs 
  for (var i = 0; i < idc.length; i++) {
    if (text.getLinkUrl(idc[i]) != null) {
       bold.push(idc[i]);
       bold2.push(idc[i+1]);
       bold3.push(text.getLinkUrl(idc[i]));
       bold4.push(text.getLinkUrl(idc[i]).length);
       var sum = bold4.reduce(function(a, b) { return a + b; }, 0);
       bold5.push(sum);
    } 
  }

// Insert HTML for links
  text.insertText(bold[0], "<a href=''" + bold3[0] + "''>");
  text.insertText(bold2[0]+13+bold3[0].length, "</a>");
  
  for (var i = 1; i < bold.length; i++) {
    if (bold2[i] != undefined) {
    text.insertText(bold[i]+(17*i)+(bold5[i-1]), "<a href=''" + bold3[i] + "''>");
    text.insertText(bold2[i]+17+bold3[0].length+13+bold3[i].length, "</a>");
    }
    else {
    text.insertText(bold[i]+(17*i)+(bold5[i-1]), "<a href=''" + bold3[i] + "''>");
    var eh = body.getText();
    text.insertText(eh.length, "</a>");
    }
  }
  
}
