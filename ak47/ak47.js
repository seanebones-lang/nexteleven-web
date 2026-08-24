(function () {
  'use strict';

  var year = document.getElementById('y');
  if (year) year.textContent = new Date().getFullYear();

  var menuButton = document.getElementById('menu-btn');
  var drawer = document.getElementById('drawer');

  function closeDrawer() {
    if (!menuButton || !drawer) return;
    drawer.setAttribute('hidden', '');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    menuButton.classList.remove('open');
  }

  if (menuButton && drawer) {
    menuButton.addEventListener('click', function () {
      var willOpen = drawer.hasAttribute('hidden');
      if (willOpen) {
        drawer.removeAttribute('hidden');
        menuButton.setAttribute('aria-expanded', 'true');
        menuButton.setAttribute('aria-label', 'Close menu');
        menuButton.classList.add('open');
      } else {
        closeDrawer();
      }
    });

    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });
  }

  var form = document.getElementById('ak47-lead-form');
  var submitButton = document.getElementById('submit-button');
  var successPanel = document.getElementById('form-success');
  var errorPanel = document.getElementById('form-error');
  var packetDownload = document.getElementById('packet-download');

  if (!form || !submitButton || !successPanel || !errorPanel || !packetDownload) return;

  var packetPath = [
    '/downloads/ak47/',
    '2026-08-24-264cfcc2-5233/',
    'AK47-Founding-Freeze-Buyer-Information-Packet-2026-08-24-r2.zip'
  ].join('');

  function formatSubmissionError(payload) {
    if (!payload || !Array.isArray(payload.errors) || !payload.errors.length) {
      return 'The request could not be sent. Please check your connection and try again. The packet stays locked until the form is received.';
    }

    return payload.errors.map(function (error) {
      return error && error.message ? error.message : 'Please review the form and try again.';
    }).join(' ');
  }

  function unlockPacket() {
    packetDownload.setAttribute('href', packetPath);
    form.setAttribute('hidden', '');
    errorPanel.textContent = '';
    successPanel.removeAttribute('hidden');
    successPanel.focus();

    var automaticDownload = document.createElement('a');
    automaticDownload.href = packetPath;
    automaticDownload.download = 'AK47-Founding-Freeze-Buyer-Information-Packet-2026-08-24-r2.zip';
    automaticDownload.rel = 'nofollow';
    automaticDownload.style.display = 'none';
    document.body.appendChild(automaticDownload);
    automaticDownload.click();
    automaticDownload.remove();
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    errorPanel.textContent = '';

    if (!form.reportValidity()) return;

    submitButton.disabled = true;
    submitButton.textContent = 'Sending request…';
    form.setAttribute('aria-busy', 'true');

    try {
      var response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      var payload = null;
      try {
        payload = await response.json();
      } catch (ignored) {
        payload = null;
      }

      if (!response.ok) {
        throw new Error(formatSubmissionError(payload));
      }

      unlockPacket();
      form.reset();
    } catch (error) {
      errorPanel.textContent = error && error.message
        ? error.message
        : 'The request could not be sent. Please try again.';
      errorPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Submit and unlock the buyer packet';
      form.removeAttribute('aria-busy');
    }
  });
})();
