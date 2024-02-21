"use client";
import styles from "./registerForm.module.css";
import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { useFormState } from "react-dom";
const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/");
  }, [state?.success, router]);
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="confirm password"
        name="confirmPassword"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">Already Have an account? <b>Login</b></Link>
    </form>
  );
};
export default RegisterForm;
