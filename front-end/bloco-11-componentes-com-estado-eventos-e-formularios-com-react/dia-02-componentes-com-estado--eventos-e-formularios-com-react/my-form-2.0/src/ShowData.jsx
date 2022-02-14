import React from "react";

class ShowData extends React.Component {
  render() {
    const { name, email, cpf, adress, city, state, type, cv, role, roleDescription } = this.props.currentState;
    return(
      <div>
        <h2>{ name }</h2>
        <p>{ email }</p>
        <p>{ cpf }</p>
        <p>{ adress }</p>
        <p>{ city }</p>
        <p>{ state }</p>
        <p>{ type }</p>
        <p>{ cv }</p>
        <p>{ role }</p>
        <p>{ roleDescription }</p>
      </div>
    )
  }
}

export default ShowData;