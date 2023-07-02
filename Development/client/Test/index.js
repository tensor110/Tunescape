let arr=[]
const fetcher = async () => {

    await fetch("http://localhost:6969/buffer-stream-to-fetch-song")
        .then(res => {
           return (res.json())
        })
        .then(data=>
            arr = data
            )
    }

fetcher();
console.log(arr);