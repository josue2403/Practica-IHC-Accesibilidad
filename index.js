window.onload = () => {
  document.querySelector(".arrow-right").addEventListener("click", clickRight);
  document.querySelector(".arrow-left").addEventListener("click", clickLeft);
  document.querySelector(".send-button").addEventListener("click", e => validateForm(e));
  document.querySelectorAll(".project").forEach(element => {
    element.addEventListener("click", e => openModal(e));
  });
  document.body.addEventListener("click", e => closeModal(e));
};

function validateForm(e) {
  e.preventDefault();

  const nameField = document.getElementById("nombre");
  const emailField = document.getElementById("correo");
  const messageField = document.getElementById("mensaje");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  nameError.innerHTML = "";
  emailError.innerHTML = "";
  messageError.innerHTML = "";

  if (nameField.value === "") {
    nameError.innerHTML = "¡Para enviar el formulario, se necesita un nombre!";
  }

  if (emailField.value === "") {
    emailError.innerHTML = "¡Por favor, proporciona tu correo electrónico!";
  }

  if (messageField.value === "") {
    messageError.innerHTML = "¡No puedes enviar un mensaje vacío!";
  }

  if (nameField.value !== "" && emailField.value !== "" && messageField.value !== "") {
    showNotification();
  }
}



function clickRight() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft < -270) {
    return;
  }
  let newValue = currentLeft - 270;
  document.querySelector(".project-container").style.left = `${newValue}px`;
}

function clickLeft() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft === 0) {
    return;
  }
  let newValue = currentLeft + 270;
  document.querySelector(".project-container").style.left = `${newValue}px`;
}

// ... (tu código actual) ...

function showNotification() {
  document.querySelector(".notification").style.display = "flex";
  
  // Agregar la llamada a resetForm después de mostrar la notificación
  resetForm();

  setTimeout(function () {
    document.querySelector(".notification").style.display = "none";
  }, 3000);
}

// Agregar esta función para resetear los campos del formulario
function resetForm() {
  const nameField = document.getElementById("nombre");
  const emailField = document.getElementById("correo");
  const messageField = document.getElementById("mensaje");

  nameField.value = "";
  emailField.value = "";
  messageField.value = "";

  // También puedes borrar los mensajes de error si los tienes
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  nameError.innerHTML = "";
  emailError.innerHTML = "";
  messageError.innerHTML = "";
}

// ... (tu código actual) ...

function openModal(e) {
  document.querySelector(".modal-container").style.display = "flex";
}

function closeModal(e) {
  if (
    e.target.className.includes("project") ||
    e.target.className === "modal"
  ) {
    return;
  } else {
    document.querySelector(".modal-container").style.display = "none";
  }
}
