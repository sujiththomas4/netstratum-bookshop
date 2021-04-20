import "./login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col, Overlay, Popover } from "react-bootstrap";
import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {AUTHETICATION} from '../../dispatchRefs';
import authenticate from '../../actions/loginActions';
import {useHistory} from 'react-router-dom';

function Login() {
  const [uname, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory();
  const {currentUsername, currentPassword,isAuthorized} = useSelector((state)=>state.login);
  const dispatch = useDispatch();

  const formControlChange = (event, section) => {
    if (section === "email") {
      setUsername(event.target.value);
    } else if (section === "password") {
      setPassword(event.target.value);
    }
  };
  const authenticateAction = async(e) => {
    e.preventDefault();
    // dispatch({type : AUTHETICATION, payload : {username : uname, password : pass}});
    const {isAuthorized,isGuest,isAdmin} = await dispatch(authenticate(uname,pass));
    console.log(`Authorized : ${isAuthorized}, isAdmin : ${isAdmin}, isGuest : ${isGuest}`);
    if(isAuthorized){
      history.push("/author");
    }
  };
  return (
    <>
      <div className="LoginContainer">
        <div className="LoginContainerTop"></div>
        <div className="LoginContainerBottom"></div>
        <div className="formContainer">
          <Form onSubmit={authenticateAction}>
            <h3 className="logintext">Login</h3>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="formInputStyle"
                type="email"
                placeholder="Email"
                onChange={(event) => formControlChange(event, "email")}
                value={uname}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                className="formInputStyle"
                type="password"
                placeholder="Password"
                onChange={(event) => formControlChange(event, "password")}
                value={pass}
                required
                min={6}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Row className="RowOverride">
                <Col className="ColOverride">
                  {" "}
                  <Form.Check
                    className="fontWeightBoldLbl"
                    type="checkbox"
                    label="Remember me"
                  />
                </Col>
                <Col>
                  <span className="loginForgot">Forgot password?</span>
                </Col>
              </Row>
            </Form.Group>
            <div className="BtnGroupLogin">
              <Button
                variant="primary"
                type="cancel"
                className="BtnStyle btnCancel"
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="BtnStyle btnSubmit"
              >
                Login
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
