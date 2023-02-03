import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logo } from "../constants"
import { loginUserStart } from "../slice/auth"
import { Input } from "../ui"
const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state=>state.auth)
    const loginHandler =(e)=>{
      e.preventDefault()
      dispatch(loginUserStart())
    }
  return (
    <div className="text-center mt-5">
    <main className="form-signin w-25 m-auto">
  <form>
    <img className="mb-4" src={logo} alt="" width="72" height="60"/>
    <h1 className="h3 mb-3 fw-normal">Please login</h1>
   

    <Input label={'Email address'} state={email} setState={setEmail}/>

    <Input label={'Password'} type={'password'} state={password} setState={setPassword}/>

    <button className="w-100 btn btn-lg btn-primary mt-2" type="submit" disabled={isLoading} onClick={loginHandler}>{isLoading ? "loading..." : "Login"}</button>
  </form>
</main>
</div>
  )
}

export default Login