// 引入 axios
import axios from "axios";

// 後端網址
const URL = "team-bread-api-center.japanwest.cloudapp.azure.com";
const PORT = "7001";
const PROTOCOL = "http";
const FULLPATH = `${PROTOCOL}://${URL}:${PORT}/`;

// path ---> 後端開出來的 PATH
export const request = (path, method, payload) => {
  return new Promise((res, rej) => {
    // Error Detect.
    // Path
    if (typeof path === "undefined") {
      rej({
        message: "Path not provided"
      });
      return ;
    }
    
    // method
    if (typeof method === "undefined") {
      rej({
        message: "Method not provided"
      });
      return ;
    }

    // Process Axios
    if (method === "GET") {
      axios.get(FULLPATH + path).then(response => {
        res(response);
      }).catch(err => {
        rej(err);
      })
    } else if (method === "POST") {
      if (typeof payload === "undefined") {
        rej({
          message: "Select POST Method But Payload not proveded."
        })
        return ;
      }
      axios.post(FULLPATH + path, payload).then(response => {
        res(response);
      }).catch(err => {
        rej(err);
      })
    } else {
      rej({
        message: "Method Selection Fault",
        supportMethod: ["GET", "POST"]
      });
    }
  })
}