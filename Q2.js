const path = require("path")
const fs = require("fs");

// 1. create a new folder named "Students"
//  const folderName = path.join(__dirname, 'Students');
// const fileName = path.join(__dirname, 'Students', 'users.js')

// fs.mkdir(folderName, (err) => {
// if (err) {console.log(`An error occured while creating folder: ${err}`)
// return;
// }
// console.log ('folder created sucessfully')

// })

// 2. create a file name user.js in the Students folder above

// fs.open(fileName, 'w', (err) => {
//     if (err) {console.log(`An error occured while creating file: ${err}`)
//     return;
//     }
//     console.log ('file created sucessfully');

//  })


// 3. update  Students directory to 'Names'

// const newfolderName = path.join(__dirname, 'Names');

// fs.rename(folderName, newfolderName, (err) => {
//     if (err) {console.log(`An error occured while creating folder: ${err}`)
//     return};
//     console.log ('folder renamed sucessfully')
// })


let newFilePath = path.join(__dirname, "Names", "users.js")

// 4. Add your Name As content to the file user.js

//  let content = "Aminat Adebimpe Balogun-Lawal"
 
// fs.writeFile(newFilePath, content, (err) => {

// if (err) {console.log(`An error occured while creating content: ${err}`)
//  return};
// console.log ('content created sucessfully')
// })
  

// 5. Append to add other details

//     let newContent =  '\nAge : 36, \nSex : Female, \nNationality : Nigerian, \nStaterOFOrigin : Lagos'

// fs.appendFile(newFilePath,newContent, (err) => {
//     if (err) {Console.log(`an error occurred while appending file: ${err}`); 
//     return
// } 
// console.log("File appended sucessfully")


// })

 
//  6. update the file users.js to directory to your {your-name}.js else.g Daniel_Adesoji.js

const myNameFilePath = path.join(__dirname, 'Names', 'Balogun_Adebimpe.js')

// fs.rename(newFilePath, myNameFilePath, (err) => {
//     if (err) {console.log(`An error occured while renaming file: ${err}`)
//     return};
//     console.log ('file renamed sucessfully')
// })

// 7. Read content of file

// fs.readFile(myNameFilePath, 'utf8', (err, data) => {
//         if (err) {console.log(`An error occured while reading file: ${err}`)
//         return
//     };
//      console.log (data)
// })
    

// 8. Delete file 

// fs.rm(myNameFilePath, (err) =>
// {
// if (err) {console.log(`An error occured while deleting file: ${err}`)
//         return
    
//     };    console.log ('file deleted sucessfully')
// })





