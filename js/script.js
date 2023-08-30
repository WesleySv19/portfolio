AOS.init()

const changeTheme = document.querySelector('#change-theme')

const toggleTheme = () => {
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark', '1')
    } else {
        localStorage.removeItem('dark')
    }
}

const loadTheme = () => {
    const darkMode = localStorage.getItem('dark')
    if (darkMode) {
        document.body.classList.add('dark')
    }
}

loadTheme()

changeTheme.addEventListener('click', toggleTheme)

const openModal = () => {
    const openModalTech = document.querySelectorAll('.container_tec')
    const modal = new bootstrap.Modal(document.querySelector('#modal'))
    const modaltitle = document.querySelector('.modal-title')
    const modalBody = document.querySelector('.modal-body')

    openModalTech.forEach((tech, index) => {
        tech.addEventListener('click', function() {
            modal.show()

            switch (index) {
                case 0: modaltitle.innerHTML = 'HTML (HyperText Markup Language)', modalBody.innerHTML = 'HTML é a linguagem de marcação usada para criar a estrutura e o conteúdo de páginas da web. Ela define os elementos e sua organização, permitindo que os navegadores interpretem e exibam o conteúdo da página.'
                    break
                case 1: modaltitle.innerHTML = 'CSS (Cascading Style Sheets)', modalBody.innerHTML = 'CSS é uma linguagem de estilo usada para controlar a aparência e o layout dos elementos HTML em uma página da web. Ele define cores, fontes, posicionamento e outros aspectos visuais.'
                    break
                case 2: modaltitle.innerHTML = 'JAVASCRIPT', modalBody.innerHTML = 'JavaScript é uma linguagem de programação usada principalmente no desenvolvimento web. Ela permite a criação de interatividade dinâmica em páginas da web, controlando comportamentos do usuário e manipulando elementos da página.'
                    break
                case 3: modaltitle.innerHTML = 'TYPESCRIPT', modalBody.innerHTML = 'TypeScript é uma extensão do JavaScript que adiciona tipagem estática e recursos avançados de orientação a objetos. Ele é compilado para JavaScript e oferece ferramentas para desenvolvimento mais robusto e escalável.'
                    break
                case 4: modaltitle.innerHTML = 'BOOTSTRAP', modalBody.innerHTML = 'Bootstrap é um framework front-end que fornece um conjunto de estilos pré-construídos e componentes reutilizáveis. Ele agiliza o desenvolvimento de interfaces responsivas e atraentes para web.'
                    break
                case 5: modaltitle.innerHTML = 'JQUERY', modalBody.innerHTML = 'jQuery é uma biblioteca JavaScript popular que simplifica tarefas comuns de manipulação de documentos HTML, animações, gerenciamento de eventos e interações com o servidor.'
                    break
                case 6: modaltitle.innerHTML = 'REACT.JS', modalBody.innerHTML = 'React.js é uma biblioteca JavaScript de código aberto mantida pelo Facebook. Ela é usada para construir interfaces de usuário dinâmicas e reativas, dividindo a interface em componentes reutilizáveis.'
                    break
                case 7: modaltitle.innerHTML = 'NODE.JS', modalBody.innerHTML = 'Node.js é um ambiente de tempo de execução JavaScript que permite a execução de código JavaScript fora de um navegador. Ele é amplamente usado para criar aplicativos de rede escaláveis e em tempo real.'
                    break
                case 8: modaltitle.innerHTML = 'GIT', modalBody.innerHTML = 'Git é um sistema de controle de versão distribuído usado para rastrear mudanças no código-fonte durante o desenvolvimento de software. Ele facilita a colaboração em equipe e o gerenciamento de versões.'
                    break
                case 9: modaltitle.innerHTML = 'SQL (Structured Query Language)', modalBody.innerHTML = 'SQL é uma linguagem de consulta usada para gerenciar e manipular bancos de dados relacionais. Ela permite a criação, consulta, atualização e exclusão de dados em um banco de dados.'
                    break
            }
        })
    })
}

openModal()


const menuShow = () => {
    const icon = document.querySelector('.icon_function')
    const menuMobile = document.querySelector('.mobile_menu')

    icon.addEventListener('click', () => {
        menuMobile.classList.toggle('open')
    })

}

menuShow()

const appendIcons = () => {
    const divs = document.querySelectorAll('.project_div')
    const iconClasses = ['bi bi-filetype-html', 'bi bi-filetype-css', 'bi bi-filetype-js']

    divs.forEach((div) => {
        iconClasses.forEach((iconClass) => {
            const icon = document.createElement('i')
            icon.className = iconClass
            div.appendChild(icon)
        })
    })
}

appendIcons()


