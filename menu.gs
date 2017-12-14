function onOpen(e) {

// Create a menu on the Google document from which to launch the update
   DocumentApp.getUi()
       .createMenu('WordPress')
       .addItem("Update post content", "postUpdater")
       .addToUi();
 
 }
