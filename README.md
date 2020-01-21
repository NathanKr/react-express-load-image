<h2>motivation</h2>
dynamically load file(image) and more from react spa to express using rest api

<h2>Usage</h2>
<ul>
<li>npm install in server and client directories</li>
<li>cd server directory , open terminal -> npm run dev</li>
</ul>

<h2>details</h2>
<ul>
<li>multer is used to handle the file and other input</li>
<li>file is saved into upload directory inside the  server root</li>
<li>client has two inputs : one is type text and the other is type file. this is done with out using form ,but formData is used in the client</li>
<li>client must use axios to get the image which was loaded dynamically</li>
</ul>


<h2>Points of interest</h2>
<ul>
<li>one can store the images on the client public directory. you will not need axios to load them but every time it is done create-react-app will cause browser refresh. this will not happen in production</li>
</ul>
