const guardarPerfil = (perfilFocus) => {
    localStorage.setItem("Perfil", perfilFocus)
}

const obtenerPerfil =  () => {
   return localStorage.getItem("Perfil");
}

const guardarDatosCuentas = (cuentasString) =>{
    localStorage.setItem("Cuentas", cuentasString);
}

const obtenerCuentas = () =>{
    return localStorage.getItem("Cuentas");
}

const guardarDepositoRetiro = (retiroDeposito) =>{
    localStorage.setItem("retiroDeposito", retiroDeposito)
}

const obtenerDepositoRetiro = () =>{
    return localStorage.getItem("retiroDeposito")
}

const guardarUbicacion = (ubi) =>{
    localStorage.setItem("ubicacion", ubi)
}

const obtenerUbicacionRetiroDeposito = () =>{
    return localStorage.getItem("ubicacion")
}

let imagenAutorCuenta = document.getElementById("personaTitular");

const botonSubmit = () =>{
    document.getElementById("myform").addEventListener("submit", function(event){
        event.preventDefault();
        let password = InputPassword.value;
        checkPassword(password);
    });
}


if(document.title === "Login"){

let perfil_1 = document.getElementById("perfil1");
let perfil_2 = document.getElementById("perfil2");
let perfil_3 = document.getElementById("perfil3");
let angle_left = document.getElementById("angle-left-id");
let angle_right = document.getElementById("angle-right-id");
let namePerson = document.getElementById("namePerson");
let InputPassword = document.getElementById("password");
let contraseñasGAS = ["12345", "123456", "1234567"];
let verificacionContraseña = contraseñasGAS[0];
let contador=0;
guardarDatosCuentas(undefined);
guardarPerfil("Cuenta Nelson");


function doSmall(element){
    if(element instanceof HTMLElement){
        element.style.width= "5em";
        element.style.height="5em";
        element.style.opacity="0.3";
    }
}


function doBig(element){
    if(element instanceof HTMLElement){
        element.style.width= "10em";
        element.style.height="10em";
        element.style.opacity="1";
        if(element == perfil_1){
            namePerson.textContent = "Maria";
            verificacionContraseña = contraseñasGAS[1];
            guardarPerfil("Cuenta Maria");

        }else if(element == perfil_2){
            namePerson.textContent = "Nelson";
            verificacionContraseña = contraseñasGAS[0];
            guardarPerfil("Cuenta Nelson");

        }else if(element == perfil_3){
            namePerson.textContent = "Herlyn";
            verificacionContraseña = contraseñasGAS[2];
            guardarPerfil("Cuenta Herlyn");
        }
    }
}


function checkPassword(OutputContraseña){
    if(verificacionContraseña == OutputContraseña){
        window.location.href = "./pages/Home.html";
    }else{
        alert("Contraseña invalida, intentelo de nuevo");
    }
}


const btnSwitch = document.getElementById("btn-switch");
const h1 = document.getElementsByTagName("h1");

btnSwitch.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
    h1[0].classList.toggle("white");
    namePerson.classList.toggle("white");
    angle_left.classList.toggle("white");
    angle_right.classList.toggle("white");
    InputPassword.classList.toggle("white");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("Oscuro", "true");
    }else{
        localStorage.setItem("Oscuro", "false");
    }
})


if(localStorage.getItem("Oscuro") === "true"){
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
    h1[0].classList.add("white");
    namePerson.classList.add("white");
    angle_left.classList.add("white");
    angle_right.classList.add("white");
    InputPassword.classList.add("white");
}else{
    document.body.classList.remove("dark");
    btnSwitch.classList.remove("active");
    h1[0].classList.remove("white");
    namePerson.classList.remove("white");
    angle_left.classList.remove("white");
    angle_right.classList.remove("white");
    InputPassword.classList.remove("white");
}



    InputPassword.addEventListener("keydown", function(evento){
        if(evento.key === "Enter" || evento.keyCode === 13){
            let password = InputPassword.value;
            checkPassword(password);
        }
    });

