import axios from "axios";

const backPortNumber = "4000";
const serverUrl =
  "http://" + window.location.hostname + ":" + backPortNumber + "/";
//window.location.hostname == domain name of the web host

export const get = async (endpoint: string, params = "") => {
  return axios.get(serverUrl + endpoint + "/" + params, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
    /*
        userToken 은 로그인 할 때 jwtToken 과 함께 
        세션 스토리지에 저장해주는 jwt 변수

        JWT 토큰을 헤더에 담아서 백엔드에 보냄
        - 해당 토큰이 가진 정보를 GET 하기 위해서..?
    */
  });
};

export const post = async (endpoint: string, data: Object) => {
  const bodyData = JSON.stringify(data);
  console.log(bodyData);

  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
};
