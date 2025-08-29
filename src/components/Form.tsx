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
  const onSubmit = async (data: FieldValues) => {
    try {
      console.log("Submitting form data:", data);

      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Response:", result);

      if (response.ok) {
        alert("Message sent successfully!");
        // Reset form here if needed
      } else {
        alert(`Error: ${result.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error. Please check your connection and try again.");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={
        isSmallScreen
          ? "rounded-xl py-4 pb-4  bg-[rgba(60, 60, 60, 1)] w-85 "
          : "rounded-xl py-4 pb-4 pl-12  bg-[rgb(58,58,58)] w-109 "
      }
    >
      <div className="flex flex-col items-start">
        <label htmlFor="Name" className=" text-2xl mb-1 ml-1 text-white ">
          Name*
        </label>
        <div>
          <input
            placeholder="&nbsp;&nbsp; Firstname"
            {...register("firstName" /*{ required: true, minLength: 3 }*/)}
            type="text"
            className=" bg-white text-black rounded-sm w-40 ml-1 mr-1"
          />
          <input
            placeholder="&nbsp;&nbsp;Lastname"
            {...register("lastName" /*{ required: true, minLength: 3 }*/)}
            type="text"
            className=" bg-white text-black rounded-sm ml-1 w-40"
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
          className=" text-2xl mb-1 ml-1 mt-6 text-white "
        >
          Email Address*
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          className="bg-white text-black pr-48 w-82 ml-1 rounded-sm"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        {/* {errors.email?.type === "required" && (
          <p>The Email Field Is Required</p>
        )}  */}
        <label
          htmlFor="phone"
          className=" text-2xl mb-1.5 ml-1 mt-8 text-white "
        >
          Phone*
        </label>
        <input
          {...register("tel", { valueAsNumber: true })}
          type="tel"
          className="bg-white text-black pr-48 ml-1 w-82 rounded-sm"
        />
        {errors.tel && <p className="text-red-500">{errors.tel.message}</p>}
        <label
          htmlFor="topic"
          className=" text-2xl mb-1.5 ml-1 mt-8 text-white "
        >
          Topic
        </label>

        <input
          {...register("topic")}
          type="text"
          className="bg-white text-black pr-48 ml-1 w-82 rounded-sm"
        />
        <label
          htmlFor="help"
          className=" text-2xl mb-1.5 ml-1  mt-8 text-white "
        >
          How Can We Help You?
        </label>
        <textarea
          {...register("help")}
          name="help"
          className="bg-white text-black  h-20  w-82 text-wrap rounded-sm"
        ></textarea>
      </div>
      <div className=" flex justify-center">
        <button className="mt-6  mr-8 hover:text-sky-400 active:scale-90 font-bold text-xl">
          SUBMIT
        </button>
      </div>
    </form>
  );
};
export default Form;
