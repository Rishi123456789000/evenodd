import { useRef } from "react"
import axios from "axios"




const Formcomponent = () => {


    const usernameRef = useRef("")
    const passwordRef = useRef("")

    const submitclickhandler = (each) => {
        each.preventDefault()

        const usernameEntered = usernameRef.current.value

        const passwordEntered = passwordRef.current.value

        const Formerrors = validations(usernameEntered, passwordEntered)

        if (Object.keys(Formerrors).length > 0) {
            //trigger the errors
        } else {
            //hit the api
            Loginapi(usernameEntered, passwordEntered)
        }

        console.log(Formerrors)


    }

    const validations = (username, password) => {
        const Formerrors = {

        }

        if (!username) {
            Formerrors.usernameError = "enter user name"
        } else if (username.length > 20) {
            Formerrors.usernameError = "please enter less than 20 character"
        }

        if (!password) {
            Formerrors.passwordError = "enter the password"
        } else if (password.length > 20) {
            Formerrors.usernameError = "please enter less than 20 character"
        }
        return Formerrors

    }

    const Loginapi = async (usernameEntered, passwordEntered) => {
        const response = await axios.post('https://dummyjson.com/auth/login', {

            "username": "emily",
            "password": "emilyspass",
            "expiresInMins": 30


        })
        console.log(response)
    }

    return (
        <>
            <form onSubmit={submitclickhandler}>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="text" className="form-control" id="username" ref={usernameRef} />
                </div>

                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" ref={passwordRef} />
                </div>
                <button type="submit" className="btn btn-default">
                    Submit
                </button>
            </form>
        

        </>
    )
}
export default Formcomponent