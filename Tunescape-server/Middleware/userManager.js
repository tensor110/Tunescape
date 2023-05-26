//To perform CRUD operations on the database.
/**
  METHODS :
  addItem(obj);
  removeItem(id);
  editItem(id,modifiedObj);
  searchItem(id);

 */
  const fs= require('fs');
  const path= require('path');
  
  p= path.join(__dirname,'../Database/userdb.json');
  
  
  const data = JSON.parse(fs.readFileSync(p,'utf-8'));
  
  //Takes id of item as parameter and returns the item as an object if found else returns null.
 
  function userAuthenticator(username,password){
    for (const item of data){
        if (item.username === username )
        {
            if(item.password===password){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
    

}

module.exports= {userAuthenticator}