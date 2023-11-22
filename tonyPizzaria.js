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
                comentário: 'Pizza muito boa! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                avaliação: 3 
                },
                {
                    id: 2,
                    usuário:'Pedro Gomes Dias',
                    data: '21/05/2022',
                    comentário: 'Essa pizza é demais, recomendo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
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
                    comentário: 'Pizza muito boa! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliação: 3
                    }]
           } 
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
        }
    ]
}

