$('.owl-carousel').owlCarousel({

    //habilita ou desabilita o loop do carrossel
    loop:true, 

    //margem entre as caixas
    margin:10, 

    //botões de navegação
    nav:false, 

    //propriedade responsável pela responsividade, sendo 0, 600, 1000 referente ao tamanho da tela e os items ao numero de itens a ser exibido em cada tela.
    responsive:{ 
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})