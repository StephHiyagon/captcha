var refresh=document.getElementsByClassName('spinner')[0];
var text=document.getElementById('text');
var check=document.getElementsByClassName('checkmark')[0];
var final;

function token(event) {
  function random() {
      return Math.random().toString(16).substr(2); // Eliminar `0.
  };
  console.log(random());
  var tok=random();
  console.log(tok);
  var final=tok.toString();
  console.log(final);
  var token=document.getElementById('token');
  var color=final.substr(0,4);
  console.log(color);
  token.style.color= "#ff"+color;
  token.innerHTML= final;

  function valida(event){
    // alert("funcion");
    console.log(final);
    if(this.value==final){
      console.log(text.value);
      console.log(final);
      alert("correcto");
      check.style.display="block";
      console.log(check);
    }else{
      text.value="";
    }
  }
  text.onblur=valida;
};

window.onload=token;
refresh.onclick=token;
