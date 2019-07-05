import axios from "axios";

const API_KEY = "54637a4c4367656e35395a5a48566b";

export default axios.create({
  baseURL: `//openapi.seoul.go.kr:8088/${API_KEY}/json`
});
