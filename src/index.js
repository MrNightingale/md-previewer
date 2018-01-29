import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import {article} from './article';
import Input from './components/Input';
import Output from './components/Output';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: article,
    }
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  showOutput = () => {
    return { __html: marked(this.state.value) }
  }

  render() {

    const { value } = this.state

    return (
      <div style={{
        minWidth: 768,
        fontFamily: 'Roboto',
        textAlign: 'center'
      }}>
        <img src="https://raw.githubusercontent.com/dcurtis/markdown-mark/master/png/208x128-solid.png" alt="logo"/>
        <h1>Markdown Previewer</h1>

        <Input value={value} onChange={this.handleChange} />

        <Output onChange={this.showOutput} />

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)