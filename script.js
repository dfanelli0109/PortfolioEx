body {
height:100%;
background: #617391;
margin:0px;
padding:0px;
}

nav {
	position:fixed;
	top: 0px;
	width: 100%;
	float:left;
    background: #e0c879;
	height: 30px;
	overflow: hidden;
	border-left: 2px black solid;
	border-right: 2px black solid;
	border-top: 2px black solid;
	border-bottom: 2px white groove;

}

h1 {
	font-size: 3em;
	text-align: center;
	margin-top: 60px;
}

h3 {
	font-size: 1.2em;
	text-align: center;
	font-family: "Lucida Grande", sans-serif;
}

p {
	margin: 15px 30% 0 30%;
	font-size: 1.1em;
	font-family: "Lucida Grande", sans-serif;
}

nav li, #socialnetworking li{
  float:left;
  margin-top:10px;
  padding:25px 25px;
  height: 20px;

}

nav a{
	font-size: 1.6em;
	text-decoration:none;
	color: white;
	background: maroon;
	text-align: center;
	padding: 20px;
	margin-top: 10px;
	margin: -2px;
	font-weight: bold;
	font-family: "Lucida Grande", sans-serif;
    border-right: 2px yellow solid;}

nav a:hover {
	font-size: 1.6em;
	text-decoration:none;
	text-align: center;
    color: blue;
	background: white;
    padding: 20px;

	margin: -2px;
	font-weight: bold;
	font-family: "Lucida Grande", sans-serif;
    border-right: 1px yellow solid;
}


img, form {
    margin: 0 auto;
    padding: 20px;
    display: block;
    border: 5px ;
}
#socialnetworking a, footer a {
	font-size: 1.0em;
	text-decoration:none;
	color: white;
	background: maroon;
	padding: 20px;
	margin: -2px;
	font-weight: bold;
	font-family: "Lucida Grande", sans-serif;
    border-right: 1px white solid;

}

 #socialnetworking a:hover, footer a:hover {
 		font-size: 1.0em;
	text-decoration:none;
	color: blue;
	background: white;
	padding: 20px;
	margin: -2px;
	font-weight: bold;
	font-family: "Lucida Grande", sans-serif;
    border-right: 1px black solid;
 }

#mail{
   margin-top:5%;
   border: 2px groove #ccccff;
   background: #e0c879;
   position:absolute;
   bottom: 10px
   ;
}



form {
    display:block;
	background: white;
	width: 25%;
	font-family: "Arial";
	border: grey 5px solid;
	text-align: center;
}

td, th {
margin: 3px;
}

#projects {
	margin: 15px;
}

#mail {
font-size: 1.7em;
color: maroon;
font-weight:bold;
text-decoration:none;
}
#mail:hover {color:#1a1a1a;
}

a:-webkit-any-link {
	cursor:auto;
}

#socialnetworking {
	margin-left:auto;
	margin-right:auto;
	margin-top: 50px;
}
function myFunction(){
  var x= document.getElementById("textarea").value;
  var averageWords = 0;
  var spaceCounter = 0;
  var sentenceCounter = 0;
  var wordCounter = 1;
  
  for (var i = 0; i < x.length; i++){
    if (x[i] ==' '){
       spaceCounter++;
       wordCounter++;
       
    }
    if (x[i]=='.'|| x[i]=='?'||x[i]=='!'){
      sentenceCounter++;
      
    }
  }
  averageWords= wordCounter/sentenceCounter;
  document.getElementById("row1").innerHTML ='There are an average of' +averageWords+'word per sentence';
  document.getElementById("row2").innerHTML = 'There are' +spaceCounter+'spaces in this text';
  document.getElementById("row3").innerHTML = 'There are' +wordCounter+ 'words in this text';
  document.getElementById("row4").innerHTML = 'There are' +sentenceCounter+ 'sentences in this text';
}