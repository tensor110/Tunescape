//To perform CRUD operations on the database.
/**
  METHODS :
  addItem(obj);
  removeItem(id);
  editItem(id,modifiedObj);
  searchItem(id);

 */
const fs= require('fs');
const data = JSON.parse(fs.readFileSync('tunescape-db.json','utf-8'));

//Takes id of item as parameter and returns the item as an object if found else returns null.

function searchItem(id){
    for (const item of data){
        if (item.song_name == id )
        return item.hash_key;
    }
    return null;

}

//Takes item in the form of an object as input, writes it in the json file

function addItem(item){
    data.push(item);
    writeFile(data);
}

//Takes id of the object to be removed and returns the index from which it was removed

function removeItem(id){
    const indexToRemove= getIndex(id);
    data.splice(indexToRemove, 1);
    writeFile(data);
    return indexToRemove;

}

//Takes index and full modified object as argument

function editItem(id,changes){
    const indexToEdit= getIndex(id);
    data[indexToEdit]= changes;
    writeFile(data);

}


//Takes id of object as input and finds the index of the respective object

function getIndex(id){
    const index= data.indexOf(data.find(obj=>obj.id === id));
    return index;
}

//Takes modified data as input and overwrites the database 

function writeFile(data){
    const dataString= JSON.stringify(data,null,2);
    fs.writeFile('tunescape-db.json',dataString ,'utf8',(err)=>{
        if (err){
            console.log(err);
        }
        console.log("File update successful");
        
    })
}


module.exports= {
    addItem,
    searchItem,
    editItem,
    removeItem
}