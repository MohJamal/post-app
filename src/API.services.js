import http from "./http-common";
class APIService {
  getPost() {
    return http.get("/posts/1");
  }

  getComments() {
    return http.get("/posts/1/comments");
  }

  addComment(newComment) {
    return http.post("/posts/1/comments", newComment);
  }

  updateComment(id, data) {
    return http.put(`/posts/1/comments/${id}`, data);
  }

  deleteComment(id) {
    return http.delete(`/posts/1/comments/${id}`);
  }
}

export default new APIService();
