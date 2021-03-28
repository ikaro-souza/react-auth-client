import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "components/Header";
import { login } from "_modules/auth/redux/actions";
import { RootState } from "redux/state";
import { RouteComponentProps, useHistory } from "react-router";
import { LocationState, Routes } from "_config/routes";
import "./Login.css";

export const Login: React.FC<RouteComponentProps<any, any, LocationState>> = ({
  location,
}) => {
  const [formState, setFormState] = React.useState({ email: "", password: "" });
  const { loading, token, errorMessage } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const fromPath: string | undefined = location?.state?.from.pathname;

  React.useEffect(() => {
    if (token) {
      history.replace(fromPath || Routes.HOME);
    }
    if (errorMessage) alert(errorMessage);
  }, [errorMessage, fromPath, history, token]);

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [target.id]: target.value });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(formState.email, formState.password));
  };

  return (
    <>
      <Header />
      <main>
        <form onSubmit={onSubmit}>
          <fieldset>
            <label htmlFor="email">Email</label>
            <div>
              <input
                id="email"
                type="email"
                placeholder="abc@d.com"
                onChange={onChange}
              />
            </div>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <div>
              <input
                id="password"
                type="password"
                placeholder="******"
                onChange={onChange}
              />
            </div>
          </fieldset>
          <fieldset>
            <button>{loading ? "Aguarde..." : "Confirmar"}</button>
          </fieldset>
        </form>
      </main>
    </>
  );
};
