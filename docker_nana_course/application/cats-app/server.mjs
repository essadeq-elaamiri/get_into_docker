import express from "express"
import {v4 as uuidv4} from 'uuid';
import { MongoClient } from "mongodb";

const app = express()
const port = 3000

/*
let cats_list = [
	"Abby",
	"Angel",
	"Annie",
	"Baby",
	"Bailey",
	"Bandit",
	"Bear",
	"Bella",
	"Bob",
	"Boo",
	"Boots",
	"Bubba",
	"Buddy",
	"Buster",
	"Cali",
	"Callie",
	"Casper",
	"Charlie",
	"Chester",
	"Chloe",
	"Cleo",
	"Coco",
	"Cookie",
	"Cuddles",
	"Daisy",
	"Dusty",
	"Felix",
	"Fluffy",
	"Garfield",
	"George",
	"Ginger",
	"Gizmo",
	"Gracie",
	"Harley",
	"Jack",
	"Jasmine",
	"Jasper",
	"Kiki",
	"Kitty",
	"Leo",
	"Lilly",
	"Lily",
	"Loki",
	"Lola",
	"Lucky",
	"Lucy",
	"Luna",
	"Maggie",
	"Max",
	"Mia",
	"Midnight",
	"Milo",
	"Mimi",
	"Miss kitty",
	"Missy",
	"Misty",
	"Mittens",
	"Molly",
	"Muffin",
	"Nala",
	"Oliver",
	"Oreo",
	"Oscar",
	"Patches",
	"Peanut",
	"Pepper",
	"Precious",
	"Princess",
	"Pumpkin",
	"Rascal",
	"Rocky",
	"Sadie",
	"Salem",
	"Sam",
	"Samantha",
	"Sammy",
	"Sasha",
	"Sassy",
	"Scooter",
	"Shadow",
	"Sheba",
	"Simba",
	"Simon",
	"Smokey",
	"Snickers",
	"Snowball",
	"Snuggles",
	"Socks",
	"Sophie",
	"Spooky",
	"Sugar",
	"Tiger",
	"Tigger",
	"Tinkerbell",
	"Toby",
	"Trouble",
	"Whiskers",
	"Willow",
	"Zoe",
	"Zoey"
]

let list_with_id = []

for ( let index in cats_list ){
	list_with_id.push({id: uuidv4(), name: cats_list[index]})
}
*/



// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'cats-app';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

app.get('/', (req, res)=>{
    res.json(list_with_id)
})



app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})