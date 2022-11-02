import { useState } from "react";
import axios from "axios";
import * as Api from "../api";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const backPortNumber = "4000";
    const serverUrl =
      "http://" + window.location.hostname + ":" + backPortNumber + "/";

    const res = axios
      .post(serverUrl, {
        email,
        password,
      })
      .then((res) => res.data);

    res.then((res) => console.log(res.data));

    /*
      endpoint 와 data 객체를 http 를 통해
      서버로 post 요청함
    */
    // res.then((data) => console.log(data.data));
    // console.log("res", res);
    // const user = res.data;
    // const jwtToken = user.token;

    // sessionStorage.setItem("userToken", jwtToken);

    // dispatch({})
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter your id"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>login</button>
      </form>
    </>
  );
};

export default LoginForm;
