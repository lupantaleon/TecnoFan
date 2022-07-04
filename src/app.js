// Módulos
const bp = require('body-parser')
const express = require('express');
const path = require('path');
const mainRouter = require("./routes/mainRouter");
const methodOverride = require('method-override');
const adminRouter = require('./routes/admin');
const session = require('express-session')
const usersRoutes = require('./routes/userRoutes');
const cookies = require('cookie-parser')

// ************ express() ************
const app = express();

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

// ************ Template Engine - ************
app.set("view engine", "ejs");
app.set('views', path.resolve(__dirname, './views'));

// ************ Middlewares ************
app.use(express.urlencoded({ extended: false}));
app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(express.static('public'));
app.use ( methodOverride ('_method') );
app.use(bp.json())
/* app.use(bp.urlencoded({ extended: true })) */
app.use(express.urlencoded({ extended: false }));
app.use(cookies());

app.use(userLoggedMiddleware);

// ************ Route System require and use() ************
app.use("/", mainRouter);
app.use(adminRouter);
const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);

app.listen(3002, () => { console.log('Servidor arriba en el puerto 3002 🤓👌');})
app.use((req, res, next )=> {res.status (404).render ('not-found')});



