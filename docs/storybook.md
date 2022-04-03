# storybook

## 참고

- https://storybook.js.org/tutorials/intro-to-storybook/react/ko/get-started/
- https://storybook.js.org/blog/get-started-with-storybook-and-next-js/

1. 공식문서 읽기

2. 공식문서의 next.js에 대한 내용을 읽고 기본 튜토리얼과 비교하기

3. 프로젝트에 적용하기

<details>
<summary>1. React를 위한 Storybook 튜토리얼</summary>

## 1. React를 위한 Storybook 튜토리얼

- https://storybook.js.org/tutorials/intro-to-storybook/react/ko/get-started/

- Storybook은 개발모드에서 앱과 함께 실행 됨
  - 이것은 비즈니스 로직과 컨텍스트로 부터 UI컴포넌트를 독립적으로 분리하여 만들 수 있도록 도와줌

### React Storybook 설치하기

- React app 생성
- 빌드시스템 설정
- Storybook과 Jest 테스트를 앱에서 활성화

```
# Create our application:
npx create-react-app taskbox

cd taskbox

# Add Storybook:
npx -p @storybook/cli sb init
```

- npm 을 사용하는 경우 --use-npm 플래그를 추가

```
# Run the test runner (Jest) in a terminal:
yarn test --watchAll

# Start the component explorer on port 6006:
yarn storybook

# Run the frontend app proper on port 3000:
yarn start
```

프론트엔드 앱의 3가지 양상

- 자동화된 테스트(Jest)
- 컴포넌트 개발(Storybook)
- 앱 그 자체

</details>
