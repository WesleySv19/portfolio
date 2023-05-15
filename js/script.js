const modalTitle = document.getElementById('modalTitle')
const modalText = document.getElementById('modalText')

const modalShow = () => {
    $('#modalDescription').modal('show')
}


function info(id) {
    modalShow()

    if (id === 'htmlImg') {
        modalTitle.innerHTML = 'HTML'
        modalText.innerHTML = 'Como muitos iniciantes no mundo de Desenvolvimento Web, tive o meu primeiro contato com a tecnologia HTML. Uma linguagem de marcação a qual me chamou muita atenção para trilhar esse caminho que a Web me proporciona. Sou capaz de criar páginas acessíveis e ricas em detalhes.'
    } else if (id === 'cssImg') {
        modalTitle.innerHTML = 'CSS'
        modalText.innerHTML = 'Utilizar o Css para criar páginas muito atraentes parece ser algo muito complexo no início, porém, utilizando a tecnologia Css, posso fazer páginas responsivas e com muitos efeitos/animações bem atraentes para uma melhor experiência do usuário.'
    } else if (id === 'jsImg') {
        modalTitle.innerHTML = 'JAVASCRIPT'
        modalText.innerHTML = 'Para criar um site dinâmico passando toda uma lógica por trás, o Javascript tem sido o carro chefe. Sou capaz de implementar lógicas a nível iniciante, utilizando todo o básico para intereções com o usuário e lhe proporcionando uma melhor experiência rica em interações.'
    } else if (id === 'bootstrapImg') {
        modalTitle.innerHTML = 'BOOTSTRAP'
        modalText.innerHTML = 'Pensando em agilidade, o Bootstrap pode ser um grande aliado quando queremos soluções mais rápidas. Gosto muito de utiliza-lo em meus projetos para aumentar a produtividade em meus códigos.'
    } else if (id === 'phpImg') {
        modalTitle.innerHTML = 'PHP'
        modalText.innerHTML = 'Tendo em mente o backend de uma aplicação, nada melhor do que utilizar uma poderosa linguagem do lado do servidor. Com o PHP, consigo desenvolver soluções relativamente simples, por ser a uma linguagem que venho estudando a pouco tempo, tenho me dedicado a fazer projetos em cursos para poder implementar em meus próprios projetos pessoais.'
    } else if ('squlImg') {
        modalTitle.innerHTML = 'SQL'
        modalText.innerHTML = 'Uma base de dados é algo crucial quando se trata de informações extremamente valiosas para uma melhor usabilidade. Sou capaz de criar tabelas e fazer consultas a nível iniciante, claro, sempre estudando e procurando melhorar a eficiência e a segurança dos bancos de dados em meus projetos.'
    }
}


function showProject(id) {
    modalShow()
    if (window.matchMedia('(max-width: 767px)').matches) {
        if (id === 'projectLogin') {
            modalTitle.innerHTML = 'Projeto tela de login'
            modalText.innerHTML = '<img src="img/projetoLogin.png" height="250">'
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
        if (id === 'projectLogin') {
            modalTitle.innerHTML = 'Projeto tela de login'
            modalText.innerHTML = '<img src="img/projetoLogin.png" height="400">'
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

// function formSubmissionModal() {
//     modalShow()
// }

const formSubmissionModal = () => {
    $('#formSubmission').modal('show')
}
