const element = document.querySelector("#submit");
const ingreso = document.querySelector("#ingreso");


let datos="";
ingreso.addEventListener("input", function(e){
    datos = e.target.value;
})

element.addEventListener("click", function(){
    const resultado = factorialize(datos)
    const mostrar = document.querySelector("#resultado").textContent = "Fatorial de "+datos+"! es: "+ resultado;
})

function factorialize(num) {
    let r =1;
    for(let i=1; i<=num; i++){
      r=r*i    
    }  
    return r;
  }
  
  factorialize(5);