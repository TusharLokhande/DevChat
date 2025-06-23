"use client";

import RegisterUserInfo from "@/components/auth/RegisterUserInfo";
import TenantInfo from "@/components/auth/TenantInfo";
import { Berkshire_Swash } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  profilepic?: string;
  password: string;
  confirmPassword: string;
}

export interface ITenantInfo {
  name: string;
  tenantSlug?: string;
  icon?: string;
}

export interface FormData {
  personalInfo: PersonalInfo;
  tenantInfo: ITenantInfo;
}
type Step = "personalInfo" | "tenantInfo";

type FormErrors<T> = {
  [K in keyof T]: T[K] extends object ? FormErrors<T[K]> : string;
};

type FormError = FormErrors<FormData>;

const page = () => {
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    tenantInfo: {
      name: "",
      tenantSlug: "",
      icon: "",
    },
  });

  const [error, setErrors] = useState<FormError>({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    tenantInfo: {
      name: "",
    },
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleFormChange = <K extends keyof FormData[Step]>(
    step: Step,
    key: K,
    value: FormData[Step][K]
  ) => {
    setErrors((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [key]: "",
      },
    }));

    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [key]: value,
      },
    }));
  };

  const TOTAL_STEPS = 2;
  const REGISTRATION_STEPS = [
    {
      name: "Personal Information",
      code: "personal_info",
      sequenceNo: 1,
      nextStep: "tenant_info",
    },
    {
      name: "Tenant Information",
      code: "tenant_info",
      sequenceNo: 2,
    },
  ];

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      if (validation()) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderForm = () => {
    const props: any = {
      handleFormChange,
      nextStep,
      prevStep,
    };
    switch (currentStep) {
      case 1:
        props["formData"] = formData.personalInfo;
        props["error"] = error.personalInfo;
        return <RegisterUserInfo {...props} />;

      case 2:
        props["formData"] = formData.tenantInfo;
        props["nextStep"] = handleSubmit;
        props["error"] = error.tenantInfo;
        return <TenantInfo {...props} />;
        break;

      default:
        break;
    }
  };

  const validation = (): boolean => {
    const errorObj: FormError = {
      personalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      tenantInfo: {
        name: "",
      },
    };

    let isValid = true;

    const currentCode = REGISTRATION_STEPS.find(
      (step) => step.sequenceNo === currentStep
    )?.code;

    if (currentCode === "personal_info") {
      const info = formData.personalInfo;

      if (!info.firstName.trim()) {
        errorObj.personalInfo.firstName = "First name is required";
        isValid = false;
      }

      if (!info.lastName.trim()) {
        errorObj.personalInfo.lastName = "Last name is required";
        isValid = false;
      }

      if (!info.email.trim()) {
        errorObj.personalInfo.email = "Email is required";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(info.email)) {
        errorObj.personalInfo.email = "Invalid email format";
        isValid = false;
      }

      if (!info.password.trim()) {
        errorObj.personalInfo.password = "Password is required";
        isValid = false;
      } else if (info.password.length < 8) {
        errorObj.personalInfo.password = "Minimum 8 characters required";
        isValid = false;
      }

      if (!info.confirmPassword.trim()) {
        errorObj.personalInfo.confirmPassword = "Confirm your password";
        isValid = false;
      } else if (info.confirmPassword !== info.password) {
        errorObj.personalInfo.confirmPassword = "Passwords do not match";
        isValid = false;
      }
    }

    if (currentCode === "tenant_info") {
      const info = formData.tenantInfo;

      if (!info.name.trim()) {
        errorObj.tenantInfo.name = "Tenant name is required";
        isValid = false;
      }

      // Optional slug validation (if required later)
      // if (!info.tenantSlug?.trim()) {
      //   errorObj.tenantInfo.tenantSlug = "Tenant slug is required";
      //   isValid = false;
      // }
    }

    setErrors(errorObj);
    return isValid;
  };

  const handleSubmit = async () => {
    try {
      let validate = validation();

      if (!validate) return;
    } catch (error) {}
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white font-body overflow-hidden font-inter">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply opacity-30 animate-blob z-0" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply opacity-30 animate-blob animation-delay-2000 z-0" />

      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 z-10">
        {/* <RegisterUserInfo /> */}
        <form className="">{renderForm()}</form>
        <div className="mt-4">
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
