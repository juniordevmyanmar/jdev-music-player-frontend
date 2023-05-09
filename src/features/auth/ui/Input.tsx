import { UseFormRegister } from "react-hook-form";
import { Inputs } from "../contents/types";
  
type InputProps = {
    register: UseFormRegister<Inputs>;
    type: string;
    name: 'name'| 'email'| 'password' | 'confirmPassword' | 'address' | 'phone' | 'dateOfBirth';
    placeholder: string
}

function Input({register,type,name,placeholder}: InputProps) {
  return (
    <input
      type={type}
      {...register(name)}
      className="w-full px-5 py-3 rounded-md mb-4 bg-text2 text-text3 font-semibold text-sm"
      placeholder={placeholder}
    />
  );
}

export default Input;
