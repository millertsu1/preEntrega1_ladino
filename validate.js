function validateForm() {
  let nombre, correo, telefono, cargo, mensaje, asunto, expresion;

  nombre = document.getElementById("nombre").value;
  correo = document.getElementById("correo").value;
  telefono = document.getElementById("telefono").value;
  cargo = document.getElementById("cargo").value;
  asunto = document.getElementById("asunto").value;
  mensaje = document.getElementById("mensaje").value;

  expresion = /\w+@\w+\.+[a-z]/;

  if (
    nombre === "" ||
    correo === "" ||
    telefono === "" ||
    cargo === "" ||
    asunto === "" ||
    mensaje === ""
  ) {
    alert("Todos los campos son obligatorios");
    return false;
  } else if (nombre.length > 30) {
    alert("el nombre es muy largo, solo permite 30 caracteres");
    return false;
  } else if (correo.length > 100) {
    alert("el email es muy largo, solo permite 100 caracteres");
    return false;
  } else if (telefono.length > 10) {
    alert("el telefono es muy largo, solo permite 10 numeros");
    return false;
  } else if (isNaN(telefono)) {
    alert("El telefono ingresado no es un numero");
    return false;
  } else if (mensaje.length > 500) {
    alert("el mensaje es muy largo, solo permite 500 caracteres");
    return false;
  } else if (!expresion.test(correo)) {
    alert("El correo ingresado no es valido, por favor veri");
    return false;
  }
}
