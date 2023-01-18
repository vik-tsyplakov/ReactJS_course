import axios from "axios";

export default class PostService {
  static async getAll() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/pos111ts"
    );
    return response.data;
  }
}
