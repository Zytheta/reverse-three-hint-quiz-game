function component () {
  const element = document.createElement('div')

  element.innerHTML = `Excellent`

  return element
}

document.body.appendChild(component())
