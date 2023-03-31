import { useForm, SubmitHandler} from "react-hook-form";
import logo from "../../../assets/media/logo.png";
import Button from "./Button";
import Error from "./Error";
import {useState} from 'react';

type Inputs = {
  username: string;
  password: string;
  confirmPassword: string;
};

function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const [matchError,setMatchError] = useState('')


  //to check if the password and confirm password match
  const passwordMatchChecker = () => {
    const [password,confirmPassword] = getValues(["password", "confirmPassword"]);
    console.log(password === confirmPassword)
  }


  //submit handler
  const onSubmit: SubmitHandler<Inputs> = (data) => {
      passwordMatchChecker()
      console.log(data)
  }

  return (
    <div className="h-screen w-full bg flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center w-4/12 gap-y-4">
        <img src={logo} alt="logo" className="w-36 h-36" />

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* userName */}
          <Error errorText={errors.username?.message} />
          <input
            type="text"
            {...register("username", { required: 'This field is required' })}
            className="w-full px-6 py-4 rounded-md mb-4"
            placeholder="Username"
          />

          {/* password */}
          <Error errorText={errors.password?.message} />
          <input
            type="password"
            {...register("password", { required: 'This field is required',minLength: {value: 4, message: 'min length is 4'}})}
            className="w-full px-6 py-4 rounded-md mb-4"
            placeholder="Password"
          />

          {/* confirm Password */}
          <Error errorText={errors.confirmPassword?.message} />
          <input
            type="password"
            {...register("confirmPassword", { required: 'This field is required',minLength: {value: 4, message: 'min length is 4'}})}
            className="w-full px-6 py-4 rounded-md mb-4"
            placeholder="Confirm Password"
          />

          <Button text="Sign Up" />
        </form>

       
      </div>
    </div>
  );
}

export default Register;
