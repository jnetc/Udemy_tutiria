const fs = require('fs')

const data = {
  title: 'Ego is an anemy',
  author: 'Ryan Holiday'
}


const file = JSON.stringify(data, null, 2)

async function addFile () {
  try {
    await fs.promises.access('1-json.json')
    console.log('access');
    
  } catch (error) {
    
    console.log('no access');
    await fs.promises.writeFile('1-json.json', file)
  }
}
addFile()

const buffer = fs.readFileSync('1-json.json')
console.log(JSON.parse(buffer));
