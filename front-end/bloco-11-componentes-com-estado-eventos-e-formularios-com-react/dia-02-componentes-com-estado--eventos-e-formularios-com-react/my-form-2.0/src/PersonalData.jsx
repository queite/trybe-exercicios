import React from "react";
import './PersonalData.css'

class PersonalData extends React.Component {
  render() {
    const { handleChange, currentState } = this.props;
    const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    return(
      <fieldset>
        <legend>Dados pessoais</legend>
        <label>Nome:
          <input
            name='name'
            type='name'
            maxLength='40'
            required
            onChange={handleChange}
            value={currentState.name}
          >   
          </input>
        </label>

        <label>E-mail:
          <input
            name='email'
            type='email'
            maxLength='50'
            required
            onChange={handleChange}
            value={currentState.email}
          >   
          </input>
        </label>

        <label>CPF:
          <input
            name='cpf'
            type='number'
            maxLength='11'
            required
            onChange={handleChange}
            value={currentState.cpf}
          >   
          </input>
        </label>

        <label>Endereço:
          <input
            name='adress'
            type='adress'
            maxLength='200'
            required
            onChange={handleChange}
            value={currentState.adress}
          >   
          </input>
        </label>

        <label>Estado:
          <select
            name='state'
            required
            onChange={handleChange}
            value={currentState.state}
          >
            {states.map((state, key) => ( // Observar que aqui é preciso um parentese e não chaves
              <option key={key}>{state}</option>
              ))
            }
          </select>

          <div> 
            <label htmlFor='apto'>Apartamento</label>
            <input
              name='type'
              id='apto'
              type='radio'
              value={currentState.type}
              onChange={handleChange}
            >
            </input>
            <label htmlFor='house'>Casa</label>
            <input
              name='type'
              id='house'
              type='radio'
              value={currentState.type}
              onChange={handleChange}
            >
            </input>
          </div>
        </label>
    
      </fieldset>
    )
  }
}

export default PersonalData;