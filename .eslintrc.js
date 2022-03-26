module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    "react-hooks/exhaustive-deps": "error", // warning으로 표시되는 것을 error로 바꾼다
  },
  settings: {
    next: {
      rootDir: "./src",
    },
  },
};
