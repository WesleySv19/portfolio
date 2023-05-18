const modalTitle = document.getElementById('modalTitle')
const modalText = document.getElementById('modalText')

const openModal = (id) => {
    $(id).modal('show')
}


const info = (id) => {
    openModal('#modalDescription')

    if (id === 'htmlImg') {
        modalTitle.innerHTML = '<strong>HTML</strong>'
        modalText.innerHTML = 'Como muitos iniciantes no mundo de Desenvolvimento Web, o meu primeiro contato foi com a linguagem de marcação HTML. Uma linguagem de marcação a qual me chamou muita atenção para trilhar esse caminho que a Web me proporciona. Sou capaz de criar páginas acessíveis e com muitos detalhes.'
    }  else if (id === 'cssImg') {
        modalTitle.innerHTML = '<strong>CSS</strong>'
        modalText.innerHTML = 'Usar o Css para criar páginas muito atraentes parece ser algo muito complexo no início, porém, utilizando o Css, posso fazer páginas responsivas e com muitos efeitos/animações bem atraentes para uma melhor experiência do usuário.'
    } else if (id === 'jsImg') {
        modalTitle.innerHTML = '<strong>JAVASCRIPT</strong>'
        modalText.innerHTML = 'Para criar um site dinâmico passando toda uma lógica por trás, o Javascript tem sido o carro chefe. Sou capaz de implementar lógicas a nível iniciante, utilizando todo o básico para intereções com o usuário e lhe proporcionando uma melhor experiência rica em interações.'
    } else if(id === 'gitImg') {
        modalTitle.innerHTML = '<strong>GIT</strong>'
        modalText.innerHTML = 'Com certeza a utilização do Git é muito importante quando se trata de várias ideias e projetos, possuo conhecimento a respeito de versionamento de código para trabalhar em equipe.'
    } else if (id === 'bootstrapImg') {
        modalTitle.innerHTML = '<strong>BOOTSTRAP</strong>'
        modalText.innerHTML = 'Pensando em agilidade, o Bootstrap pode ser um grande aliado quando queremos soluções mais rápidas. Gosto muito de utiliza-lo em meus projetos para aumentar a produtividade em meus códigos.'
    } else if (id === 'phpImg') {
        modalTitle.innerHTML = '<strong>PHP</strong>'
        modalText.innerHTML = 'Tendo em mente o backend de uma aplicação, nada melhor do que utilizar uma poderosa linguagem do lado do servidor, com o PHP consigo desenvolver soluções a nível iniciante. Por ser uma linguagem que venho estudando a pouco tempo, tenho me dedicado a fazer projetos em cursos para poder implementar em meus próprios projetos pessoais.'
    } else if ('squlImg') {
        modalTitle.innerHTML = '<strong>SQL</strong>'
        modalText.innerHTML = 'Uma base de dados é algo crucial quando se trata de informações extremamente valiosas para uma melhor usabilidade do projeto. Sou capaz de criar tabelas e fazer consultas a nível iniciante, claro, sempre estudando e procurando melhorar a eficiência e a segurança dos bancos de dados em meus projetos.'
    }
}

const showProject = (id) => {
    openModal('#modalProject')
    if (window.matchMedia('(max-width: 767px)').matches) {
        if (id === 'projetoForm') {
            modalTitle.innerHTML = 'Projeto formulário'
            modalText.innerHTML = '<img src="img/projetoForm.png" height="250">'
            modalText.style.display = 'flex'
            modalText.style.justifyContent = 'center'
        } 

        if (id === 'projectCalculadora') {
            modalTitle.innerHTML = 'Projeto Calculadora'
            modalText.innerHTML = '<img src="img/projetoCalculadora.png" height="250">'
            modalText.style.display = 'flex'
            modalText.style.justifyContent = 'center'
        }

        if (id === 'projectEleicao') {
            modalTitle.innerHTML = 'Projeto Calculadora'
            modalText.innerHTML = '<img src="img/projetoEleicao.png" height="250">'
            modalText.style.display = 'flex'
            modalText.style.justifyContent = 'center'
        } 
    } else if(window.matchMedia('(min-width: 768px)').matches) {
        if (id === 'projetoForm') {
            modalTitle.innerHTML = 'Projeto tela de login'
            modalText.innerHTML = '<img src="img/projetoForm.png" height="400">'
            modalText.style.display = 'flex'
            modalText.style.justifyContent = 'center'
        } 

        if (id === 'projectCalculadora') {
            modalTitle.innerHTML = 'Projeto calculadora'
            modalText.innerHTML = '<img src="img/projetoCalculadora.png" height="400">'
            modalText.style.display = 'flex'
            modalText.style.justifyContent = 'center'
        }

        if (id === 'projectEleicao') {
            modalTitle.innerHTML = 'Projeto eleição'
            modalText.innerHTML = '<img src="img/projetoEleicao.png" height="400">'
            modalText.style.display = 'flex'
            modalText.style.justifyContent = 'center'
        } 
    }
}

const formSubmissionModal = () => {
    openModal('#formSubmission')
}


$('#btnClear').on('click', () => {
    $('#name').val('')
    $('#message-text').val('')
})