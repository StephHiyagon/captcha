var refresh=document.getElementsByClassName('spinner')[0];
function token(event) {
  var text=document.getElementById('text');
  function random() {
      return Math.random().toString(36).substr(2); // Eliminar `0.
  };
  console.log(random());
  var tok=random();
  console.log(tok);
  var final=tok.toString();
  console.log(final);
  var token=document.getElementById('token');
  token.innerHTML= final;
  function valida(event){
    var check=document.getElementsByClassName('checkmark')[0];
    if(text.value==final){
      check.style.display="block";
    }else{
      window.onload=token;
    }
  }
  text.onblur=valida;
};

window.onload=token;
refresh.onclick=token;
