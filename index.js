
import (resolve, sep, extname) from 'path'

// console.log(resolve())

function workingDirectory(){
let result = resolve()
return result
}

console.log (workingDirectory())

function osSeparator(){
let result = sep()
return result

}
console.log(osSeparator())
