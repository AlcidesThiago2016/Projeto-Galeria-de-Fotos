$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const endNewImg = $('#endereco-img-new').val();
        const newItem = $('<li></li>');
        $(`<img src="${endNewImg}" />`).appendTo(newItem);
        $(`
            <div class="overlay-img-link">
                <a href="${endNewImg}" target="_black" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(600);
        $('#endereco-img-new').val('')
    })
})