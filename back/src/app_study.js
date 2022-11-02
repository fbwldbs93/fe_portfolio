// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import {
//     login,
//     accessToken,
//     refreshToken,
//     loginSuccess,
//     logout,
// } from "./controller/index";

// const app = express();

// dotenv.config();
// //...?

// /*
//   CORS 정책을 풀어주기 위해
//   npm i cors 설치
// */
// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"],
//         credentials: true,
//         //쿠키를 통해서 통신을 할 것이기 때문에 크리덴셜은 True 로 지정 (아직 개념 모름)
//     })
// ); //이것만 붙이면 cors 정책을 풀어줌

// //body parser
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// //About Tech 의 기본설정
// app.use(express.json());
// app.use(cookieParser());

// //port number
// // const PORT = 4000;

// app.listen(process.env.PORT, () => {
//     console.log(`Server is listening on ${process.env.PORT}`);
// });

// /*------ login ----- */

// app.post("/login", login);

// //accesstoken 을 발급
// app.get("/accesstoken", accessToken);

// //accesstoken 갱신을 위한 refresh token 받을 거임
// app.get("/refreshtoken", refreshToken);

// //login 이 성공했을 때
// /*
//   사용자가 요청을 하면
//   현재 쿠키에 담겨있는 access token 을 가지고
//   사용자 정보를 파싱해서 전달해 주는 역할
// */
// app.get("/login/success", loginSuccess);

// //현재 쿠키에 담겨있는 access token 을 제거
// app.post("/logout", logout);

// /*------ todo List ----- */

// let id = 1;

// const toDoList = [
//     {
//         id: 1,
//         text: "todo",
//         done: false,
//     },
// ];

// app.get("/api/todo", (req, res) => {
//     // return res.send("hi");
//     res.json(toDoList);
// });

// app.post("/api/todo", (req, res) => {
//     const { text, done } = req.body;

//     console.log("req.body", req.body);

//     toDoList.push({
//         id: id++,
//         text,
//         done,
//     });

//     return res.send("SUCCESS!");
// });
