import * as React from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../apiServices/authService";

const authContext = React.createContext();

export function useAuth() {
  const [authed, setAuthed] = React.useState(
    localStorage.getItem("auth_token") !== undefined &&
      localStorage.getItem("auth_token") !== null
  );
  const navigate = useNavigate();

  return {
    authed,
    login(values) {        
      authService
        .login({
          email: values.email,
          password: values.password,
        })
        .then(() => {
          setAuthed(true);
          navigate("/");
        });
    },
    logout() {
      return new Promise((res) => {
        window.localStorage.removeItem("auth");
        window.localStorage.removeItem("auth_token");
        window.localStorage.removeItem("auth_email");
        window.localStorage.removeItem("auth_loginName");

        setAuthed(false);
        res();
      });
    },
    register(values) {
        console.log(values);
        authService.register({
            username: values.username,
            email: values.email,
            password: values.password,
        })
        .then(()=> {
            setAuthed(true);
            navigate("/");
        })
    }
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}
