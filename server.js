let express = require('express'); // nodes key word 'require'.

// Create our app
let app = express();

// tell it which folder we want to serve. helps us add functionality to our app
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Express server is up on port 3000')
},
