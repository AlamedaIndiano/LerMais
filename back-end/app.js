const express = require('express')
const app = express();
const cors = require('cors');
const socket = require('socket.io');
const path = require('path');
const fs = require('fs');

const User = require('./Models/User');
const Admin = require('./Models/Admin');
const Livros = require('./Models/Livros');
const UploadSite = require('./middlewares/Upload_Imagens');
const Imagens = require('./Models/Imagens');
const Sliders = require('./Models/Slider');

app.use(express.json());

app.use("/files", express.static(path.resolve(__dirname, "public", "upload" )));

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

app.post('/Validar_Email_Admin', async (req, res) => {
    
    let Dados = req.body;

    const Email_Validar_Admin = await Admin.findOne({
        where: {
            email: Dados.state.email
        }
    });

    if(Email_Validar_Admin){
        return res.json({
            erro: true,
            MensagemLogin: "Você está fazendo login como admin!",
            MensagemLoginErro: "Não é possivel realizar o cadastro utilizando este endereço de Email."
        });
    };
    return res.json({
        erro: false,
        MensagemLogin: "Certifique-se de ter inserido todos os dados corretamente ou cadastre uma nova conta!"
    });
});

app.post('/Validar_Password', async (req, res) => {
   
    let Dados = req.body;

    const Password_Validar = await User.findOne({
        where: {
            email: Dados.state.email
        }
    });

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

app.post('/Validar_Password_Admin', async (req, res) => {
   
    let Dados = req.body;

    const Password_Admin = await Admin.findOne({
        where: {
            email: Dados.state.email
        }
    });

    if(Password_Admin.senha === Dados.state.senha){
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

app.post("/upload_imagem", UploadSite.single('image'), async (req, res) => {

    await Imagens.create({image: req.file.filename})
    .then(() => {
        console.log('Imagem criada')
    }).catch(() => {
        console.log('Imagem NÃO criada')
    })

    if(req.file){
        return res.status(200).json({
            erro: false,
            mensagem: "Upload da imagem realizado com sucesso!"
        });
    };

    return res.status(400).json({
        erro: true,
        mensagem: "ERRO! não foi possivel realizar o upload da imagem. Por favor, verifique se sua imagem tem a extensão JPG, PNG ou JPEG e tente novamente."
    });
});

app.post("/New_Livros", async (req, res) => {
    
    let Dados = req.body;

    const New_Livro = {
        "titulo": `${Dados.Dados_Livros.titulo}`,
        "descricao": `${Dados.Dados_Livros.descricao}`
    };

    await Livros.create(New_Livro)
    .then(() => {
        return res.status(200).json({
            erro: false,
            mensagem: "Livro cadastrado com sucesso!"
        });

    }).catch(() => {
        return res.status(200).json({
            erro: false,
            mensagem: "Erro: não foi possível cadastrar este livro! Recarregue a página e Tente novamente."
        });
    });
});

app.get("/Deletar_Livro/:id", async (req, res) => {

    await (
        Livros.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            return res.status(200).json({
                erro: false,
                mensagem: "Livro deletado com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Não foi possível deletar o livro, tente novamente!"
            });
        }),

        Imagens.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            return res.status(200).json({
                erro: false,
                mensagem: "Imagem deletado com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Não foi possível deletar a Imagem, tente novamente!"
            });
        })
    );
});


app.get('/Delete_Image/:imagem', async (req, res) => {
    if(fs.existsSync(`./public/upload/site/${req.params.imagem}`)){
        fs.unlink(`./public/upload/site/${req.params.imagem}`, (err) => {
            if(err) throw err;
        });
    };
});

app.get('/Listar_Livros', async (req, res) => {
    await (
        Livros.findAll()
        .then((livro) => {
            
            Imagens.findAll()
            .then((image) => {
                return res.status(200).json({
                    erro: false,
                    livro,
                    url: `http://localhost:8080/files/site/`,
                    image
                });
            }).catch(() => {
                return res.status(400).json({
                    erro: true,
                    mensagem: "Erro: Nenhuma imagem encontrada!"
                });
            })
            
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhuma imagem encontrada!"
            });
        })
    );
});

app.get('/Pesquisar_Livros/:titulo', async (req, res) => {
    await (
        Livros.findOne({
            where: {
                titulo: req.params.titulo
            }
        })
        .then((livro) => {
            
            Imagens.findOne({
                where: {
                    id: livro.id 
                }
            })
            .then((image) => {
                return res.status(200).json({
                    erro: false,
                    livro,
                    url: `http://localhost:8080/files/site/`,
                    image
                });
            }).catch(() => {
                return res.status(400).json({
                    erro: true,
                    mensagem: "Erro: Nenhuma imagem encontrada!"
                });
            })
            
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhuma imagem encontrada!"
            });
        })
    );
    
    
});