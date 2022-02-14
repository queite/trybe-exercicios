import React from 'react';
import LastJob from './LastJob';

import PersonalData from './PersonalData'
import ShowData from './ShowData';

const startState = {
  name: '',
  email: '',
  cpf: '',
  adress: '',
  city: '',
  state: '',
  type: '',
  cv: '',
  role: '',
  roleDescription: '',
  submit: false
}

class App extends React.Component{
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.state = startState;
  }

  handleChange({ target }) {
    let { name, value } = target;
    if (name === 'name') value = value.toUpperCase();

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    this.setState({submit: true})
  }

  handleClear() {
    this.setState(startState);
  }

  // validateEmail() {
  //   const regex = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+/i;
  // }

  render() {
    const { submit } = this.state;
    return(
      <main>
        <form>
          <PersonalData handleChange={this.handleChange} currentState={this.state} />
          <LastJob handleChange={this.handleChange} currentState={this.state}/>
        </form>
        <div>
          <button
            onClick={this.handleSubmit}
          >Enviar</button>
          <button
            onClick={this.handleClear}
          >Limpar</button>
        </div>
        
        { submit ? <ShowData currentState={this.state} /> : null }
      </main>
    )
  }
}

export default App;
