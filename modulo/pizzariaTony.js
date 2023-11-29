/***************************************************************
 * Objetivo: API do site Pizzaria Tony
 * Data: 29/11/2023
 * Autor: Giovanna
 * Versão: 1.0
 **************************************************************/

var tonyPizzaria = require('../tonyPizzaria.js');

//função para listar todas as categorias

const getListaDeCategorias = function(){

    let categorias = tonyPizzaria.jsonCategorias.categorias


    categJson = {}
    categArray = []

    categJson.categorias = categArray
    
    categorias.forEach(function(categoria){
        categArray.push(categoria)
    })

    return categJson
}

console.log(getListaDeCategorias())

///////////////////////////////////////////////////////////////////////////////////////////////////////

//função para listar todos os produtos

const getListaDeProdutos = function(){

    let produtos = tonyPizzaria.jsonProdutos.produtos


    produtosJson = {}
    produtosArray = []


    produtosJson.produtos = produtosArray
    
    produtos.forEach(function(produto){
        produtosArray.push(produto)
    })

    return produtosJson
}

console.log(getListaDeProdutos()) 