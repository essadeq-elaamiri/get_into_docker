import express, { json } from "express"
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
	list_with_id.push({uuid: uuidv4(), name: cats_list[index]})
}
*/



let cats_list_ids = 
`[{"uuid":"bb39f71e-1de8-4f77-8862-0b91efbed133","name":"Abby"},{"uuid":"5cfce0fe-02a0-472b-901f-56f2a569fe47","name":"Angel"},{"uuid":"daafeb57-8f72-4e90-b116-0ede77ea3d69","name":"Annie"},{"uuid":"b70bf500-95b5-4175-9ea4-158b908044ec","name":"Baby"},{"uuid":"31844f30-4a95-4d78-bb65-146523751367","name":"Bailey"},{"uuid":"5fe8b395-a522-47d6-8147-e062c68a935d","name":"Bandit"},{"uuid":"715007c9-18d3-45e4-adf6-106a14063a97","name":"Bear"},{"uuid":"23fa373c-cdd8-46b1-95da-2f0348a46771","name":"Bella"},{"uuid":"6dbfd2ba-6166-4afd-bd4e-2256b0acc700","name":"Bob"},{"uuid":"83e3dbd9-31f8-47a3-900e-38dd534e7a45","name":"Boo"},{"uuid":"9085a25c-c460-4e19-88b1-6ac005f55677","name":"Boots"},{"uuid":"122b86f1-e7cf-4136-b2ff-fd3764ebc05f","name":"Bubba"},{"uuid":"9624c7ee-07d4-4cf2-9dd8-3c727551ec75","name":"Buddy"},{"uuid":"0c712906-974b-4b3c-b18f-00496aa1fd78","name":"Buster"},{"uuid":"455870e0-be0b-4181-af6d-7b841b535bd5","name":"Cali"},{"uuid":"ccaa0de3-d135-42e8-86e5-863a0d14bb19","name":"Callie"},{"uuid":"685f6c64-296d-4530-93dd-1e218558ba50","name":"Casper"},{"uuid":"fb666609-cd96-4a51-aa11-7ef6234641d0","name":"Charlie"},{"uuid":"d3f8af0b-27a1-4c75-8a96-7f638e067dfe","name":"Chester"},{"uuid":"9b00b0b7-3abe-41aa-b23f-6dbea740fe71","name":"Chloe"},{"uuid":"2f86e23e-b8dc-4c83-bb7d-298d756cb642","name":"Cleo"},{"uuid":"8bb68074-87cc-4bba-8630-a4f2049b9d0a","name":"Coco"},{"uuid":"5815a312-b81c-494d-8d3e-b65bb98adecb","name":"Cookie"},{"uuid":"e2f6fe92-3ebc-4420-8daa-3fb9d9feb0b6","name":"Cuddles"},{"uuid":"e35235f2-b3ef-44b5-a72d-996c43f2c11a","name":"Daisy"},{"uuid":"b47b0e77-84e9-4668-8093-d9945cdd7572","name":"Dusty"},{"uuid":"4800d6b0-d43c-41b3-8a75-b1c77a81b0fa","name":"Felix"},{"uuid":"ede07147-2bcb-4015-9d55-c4e427f501dd","name":"Fluffy"},{"uuid":"e121a042-8699-4c57-8a33-db732c3a020e","name":"Garfield"},{"uuid":"701084de-6de9-45c6-80ef-4f1079575022","name":"George"},{"uuid":"a817fa01-999c-4901-9209-7b39c81cdb9c","name":"Ginger"},{"uuid":"7e47f77c-1f2e-4c28-a0d3-1bff772b2592","name":"Gizmo"},{"uuid":"8a06543a-b538-4d08-9e85-326c3d8ff79e","name":"Gracie"},{"uuid":"2cbde0f4-30f1-493c-9663-804c90384a81","name":"Harley"},{"uuid":"dae51656-01a7-4a60-a91f-999231ccae1a","name":"Jack"},{"uuid":"36a5acc4-0ac1-490e-b118-63bc59e87a74","name":"Jasmine"},{"uuid":"fd0a856b-5ee6-4351-9a80-94fdfa9bb936","name":"Jasper"},{"uuid":"5ab7648a-1791-4fe1-8135-f02b96aa1742","name":"Kiki"},{"uuid":"47e7f752-c6c5-4d7b-b75f-a44b75998006","name":"Kitty"},{"uuid":"0afae965-83cb-4295-9371-30a3fa9d1563","name":"Leo"},{"uuid":"bbcdd7d5-9f77-4a8a-8760-35957b4dadfe","name":"Lilly"},{"uuid":"84af0c6b-446a-4037-9ddc-232ad2079b4d","name":"Lily"},{"uuid":"fde58de2-1cc5-4b5c-821e-0bed457e9279","name":"Loki"},{"uuid":"e624480d-b993-4b08-8f88-44d30ba8adb1","name":"Lola"},{"uuid":"20000265-b642-4a46-989d-3d8e458840f8","name":"Lucky"},{"uuid":"d722316d-dd09-4d19-ba4e-02d53ea0de9c","name":"Lucy"},{"uuid":"9d2a3684-d417-4f73-a5f3-8932ebf761f8","name":"Luna"},{"uuid":"9dc84fd4-e440-484a-911b-d95b5bf74023","name":"Maggie"},{"uuid":"789ec4ad-c874-4776-989b-03a07301d6ff","name":"Max"},{"uuid":"8b943357-c648-4b48-877d-3ee0479a2727","name":"Mia"},{"uuid":"a71f5a10-abcd-4e11-9986-c1c8be579110","name":"Midnight"},{"uuid":"0a23c334-189c-4cf3-9dbf-3cf34a2acb92","name":"Milo"},{"uuid":"0111687e-8833-454f-8d2c-628522fae023","name":"Mimi"},{"uuid":"777a682f-3625-4ba5-a420-aefd51f45b07","name":"Miss kitty"},{"uuid":"ed56dd96-68a2-4fd7-9b01-e8e7399a873c","name":"Missy"},{"uuid":"019c9c4a-757d-4693-9e9c-bf76b3d39bb6","name":"Misty"},{"uuid":"75ee1b45-03dd-4b40-a9cc-b714013bf640","name":"Mittens"},{"uuid":"661d218d-4698-49af-8c77-5c165730c4d6","name":"Molly"},{"uuid":"6e9da6c1-646a-40a9-8171-3d2d2bdf8dde","name":"Muffin"},{"uuid":"69cf6a97-8e94-4481-b47a-931974a7b96d","name":"Nala"},{"uuid":"adcb8060-0ef7-4665-88db-92f699830fac","name":"Oliver"},{"uuid":"a0a8e789-ce16-4dd4-9ce8-0effa1a30bdd","name":"Oreo"},{"uuid":"9eac4d93-e896-4f04-810b-391e25615ac4","name":"Oscar"},{"uuid":"f37ab324-daf6-4a6a-9948-8fe2ac6b384e","name":"Patches"},{"uuid":"4d449394-57ee-4373-839b-a2566e9be5b6","name":"Peanut"},{"uuid":"d8390c01-89f2-49dc-98f6-8a7dca5c510b","name":"Pepper"},{"uuid":"bc7ca2a0-b7ad-4177-ba03-4215080ccfa2","name":"Precious"},{"uuid":"508a50a4-d2c8-4e6f-ad89-5ccafd08a465","name":"Princess"},{"uuid":"bbcf1644-1aa0-4922-a568-d40ab9299221","name":"Pumpkin"},{"uuid":"341d531b-80e9-4829-9278-9ca7fb482ca7","name":"Rascal"},{"uuid":"50b4d454-9861-4d91-88c4-0fe9f53ee9b3","name":"Rocky"},{"uuid":"787e66d8-8a74-44c5-9e3c-2180e3cbde92","name":"Sadie"},{"uuid":"cb75e6bd-9cd1-4843-93f4-450f509ad171","name":"Salem"},{"uuid":"763296a7-c3f9-4c62-b939-82b25d363de7","name":"Sam"},{"uuid":"8c6b8821-49aa-4af5-9fe8-d0c3e68eb542","name":"Samantha"},{"uuid":"a0d4000b-0cb5-4b83-8a87-49dccc9bb224","name":"Sammy"},{"uuid":"e7827d05-e968-4c3b-8174-046c5ddd77d0","name":"Sasha"},{"uuid":"7ef757ca-9b38-49a2-bfdc-182323a64577","name":"Sassy"},{"uuid":"e0ba2048-f72d-4eeb-987e-976e3d80abdf","name":"Scooter"},{"uuid":"8cee3a0d-4761-42f5-bd7f-9d8c412ce663","name":"Shadow"},{"uuid":"a1f992ea-8f34-435f-b08c-b276dc9eb8d2","name":"Sheba"},{"uuid":"afb3fd33-d90f-4bb7-9351-45a6b1309475","name":"Simba"},{"uuid":"2c852668-bd86-4822-a184-03cd556dc62d","name":"Simon"},{"uuid":"49cb3ace-519f-4ba1-a3d5-39b18789f692","name":"Smokey"},{"uuid":"3aa3ca8f-9cc9-446e-9c28-cd2869bcfa84","name":"Snickers"},{"uuid":"97b12991-94ac-4422-a464-7b5ac1063cca","name":"Snowball"},{"uuid":"b2ce7974-7e19-4644-8068-0bfce20559cb","name":"Snuggles"},{"uuid":"0f451995-fd10-48e5-9ebb-7a4fb2c84c1a","name":"Socks"},{"uuid":"515e474f-0841-4b8a-b943-c2ab675d078b","name":"Sophie"},{"uuid":"e271d485-dde7-4800-b9d0-52c0ecd22ee3","name":"Spooky"},{"uuid":"205fbf11-ff53-4bd7-85ee-70e6340b2731","name":"Sugar"},{"uuid":"384adbdb-0225-4c48-8a4e-e5a2d7ef7298","name":"Tiger"},{"uuid":"af394782-fa0b-4983-91ce-28668511d3a5","name":"Tigger"},{"uuid":"0d371cac-c005-42a2-8d05-d9050827833e","name":"Tinkerbell"},{"uuid":"e2a9357c-3acb-4ef0-8db4-07a5062891b6","name":"Toby"},{"uuid":"628c8182-e34f-4345-aaa3-bae8a8757656","name":"Trouble"},{"uuid":"7bcf66e3-8f0b-437e-a36e-5bcf1b2532fa","name":"Whiskers"},{"uuid":"9b503425-a612-416d-9b6c-b9878a699568","name":"Willow"},{"uuid":"6a3852e0-cd1c-49d7-b797-944f5e4be2fe","name":"Zoe"},{"uuid":"507c97fe-beb5-4750-82c1-ec2fe2749846","name":"Zoey"}]`

// Connection URL
const url = 'mongodb://root:root@localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'cat-db';

async function main() {
	// Use connect method to connect to the server
	await client.connect();
	console.log('Connected successfully to server');
	const db = client.db(dbName);
	const collection = db.collection('cats');
	// const insertResult = await collection.insertMany(
    //     JSON.parse(cats_list_ids)
    // );
	const findResult = await collection.find({}).toArray();
	console.log('Found documents =>', findResult);

  return findResult;
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

app.get('/', async (req, res)=>{
	let cats = await main()
    res.json(cats)
})



app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})