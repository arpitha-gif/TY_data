import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card, ButtonGroup } from "react-bootstrap";
import "./Login.css";
import backgroundimg from "../../assets/backgroundimg.png";
import technoelevatelogo from "../../assets/technoelevatelogo.jpg";

function Login() {
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const handleEmail = (event) => {
    setemail(event.target.value);
    console.log(event);
  };
  const handlePwd = (event) => {
    setpwd(event.target.value);
  };
  return (
    <div>
      {/* {email},
      {pwd} */}
      <Card className="card1">
        <div className="row">
          <div className="col-md-8">
            <img
              src={backgroundimg}
              class="card-img-top backgrd"
              alt="..."
              height="647px"
            />
          </div>
          <div className="col-md-4" id="bcolor">
            <img
              src={technoelevatelogo}
              class="card-img-top backgrd"
              alt="..."
              height="150px"
            />
            <Form>
              <h1>Login</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label class="emailpwd">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onBlur={handleEmail}
                />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label class="emailpwd1">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onBlur={handlePwd}
                />
              </Form.Group>

              <ButtonGroup aria-label="Basic example" id="btngroup">
              <Button id="btn1">Login</Button>{' '}
              <Button variant="outline" id="btn2">Warning</Button>{' '}
              </ButtonGroup>
            </Form>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Login;
