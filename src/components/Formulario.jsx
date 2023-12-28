import { Fragment } from "react";
import { useState } from "react";

import { Component } from "react";
import styles from "./Formulario.module.css";




const Formulario = () => {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [submitted,setSubmitted]=useState("");


    const handleRegister = (e) => {
        e.preventDefault();

        const data = {
            user: firstName,
            lastName : lastName,
            email:email,
            password,
            confirmPassword
        };
   
        console.log(data);
        setSubmitted(true);

        setfirstName("");
        setPassword("");
        setConfirmPassword("");
    }

    const formMessage= () => {
        if(!submitted){
            return "Bienvenido, porfavor registrese!!"
        }
        return "Gracias por registrarse"
    }
 
    return (
        <div className={styles.general} >
            <h1>{formMessage}</h1>
            <h2>
                {
                    submitted ?
                        "GENIAL"
                        :
                        "ESPERANDO REGISTRO"
                }
            </h2>
         
            <form action="#" onSubmit={handleRegister}>

            <div className={styles.formCard}>
                    <label htmlFor="userInput">First Name</label>
                    <input
                        type="text"
                        id="userInput"
                        name="usrIpt"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value) } 
                    />
                    {
                        (firstName.length<2&& firstName.length>0) &&
                        <Fragment>
                            <p>El nombre debe tener 2 caracteres como minimo</p>
                        </Fragment>
                    }

                </div>

                <div className={styles.formCard}>
                    <label htmlFor="userInput">Last Name</label>
                    <input
                        type="text"
                        id="userInput"
                        name="usrIpt"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                    />
                    {
                        (lastName.length<2&& lastName.length>0) &&
                        <Fragment>
                            <p>El apellido debe tener 2 caracteres como minimo</p>
                        </Fragment>
                    }

                </div>
                <div className={styles.formCard}>
                    <label htmlFor="userInput">Email</label>
                    <input
                        type="email"
                        id="userInput"
                        name="usrIpt"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {
                        (email.length < 5 && email.length > 0) &&
                        <Fragment>
                            <p>El email debe tener 5 caracteres como minimo</p>
                        </Fragment>
                    }

                </div>

                <div className={styles.formCard}>
                    <label htmlFor="passwordInput">Password</label>
                    <input
                        type="password"
                        id="passwordInput"
                        name="passIpt"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {
                        (password.length < 8 && password.length > 0) &&
                        <Fragment>
                            <p>La contraseña debe tener 8 caracteres como minimo</p>
                        </Fragment>
                    }
                </div>
                <div className={styles.formCard}>
                    <label htmlFor="confirmPasswordInput">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPasswordInput"
                        name="confIpt"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value) }
                    />
                    {
                        password !== confirmPassword && confirmPassword.length > 0 &&
                        <p>Las contraseñas no coinciden</p>
                    }
                </div>
            </form>

            <div>
                <h1>Your Form Data </h1>
                <p>First Name {firstName}</p>
                <p>Last Name {lastName}</p>
                <p>Email {email}</p>
                <p>Password {password}</p>
                <p>Confirm Password {confirmPassword}</p>            
             </div>
        </div>
    )
}


export default Formulario;