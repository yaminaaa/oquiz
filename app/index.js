const express = require('express');
const session = require('express-session');
const app = express();


const router = require('./routers');

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');

// De pouvoir utiliser les sessions
// "On fabrique les vestaires"
app.use(session({
  secret: 'This Is Unique ! epzgepogerigtrghrtgoirt',
  resave: true,
  saveUninitialized: true,
}));

app.use(express.static('./app/public'));
app.use(express.urlencoded({ extended: true }));


app.use(router);

app.listen(PORT, () => {
  console.log(`Server ready on http://localhost:${PORT}`);
})