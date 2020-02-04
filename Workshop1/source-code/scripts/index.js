$(document).ready(() => {

  let tableOptions = {
    people: 0,
    ships: 1
  }

  let state = {
    currentPage: 1,
    pageCount: 100,
    renderedTable: null
  }

  let nodes = {
    landingPage: $("#landingPage"),
    showPeopleNode: $("#showPeople"),
    showShipsNode: $("#showShips"),

    peopleTableContainer: $("#peopleTableContainer"),
    shipsTableContainer: $("#shipsTableContainer"),
    
    peopleTableBody: $("#peopleTableBody"),
    shipsTableBody: $("#shipsTableBody"),

    prevBtnNode: $("#prevBtn"),
    nextBtnNode: $("#nextBtn"),

    currentPageInfoNode: $("#currentPageInfo")
  }

  let urls = {
    base: "https://swapi.co/api",
    people: "people",
    ships: "starships"
  }

  let dataSerice = {
    makePerson: (person, species) => 
      new Person(
        person.name, 
        person.height, 
        person.mass,
        species.name,
        person.birth_year,
        person.films.length
      ),
    makeShip: ship => 
      new Ship(
        ship.name,
        ship.model,
        ship.manufacturer,
        ship.cost_in_credits,
        (parseInt(ship.crew) + parseInt(ship.passengers)),
        ship.starship_class
      )
  }

  let htmlService = {
    addPersonToPeopleTable: (tableBody, item) => {
      let tr = $("<tr>").html(`
        <td>${item.name}</td>
        <td>${item.height}</td>
        <td>${item.mass}</td>
        <td>${item.spiciesName}</td>
        <td>${item.birthYear}</td>
        <td>${item.appearances}</td>
      `)
      tableBody.append(tr)
    },

    addShipToShipsTable: (tableBody, item) => {
      let tr = $("<tr>").html(`
        <td>${item.name}</td>
        <td>${item.model}</td>
        <td>${item.manufacturer}</td>
        <td>${item.cost}</td>
        <td>${item.peopleCapacity}</td>
        <td>${item.shipClass}</td>
      `)
      tableBody.append(tr)
    }
  }

  let apiService = {
    getPerson: (index, callback) => {
      fetch(`${urls.base}/${urls.people}/${index}`)
        .then(res => res.json())
        .then(personData => {
          fetch(personData.species[0])
            .then(res => res.json())
            .then(speciesData => callback(personData, speciesData))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    },

    getShip: (index, callback) => {
      fetch(`${urls.base}/${urls.ships}/${index}`)
        .then(res => res.json())
        .then(data => callback(data))
        .catch(err => console.log(err))
    }
  }
  
  nodes.showPeopleNode.click(e => {
    nodes.landingPage.addClass("hidden")
    state.renderedTable = tableOptions.people
    renderPeopleTable()
  })
  
  nodes.showShipsNode.click(e => {
    nodes.landingPage.addClass("hidden")
    state.renderedTable = tableOptions.ships
    renderShipsTable()
  })

  nodes.prevBtnNode.click(e => {
    if(state.currentPage <= 1) {
      state.currentPage = 1
      nodes.currentPageInfoNode.text(state.currentPage)
    }
    else {
      state.currentPage = state.currentPage - 1
      nodes.currentPageInfoNode.text(state.currentPage)
      switch(state.renderedTable) {
        case tableOptions.people:
          renderPeopleTable()
          break
        case tableOptions.ships:
          renderShipsTable()
          break
      }
    }
  })

  nodes.nextBtnNode.click(e => {
    state.currentPage = state.currentPage + 1
    nodes.currentPageInfoNode.text(state.currentPage)
    switch(state.renderedTable) {
      case tableOptions.people:
        renderPeopleTable()
        break
      case tableOptions.ships:
        renderShipsTable()
        break
    }
  })
  
  function renderPeopleTable() {
    nodes.peopleTableContainer.removeClass("hidden")
    nodes.shipsTableContainer.addClass("hidden")
    nodes.peopleTableBody.html("")
    let from = ((state.currentPage - 1) * state.pageCount) + 1
    let to = state.currentPage * state.pageCount
    for(let i = from; i <= to; i++) {
      apiService.getPerson(i, (personData, speciesData) => {
        htmlService.addPersonToPeopleTable(
          nodes.peopleTableBody,
          dataSerice.makePerson(personData, speciesData)
        )
      })
    }
  }
  
  function renderShipsTable() {
    nodes.peopleTableContainer.addClass("hidden")
    nodes.shipsTableContainer.removeClass("hidden")
    nodes.shipsTableBody.html("")
    let from = ((state.currentPage - 1) * state.pageCount) + 1
    let to = state.currentPage * state.pageCount
    for(let i = from; i <= to; i++) {
      apiService.getShip(i, (ship) => {
        htmlService.addShipToShipsTable(
          nodes.shipsTableBody,
          dataSerice.makeShip(ship)
        )
      })
    }
  }
  
  function Person(
    name, 
    height, 
    mass, 
    spiciesName, 
    birthYear, 
    appearances
  ) {
    this.name = name
    this.height = height
    this.mass = mass
    this.spiciesName = spiciesName
    this.birthYear = birthYear
    this.appearances = appearances
  }
  
  function Ship(
    name, 
    model, 
    manufacturer, 
    cost, 
    peopleCapacity, 
    shipClass
  ) {
    this.name = name
    this.model = model
    this.manufacturer = manufacturer
    this.cost = cost
    this.peopleCapacity = peopleCapacity
    this.shipClass = shipClass
  }

})
