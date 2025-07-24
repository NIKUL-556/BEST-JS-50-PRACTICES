// implement a try-catch block to handle an error that occurs during API data fetching

let GetData = async(url)=>{
    try {
        let Data = await fetch(url)
        let responce = await Data.json()
        console.log(responce[0].title);
    } catch (error) {
        console.log(error);
    }
}

GetData("https://jsonplaceholder.typicode.com/posts")