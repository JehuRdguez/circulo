function cambiar (){
    color = document.getElementById("color").value
    ancho = document.getElementById("ancho").value
    altura = document.getElementById("altura").value

    document.getElementById("circulo").style.backgroundColor = color;
    document.getElementById("circulo").style.width = ancho+'px';
    document.getElementById("circulo").style.height = altura+'px';
}

function ocultar (){
    circulo = document.getElementById("circulo").style
    btn = document.getElementById("btnOcultar")
    if (btn.text == 'Ocultar'){
        circulo.display = 'none';
        btn.text = 'Mostrar';
        btn.className = 'btn btn-success';
    } else {
        circulo.display = 'block';
        btn.text = 'Ocultar';
        btn.className = 'btn btn-danger';
    }
}