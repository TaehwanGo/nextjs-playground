const Login = () => {
  const handleClickLogin = () => {
    console.log("Login");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClickLogin}>Login</button>
    </div>
  );
};

export default Login;
