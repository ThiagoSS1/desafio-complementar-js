document.querySelector('#btn').addEventListener('click', function (event) {
  event.preventDefault()

  let informeDado1 = document.querySelector('#firstData').value
  console.log(informeDado1)

  let informeDado2 = document.querySelector('#secondData').value

  let resultados = 2024 - parseInt(informeDado2)

  const resultado = ` Olá, ${informeDado1}! Sua idade é ${resultados} `

  alert(resultado)
})

