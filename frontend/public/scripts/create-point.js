function populateStates() {
  const statesSelect = document.querySelector('select[name=state]')

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res => res.json()).then( states => {
        for(state of states){
          statesSelect.innerHTML += `<option value="${state.id}">${state.nome}</option> `
        }
    })
}

function populateCities(event){
  const citySelect = document.querySelector('select[name=city]')
  const stateImput = document.querySelector('input[name=state]')

  const value = event.target.value

  const selected = event.target.selectedIndex
  stateImput.value = event.target.options[selected].text

  citySelect.innerHTML = "<option value=''>Selecione a Cidade</option> "
  citySelect.disabled = true

  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${value}/municipios`).then(res => res.json()).then( cities => {  
    for(city of cities){
      citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
    }
    citySelect.disabled = false
  })
}

populateStates()

document.querySelector('select[name=state]').addEventListener("change",populateCities)

const itemsColected =document.querySelector('input[name=items]')

const itemsToCollect = document.querySelectorAll('.items-grid li')

for (item of itemsToCollect){
  item.addEventListener('click', handleSelectedItem)
}

let selectedItems =[]

function handleSelectedItem(event) {
  const item = event.target

  item.classList.toggle('selected')

  const itemId = item.dataset.id

  const alreadySelected = selectedItems.findIndex(item => item === itemId)

  if(alreadySelected >=0){
   const filteredItems = selectedItems.filter(item => {
      return item != itemId
    })
    selectedItems = filteredItems
  }
  else {
    selectedItems.push(itemId)
  }

  itemsColected.value = selectedItems
}