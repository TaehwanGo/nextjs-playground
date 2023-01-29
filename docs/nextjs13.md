# Next.js 13

## Summary

- 참고

  - https://nextjs.org/blog/next-13
  - https://nextjs.org/docs/upgrading
  - https://beta.nextjs.org/docs/upgrade-guide

- 지원되는 브라우저는 Internet Explorer를 삭제하고 최신 브라우저를 대상으로 변경되었습니다.
- Node.js 12.x의 수명이 다했기 때문에 최소 Node.js 버전이 12.22.0에서 14.0.0으로 올라갔습니다.
- 최소 React 버전이 17.0.2에서 18.2.0으로 증가했습니다.
- swcMinify 구성 속성이 false에서 true로 변경되었습니다. 자세한 내용은 Next.js 컴파일러를 참조하세요.
- The next/image import was renamed to next/legacy/image.
  - The next/future/image import was renamed to next/image.
  - A codemod is available to safely and automatically rename your imports.
- The next/link child can no longer be `<a>`. Add the legacyBehavior prop to use the legacy behavior or remove the `<a>` to upgrade. A codemod is available to automatically upgrade your code.

## 공유 기능 마이그레이션(Migrating shared features)

- Next.js 13에는 새로운 기능과 규칙이 포함된 새로운 앱 디렉토리가 도입되었습니다. 그러나 Next.js 13으로 업그레이드할 때 새 앱 디렉토리를 사용할 필요는 없습니다.
  - 기존 방식의 pages에서도 새로운 기능을 사용할 수 있습니다.
    - 새로운 기능들 : Image component, Link component, Script component, Font optimization

### app directory

- pages 디렉토리와 같이 사용할 수 있습니다
- app directory는 nested route(중첩 경로) 및 layouts(레이아웃)을 지원합니다.
