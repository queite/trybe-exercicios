import React from "react";

class LastJob extends React.Component {
  render() {
    const { handleChange, currentState } = this.props;

    return(
      <fieldset>
        <legend>Informações profissionais</legend>
        <label>Resumo de currículo:
          <textarea
            name='cv'
            required
            maxLength='1000'
            onChange={handleChange}
            value={currentState.cv}
          >
          </textarea>
        </label>

        <label>Cargo:
          <textarea
            name='role'
            required
            maxLength='40'
            onChange={handleChange}
            onMouseEnter={ () => alert('Preencha com cuidado esta informação.') }
            value={currentState.role}
          >
          </textarea>
        </label>

        <label>Descrição do cargo:
          <input 
            name='roleDescription'
            maxLength='500'
            required
            onChange={handleChange}
            value={currentState.roleDescription}
          ></input>
        </label>
      </fieldset>
    )
  }
}

export default LastJob;