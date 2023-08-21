AOS.init();

const changeTheme = document.querySelector('#change-theme')

const toggleTheme = () => {
    document.body.classList.toggle('dark')
}

changeTheme.addEventListener('click', toggleTheme)
