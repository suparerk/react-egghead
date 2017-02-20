import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0,
      currentEvent: '---',
      a: ''
    }
    this.update = this.update.bind(this)
  }
  update(){
    // this.setState({txt: e.target.value})
    // this.setState({currentEvent: e.type})
    this.setState({
      a: this.a.refs.input.value,
      b: this.refs.b.value,
      c: this.c.value
    })
  }
  render(){
    // let txt = this.props.txt
    return (
      <div>
        <Title text="HI!" />
        <h1>{this.state.txt} - {this.state.cat}</h1>
        <Widget ref={ component => this.a = component } update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <Button>I <Heart /> React</Button>
        <hr />
        <textarea
        onKeyPress={this.update}
        onCopy={this.update}
        onCut={this.update}
        onPaste={this.update}
        onFocus={this.update}
        onBlur={this.update}
        onDoubleClick={this.update}
        onTouchStart={this.update}
        onTouchMove={this.update}
        onTouchEnd={this.update}
        cols="30"
        rows="10" />
        <h1>{this.state.currentEvent}</h1>
        <hr/>
        <Input 
          ref={ component => this.a = component}
          update={this.update.bind(this)}
        />{this.state.a}
        <hr/>
        <input ref="b" type="text" onChange={this.update}/>{this.state.b}
        <hr/>
        <input ref={ node => this.c = node } 
        type="text" onChange={this.update}/>{this.state.c}
      </div>
    )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}
// const App = () => <h1>Hello stateless</h1>

App.defaultProps = {
  txt: "this is the default text"
}

const Widget = (props) =>
  <input type="text" onChange={props.update}/>

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component{
  render() {
    return <span>&hearts;</span>
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

// Title.propTypes = {
//   text(props, propName, component){
//     if(!(propName in props)){
//       return new Error('missing ${propName}')
//     }
//     if(props[propName].length < 6){
//       return new Error('${propName} was too short')
//     }
//   }
// }

class Input extends React.Component{
  render(){
    return <div>
      <input ref="input" type="text" onChange={this.props.update}/>
    </div>
  }
}

export default App
