const search = document.querySelector('input');
const msgOne = document.getElementById('one');
const msgTwo = document.getElementById('two');

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();

  const url = `/weather?address=${search.value}`;

  msgOne.textContent = 'Loading...';
  msgTwo.textContent = '';

  fetch(url)
    .then(result => {
      if (result.ok) {
        return result.json();
      }
    })
    .then(data => {
      if (data.error) {
        msgOne.textContent = data.error;
      } else {
        msgOne.textContent = data.location;
        msgTwo.textContent = data.forecast;
      }
    });
});
