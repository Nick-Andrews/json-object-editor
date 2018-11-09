# json-object-editor
A javascript editor for json objects

I needed a way to edit numbers and string values in JSON objects for a project I was working on. This method uses vanilla javascript and a DOM representation of the JSON object to accomplish this. I could have used Jquery but I wanted to keep the code simple and free of  dependencies.

The JSON object is parsed in javascript and rendered using a series of nested LI tags. When the value for a key in the JSON object is an Array or Object, a button is rendered. The button clicked will then traverse the referenced object and render the sub-keys. 

If the value is a string or number value, a text input field is rendered. Making changes to the text input value will automatically update the javascript object parsed from the original JSON object. 

The modified object can then be saved to database using a an AJAX post method. The sample scripts simply post back to the index.php.

This example creates a random JSON object using Canadian Military ranks as sample hierarchical structure.

Components:
1. joe-core.js : Contains the WK (walker) object and methods to parse and render the JSON object into an HTML DOM representation.
2. index.php :  Has the UI components presented in a PHP file. The div with ID "modelwalker" is where the HTML DOM structure is placed.
3. sample.js : A simple file to create a random nested data hierarchy. 
4. joe.css : Some styling for the UI.

Limitations:
This code was concerned with JSON objects that contained 10 or less nested depths. If you need to parse a deeper nesting level then you can modify the method in joe-core.js called "manage_node" at line 68.  You will need to insert additional switch statement cases depending on the amount of depth you require.

AJAX Modification:
If you want to link this script to a back-end method in order to save the modified JSON object to a database you will need to change the script joe-core.js at line 25 in the "dynamise" method. Change WK.saver to WK.saver_ajax. This instructs the save button to post the data to your server. Two values are passed in this method and you have to determine what these will be for your own verification purposes. In this case "model[2]" is the  unique id tuple storing the object in the database and ID is some unique user id or hashcode. The object is posted to the server and you can use a PHP method to catch the post, verify the user and save to DB. I have not included a script method to do this because it will be different for every project. Contact me if you need this. I am a freelancer presently.




