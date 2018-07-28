import React,{Component} from 'react'

class PasswordRecovery extends Component{
  render(){
    return (
      <section>
          <form class="form">
            <h2>Recuperar clave</h2>
            <input
              type="email"
              name="email"
              placeholder="email" />
            <button>Enviar</button>
          </form>

      </section>
    )
  }

}
export default PasswordRecovery
