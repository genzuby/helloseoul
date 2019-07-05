import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 47b8f3bbfba99e25e9ad34b6bd0d2e39c9fb3b9808d861755ab9834f2fef048c"
  }
});
