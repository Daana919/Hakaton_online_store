import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../styles/RegAndLog.css";
import { useNavigate } from "react-router-dom";


//gender mui
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";


const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  color: #666;
  background: ${theme.palette.mode === "dark" ? '#000' : "#2c2c2e;"};

  &:hover {
    border-color: #000;

  };
  }

  &:focus {
    border-color: #fff;
    box-shadow: 1px solid ${
      theme.palette.mode === "dark" ? '#000' : '#000'
    };
  }

  // firefox

`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled slots={{ input: StyledInputElement }} {...props} ref={ref} />
  );
});

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { register, error } = useAuth();

  
   const navigate = useNavigate();
  return (
        <div className="container-form">
          <FormControl className="form-control">
            <h1>CREATE MY ACCOUNT</h1>
            <p>
              TimeSculp gives you an extraordinary access to a world of products,
              experts and services.
            </p>
            {error ? <h3>{error}</h3> : ""}
            <Stack spacing={2} direction="column">
              <div className="form_control__content">
                  <FormLabel>*Email</FormLabel>
                  <CustomInput
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input_box"
                  />
                  <FormLabel>*Password</FormLabel>
                  <CustomInput
                    type="password"
                    value= {password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input_box"
                  />
              </div>
              <Button
                onClick={() =>
                  register(
                    username,
                    password,
                  )
                }
                className="btn_reg"
              >
                Create My Account <ArrowForwardIcon onClick={() => navigate('/login')}/>
              </Button>
            </Stack>
          </FormControl>
        </div>
  );
};

export default RegistrationPage;
