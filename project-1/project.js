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