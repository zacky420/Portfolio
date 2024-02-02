function changeLanguage() {
  const select = document.getElementById("language");
  const selectedFlag = select.options[select.selectedIndex].getAttribute("data-flag");
  document.getElementById("selected-flag").src = selectedFlag;

  // Lógica para cambiar el idioma (añadir la lógica que necesites)
  const selectedLanguage = select.value;

  // Actualizar contenido según el idioma actual
  updateContent(selectedLanguage);
}

function updateContent(selectedLanguage) {
  const elementsWithLanguage = document.querySelectorAll(`[data-${selectedLanguage}]`);

  elementsWithLanguage.forEach((element) => {
      const content = element.getAttribute(`data-${selectedLanguage}`);
      element.textContent = content;
  });
}

// Llamada inicial para establecer el contenido inicial
updateContent("es");



function toggleText(element) {
  const cardContent = element.previousElementSibling;
  cardContent.style.maxHeight = cardContent.style.maxHeight === '150px' ? '100%' : '150px';
  element.innerText = cardContent.style.maxHeight === '150px' ? 'Ver más' : 'Ver menos';
}



