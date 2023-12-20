"use client";

import http from "src/lib/axios/http";

export default function LoginPage() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      id: { value: string };
      password: { value: string };
    };
    const id = target.id.value;
    const password = target.password.value;
    console.log("id", id);
    console.log("password", password);
    await http.post("/api/auth/login", {
      id,
      password,
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" name="id" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
