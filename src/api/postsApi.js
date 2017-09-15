
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
  
}

export default PostsApi