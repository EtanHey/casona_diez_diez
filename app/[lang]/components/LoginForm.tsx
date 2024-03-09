"use client";
import { RedirectType, redirect } from "next/navigation";

const LoginForm = ({ login }: { login: (formData: FormData) => void }) => {
  const handleSubmit = async (formData: FormData) => {
    login(formData);
    formData.delete("username");
    formData.delete("password");
    redirect("/admin/dashboard", RedirectType.push);
  };

  return (
    <form
      className="flex flex-col items-center gap-14 rounded-xl bg-cdd-black px-10 py-6 text-white"
      action={handleSubmit}
    >
      <span className="flex w-full flex-col items-stretch text-sm">
        <label htmlFor="username">Correo electrónico/nombre de usuario:</label>
        <input
          className="text-base text-cdd-black"
          type="text"
          name="username"
          id="username"
        />
      </span>
      <span className="flex w-full flex-col items-stretch text-sm">
        <label htmlFor="password">contraseña:</label>
        <input
          className="text-base text-cdd-black"
          type="password"
          name="password"
          id="password"
        />
      </span>
      <button type="submit" className="rounded-lg bg-cdd-green px-4 py-2">
        Iniciar sesión
      </button>
    </form>
  );
};

export default LoginForm;
