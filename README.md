# WordPress post update from Google Doc
Update a WordPress post content from a Google document body using the JDBC service.

<br>
1. Open a new <a href="https://docs.google.com/document/">Google document</a>
2. Click on 'Tools > Script editor'
3. Copy the code in this repository in new scripts files inside your new App Script project
4. In the postUpdater.gs code, substitute the text in square brackets at lines 12, 13, 14 and 15 with your WordPress database credentials
5. In the same file at line 21, substitute [POST ID] with the ID of the WordPress post you want to update
6. Save all files in the App Script project and close it
7. Refresh the document page, update its content and click on the menu to 'WordPress > Update post content'
8. Your WordPress post content will be automatically updated with the content of your Google document!

<br>
Note: The script will automatically append & remove html tags to your document, in order to transfer formatting styles, lists and links.
