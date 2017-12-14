function list() {
  
var body = DocumentApp.getActiveDocument().getBody();
var text = body.editAsText();
var list = body.findElement(DocumentApp.ElementType.LIST_ITEM).getElement().editAsText();

Logger.log(list);

var bold = [];

for (var i = 0; i < DocumentApp.getActiveDocument().getNumChildren(); i++) {
var firstChild = DocumentApp.getActiveDocument().getBody().getChild(i);
if (firstChild.getType() == DocumentApp.ElementType.LIST_ITEM) {
    firstChild.replaceText(firstChild.getText(), "<li>" + firstChild.getText() + "</li>");
    var childIndex = firstChild.getListId();
    bold.push(i);
 }
}


 for (var i = 0; i < bold.length; i++) {
 if (bold[i-1] != bold[i]-1) {
    Logger.log(i); 
    var firstChild = body.getChild(bold[i]);
    if (firstChild.getGlyphType() != DocumentApp.GlyphType.NUMBER) {
    firstChild.replaceText(firstChild.getText(), "<ul>" + firstChild.getText());
    }
    else {
    firstChild.replaceText(firstChild.getText(), "<ol>" + firstChild.getText());
    }
}}

 for (var i = 0; i < bold.length; i++) {
 if (bold[i+1] != bold[i]+1) {
    Logger.log(i); 
    var firstChild = body.getChild(bold[i]);
    if (firstChild.getGlyphType() != DocumentApp.GlyphType.NUMBER) {
    firstChild.appendText("</ul>");
    }
    else {
    firstChild.appendText("</ol>");
    }
}}


 Logger.log(bold);
      
}
