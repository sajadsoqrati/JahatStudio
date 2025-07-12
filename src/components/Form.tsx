import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  firstName: z.string().min(3, { message: "must be at least 3 characters." }),
  lastName: z.string().min(3, { message: "must be at least 3 characters." }),
  email: z.string().min(5, { message: "e-mail is required" }),
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl py-4 pb-4 px-8 bg-[rgb(58,58,58)]"
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
        {errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}
        {/* {errors.lastName?.type === "minLength" && (
          <p className="text-red-500">
            The Last Name must be at least 3 characters.
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
      <button className="mt-6 font-bold text-xl">SUBMIT</button>
    </form>
  );
};

export default Form;
