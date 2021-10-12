import React from "react";
import { useForm } from "react-hook-form";
import './Shipping.css';
import useAuth from "../../hooks/useAuth"



const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {user} = useAuth();
  const onSubmit = (data) => {
      console.log(data);
    }

  return (
    <div>
      <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />
        <input defaultValue={user.email} {...register("email", { required: true })} />
        {errors.email && <span className='error'>This field is required</span>}
        <input placeholder="Address" defaultValue="" {...register("Address")} />
        <input placeholder="Phone Number" defaultValue="" {...register("Phone Number")} />
       
        <input type="submit" />
      
      </form>
    </div>
  );
};

export default Shipping;
