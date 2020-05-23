const search = document.querySelector('input');
const msgOne = document.getElementById('one');
const msgTwo = document.getElementById('two');

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();

  const url = `/weather?address=${search.value}`;

  const data = fetch(url)
    .then(result => {
      if (result.ok) {
        return result.json();
      }
    })
    .catch(err => console.log(err));

  data
    .then(data => {
      if (data.error) {
        return (msgOne.textContent = data.error);
      }
      msgOne.textContent = data.location;
      msgTwo.textContent = data.forecast;
    })
    .catch(err => err);
});
