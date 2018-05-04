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

    function validatelog(form) {
      var elems = form.elements;

      resetError(elems.email.parentNode);
      if (!elems.email.value) {
        showError(elems.email.parentNode, 'Please enter email');
      }

      resetError(elems.password.parentNode);
      if (!elems.password.value) {
        showError(elems.password.parentNode, 'Please enter password');
      }
    }