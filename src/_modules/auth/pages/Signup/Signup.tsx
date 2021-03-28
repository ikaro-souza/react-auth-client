import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Header } from "components/Header";
import { signup } from "_modules/auth/redux/actions";
import { RootState } from "redux/state";
import "./Signup.css";
import { useHistory } from "react-router";
import { Routes } from "_config/routes";

const SignupPage: React.FC = () => {
  const [formState, setFormState] = React.useState({ email: "", password: "" });
  const { loading, token, errorMessage } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    if (token) history.replace(Routes.HOME);
    if (errorMessage) alert(errorMessage);
  }, [errorMessage, history, token]);

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [target.id]: target.value });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(signup(formState.email, formState.password));
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

export const Signup = connect(undefined, { signup })(SignupPage);
