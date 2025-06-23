import {
  ArrowRight,
  Building,
  Camera,
  Eye,
  EyeOffIcon,
  Mail,
  User,
} from "lucide-react";
import React, { FC, useState } from "react";
import InputForm from "../ui/inputform/InputForm";
import Button from "../ui/button/Button";
import { PersonalInfo } from "@/app/(auth)/register/page";

interface IRegisterUserInfo {
  formData: PersonalInfo;
  handleFormChange: any;
  nextStep: () => any;
  prevStep: () => any;
  error: any;
}

const RegisterUserInfo: FC<IRegisterUserInfo> = ({
  formData,
  handleFormChange,
  nextStep,
  prevStep,
  error,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const togglePassword: any = () => setShowPassword((p) => !p);
  const toggleConfirmPassword: any = () => setShowConfirmPassword((p) => !p);

  const errorMessage = "text-red-600 text-sm";

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">
          Personal Information
        </h2>
        <p className="text-gray-600">Let's start with your basic information</p>

        <div className="space-y-6 text-left">
          {/* PROFILE PIC  */}
          {/* <div className="flex justify-center my-4 relative">
            <div className="size-20 border-1 rounded-full border-gray-300"></div>
            <div>
              <Camera />
            </div>
          </div> */}

          {/* FORM  */}
          <div className="flex flex-col gap-4 my-8">
            <div className="flex gap-2 flex-col md:flex-row">
              <div className="">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-1 text-left "
                >
                  First Name <sup className="text-red-600">*</sup>
                </label>
                <InputForm
                  value={formData.firstName}
                  id="firstName"
                  type={"text"}
                  placeholder="John"
                  onChange={(e) => {
                    handleFormChange(
                      "personalInfo",
                      "firstName",
                      e.target.value
                    );
                  }}
                  icon={<User className="w-5 h-5" />}
                />
                <span className={errorMessage}>{error?.firstName}</span>
              </div>
              <div className="">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-1 text-left "
                >
                  Last Name <sup className="text-red-600">*</sup>
                </label>
                <InputForm
                  id="lastName"
                  type={"text"}
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => {
                    handleFormChange(
                      "personalInfo",
                      "lastName",
                      e.target.value
                    );
                  }}
                  icon={<User className="w-5 h-5" />}
                />
                <span className={errorMessage}>{error?.lastName}</span>
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 text-left "
              >
                Email <sup className="text-red-600">*</sup>
              </label>
              <InputForm
                value={formData.email}
                id="email"
                type={"email"}
                placeholder="you@mail.com"
                icon={<Mail className="w-5 h-5" />}
                onChange={(e) => {
                  handleFormChange("personalInfo", "email", e.target.value);
                }}
              />
              <span className={errorMessage}>{error?.email}</span>
            </div>
            <div className="w-full">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1 text-left "
              >
                Password <sup className="text-red-600">*</sup>
              </label>
              <InputForm
                value={formData.password}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characther"
                icon={
                  showPassword ? (
                    <Eye
                      className="w-5 h-5 cursor-pointer"
                      onClick={togglePassword}
                    />
                  ) : (
                    <EyeOffIcon
                      className="w-5 h-5 cursor-pointer"
                      onClick={togglePassword}
                    />
                  )
                }
                iconPosition="right"
                onChange={(e) => {
                  handleFormChange("personalInfo", "password", e.target.value);
                }}
              />
              <span className={errorMessage}>{error?.password}</span>
            </div>
            <div className="w-full">
              <label
                htmlFor="confirm_password"
                className="block text-sm font-medium mb-1 text-left "
              >
                Confirm Password <sup className="text-red-600">*</sup>
              </label>
              <InputForm
                value={formData.confirmPassword}
                id="confirm_password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                icon={
                  showConfirmPassword ? (
                    <Eye
                      className="w-5 h-5 cursor-pointer"
                      onClick={toggleConfirmPassword}
                    />
                  ) : (
                    <EyeOffIcon
                      className="w-5 h-5 cursor-pointer"
                      onClick={toggleConfirmPassword}
                    />
                  )
                }
                iconPosition="right"
                onChange={(e) => {
                  handleFormChange(
                    "personalInfo",
                    "confirmPassword",
                    e.target.value
                  );
                }}
              />
              <span className={errorMessage}>{error?.confirmPassword}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-2 ">
        <Button
          onClick={() => {
            nextStep();
          }}
          className="flex gap-2 justify-center  items-center group"
        >
          Next: Tenant Info{" "}
          <ArrowRight className="size-5  transform transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default RegisterUserInfo;

const ProfilePic = () => {
  return <div></div>;
};
