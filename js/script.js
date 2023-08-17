AOS.init();

const changeTheme = document.querySelector('#change-theme')

changeTheme.addEventListener('click', function() {
    document.body.classList.toggle('dark')
})
