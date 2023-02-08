const cotizarSeguro=()=>{
    let marca= document.querySelector ("#marca").value;
    let year= document.querySelector ("#year").value;
    let basico= document.querySelector ("#basico");
    let completo= document.querySelector ("#completo");

    let divResumen= document.querySelector ("#resumen");
    let divResultado= document.querySelector ("#resultado");
    divResultado.style.display= "none"


    let plan= "";

    if (basico.checked){
    plan= "basico";
    }else if (completo.checked){
        plan="completo";
    }

    

    if (marca === '' ||
    year==='' ||
    plan===''){
        mostrarError("#msj-error-cotizador", "FALTA SELECCIONAR OPCIONES");
        return;
    }
    let cotizacion= {marca,year,plan};
    document.querySelector ("#msj").style.display= "none";

    divResumen.style.backgroundColor="#fff";
    divResumen.style.display="block"

    divResumen.innerHTML=`<div style="text-align:center">
    <img src="tenor.gif" width=200 height=200> </div>`;
    setTimeout(()=>{
        divResumen.style.backgroundColor= "#0083F";
        divResumen.innerHTML=`<h2> Resumen de cotización </h2>
        <ul>
            <li>Marca: ${mayuscula(marca)}</li>
            <li>Plan: ${mayuscula(plan)}</li>
            <li>Año del auto: ${year}</li>
            </ul>`


            let cotizacionFinal=cotizar(cotizacion);
            divResultado.style.display= "block";
            divResultado.className= "divResultado";
            divResultado.innerHTML= `<p class="textoCotizacion"> $ ${cotizacionFinal} </p>`;
    },2000);

  

        
}


const cotizar= (cotizacion)=>{
    const{marca,year,plan}=cotizacion;
    let resultado=10000;

    const diferenciaYear= diferencia (year);
    resultado-= ((diferenciaYear*3)*resultado)/100;

    resultado=calcularMarca (marca)*resultado;
    const incrementoPlan = obtenerPlan(plan);
    resultado= parseFloat (incrementoPlan*resultado).toFixed(2);
    return resultado;

}


const obtenerPlan=plan=>{
    return (plan==='basico')?1.20:1.50;
}


const calcularMarca = (marca) => {
    let incremento;
  
    switch (marca.toLowerCase()) {
      case 'europeo':
        incremento = 1.30;
        break;
      case 'americano':
        incremento = 1.15;
        break;
      case 'asiatico':
        incremento = 1.05;
        break;
      default:
        incremento = 0;
    }
    console.log(incremento);
    return incremento;
  };
function diferencia(year) {
    return new Date().getFullYear() - year;
}

const mayuscula= (palabra)=>{
    return palabra.charAt(0).toUpperCase()+palabra.slice(1);
}

const mostrarError=(elemento,mensaje)=>{

    divError=document.querySelector(elemento);
    divError.innerHTML='<p class= "alert alert-danger-error">${mensaje}</p>';
    setTimeout(()=>{divError.innerHTML='';},2000);
}