const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


module.exports = {
    index: (req,res) =>{
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));
        res.render(path.resolve(__dirname, '../views/users/administrar'), {users});
    },
    create: (req,res) =>{
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));
        res.render(path.resolve(__dirname, '../views/users/create'), {users});
    },
    save: (req,res) => {
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));
        let ultimoCliente = users.pop();
        users.push(ultimoCliente);
        let nuevoCliente = {
            id: ultimoCliente.id +1,
            first_name : req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age,
            email: req.body.email,
            password: req.body.password,
            document: req.body.document, 
            
        }
        users.push(nuevoCliente);
        let nuevouserCliente = JSON.stringify(users,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../data/users.json'), nuevouserCliente);
        res.redirect('/administrar');
    },
    show: (req,res) =>{
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));
        let miUser;
        users.forEach(user => {
            if(user.id == req.params.id){
                miUser = user;
            }
        });
        res.render(path.resolve(__dirname, '../views/users/detail'), {miUser})
    },
    edit: (req,res)=>{
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));
        const userId = req.params.id;
        let userEditar = users.find(user=> user.id == userId);
        res.render(path.resolve(__dirname,'../views/users/edit'), {userEditar});
    },  
    update: (req,res) =>{
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));
        req.body.id = req.params.id;
        req.body.image = req.file ? req.file.filename : req.body.oldImage;
        let usersUpdate = users.map(user =>{
            if(user.id == req.body.id){
                return user = req.body;
            }
            return user;
        })
        let userActualizar = JSON.stringify(usersUpdate,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../data/users.json'),userActualizar)
        res.redirect('/administrar');
},
destroy: (req,res) =>{
    let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));
    const userDeleteId = req.params.id;
    const usersFinal = users.filter(user => user.id != userDeleteId);
    let usersGuardar = JSON.stringify(usersFinal,null,2)
    fs.writeFileSync(path.resolve(__dirname, '../data/users.json'),usersGuardar);
    res.redirect('/administrar');
},
}