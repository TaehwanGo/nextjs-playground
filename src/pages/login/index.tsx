import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    try {
      const result = await axios.get("http://localhost:4000/api/oauth/kakao");

      console.log(result.data);

      setLoading(false);
    } catch (error) {
      console.error(error);

      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
