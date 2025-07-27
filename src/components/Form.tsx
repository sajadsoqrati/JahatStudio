import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useMediaQuery from "../assets/hooks/useMediaQuery";
const schema = z.object({
  firstName: z.string().min(3, { message: "must be at least 3 characters." }),
  lastName: z.string().min(3, { message: "must be at least 3 characters." }),
  email: z.string().min(5, { message: "E-mail is required" }),
  tel: z.number({ message: "tel number is required" }),
  topic: z.string(),
  help: z.string(),
});

type FormData = z.infer<typeof schema>;
/*interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  tel: number;
  topic: string;
  help: string;
}*/

const Form = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const API = import.meta.env.VITE_API_URL;
  const onSubmit = (data: FieldValues) => {
    //https://contact-api.onrender.com/api/contact
    //http://localhost:5000/api/contact
    fetch(`${API}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={
        isSmallScreen
          ? "rounded-xl py-4 pb-4  bg-[rgba(60, 60, 60, 1)] w-93 "
          : "rounded-xl py-4 pb-4 px-8 bg-[rgb(58,58,58)] w-109 "
      }
    >
      <div className="flex flex-col items-start">
        <label htmlFor="Name" className=" text-2xl mb-1 text-white ">
          Name*
        </label>
        <div>
          <input
            placeholder="First"
            {...register("firstName" /*{ required: true, minLength: 3 }*/)}
            type="text"
            className=" bg-white text-black rounded-sm  mr-2"
          />
          <input
            placeholder="Last"
            {...register("lastName" /*{ required: true, minLength: 3 }*/)}
            type="text"
            className=" bg-white text-black rounded-sm ml-2"
          />
        </div>
        {errors.firstName /*?.type === "required"*/ && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}
        {/* {errors.firstName?.type === "minLength" && (
          <p className="text-red-500">
            The FirstName must be at least 3 characters.
          </p>
        )} */}

        <label
          htmlFor="emailAddress"
          className=" text-2xl mb-1  mt-6 text-white "
        >
          Email Address*
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          className="bg-white text-black pr-48 rounded-sm"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        {/* {errors.email?.type === "required" && (
          <p>The Email Field Is Required</p>
        )}  */}
        <label htmlFor="phone" className=" text-2xl mb-1.5  mt-8 text-white ">
          Phone*
        </label>
        <input
          {...register("tel", { valueAsNumber: true })}
          type="tel"
          className="bg-white text-black pr-48 rounded-sm"
        />
        {errors.tel && <p className="text-red-500">{errors.tel.message}</p>}
        <label htmlFor="topic" className=" text-2xl mb-1.5  mt-8 text-white ">
          Topic
        </label>

        <input
          {...register("topic")}
          type="text"
          className="bg-white text-black pr-48 rounded-sm"
        />
        <label htmlFor="help" className=" text-2xl mb-1.5  mt-8 text-white ">
          How Can We Help You?*
        </label>
        <textarea
          {...register("help")}
          name="help"
          className="bg-white text-black  h-20  w-93 text-wrap rounded-sm"
        ></textarea>
      </div>
      <div className=" flex justify-center">
        <button className="mt-6 hover:text-sky-400 active:scale-90 font-bold text-xl">
          SUBMIT
        </button>
      </div>
    </form>
  );
};
export default Form;
