var jsonCategorias = {
    categorias: [
        {id: 1, nome: 'pizzas especiais'},
        {id: 1, nome: 'pizzas doce'},
        {id: 1, nome: 'pizzas salgadas'},
        {id: 1, nome: 'pizzas veganas'},
        {id: 1, nome: 'bebidas'},
        {id: 1, nome: 'sobremesas'}
    ]
}


var jsonProdutos = {
    produtos: [
        {
            id: 1,
            nome: 'Pizza peperoni com queijo e tomate',
            preço: '19,65',
            imagem: '',
            descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categorias: jsonCategorias.categorias[2],
            comentários: [
                {
                id: 1,
                usuário:'Maria da Silva',
                data: '15/03/2022',
                titulo: 'Pizza muito boa!',
                comentário: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                avaliação: 3 
                },
                {
                    id: 2,
                    usuário:'Pedro Gomes Dias',
                    data: '21/05/2022',
                    titulo: 'Essa pizza é demais, recomendo.',
                    comentário: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliação: 4
                    }
            ]},
            {
                id: 2,
                nome: 'Pizza de calabreza com queijo',
                preço: '16,00',
                imagem: '',
                descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                categorias: jsonCategorias.categorias[2],
                comentários: [
                    {
                    id: 3,
                    usuário:'Fulano da Silva',
                    data: '18/03/2022',
                    titulo: 'Pizza muito boa!',
                    comentário: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliação: 3
                    }]
           },
           {
                 id: 3,
                 nome: 'Pizza de peperoni com queijo',
                 preço: '19,00',
                 imagem: '',
                 descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                 categorias: jsonCategorias.categorias[2],
                 comentários: [
                {
                id: 1,
                usuário:'Ana Maria Braga',
                data: '25/07/2022',
                titulo: 'Pizza muito boa!',
                comentário: 'Pizza muito boa! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                avaliação: 4
                }
            ]},
            {
                id: 4,
                nome: 'Pizza de calabreza com queijo',
                preço: '16,00',
                imagem: '',
                descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                categorias: jsonCategorias.categorias[0],
                comentários: [
                    {
                    id: 1,
                    usuário:'Luis Melo',
                    data: '30/08/2022',
                    titulo: 'Pizza muito boa!',
                    comentário: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliação: 5
                    }
                ]},
                {
                    id: 5,
                    nome: 'Pizza brotinho com queijo e tomate',
                    preço: '12,00',
                    imagem: '',
                    descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    categorias: jsonCategorias.categorias[0],
                    comentários: [
                        {
                        id: 1,
                        usuário:'Amanda Cruz',
                        data: '12/09/2022',
                        titulo: 'Pizza muito boa!',
                        comentário: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                        avaliação: 4
                        }
                    ]},
                    {
                        id: 6,
                        nome: 'Pizza brotinho com queijo e tomate',
                        preço: '12,00',
                        imagem: '',
                        descrição: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        categorias: jsonCategorias.categorias[0],
                        comentários: [
                            {
                            id: 1,
                            usuário:'Amanda Cruz',
                            data: '12/09/2022',
                            titulo: 'Pizza muito boa!',
                            comentário: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                            avaliação: 4
                            }
                        ]}
]}

var jsonUsuario = {
    usuarios: [
        {
            id: 1,
            imagem: './img/user.png',
            nome: 'Fulano Da Silva',
            email: 'fulado.silva@email.com.br',
            senha: 'newjeans',
            telefone: '(11) 95555-5555',
            localização: 
                [
                    {
                    id: 1,
                    estado: 'SP',
                    rua: 'Rua Perto de Algum Lugar',
                    barro: 'Jardim Xurupita',
                    país: 'Brasil'
                    }
                ]
        },
        {
            id: 2,
            imagem: './img/user.png',
            nome: 'Amanda Cruz',
            email: 'amanda.cruz@email.com.br',
            senha: 'am2023',
            telefone: '(11) 9456-5890',
            localização: 
                [
                    {
                    id: 1,
                    estado: 'PE',
                    rua: 'Rua Perto do Mercado Sol',
                    barro: 'Bom Jardim',
                    país: 'Brasil'
                    }
                ]
        }
    ]
}

module.exports = {
    jsonCategorias,
    jsonUsuario,
    jsonProdutos
 }