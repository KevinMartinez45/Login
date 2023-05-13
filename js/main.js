
function verificar(){
    
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;

    if(user == "admin" && pass == "admin"){
        
        alert("Bienvenido");
        document.getElementById('pass').value = "";
        document.getElementById('user').value = "";
        location.href = ('forms/inicio.html');

    }else{
        
        document.querySelector('.Wrong').classList.toggle('show');
        document.getElementById('pass').value = "";
        
    }
}

