import axios from "axios";
const fetch = require("node-fetch");

export async function getAllArticles() {
  // Get external data from the file system, API, DB, etc.

  const data = await axios.get("http://127.0.0.1:8000/api/").then((res) => {
    console.log(res.data);
    return res.data;
  });

  // The value of the `props` key will be
  //  passed to the `Home` component
  return data;
}
