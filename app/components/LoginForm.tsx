"use client";
import React, { BaseSyntheticEvent } from "react";

const LoginForm = () => {
  const handleSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault();
    console.log(event);
    const username = event.target.elements.id.value;
    const password = event.target.elements.password.value;
    console.log(username, password);
    const res = await fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const user = await res.json();
    console.log(user);
  };

  return (
    <form
      className="flex flex-col items-center gap-14 rounded-xl bg-cdd-black px-10 py-6 text-white"
      onSubmit={handleSubmit}
    >
      <span className="flex w-full flex-col items-stretch text-sm">
        <label htmlFor="id">Correo electrónico/nombre de usuario:</label>
        <input
          className="text-base text-cdd-black"
          type="text"
          name="id"
          id="id"
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
