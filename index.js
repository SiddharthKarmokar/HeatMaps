import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get("/", (req, res) => {
    res.render('index.ejs');
});

app.listen(port , ()=>{
    console.log(`Server started on port ${port}`);
});