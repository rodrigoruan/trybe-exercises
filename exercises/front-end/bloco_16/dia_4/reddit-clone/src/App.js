import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTech } from './actions/actionCreators'
import { Link } from 'react-router-dom'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.sendRequest = this.sendRequest.bind(this)
    this.tech = React.createRef()
  }

  sendRequest({ target: { value } }) {
    const { fetchTech } = this.props
    fetchTech(value)
  }

  componentDidMount() {
    this.sendRequest({ target: { value: 'reactjs' } })
  }

  render() {
    const { tech, loading, error } = this.props.tech
    const { data } = tech
    return (
      <div>
        <h2 className="selected-tech" ref={this.ref}>
          Selected: {data && data.children[0].data.subreddit}
        </h2>
        <p className="date">
          {'Last update at: ' + Date().replace(/.+(\d{2}:\d{2}:\d{2}).+/, '$1')}
          <button onClick={() => window.location.reload(true)}>Refresh</button>
        </p>

        <select
          className="select-tech"
          onChange={(e) => this.sendRequest(e)}
          ref={this.select}
        >
          <option>reactjs</option>
          <option>frontend</option>
        </select>
        {error && <li>{error}</li>}
        {loading && <h2 className="loading">Loading...</h2>}
        {tech.data &&
          tech.data.children.map(({ data: { title, url } }) => (
            <Link className="link" to={{ pathname: url }} target="_blank" key={title}>
              {title}
            </Link>
          ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tech: state.reducer,
})

const mapDispatchToProps = (dispatch) => ({
  fetchTech: (tech) => dispatch(fetchTech(tech)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
