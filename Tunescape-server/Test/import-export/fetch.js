// let musicDATA;

// async function fetchCall()
// {
//   await fetch('/music')
//     .then(response => response.json())
//     .then(data => {
//       // Process the music data
//       console.log("fetched-data " + data);

//       // ... Process the data further
//       musicDATA = data
//     })
//     .catch(error => {
//       console.log('Error fetching music data:', error);
//     });
// } 

// fetchCall()

// console.log(musicDATA)

let musicDATA;

async function fetchCall() {
  try {
    const response =await fetch('http://localhost:3040/music');
    musicDATA = await response.json();

    // console.log("fetched-data: ", data);
    // musicDATA = data;

    // console.log(musicDATA); // Now musicDATA will have the fetched data
  } catch (error) {
    console.log('Error fetching music data:', error);
  }
}

fetchCall();

console.log(musicDATA);