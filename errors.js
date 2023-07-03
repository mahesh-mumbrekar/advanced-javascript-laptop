const fs =require('fs');

function readFile(){
    try{
    const filedata= fs.readFile('data.json'); //this file not exist
    }catch{
        console.log('An error occured!');

    }
    
    console.log('hi there!');
}


readFile();