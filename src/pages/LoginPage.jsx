import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import "../styles/RegAndLog.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormLabel from "@mui/material/FormLabel";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import { useNavigate } from "react-router-dom";


const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  color: #666;
  background: ${theme.palette.mode === "dark" ? "#000" : "#2c2c2e;"};

  &:hover {
    border-color: #000;

  };
  }

  &:focus {
    border-color: #fff;
    box-shadow: 1px solid ${theme.palette.mode === "dark" ? "#000" : "#000"};
  }

  // firefox

`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled slots={{ input: StyledInputElement }} {...props} ref={ref} />
  );
});

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="wrapper_form">
      <div className="container-form">
        <FormControl className="form-control">
          <h1>LOG IN ACCOUNT</h1>
          {error ? <h3>{error}</h3> : ""}

          <div className="form_control__content">
            {/* <Stack spacing={3} direction="column"> */}
            <div className="form_control_leftlogin_sight">
              <h3>LOGIN</h3>
              <FormLabel>*Email</FormLabel>
              <CustomInput
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                className="input_box"
              />

              <FormLabel>*Password</FormLabel>
              <CustomInput
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="input_box"
              />
              <p>I forgot my password</p>

              <Button
                className="btn_log"
                onClick={() => login(username, password)}
              >
                Login <ArrowForwardIcon onClick={() => navigate("/")} />
              </Button>
            </div>
            {/* </Stack> */}

            <div className="form_control_right_sight_text">
              <h3>DON'T HAVE AN ACCOUNT?</h3>
              <p>
                Create an account to enjoy a personalised shopping experience.
              </p>

              <ul>
                <li>
                  <NewspaperIcon className="login_icon" />
                  Receive TimeSculpt Newsletters
                </li>
                <li>
                  <FavoriteIcon className="login_icon" />
                  Save a Wish List
                </li>
                <li>
                  <ShoppingCartIcon className="login_icon" />
                  Speed up checkout
                </li>
                <li>
                  <CardTravelIcon className="login_icon" />
                  Follow orders and returns
                </li>
              </ul>
              <Button className="btn_log">
                Create an account{" "}
                <ArrowForwardIcon onClick={() => navigate("/register")} />
              </Button>
            </div>
          </div>
        </FormControl>
      </div>
    </div>
  );
};

export default LoginPage;
