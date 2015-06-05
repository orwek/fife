# fife
The Free Interactive Fiction Engine (fife) is a JavaScript engine for creating and playing interactive fiction in the browser.

Purpose/Goal
---
To make interactive fiction more accessible on the web. This is done by creating a user interface that is mobile friendly and utilizes JavaScript as the language of the interpreter. Stories can then be written in JSON format using a predefined structure that the interpreter understands. The end result will be introducing interactive fiction to a new generation that uses mobile devices as their primary form of entertainment.

How to use fife
---
You will need three files to use fife. 1- index.html is the UI and includes the styles as well. This is where you will need to register your story file so that fife can find it and play it. 2- fife.js this is the core engine for the system and handles the basic functions of movement and other interpreter specifics. 3- your story file! You will need to write a JSON object inside a file named the same as the object so that fife can find it.

Registering your story with fife
---
To register your story simply type the following in the `<script>` section of index.html

` fife.register.push("your_story");`

This needs to be the same name as your file and the JSON object inside it. For example, I am writing an IF story called "Last Flight of the Pelican" so I would name my file "pelican.js," and inside my JSON object would be named "pelican" as well like so: 

`var pelican = {};`