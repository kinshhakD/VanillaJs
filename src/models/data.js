import { result } from "lodash";


const jsonUrl = "http://localhost:3000/dish";














const database = async () => {
  const response = await fetch(jsonUrl);
  const data = await response.json();
  return data
}





database().then(result => console.log(result.map(el => el.description)));

database().then(result => console.log(result))

export default  database;




