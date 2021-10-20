const express = require('express')
const app = express();
const cors = require('cors');
const socket = require('socket.io');
const User = require('./Models/User');

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers','X-PINGOTHER, Content-Type, Authorization');

    app.use(cors());
    next();
});

const server = app.listen(8080, () => {
    console.log('Server Iniciado/Atualizado http://localhost:8080');
});

io = socket(server, {cors: {origin: '*'}});
io.on('connection', (socket) => {
    console.log(socket.id);
});


app.post('/NewUser', async (req, res) => {
    
    let Dados = req.body
    
    const NewUser = {
        "nome": `${Dados.state.name}`,
        "email": `${Dados.state.email}`,
        "senha": `${Dados.state.senha}`,
    };

    await User.create(NewUser)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Cadastro bem sucedido"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Não foi possível realizar o cadastro"
        });
    });
});

app.post('/Validar_Email', async (req, res) => {
   
    let Dados = req.body;

    const Email_Validar = await User.findOne({
        where: {
            email: Dados.state.email
        }
    })

    if(Email_Validar){
        return res.json({
            erro: true,
            MensagemCadastro: "Este Email já esta cadastrado! Faça login ou cadastre-se com um novo Email.",
        });
    } else {
        return res.json({
            erro: false,
            MensagemLogin: "Certifique-se de ter inserido todos os dados corretamente ou cadastre uma nova conta!"
        });
    };
});

app.post('/Validar_Password', async (req, res) => {
   
    let Dados = req.body;

    const Password_Validar = await User.findOne({
        where: {
            email: Dados.state.email
        }
    })

    if(Password_Validar.senha === Dados.state.senha){
        return res.json({
            erro: false,
        });
    } else {
        return res.json({
            erro: true,
            MensagemLogin: "Senha incorreta! Certifique-se de ter inserido todos os dados corretamente e tente novamente."
        });
    };
});

app.get('/', (req, res) => {
    res.send('Server Iniciado')
})