import axios from "axios";

async function getData(number){
    const {data:user} = await axios("https://jsonplaceholder.typicode.com/users/"+number);
    console.log(user);
}

export default getData;