function showError(container, errorMessage) {
      container.className = 'error';
      var msgElem = document.createElement('span');
      msgElem.className = "error-message";
      msgElem.innerHTML = errorMessage;
      container.appendChild(msgElem);
    }

    function resetError(container) {
      container.className = '';
      if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
      }
    }

    function validatesing(form) {
      var elems = form.elements;

      resetError(elems.email.parentNode);
      if (!elems.email.value) {
        showError(elems.email.parentNode, 'Please enter email');
      }

      resetError(elems.password.parentNode);
      if (!elems.password.value) {
        showError(elems.password.parentNode, 'Please enter password');
      }

      resetError(elems.firstname.parentNode);
      if (!elems.firstname.value) {
        showError(elems.firstname.parentNode, 'Please enter firstname');
      }

      resetError(elems.lastname.parentNode);
      if (!elems.lastname.value) {
        showError(elems.lastname.parentNode, 'Please enter lastname');
      }

    }