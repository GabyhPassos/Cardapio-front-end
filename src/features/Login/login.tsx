import { useForm } from "form-react";
import "./App.css";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => console.log(data);

    return (
        <>
            <p className="title">Registration Form</p>

            <form className="Login" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />
                <input type="email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <input type="password" {...register("password")} />
                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </>
    );
}
export default Login;