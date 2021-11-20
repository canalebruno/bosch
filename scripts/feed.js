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
  const feedElement = document.getElementById('feed-container')
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
  const newPost = document.getElementById('newPost').value
}

constructFeed()