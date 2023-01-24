import React, { Component } from 'react';

class App extends Component {
  defaultValue = { name: '', lastname: '' }

  state = {
    personList: [],
    person: this.defaultValue
  }

  handlerAddPerson = (e) => {
    e.preventDefault()
    this.setState({ personList: [...this.state.personList, this.state.person], person: this.defaultValue })
  }

  handlerChangeName = (e) => {
    this.setState({ person: { ...this.state.person, name: e.target.value } })
  }

  handlerChangeLastname = (e) => {
    this.setState({ person: { ...this.state.person, lastname: e.target.value } })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handlerAddPerson.bind(this)}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input required type="text" className="form-control" name="first-name" value={this.state.person.name} onChange={this.handlerChangeName.bind(this)} />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input required type="text" className="form-control" name="last-name" value={this.state.person.lastname} onChange={this.handlerChangeLastname.bind(this)} />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.personList.map((person, index) => (
                    <tr key={index}>
                      <td>{person.name}</td>
                      <td>{person.lastname}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


