const obj = {
    username:"fatimahobi@gmail.com",
    password:"1996a2002"
}

const fati = document.getElementById('email');
const passo = document.getElementById('password');


document.getElementById('bb').addEventListener('click', function(){
    if(fati.value == obj.username && passo.value == obj.password){
       document.querySelector('.open').style.display= 'block';
    }else{
        document.querySelector('.demo').innerHTML= 'من فضلك انت لست زوجة أناس';
    }

})