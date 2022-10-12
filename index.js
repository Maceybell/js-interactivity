console.log('Hello world')

let message = document.querySelector("#message")

function deleteMovie (event) {
    event.target.parentNode.remove()
    message.textContent = ('Movie deleted!')
}

function crossOffMovie(event){
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked") === true){
        message.textContent = 'Movie watched!'
    } else{
        message.textContent = 'Movie added back!'
    }
}

function addMovie (event) {
    event.preventDefault()
    let inputField= document.querySelector("input")
    let movie = document.createElement('li')
    let movieTitle =  document.createElement('span')
    movieTitle.addEventListener('click', crossOffMovie)
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    document.querySelector('ul').appendChild(movie)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = ("X")
    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', deleteMovie)
    inputField.value=('')
}


document.querySelector('form').addEventListener('submit', addMovie)


