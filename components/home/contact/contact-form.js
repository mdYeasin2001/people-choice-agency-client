import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="shadow-lg mt-4">
        <input {...register("projectTitle", { required: true })} />
        {errors.projectTitle && " project Title is required"}
      </div>

      <div className="shadow-lg mt-4">
        <textarea {...register("message", { required: true })} />
        {errors.message && <p className="">please enter a message</p>}
      </div>

      <div className="shadow-lg mt-4">
        <select {...register("ChooseService", { required: true })}>
          <option value="webDevelopment">Web Development</option>
          <option value="webDesign">web Design</option>
          <option value="StrategyAndResearch">Strategy and Research </option>
        </select>
      </div>

      <div className="shadow-lg mt-4">
        <input type="number" {...register("phoneNumber", { required: true })} />
        {errors.phoneNumber && " enter 4 to 11 digit phone number is required"}
      </div>

      <div className="shadow-lg mt-4">
        <input {...register("emailAddress", { required: true })} />
        {errors.emailAddress && " email address is required"}
      </div>

      <div className="shadow-lg mt-4">
        <input {...register("fullName", { required: true })} />
        {errors.fullName?.type === "required" && "Full name is required"}
      </div>

      <button type="submit">Submit Now </button>
    </form>
  );
};

export default ContactForm;
