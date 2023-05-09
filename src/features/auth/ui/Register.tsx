import { useForm, SubmitHandler} from "react-hook-form";
import logo from "../../../assets/media/logo.png";
import Button from "./Button";
import Error from "./Error";
import { useEffect, useState} from 'react';
import axios from "axios";
import { URL } from "../../../config";
import Input from "./Input";
import { Inputs } from "../contents/types";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { getUser, registerUser } from "../../../redux/slice/authSlice";
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from "../../../redux/app/store";
import { useNavigate } from "react-router-dom";


const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(30).required(),
  confirmPassword: yup.string().min(8).max(30).required(),
  address: yup.string(),
  phone: yup.string(),
  // dateOfBirth: yup.date(),
}).required()

function Register() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const user = useSelector(getUser)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({resolver: yupResolver(schema)});
  
  //states
  const [matchError,setMatchError] = useState('')


  useEffect(() => {
    if (user.data !== ''){
      navigate('/')
    }
  })


  //to check if the password and confirm password match
  const passwordMatchChecker = () => {
    const [password,confirmPassword] = getValues(["password", "confirmPassword"]);
    return (password === confirmPassword)
  }



  //submit handler
  const onSubmit: SubmitHandler<Inputs> = (data) => {
      const match = passwordMatchChecker()
      if(match){
        setMatchError('')
        console.log(data)
        dispatch(registerUser(data))
      } else {
        setMatchError('Passwords do not match')
      }
  }

  return (
    <div className="h-screen w-full bg flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center w-4/12 gap-y-2">
        <img src={logo} alt="logo" className="w-24 h-24" />
        <Error errorText={matchError} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <Error errorText={errors.name?.message} />
          {user.error !== '' && <Error errorText={user.error} />}
          <Input type="text" name="name" placeholder='username' register={register}/>

          {/* email */}
          <Error errorText={errors.email?.message} />
          <Input type="email" name="email" placeholder='email' register={register}/>


          {/* password */}
          <Error errorText={errors.password?.message} />
          <Input type="password" name="password" placeholder='password' register={register}/>
        
          {/* confirm Password */}
          <Error errorText={errors.confirmPassword?.message} />
          <Input type="password" name="confirmPassword" placeholder='confirm password'  register={register}/>

           {/* address*/}
           <Error errorText={errors.address?.message} />
          <Input type="string" name="address" placeholder='address (optional) ' register={register}/>

           {/* phone*/}
           <Error errorText={errors.phone?.message} />
          <Input type="string" name="phone" placeholder='phone (optional)' register={register}/>

          {/* date of birth*/}
          <Error errorText={errors.dateOfBirth?.message} />
          <Input type="date" name="dateOfBirth" placeholder='dateOfBirth (optional)'  register={register}/>
          

          <Button text="Sign Up" loading={user.loading} />
        </form>

        <span className="text-primary w-full cursor-pointer" onClick={() => navigate('/login')}>Already have an account? Sign In</span>
      </div>
    </div>
  );
}

export default Register;
