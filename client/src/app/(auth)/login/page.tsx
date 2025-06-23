"use client";

import React, { useState } from "react";
import InputForm from "@/components/ui/inputform/InputForm";
import Button from "@/components/ui/button/Button";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

interface FormData {
  email: string;
  password: string;
  remember: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormChange = (key: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const errs: FormErrors = {};
    if (!formData.email) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Enter a valid email";
    }
    if (!formData.password) {
      errs.password = "Password is required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      // TODO: call your real sign-in API here
      await new Promise((r) => setTimeout(r, 1000));
      // on success → redirect or update state
    } catch (err) {
      setErrors({ password: "Invalid email or password" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-white font-body">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply opacity-30 animate-blob" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply opacity-30 animate-blob animation-delay-2000" />

      <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-md rounded-lg overflow-hidden">
        {/* ─── Form Section ───────────────────────────── */}
        <div className="w-full md:w-1/2 p-8 md:p-16 bg-white">
          <div className="mb-6">
            <span className="text-sm font-semibold uppercase">EFFICA NOVA</span>
          </div>

          <h1 className="text-3xl font-heading font-bold mb-2">
            Welcome back!
          </h1>
          <p className="text-gray-500 mb-6">
            Manage your tasks. Collaborate with your team.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            {/* ─ Email ─ */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <InputForm
                //id="email"
                type="email"
                value={formData.email}
                placeholder="example@mail.com"
                onChange={(e) => handleFormChange("email", e.target.value)}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email}</p>
              )}
            </div>

            {/* ─ Password ─ */}
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </label>
              <div className="relative">
                <InputForm
                  //id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  placeholder="********"
                  onChange={(e) => handleFormChange("password", e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-600">{errors.password}</p>
              )}
            </div>

            {/* ─ Remember & Forgot ─ */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  checked={formData.remember}
                  onChange={(e) =>
                    handleFormChange("remember", e.target.checked)
                  }
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* ─ Sign In Button ─ */}
            <Button
              type="submit"
              variant="primary"
              className="w-full py-2 mb-6"
              disabled={loading}
              onClick={() => {}}
            >
              {loading ? "Signing in…" : "Sign in"}
            </Button>

            {/* ─ Divider ─ */}
            <div className="flex items-center mb-6">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="mx-4 text-sm text-gray-500">
                Or, Sign in with
              </span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            {/* ─ OAuth Buttons ─ */}
            <div className="space-y-4 mb-6">
              <Button
                type="button"
                variant="secondary"
                className="flex items-center justify-center w-full py-2"
                onClick={() => {
                  /* trigger Google OAuth */
                }}
              >
                <img
                  src="/icons/google-icon.svg"
                  alt="Google logo"
                  className="h-5 w-5 mr-2"
                />
                Sign in with Google
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="flex items-center justify-center w-full py-2"
                onClick={() => {
                  /* trigger Microsoft OAuth */
                }}
              >
                <img
                  src="/icons/microsoft-icon.svg"
                  alt="Microsoft logo"
                  className="h-5 w-5 mr-2"
                />
                Sign in with Microsoft
              </Button>
            </div>

            {/* ─ Sign Up Link ─ */}
            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>

        {/* ─ Gradient Panel (hidden on small) ─ */}
        <div className="hidden md:block md:w-1/2">
          <div className="h-full w-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-r-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
