import Image from "next/image";
import { useCallback, useEffect } from "react";

// redirect_uri: "http://localhost:3000/login/kakao",
const KakaoLogin = () => {
  const loginKaKao = useCallback(() => {
    // @ts-ignore
    const { Kakao } = window;
    Kakao.Auth.login({
      scope: "profile_nickname, gender, account_email",
      success: function (authObj: any) {
        console.log("authObj", authObj);
        // 로그인 성공시, API를 호출합니다.
        Kakao.API.request({
          url: "/v2/user/me",
          success: function (res: any) {
            console.log("Kakao.API.request -> success -> res", res);
          },
          fail: function (error: any) {
            console.log(error);
          },
        });
      },
      fail: function (err: any) {
        alert(JSON.stringify(err));
      },
    });
  }, []);

  useEffect(() => {
    // @ts-ignore
    const { Kakao } = window;
    Kakao.init(process.env.NEXT_PUBLIC_KAKAO_OAUTH_KEY);
  }, []);
  return (
    <button onClick={loginKaKao}>
      <img
        style={{
          width: "auto",
          height: "50px",
        }}
        src="http://papaspick.com/web/upload/2019_web/icon/kakao_login.jpg"
        alt="kakao_login_img"
      />
    </button>
  );
};

export default KakaoLogin;
