//Load 20 jokes from the API to the local system and take the index as input to display the joke.

const jokes= [];


async function getJokes(){
    
    for (var i=0; i<20; i++)
    {
        const data= await fetch('https://v2.jokeapi.dev/joke/Dark?type=single');
        const json= await data.json();
        await appendJoke(json.joke);
    }
}


function appendJoke(joke){
    jokes.push(joke);
    }


async function displayJokes(){
    await getJokes();
    console.log(jokes);
}

console.log(jokes);
displayJokes();