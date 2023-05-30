//To perform CRUD operations on the database.
/*
  METHODS :
  addItem(obj);
  removeItem(id);
  editItem(id,modifiedObj);
  searchItem(id);

 */
const fs= require('fs');
const path= require('path');

let path_to_tunescapedb= path.join(__dirname,'../Database/tunescapedb.json');


const data = JSON.parse(fs.readFileSync(path_to_tunescapedb,'utf-8'));

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

// function editItem(id,changes){
//     const indexToEdit= getIndex(id);
//     data[indexToEdit]= changes;
//     writeFile(data);

// }


//Takes id of object as input and finds the index of the respective object

function getIndex(id){
    const index= data.indexOf(data.find(obj=>obj.song_name === id));
    return index;
}

//Takes modified data as input and overwrites the database 

function writeFile(data){
    const dataString= JSON.stringify(data,null,2);
    fs.writeFile(path_to_tunescapedb,dataString ,'utf8',(err)=>{
        if (err){
            console.log(err);
        }
        console.log("File update successful");
        
    })
}

function getSong(song_name){
    console.log(song_name)
    const index= data.indexOf(data.find(obj=>obj.song_name ===song_name));
    console.log("Song Index = " + index)
    return index;
}

function editItem(song_name,changes){
    console.log(song_name)
    const indexToEdit= getIndex(song_name);
    data[indexToEdit]= changes;
    writeFile(data);
}

// addItem(  {
//     "song_name": "talibani",
//     "hash_key": "13c77c5cb8243d034ca702c5b476a8da"
//   })

// editItem('talibani2',  {
//     "song_name": "talibani",
//     "hash_key": "KEY_UPDATE",
//     "thumbnail":"thumbnail"
//   })

function searchSong(song_name){
    
    for (const item of data){
        if (item.song_name == song_name )
        console.log(item.song_name)
        return item.song_name;
    }
    return null;
}

// console.log(searchSong('musik4'));

// editItem(searchSong('suzume'),{
//         "song_name": "musikpo",
//         "hash":'08454t64 c4'
// })

module.exports= {
    addItem,
    searchItem,
    editItem,
    removeItem,
    getSong,
    searchSong
}