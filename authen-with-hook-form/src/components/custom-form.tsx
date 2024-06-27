import { useForm, SubmitHandler } from "react-hook-form";
import "../App.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const ErrorBlock = ({ text }: { text: string | undefined }) => {
  return <div className=" text-red-500">{text}</div>;
};

const CustomForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormFields>({ defaultValues: { email: "test@gmai.com" } ,resolver: zodResolver(schema)});

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
      console.log(data);
    } catch (e) {
      setError("root", { message: "this root error is already taken" });
    }
  };
  //   const emailFormat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mainForm">
      <input
        {...register("email",)}
        type="text"
        placeholder="Email"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
      />
      {errors.email && <ErrorBlock text={errors.email.message} />}
      <input
        {...register("password",)}
        type="password"
        placeholder="Password"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      />
      {errors.password && <ErrorBlock text={errors.password.message} />}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      {errors.root && <ErrorBlock text={errors.root.message} />}
    </form>
  );
};

export default CustomForm;
