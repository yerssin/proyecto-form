const form = document.querySelector("#formularioDatosDePago");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let soloNumeros = /^[0-9]+$/;
  let expresionRegularNumeroTarjeta = /^[0-9]{16}$/;

  if (!expresionRegularNumeroTarjeta.test(form.card.value)) {
    form.card.classList.add("is-invalid");
    document.getElementById("error_card").innerHTML =
      "Ingresa un número de 16 dígitos";
  } else {
    form.card.classList.remove("is-invalid");
  }

  let expresionRegularValoresDeCvc = /^[0-9]{3}$/;

  if (expresionRegularValoresDeCvc.test(form.valorCvc.value)) {
    form.valorCvc.classList.remove("is-invalid");
  } else {
    form.valorCvc.classList.add("is-invalid");
    document.getElementById("error_valorCvc").innerHTML =
      "Ingresa un número de 3 dígitos";
  }

  let expresionRegularValores = /^[0-9]{1,20}$/;

  if (!expresionRegularValores.test(form.amountValor.value)) {
    form.amountValor.classList.add("is-invalid");
    document.getElementById("error_amount").innerHTML =
      "Ingresa la cantidad de dinero";
  } else {
    form.amountValor.classList.remove("is-invalid");
  }

  let onlyText = /^[A-Za-z\s]+$/;

  if (!onlyText.test(form.firstnameValor.value)) {
    form.firstnameValor.classList.add("is-invalid");
    document.getElementById("inserteNombre").innerHTML =
      "Inserte un nombre válido";
  } else {
    form.firstnameValor.classList.remove("is-invalid");
  }

  if (!onlyText.test(form.lastApellidoValor.value)) {
    form.lastApellidoValor.classList.add("is-invalid");
    document.getElementById("inserteApellido").innerHTML =
      "Inserte un apellido válido";
  } else {
    form.lastApellidoValor.classList.remove("is-invalid");
  }

  if (!onlyText.test(form.cityValor.value)) {
    form.cityValor.classList.add("is-invalid");
    document.getElementById("city").innerHTML = "Inserte una ciudad válida";
  } else {
    form.cityValor.classList.remove("is-invalid");
  }

  // State

  //postal code

  if (!expresionRegularValores.test(form.postalCodeValor.value)) {
    form.postalCodeValor.classList.add("is-invalid");
    document.getElementById("postalCode").innerHTML =
      "Ingresa un código postal válido";
  } else {
    form.postalCodeValor.classList.remove("is-invalid");
  }

  //We accept

  //Message
  if (form.exampleFormControlTextarea1.value === "") {
    form.exampleFormControlTextarea1.classList.add("is-invalid");
    document.getElementById("Message").innerHTML = "Haz un comentario";
  } else {
    form.exampleFormControlTextarea1.classList.remove("is-invalid");
  }

  if (form.stateValor.value === "Pick a state") {
    form.stateValor.classList.add("is-invalid");
    document.getElementById("PickAState").innerHTML = "selecciona opción";
  } else {
    form.stateValor.classList.remove("is-invalid");
  }

  var alerta = document.getElementsByClassName("d-none")[0];
  alerta.classList.add("d-block");
});
