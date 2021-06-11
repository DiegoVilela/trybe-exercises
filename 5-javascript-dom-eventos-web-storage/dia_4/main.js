window.onload = () => {
  var form = document.querySelector('form');
  var preferences = JSON.parse(localStorage.getItem('preferences')) || {};

  if (preferences) {
    applyPreferences(preferences);
    fillForm(preferences);
  }  

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    preferences = updatePreferences(form);

    savePreferences(preferences);

    applyPreferences(preferences);
  });

  function applyPreferences(obj) {
    let article = document.querySelector('article'); 
    for (let key in obj) article.style[key] = obj[key];
  }

  function updatePreferences(formElement) {
    const formData = new FormData(formElement);

    for (let pair of formData.entries()) {
      preferences[pair[0]] = pair[1];
    }

    return preferences;
  }

  function savePreferences(obj) {
    localStorage.setItem('preferences', JSON.stringify(obj));
  }

  function fillForm(obj) {
    for (let key in obj) form.elements[key].value = obj[key];
  }
}
