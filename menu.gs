function onOpen(e) {

   DocumentApp.getUi()
       .createMenu('WordPress')
       .addItem("Update post content", "postUpdater")
       .addToUi();
 
 }
