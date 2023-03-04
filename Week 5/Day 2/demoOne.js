let {MongoClient} = require('mongodb');

async function main() {
	const uri = "mongodb+srv://abhishekrajput097:psrLRaVBGVNbULJg@cluster0.mz9nshu.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try{
        await client.connect();
        await listDatabases(client);

    }
    catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

main().catch(console.error);


async function listDatabases(client){
    const databaseList = await client.db().admin().listDatabases();
    console.log("Databases :");
    databaseList.databases.forEach(db => {
        console.log(`-${db.name}`);
    });
}