angle_left.addEventListener("click", function(){
    if(contador==0){
    contador++;
    perfil_1.animate([
        {transform: "translateX(0px)"},
        {transform: "translateX(200px)"}
    ],  {
            duration:1000, iterations: 1
        }).onfinish = function(){
            perfil_1.style.transform = "translateX(200px)";
        }
    perfil_2.animate([
        {transform: "translateX(0px)"},
        {transform: "translateX(-60px)", width: "5em", height:"5em", opacity: "0.5"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_2.style.transform = "translateX(-60px)";
        doSmall(perfil_2);
    }

    perfil_3.animate([
        {transform: "translateX(0px)"},
        {transform: "translateX(-60px)", width: "10em", height:"10em", opacity: "1", zIndex: "10"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_3.style.transform = "translateX(-60px)";
        doBig(perfil_3);
    }
}else if(contador==1 || contador==-2){
    contador++;
    perfil_1.animate([
        {transform: "translateX(200px)"},
        {transform: "translateX(60px)", width: "10em", height:"10em", opacity: "1"}
    ],  {
            duration:1000, iterations: 1
        }).onfinish = function(){
            perfil_1.style.transform = "translateX(60px)";
            doBig(perfil_1);
        }
    perfil_2.animate([
        {transform: "translateX(-60px)"},
        {transform: "translateX(60px)"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_2.style.transform = "translateX(60px)";
    }

    perfil_3.animate([
        {transform: "translateX(-60px)"},
        {transform: "translateX(-200px)", width: "5em", height:"5em", opacity: "0.5"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_3.style.transform = "translateX(-200px)";
        doSmall(perfil_3);
    }
}else if(contador==2 || contador==-1){
    contador=0;
    perfil_1.animate([
        {transform: "translateX(60px)"},
        {transform: "translateX(0px)", width: "5em", height:"5em", opacity: "0.5"}
    ],  {
            duration:1000, iterations: 1
        }).onfinish = function(){
            perfil_1.style.transform = "translateX(0px)";
            doSmall(perfil_1);
        }
    perfil_2.animate([
        {transform: "translateX(60px)"},
        {transform: "translateX(0px)", width: "10em", height:"10em", opacity: "1"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_2.style.transform = "translateX(0px)";
        doBig(perfil_2);
    }

    perfil_3.animate([
        {transform: "translateX(-200px)"},
        {transform: "translateX(0px)"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_3.style.transform = "translateX(0px)";
    }
}
});

angle_right.addEventListener("click", function(){
    if(contador==0){
    contador--;
    perfil_1.animate([
        {transform: "translateX(0px)"},
        {transform: "translateX(60px)", width: "10em", height:"10em", opacity: "1"}
    ],  {
            duration:1000, iterations: 1
        }).onfinish = function(){
            perfil_1.style.transform = "translateX(60px)";
            doBig(perfil_1);
        }
    perfil_2.animate([
        {transform: "translateX(0px)"},
        {transform: "translateX(60px)", width: "5em", height:"5em", opacity: "0.5"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_2.style.transform = "translateX(60px)";
        doSmall(perfil_2);
    }

    perfil_3.animate([
        {transform: "translateX(0px)"},
        {transform: "translateX(-200px)"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_3.style.transform = "translateX(-200px)";
    }
}else if(contador==-1  || contador==2){
    contador--;
    perfil_1.animate([
        {transform: "translateX(60px)"},
        {transform: "translateX(200px)", width: "5em", height:"5em", opacity: ".5"}
    ],  {
            duration:1000, iterations: 1
        }).onfinish = function(){
            perfil_1.style.transform = "translateX(200px)";
            doSmall(perfil_1);
        }
    perfil_2.animate([
        {transform: "translateX(60px)"},
        {transform: "translateX(-60px)"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_2.style.transform = "translateX(-60px)";
    }

    perfil_3.animate([
        {transform: "translateX(-200px)"},
        {transform: "translateX(-60px)", width: "10em", height:"10em", opacity: "1"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_3.style.transform = "translateX(-60px)";
        doBig(perfil_3);
    }
}else if(contador==-2 || contador==1){
    contador=0;
    perfil_1.animate([
        {transform: "translateX(200px)"},
        {transform: "translateX(0px)"}
    ],  {
            duration:1000, iterations: 1
        }).onfinish = function(){
            perfil_1.style.transform = "translateX(0px)";
        }
    perfil_2.animate([
        {transform: "translateX(-60px)"},
        {transform: "translateX(0px)", width: "10em", height:"10em", opacity: "1"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_2.style.transform = "translateX(0px)";
        doBig(perfil_2);
    }

    perfil_3.animate([
        {transform: "translateX(-60px)"},
        {transform: "translateX(0px)", width: "5em", height:"5em", opacity: ".5"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_3.style.transform = "translateX(0px)";
        doSmall(perfil_3);
    }
}
});
}


if(document.title === "Home"){
    const btnsHome = document.getElementsByTagName("button");
    const inputCerrarSesion = document.getElementsByTagName("input");

    if(localStorage.getItem("Oscuro") === "true"){
        for(i=0; i<=2; i++){
            btnsHome[i].classList.add("white");
        }
        document.body.classList.add("dark");
        inputCerrarSesion[0].classList.add("white");
        
    }
}


let cuentas = [
    {nombrePersona1: "Nelson", saldoPersona1: 200},
    {nombrePersona2: "Maria", saldoPersona2: 290},
    {nombrepersona3: "Herlyn", saldoPersona3: 267},
];
let cuentasString = JSON.stringify(cuentas);

if(obtenerCuentas() == "undefined"){
    guardarDatosCuentas(cuentasString);
}else{
   cuentas = JSON.parse(obtenerCuentas());
}


if(document.title === "Deposito" || document.title === "Retiro" || document.title === "Consultar saldo" || document.title === "Comprobante"){

function agregarFotoNelson(){
    let nombreTitular = document.getElementById("titular-id");
    imagenAutorCuenta.src = "../assets/img/ImageNelson.png";
    nombreTitular.textContent= "Nelson";
}

function agregarFotoMaria(){
    let nombreTitular = document.getElementById("titular-id");
    imagenAutorCuenta.src = "../assets/img/ImageMaria.png";
    nombreTitular.textContent= "Maria";
}

function agregarFotoHerlyn(){
    let nombreTitular = document.getElementById("titular-id");
    imagenAutorCuenta.src = "../assets/img/ImageHerlyn.png";
    nombreTitular.textContent= "Herlyn";
}


function darkModeDepositoRetiroConsultar(){
    const p = document.getElementsByTagName("p");
    const h2 = document.getElementsByTagName("h2");
    if(window.location.href.includes("/pages/Deposito.html") || window.location.href.includes("/pages/Retiro.html")){
    var h5 = document.getElementsByTagName("h5");
    var label = document.getElementsByTagName("label");
    }

    if(localStorage.getItem("Oscuro") === "true"){
        document.body.classList.add("dark");
        p[0].classList.add("white");
        h2[0].classList.add("white");
        if(window.location.href.includes("/pages/Deposito.html") || window.location.href.includes("/pages/Retiro.html")){
            let iconoAdvertencia = document.getElementById("iconoAdvertencia");
            h5[0].classList.add("white");
            label[0].classList.add("white");
            iconoAdvertencia.classList.add("white");
        }
        
    }else{
        document.body.classList.remove("dark");
        p[0].classList.remove("white");
        h2[0].classList.remove("white");
        if(window.location.href.includes("/pages/Deposito.html") || window.location.href.includes("/pages/Retiro.html")){
            h5[0].classList.remove("white");
            label[0].classList.remove("white");
        }
    }
}


if(document.title === "Deposito"){
    let inputDepositoRetiro = document.getElementById("input-operaciones-id");
    let Estado_de_cuenta = document.getElementById("estadoDeCuenta");
    darkModeDepositoRetiroConsultar();
    guardarUbicacion("0");

    inputDepositoRetiro.addEventListener("keydown", function (event) {
        const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "ArrowLeft", "ArrowRight", "Enter"];
      
        if (!allowedKeys.includes(event.key)) {
          event.preventDefault();
        }
      });

    function procesoDeposito(evento){
        if(evento.key === "Enter" || evento.keyCode === 13){
            if(inputDepositoRetiro.value != "" && inputDepositoRetiro.value== 20 || inputDepositoRetiro.value== 100 || inputDepositoRetiro.value== 200 || inputDepositoRetiro.value== 500 || inputDepositoRetiro.value== 1000){
            const deposito = parseInt(inputDepositoRetiro.value);
            guardarDepositoRetiro(deposito.toString());
            if((deposito+cuentas[0].saldoPersona1) > 990){
                alert("Por favor, ingrese una cantidad más pequeña, su saldo no debe superar más de $990 pesos MXN");
            }else{
                if(obtenerPerfil() == "Cuenta Nelson"){
                    cuentas[0].saldoPersona1 += deposito;
                    guardarDatosCuentas(JSON.stringify(cuentas));
                    Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[0].saldoPersona1}`;
                    window.location.href = "/pages/Comprobante.html";
                }else if(obtenerPerfil() == "Cuenta Maria"){
                    cuentas[1].saldoPersona2 += deposito;
                    guardarDatosCuentas(JSON.stringify(cuentas));
                    Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[1].saldoPersona2}`;
                    window.location.href = "/pages/Comprobante.html";
                }else if(obtenerPerfil() == "Cuenta Herlyn"){
                    cuentas[2].saldoPersona3 += deposito;
                    guardarDatosCuentas(JSON.stringify(cuentas));
                    Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[2].saldoPersona3}`;
                    window.location.href = "/pages/Comprobante.html";
                }
            }
            
        }else{
            alert("Valor no valido, por favor, ingrese una cantidad que este entre las opciones")
        }
        }
    }

    if(obtenerPerfil() == "Cuenta Nelson"){
        agregarFotoNelson();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[0].saldoPersona1}`;
        inputDepositoRetiro.addEventListener("keydown", function(evento){
           procesoDeposito(evento);
        });


    }else if(obtenerPerfil() == "Cuenta Maria"){
        agregarFotoMaria();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[1].saldoPersona2}`;
        inputDepositoRetiro.addEventListener("keydown", function(evento){
            procesoDeposito(evento);
         });
    }else if(obtenerPerfil() == "Cuenta Herlyn"){
        agregarFotoHerlyn();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[2].saldoPersona3}`;
        inputDepositoRetiro.addEventListener("keydown", function(evento){
            procesoDeposito(evento);
         });
    }

}else if(document.title === "Retiro"){
    let inputDepositoRetiro = document.getElementById("input-operaciones-id");
    let Estado_de_cuenta = document.getElementById("estadoDeCuenta");
    darkModeDepositoRetiroConsultar();
    guardarUbicacion("1");

inputDepositoRetiro.addEventListener("keydown", function (event) {
  const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "ArrowLeft", "ArrowRight", "Enter"];

  if (!allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
});

    function procesoRetiro(evento){
        if(evento.key === "Enter" || evento.keyCode === 13){
            if((inputDepositoRetiro.value != "" && inputDepositoRetiro.value== 20 || inputDepositoRetiro.value== 100 || inputDepositoRetiro.value== 200 || inputDepositoRetiro.value== 500 || inputDepositoRetiro.value== 1000)){
            const retiro = parseInt(inputDepositoRetiro.value);
            guardarDepositoRetiro(retiro.toString());
            if((cuentas[0].saldoPersona1-retiro) < 10){
                alert("Por favor, ingrese una cantidad más pequeña, su saldo no debe ser menor a $10 pesos MXN");
            }else{
                if(obtenerPerfil() == "Cuenta Nelson"){
                    cuentas[0].saldoPersona1 -= retiro;
                    guardarDatosCuentas(JSON.stringify(cuentas));
                    Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[0].saldoPersona1}`;
                    window.location.href = "/pages/Comprobante.html";
                }else if(obtenerPerfil() == "Cuenta Maria"){
                    cuentas[1].saldoPersona2 -= retiro;
                    guardarDatosCuentas(JSON.stringify(cuentas));
                    Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[1].saldoPersona2}`;
                    window.location.href = "/pages/Comprobante.html";
                }else if(obtenerPerfil() == "Cuenta Herlyn"){
                    cuentas[2].saldoPersona3 -= retiro;
                    guardarDatosCuentas(JSON.stringify(cuentas));
                    Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[2].saldoPersona3}`;
                    window.location.href = "/pages/Comprobante.html";
    
                }
            }
            inputDepositoRetiro.value = "";
        }else{
            alert("Valor no valido, por favor, ingrese una cantidad que este entre las opciones");
        }
        }
    }

    if(obtenerPerfil() == "Cuenta Nelson"){
        agregarFotoNelson();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[0].saldoPersona1}`;
        inputDepositoRetiro.addEventListener("keydown", function(evento){
           procesoRetiro(evento);
        });

    }else if(obtenerPerfil() == "Cuenta Maria"){
        agregarFotoMaria();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[1].saldoPersona2}`;
        inputDepositoRetiro.addEventListener("keydown", function(evento){
            procesoRetiro(evento);
         });
    }else if(obtenerPerfil() == "Cuenta Herlyn"){
        agregarFotoHerlyn();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[2].saldoPersona3}`;
        inputDepositoRetiro.addEventListener("keydown", function(evento){
            procesoRetiro(evento);
         });
    }
}else if(document.title === "Consultar saldo"){
    let Estado_de_cuenta = document.getElementById("estadoDeCuenta");
    darkModeDepositoRetiroConsultar();
    if(obtenerPerfil() == "Cuenta Nelson"){
        agregarFotoNelson();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[0].saldoPersona1}`;

    }else if(obtenerPerfil() == "Cuenta Maria"){
        agregarFotoMaria();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[1].saldoPersona2}`;
        
    }else if(obtenerPerfil() == "Cuenta Herlyn"){
        agregarFotoHerlyn();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[2].saldoPersona3}`;
        
    }

}
}

if(document.title === "Comprobante"){
    const pHora= document.getElementById("hora");
    function obtenerHoraActual(){
        const elAhora = new Date();
        let hora = elAhora.getHours();
        let minutos = elAhora.getMinutes();
        let segundos = elAhora.getSeconds();
        let dia = elAhora.getDate();
        let mes = elAhora.getMonth();
        let año = elAhora.getFullYear();

        mes = elAhora.toLocaleString("es", {month: "long"});

        dia = ("0" + dia).slice(-2);
        hora = ("0"+ hora).slice(-2);
        minutos = ("0"+ minutos).slice(-2);
        segundos = ("0"+ segundos).slice(-2);

        const fechahoraActual = `${dia} ${mes} ${año},${hora}:${minutos}:${segundos}`;
        pHora.textContent = fechahoraActual;
    }
    obtenerHoraActual();

    const cuentaDEVF = document.getElementById("cuentadevf");
    if(obtenerPerfil() == "Cuenta Nelson"){
        agregarFotoNelson();
        cuentaDEVF.textContent =  "Cuenta bancaria: 12345";

    }else if(obtenerPerfil() == "Cuenta Maria"){
        agregarFotoMaria();
        cuentaDEVF.textContent =  "Cuenta bancaria: 123456";

    }else if(obtenerPerfil() == "Cuenta Herlyn"){
        agregarFotoHerlyn();
        cuentaDEVF.textContent =  "Cuenta bancaria: 1234567";
    }

    const folio = document.getElementById("folioComprobante");
    const numeroAleatorio = Math.floor(Math.random() * 9999) + 1000;
    folio.textContent = `Folio: ${numeroAleatorio}`;


    const dinero = document.getElementById("dineroDepositadoRetirado");
    const textoRetiroDepositoComprobante = document.getElementById("textoRetiroODeposito");
    const linkRegresoRetiroDeposito = document.getElementById("RegresarRetiroDeposito");

    if(obtenerUbicacionRetiroDeposito()=== "0"){
        dinero.textContent = `Deposito: $${obtenerDepositoRetiro()}`;
        textoRetiroDepositoComprobante.textContent = "Deposito exitoso";
        linkRegresoRetiroDeposito.href="/pages/Deposito.html";
    }else if(obtenerUbicacionRetiroDeposito()=== "1"){
        dinero.textContent = `Retiro: $${obtenerDepositoRetiro()}`;
        textoRetiroDepositoComprobante.textContent = "Retiro exitoso";
        linkRegresoRetiroDeposito.href="/pages/Retiro.html";
    }

    function imprimirPagina(){
        return window.print();
    }


}