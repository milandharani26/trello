import "./login.scss";
import rightImage from "../../assets/trello-right.3ee60d6f.svg";
import leftimage from "../../assets/trello-left.4f52d13c.svg";
import trelloLogo from "../../assets/ffb8cab4-13a7-4d31-b94d-129623f36e4c.svg";
import googleIcon from "../../assets/google-logo.5867462c.svg"
import Input from "../../components/Input";
import PaperComponent from "../../components/Paper";
import ButtonFiled from "../../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/slices/userSlice";

function Login() {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    
    const dispatch = useDispatch();

    return (
        <div className="login-container">
            <div className="image-left">
                <img src={leftimage} alt="image right" />
            </div>

            <PaperComponent>
                <div className="login-wrapper">
                    <div className="login-header">
                        <img src={trelloLogo} alt="" />
                        <p>Log in to continue</p>
                    </div>

                    <div className="login-input">
                        <Input placeholder={"Enter your Email"} value={email} onchangeHandler={setEmail}/>
                        <Input placeholder={"Enter Password"}  value={password} onchangeHandler={setPassword}/>
                        <ButtonFiled 
                        bgColor={"#0052CC"} 
                        color={"#fff"} 
                        variant={"contained"} 
                        handleOnClick={()=>dispatch(loginUser(3))}
                        >
                            <Link to="/dashboard">continue</Link>
                        </ButtonFiled>
                    </div>

                    <div className="login-withAuth">
                        <p>Or continue with</p>
                        <ButtonFiled bgColor={"#fff"} color={"#000"} hoverbg={"rgba(9, 30, 66, 0.08)"} variant={"outlined"} border={"#333"}>
                            <img src={googleIcon} alt="" style={{ height: "24px", width: "24px" }} />
                            Google
                        </ButtonFiled>

                        <p>Dont have account {" "}
                            <Link to="/signup">Sign up</Link>
                        </p>
                    </div>
                </div>
            </PaperComponent>

            <div className="image-right">
                <img src={rightImage} alt="image left" />
            </div>
        </div>
    );
}

export default Login;
