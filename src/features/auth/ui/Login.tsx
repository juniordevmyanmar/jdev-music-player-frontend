import { useForm, SubmitHandler} from "react-hook-form";
import logo from "../../../assets/media/logo.png";
import Button from "./Button";
import Error from "./Error";
import { useEffect} from 'react';
import Input from "./Input";
import { Inputs } from "../contents/types";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { getUser, loginUser, registerUser } from "../../../redux/slice/authSlice";
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from "../../../redux/app/store";
import { useNavigate } from "react-router-dom";


const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(30).required(),
}).required()

function Login() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const user = useSelector(getUser)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({resolver: yupResolver(schema)});
  

  useEffect(() => {
    if (user.data !== ''){
      navigate('/')
    }
  })

  //submit handler
  const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        dispatch(loginUser(data))
  }

  return (
    <div className="h-screen w-full bg flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center w-4/12 gap-y-2">
        <img src={logo} alt="logo" className="w-24 h-24" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Error errorText={user.error} />
          {/* email */}
          <Error errorText={errors.email?.message} />
          <Input type="email" name="email" placeholder='email' register={register}/>

          {/* password */}
          <Error errorText={errors.password?.message} />
          <Input type="password" name="password" placeholder='password' register={register}/>

          <Button text="Login" loading={user.loading} />
        </form>

       <span className="text-primary w-full cursor-pointer" onClick={() => navigate('/register')}>Don't have an account? Register</span>
      </div>
    </div>
  );
}

export default Login;
