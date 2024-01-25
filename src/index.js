function component () {
  const element = document.createElement('div')

  element.innerHTML = `Hello user Chris`

  return element
}

document.body.appendChild(component())
