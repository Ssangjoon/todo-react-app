import { API_BASE_URL } from "../api-config";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json"
  });

  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if(accessToken && accessToken != null){
    headers.append("Authorization", "Bearer " + accessToken)
  }
  
  let options = {
    headers: headers,
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

export function signin(userDTO){
  return call("/auth/signin", "POST", userDTO)
  .then((res) => {
    if(res.token){
      localStorage.setItem("ACCESS_TOKEN", res.token);
      window.location.href = "/";
    }
  })
}
export function signout(){
  localStorage.setItem("ACCESS_TOKEN", null);
  window.location.href="/login"
}
export function signup(userDTO){
  return call("/auth/signup","POST",userDTO);
}