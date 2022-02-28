const express = require('express')
const app = express()

const {MongoClient} = require('mongodb')

async function main(){
    const uri="mongodb+srv://TestPerson1:MongoDB@cluster0.khzym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

    const seat = new MongoClient(uri);
    try{
        await seat.connect();

        await findRoster(seat, {
            studentName: true});

        


    } catch (e){
        console.error(e)
    } finally {
        await seat.close();
    }
    


}

main().catch(console.error);



// Define the port.
const port = process.env.PORT || 8080;

const server = http.createServer((req,res) => {
  // normalize url by removing querystring, optional trailing slash, and
  // making lowercase
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
  switch(path) {
    case '':
      serveStaticFile(res, '/public/index.html', 'text/html')
      break
    case '/about':
      serveStaticFile(res, '/public/about.html', 'text/html')
      break
    case '/img/logo.png':
      serveStaticFile(res, '/public/img/logo.png', 'image/png')
      break
    default:
      serveStaticFile(res, '/public/404.html', 'text/html', 404)
      break
  }
})

// Define directory where static files will be served to run in the browser.
app.use(express.static(__dirname + '/public'))

app.get('/hello/', (req, res) => {
	res.send('Hello World! - JU')
})

app.get('/mongo/', (req, res) => {
	res.send('MongoDB! - JU')
    async function updateSeatbyNumber(seat, name, updatedInfo){
        const result = await seat.db("USS").collection("seatCreation").updateOne({name: name}, {$set: updatedInfo})
    
        console.log(`${result.matchedCount} documents matched the search`);
        console.log(`${result.modifiedCount} documents were updated`);
    }
    
    async function updateSeatbyNumber30(seat, name, updatedInfo){
        const result = await seat.db("USS").collection("seatCreation").updateOne({name: name}, {$set: updatedInfo})
    
        
        
    
        console.log(`${result.matchedCount} documents matched the search`);
        console.log(`${result.modifiedCount} documents were updated`);
    }



    await updateSeatbyNumber(seat, "Seat 1", {studentName: "Timmy G", userName: "TG"});
    document.getElementById("Box1").innerHTML = studentName + userName + seat
    await updateSeatbyNumber30(seat, "Seat 30", {studentName: "Josh W", userName: "JW"});


})

const logMessage = 'Application listening at http://localhost:' + port
app.listen(port, () => {
	console.log(logMessage)
	console.log('...press  Ctrl-C to terminate.\n')
})
