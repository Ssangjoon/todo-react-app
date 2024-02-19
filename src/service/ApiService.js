import { API_BASE_URL } from "../api-config";

export function call(api, method, request) {
  let options = {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    url: API_BASE_URL + api,
    method: method,
  };
  if (request) {
    // GET method
    options.body = JSON.stringify(request);
  }
  return fetch(options.url, options).then((res) => {
    if(res.status === 200){
        return res.json();
    } else if(res.status === 403){
      window.location.href = "/login"; // redirect
    } else {
      Promise.reject(res);
      throw Error(res);
    }
  }).catch((error) => {
    console.log("http error");
    console.log(error);
  })
}

// export function singin(userDTO){
//   return call("/auth/sigin", "POST", userDTO)
//   .then((res) => {
//     console.log("response : ", res);
//     alert("로그인 토큰: ", res.token)
//   })
// }