  const DEV_PATH = 'http://192.168.56.10';

  const form = document.querySelector('form');
  const file = document.querySelector('#file');
  const msg = document.querySelector('#msg');
  const img = document.querySelector('#img');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append('img', file.files[0]);

    fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.dir(response);
      img.src = DEV_PATH + response.message;
    })
    .catch((err) => {
      msg.innerHTML = `ERROR!! <br> ${err}`;
    })
  });
