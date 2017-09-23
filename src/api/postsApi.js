
const init = {
  method: "GET",
  headers: {
    "Authorization": "19590211"
  }
}
  
class PostsApi {
  
  static getAllPosts() {
    return fetch('http://localhost:3001/posts', init).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getCategories() {
    return fetch('http://localhost:3001/categories', init).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getComments(postId) {
    return fetch(`http://localhost:3001/posts/${postId}/comments`, init).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createPost(id, dt, title, body, author, category) {
    const config = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "19590211"
      },
      body: JSON.stringify({
        "id": id,
        "timestamp": dt,
        "title": title,
        "body": body,
        "author": author,
        "category": category,
        "voteScore": 0          
      })
    }
    return fetch(`http://localhost:3001/posts`, config).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updatePost(id, title, body, category) {
    const config = {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "19590211"
      },
      body: JSON.stringify({
        "title": title,
        "body": body,
        "category": category
      })
    }
    return fetch(`http://localhost:3001/posts/${id}`, config).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static votePost(id, option) {
    const config = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "19590211"
      },
      body: JSON.stringify({
        "option": option
      })
    }
    return fetch(`http://localhost:3001/posts/${id}`, config).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deletePost(id) {
    const config = {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "19590211"
      }
    }
    return fetch(`http://localhost:3001/posts/${id}`, config).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createComment(id, dt, body, author, parentId) {
    const config = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "19590211"
      },
      body: JSON.stringify({
        "id": id,
        "timestamp": dt,
        "parentId": parentId,
        "body": body,
        "author": author,
        "voteScore": 0          
      })
    }
    return fetch(`http://localhost:3001/comments`, config).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateComment(id, body) {
    const config = {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "19590211"
      },
      body: JSON.stringify({
        "body": body
      })
    }
    return fetch(`http://localhost:3001/comments/${id}`, config).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static voteComment(id, option) {
    const config = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "19590211"
      },
      body: JSON.stringify({
        "option": option
      })
    }
    return fetch(`http://localhost:3001/comments/${id}`, config).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteComment(id) {
    const config = {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "19590211"
      }
    }
    return fetch(`http://localhost:3001/comments/${id}`, config).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}

export default PostsApi