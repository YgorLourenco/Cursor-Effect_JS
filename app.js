const mouseCursor = document.querySelector('.cursor')
const navLinks = document.querySelectorAll('.nav-links li')

// Quando o mouse se mexer na tela, ativar a função 'cursor'
window.addEventListener('mousemove', cursor)

// Essa função 'cursor' vai pegar a posição do mouse 
function cursor(e) {
    // console.log(e)
    mouseCursor.style.top = e.pageY + 'px'
    mouseCursor.style.left = e.pageX + 'px'
}

// Essa função links vai criar os efeitos de sair e entrar do cursor em cima dos links
navLinks.forEach(function (link) {
// Função ao tirar o mouse, tira todas as classes dinamicas 
    link.addEventListener('mouseout', function() {
        mouseCursor.classList.remove('link-grow')
        link.classList.remove('hovered-link')
    })
// Função ao colocar o mouse, coloca todas as classes dinamicas 
    link.addEventListener('mouseover', function() {
        mouseCursor.classList.add('link-grow')
        link.classList.add('hovered-link')
    })
})

