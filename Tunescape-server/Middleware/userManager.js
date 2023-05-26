//To perform CRUD operations on the database.
/**
  METHODS :
  addItem(obj);
  removeItem(id);
  editItem(id,modifiedObj);
  searchItem(id);

 */
const fs = require('fs');
const path = require('path');

p = path.join(__dirname, '../Database/userdb.json');


const data = JSON.parse(fs.readFileSync(p, 'utf-8'));



function writeFile(data){
    const dataString= JSON.stringify(data,null,2);
    fs.writeFile(p,dataString ,'utf8',(err)=>{
        if (err){
            console.log(err);
        }
        console.log("File update successful");
        
    })
}


//Takes id of item as parameter and returns the item as an object if found else returns null.

function userAuthenticator(username, password) {
    for (const item of data) {
        if (item.username === username) {
            if (item.password === password) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            continue;
        }
    }

}

function addUserToDb(username,password,email,telephone){
    data.push({
        "username":username,
        "password":password,
        "email":email,
        "telephone":telephone
    })
    writeFile(data)
}

function checkDuplicacy(username,email,telephone){
    for(const item of data){
        if(item.username===username ||item.email===email || item.telephone===telephone){
            return true
        }
        else{
            false
        }
    }
}

module.exports = { userAuthenticator ,addUserToDb,checkDuplicacy}