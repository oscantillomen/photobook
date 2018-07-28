import React,{Component} from 'react'
import './css/SignIn.css'

class SignIn extends Component{
  render(){
    return (
      <section>
        <form class="form">
          <h2>Ingreso</h2>
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="form-control"/>
          </div>
          <div className="form-group">
            <input 
              type="password" 
              name="password" 
              placeholder="password"
              className="form-control"/>
          </div>
          <div className="form-group">
            <button className="btn btn-block btn-success">Enviar</button>
          </div>
          <div className="form-group">
            <p>
            <div className="row">
              <span className="col-md-6"><a href="#">Registro</a></span>
              <span className="col-md-6"><a href="#">Olvido de clave</a></span>
            </div>
            </p>
          </div>
     </form>
      </section>
    )
  }

}
export default SignIn
