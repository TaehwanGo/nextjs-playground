# OAuth

- OAuth(Open Authorization)
- 인터넷 사용자들이 비밀번호를 제공하지 않고 다른 웹사이트 상의 자신들의 정보에 대해 웹사이트나 애플리케이션의 접근 권한을 부여할 수 있는 공통적인 수단으로서 사용되는, 접근 위임을 위한 개방형 표준(open standard)이다.

## 참고

- https://ko.wikipedia.org/wiki/OAuth
- https://showerbugs.github.io/2017-11-16/OAuth-%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C

## OAuth의 배경

- third party Application에 아이디와 비밀번호를 제공하고 싶지 않았다
- 개인정보를 여러 곳에 입력하면서 피싱에 둔감해지고 무엇보다 Application이 안전하다는 보장이 없기 때문에 보안에 취약하다고 생각했다
- Twitter의 주도로 OAuth 1.0이 탄생

## OAuth 1.0

- 복잡하고 웹이 아닌 어플리케이션에서의 지원이 부족하였습니다.
- HMAC을 통해 암호화를 하는 번거로운 과정을 겪습니다. 또한 인증토큰(access token)이 만료되지 않습니다

## OAuth 2.0

- 기능의 단순화, 기능과 규모의 확장성 등을 지원하기 위해 만들어 졌다
- 1.0a는 만들어진 다음 표준이 된 반면 2.0은 처음부터 표준 프로세스로 만들어짐.
- https가 필수여서 간단해 졌다.
- 암호화는 https에 맡김.
- 1.0a는 인증방식이 한가지였지만 2는 다양한 인증방식을 지원한다.
- api서버에서 인증서버를 분리 할 수 있도록 해 놓았다.
