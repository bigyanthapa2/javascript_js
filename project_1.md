<<--------------------------HTML CODE------------------------------------>>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>color changer scheme</title>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>
    
    <nav>
       
        <a href="index.html" id="homes">Home</a>
        <a href="https://m.youtube.com/">Youtube</a>
        
    </nav>
        <div class="canvas">

            
            
            <h1>
                Color Scheme changer
            </h1>
            <span class="button" id="Grey"></span>
            <span class="button" id="Blue"></span>
            <span class="button" id="Red"></span>
            <span class="button" id="Yellow"></span>

            <h2> Try Clicking on one of the Colors above</h2>
            <h2> to change the background color</h2>
        </div>
        <script src="project.js"></script>
        
    
</body>
</html>




<<-----------------------------------------CSS------------------------------------------------------------------------>>

 *{
   box-sizing: border-box;
}

body {
   margin: 0;
   font-family: system-ui, sans-serif;
   color: black;
   background-color: white;
 }

 
html {
    margin: 0;
}

 span {
    display: block;
 }
 .canvas{
    margin: 100px auto;
    width: 80%;
    text-align: center;
 }
 .button{
    width: 100px;
    height: 100px;
    border: solid black 2px;
    display: inline-block;
 }

 #Grey{
    background-color: grey;
 }

 #Red {
    background-color: red;
 }

 #Blue {
    background-color: blue;
 }
 #Yellow {
    background-color: yellow;
 }

 nav {
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   padding: 0.5rem;
   gap: 0.5rem;
   border-bottom: solid 1px rgb(59, 57, 57);
   background-color:rgb(211, 223, 234);

 }
    
  nav a {
   display: inline-block;
   min-width: 9rem;
   padding: 0.5rem;
   border-radius: 0.2rem;
   border: solid 1.5px black;
   text-align: center;
   text-decoration: none;
   color: rgb(0, 0, 0);


  }

  #homes{
   color: rgb(0, 0, 0);
   background-color: rgb(158, 228, 239);
  }
    



<<-----------------------------------------Javascript-------------------------------------------------------->>


const color = document.querySelectorAll('.button');
const body = document.querySelector('body');

 color.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (f){
        console.log(f)
        console.log(f.target)
     
        if( f.target.id === 'Grey'){
            body.style.backgroundColor = f.target.id;
        }
        if( f.target.id === 'Blue'){
            body.style.backgroundColor = f.target.id;
        }
        if( f.target.id === 'Red'){
            body.style.backgroundColor = f.target.id;
        }
        if( f.target.id === 'Yellow'){
            body.style.backgroundColor = f.target.id;
        }
    })
} );