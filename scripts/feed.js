const mensagens = [
  {
    user: 'canalebruno',
    date: new Date('2021-11-20 16:40:00.000'),
    message: 'Estamos terminando o trabalho.'
  },
  {
    user: 'dpbdeivid',
    date: new Date('2021-11-20 16:41:00.000'),
    message: 'Estou fazendo a página de feed.'
  },
  {
    user: 'canalebruno',
    date: new Date('2021-11-20 16:42:00.000'),
    message: 'Daqui a pouco vou subir o javascript.'
  }
]

function constructFeed() {
  const feedElement = document.getElementById('divFeed')
  feedElement.innerHTML = ""

  mensagens.sort((a,b) => b.date - a.date)

  mensagens.map(mensagem => {
    const card = `
    <div class='card'>
    <p>${mensagem.user}</p>
    <p>${mensagem.date}</p>
    <p>${mensagem.message}</p>
    </div>
    `
    
    return feedElement.innerHTML += card
  })
}

function handlePost() {
  const newMessage = document.getElementById('newPost').value

  const newPost = {
    user: 'perfil-teste',
    date: new Date(),
    message: newMessage
  }

  mensagens.push(newPost)
  constructFeed()
}

constructFeed()