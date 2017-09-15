import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { user, setCategoryFilter, sortPosts } from './actions/postActions'

const Header = ({user, sortPosts, setUser, setOrder, setCategory, categoryFilter, categories}) => {

  // array of fixed users for header menu
  const users = [
    'daniel','elliot','elyse','helen','jenny','justen', 'thingone',
    'kristy','matthew','molly','stevie','veronika','steve', 'thingtwo'
  ]
  return (
    <div className="ui fixed menu">

      <div className="ui fluid container">

        <span className="item">
          <Link to="/">
            <img className="ui avatar image" src={`/logo.svg`} alt="react" />
            Readable
          </Link>
        </span>

        {/* New post link */}
        <span className="item">
          <Link to="/post/new">
            <i className="add icon"></i> New Post
          </Link>
        </span>

        {/* Category filter */}
        <div className="ui simple dropdown item">
          <i className="list icon"></i> {categoryFilter ? categoryFilter : 'All Categories'}
          <div className="menu">
            <a className="item" key='none' onClick={() => setCategory('')}>
               All Categories
            </a>
            {
              categories.map((category) => (
                <a className="item" key={category.name} onClick={() => setCategory(category.name)}>
                  {category.name}
                </a>
              ))
            }
          
          </div>
        </div>

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
    setCategory: (id) => dispatch(setCategoryFilter(id)),
    setOrder: (order) => dispatch(sortPosts(order)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
