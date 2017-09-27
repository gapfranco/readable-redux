# Readable Redux

React application illustrating the use of Redux to keep track of all state.

## Specifications

- Users can post new content in a category
- Users can vote up and down in posts
- Users can edit their posts
- Users can comment on all posts
- Users can edit thir comments
- Posts can be listed by votes or date/time
- Posts can be filtered by category

## Redux features

All state is centralized in a single structure, modified only by *Redux*:

```
state = {
  categories: [],
  categoryFilter: "",
  comments: [],
  posts: [],
  sortComments: "Sort by Votes",
  sortPosts: "Sort by Votes",
  user: "elliot"
}
```

State is created on index.js and propagated with *react-redux* to all components. The *thunk* middleware
is used to deal with asynchronous calls.

## Extra features

There are some features beyond the original especification:

- Use of *semantic-ui* for styling and user experience
- Simulating user profiles by choosing a user id from a list
- Users can edit or delete only **their own** posts and comments, but they can comment and vote on all posts

## User experience

### Main view

The main view shows all posts sorted initially by descending votes.

![main view](/images/main_view.jpg)

The top menu has controls to go back to the main page, create new posts, filter posts by category,
change the sort order and change the current user.
Emulates a multi-user application by permiting the choice of a user from a fixed list.

![users menu](/images/users_menu.jpg)

Clicking the pointing icons on the right adds or subtracts votes to the post.
If the posts are sorted by votes it changes position as necessary.

### Post detail and comments

Clicking the post title opens the post view, where a post can be edited, deleted or commented.

![post view](/images/post_view.jpg)

The upper form lets you edit the post. If the post is from another user, the form
will be read-only and the **Save** and **Delete** buttons will not appear.

The submenu below has controls to create and sort comments. If a comment is from the current user,
clicking on its text will open a modal dialog to edit. If it's from another user, nothing happens.
Clicking on the poiting icons on the right adds or subtracts votes to the comment.
If the comment is from the current user, there is a *Delete comment* button to exclude it.

## Tests

There are a couple of *Jest* tests on action creators in the *\_\_tests\_\_* folder. It still lacks
asynchronous actions creators tests and reducers tests.

## Set Up

Getting the application running on your local machine takes only a few steps:

1. Clone and start the node server (udacity/reactnd-project-readable-starter)
2. Clone the project - `git clone https://github.com/gapfranco/readable-redux`
3. Install dependencies - `npm install` or `yarn`
4. Start the app - `npm start` or `yarn start`

## Contributing

For specifics on how to contribute to this project, check out the [contributing file](CONTRIBUTING.md).