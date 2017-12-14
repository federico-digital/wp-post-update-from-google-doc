function postUpdater() {

var body = DocumentApp.getActiveDocument().getBody();
var text = body.editAsText();
var list2 = body.findElement(DocumentApp.ElementType.LIST_ITEM).getElement().editAsText();

// Run the functions that prepare the text for HTML  
  postFormatter();
  links();
  list();

// Update the post content in the WordPress database (ID to be specified at line 22)
var address = '[DATABASE SERVER]';
var user = '[DATABASE USERNAME]';
var userPwd = '[DATABASE PASSWORD]';
var db = '[DATABASE NAME]';
var instanceUrl = 'jdbc:mysql://' + address;
var dbUrl = instanceUrl + '/' + db;
var bodt = body.getText();
var conn = Jdbc.getConnection(dbUrl, user, userPwd);
var SQLstatement = conn.createStatement();
var result = SQLstatement.executeUpdate("UPDATE wp_posts SET post_content='" + bodt + "' WHERE ID=[POST ID]");
SQLstatement.close();
conn.close();

// Remove the tags added to the Google document, restoring it as it was before our functions ran   
body.replaceText("<strong>", "");
body.replaceText("</strong>", "");
body.replaceText("<em>", "");
body.replaceText("</em>", "");
body.replaceText("<ul>", "");
body.replaceText("</ul>", "");
body.replaceText("<ol>", "");
body.replaceText("</ol>", "");
body.replaceText("<li>", "");
body.replaceText("</li>", "");
body.replaceText("<a href=''", "");
body.replaceText("</a>", "");
body.replaceText("''>", "");
body.replaceText("''>", "");
var body = DocumentApp.getActiveDocument().getBody();
var text = body.editAsText();
var idc = text.getTextAttributeIndices(); 

var bold3 = [];
for (var i = 0; i < idc.length; i++) {
    if (text.getLinkUrl(idc[i]) != null) {  
       bold3.push(text.getLinkUrl(idc[i]));
    } 
}
for (var i = 0; i < bold3.length; i++) {
       body.replaceText(bold3[i], "");
}

}
