function pesquisar() {
    var termo = document.getElementById('pesquisarInput').value.trim().toLowerCase();
    termo = removerAcentos(termo);
    switch (termo) {
        case 'quem e neymar jr':
            window.location.href = '#collapseOne';
            break;
        case 'inicio da carreira':
            window.location.href = '#collapseTwo';
            break;
        case 'participacoes nos times':
            window.location.href = '#collapseThree';
            break;
        default:
            alert('Seção não encontrada!');
    }
}

function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
