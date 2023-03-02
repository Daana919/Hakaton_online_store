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
  const [confPassword, setConfPassword] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const { register, error } = useAuth();

  
   const navigate = useNavigate();
  return (
    <div className="wrapper_form">
        <div className="container-form">
          <FormControl className="form-control">
            <h1>CREATE MY ACCOUNT</h1>
            <p>
              Longines gives you an extraordinary access to a world of products,
              experts and services.
            </p>
            {error ? <h3>{error}</h3> : ""}
            <Stack spacing={2} direction="column">
              <div className="form_control__content">
                <div className="form_control_right_sight">
                  <FormLabel>*First Name</FormLabel>
                  <CustomInput
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="input_box"
                  />
                  <FormLabel>*Last Name</FormLabel>
                  <CustomInput
                    type="text"
                    value = {lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="input_box"
                  />
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="form_control_left_sight">
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
                  <FormLabel>*Confirm Password</FormLabel>
                  <CustomInput
                    type="password"
                    value= {confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    className="input_box"
                  />
                </div>
              </div>
              <Button
                onClick={() =>
                  register(
                    username,
                    password,
                    confPassword,
                    firstName,
                    lastName,
                    gender
                  )
                }
                className="btn_reg"
              >
                Create My Account <ArrowForwardIcon onClick={() => navigate('/login')}/>
              </Button>
            </Stack>
          </FormControl>
        </div>
    </div>
  );
};

export default RegistrationPage;
