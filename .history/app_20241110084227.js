const { log } = require('console');
const path = require('path'); //we passing the module path that we wannt to get
console.log(path.sep)

//joining of different paths
const filepath = path.join('/content', 'subfolder', 'text.txt')
console.log(filepath)