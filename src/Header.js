import React from 'react'
import { connect } from 'react-redux'
import { user, sortPosts } from './actions/postActions'

const Header = ({user, sortPosts, setUser, setOrder}) => {

  // array of fixed users for header menu
  const users = [
    'daniel','elliot','elyse','helen','jenny','justen',
    'kristy','matthew','molly','stevie','veronika','steve'
  ]
  return (
    <div className="ui fixed menu">

      <div className="ui center aligned container">

        <a className="item">
          <img className="ui avatar image" src={`/logo.svg`} alt="react" />
          {/* <i className="react icon"></i> Readable */}
          Readable
        </a>

        {/* Category filter */}
        <a className="item">
          <i className="list icon"></i> All Categories
        </a>

        {/* Change sort */}
        <a className="ui simple dropdown item">
          <i className="sort content descending icon"></i> {sortPosts}
          <div className="menu">
            <div className="item" onClick={() => setOrder('Sort by Votes')}>
              Sort by Votes
            </div>
            <div className="item" onClick={() => setOrder('Sort by Date/Time')}>
              Sort by Date/Time
            </div>
          </div>
        </a>

        {/* New post link */}
        <a className="item">
          <i className="add icon"></i> New Post
        </a>

        {/* Change fake user */}
        <div className="ui simple dropdown item">
          <img className="ui avatar image" src={`/images/avatars/${user}.jpg`} alt={user} />
          <span className="user">{user}</span>
          <i className="dropdown icon"></i>
          <div className="menu">
            {
              users.map((user) => (
                <a className="item" key={user} onClick={() => setUser(user)}>
                  <img className="ui avatar image" src={`/images/avatars/${user}.jpg`} alt={user} />
                  {user}
                </a>
              ))
            }
          </div>
        </div>

      </div>

    </div>
  )
}

const mapStateToProps = (state, props) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (id) => dispatch(user(id)),
    setOrder: (order) => dispatch(sortPosts(order)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
