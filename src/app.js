// Módulos
const express = require('express');
const path = require('path');
const mainRouter = require("./routes/mainRouter");

const app = express();
// Acá falta uno... 😇
app.set("view engine", "ejs");
app.set('views', path.resolve(__dirname, './views'));
// Configuración
app.use(express.static('public'));
// Acá falta el template engine

// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS

app.use("/", mainRouter);

app.listen(3002, () => { console.log('Servidor arriba en el puerto 3002 🤓👌');})
/* app.use((req, res, next )=> {res.status (404).render ("not found")});
 */

const methodOverride = require('method-override');
app.use ( methodOverride ('_method') );