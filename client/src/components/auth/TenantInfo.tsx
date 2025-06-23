import { ArrowLeft, Briefcase, Building2, User } from "lucide-react";
import React, { FC } from "react";
import InputForm from "../ui/inputform/InputForm";
import Button from "../ui/button/Button";
import { ITenantInfo } from "@/app/(auth)/register/page";

interface TenantInfoProps {
  formData: ITenantInfo;
  prevStep: any;
  handleFormChange: any;
  nextStep: any;
  error: any;
}

const TenantInfo: FC<TenantInfoProps> = ({
  handleFormChange,
  formData,
  prevStep,
  nextStep,
  error,
}) => {
  const errorMessage = "text-red-600 text-sm";
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Building2 className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">
          Tenant Information
        </h2>
        <p className="text-gray-600">
          Let's start with your Tenant information
        </p>

        <div className="space-y-6">
          {/* PROFILE PIC  */}
          {/* <div className="flex justify-center my-4 relative">
            <div className="size-20 border-1 rounded-full border-gray-300"></div>
            <div>
              <Camera />
            </div>
          </div> */}

          {/* FORM  */}
          <div className="flex flex-col gap-4 my-8 text-left">
            <div className="md:w-[500px] ">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 text-left "
              >
                Tenant / Company Name <sup className="text-red-500">*</sup>
              </label>
              <InputForm
                value={formData.name}
                id="companyName"
                type={"text"}
                placeholder="Effica Nova"
                onChange={(e) => {
                  handleFormChange("tenantInfo", "name", e.target.value);
                }}
                icon={<Briefcase className="w-5 h-5" />}
              />
              <span className={errorMessage}>{error?.name}</span>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      <div className="space-2 flex gap-2">
        <Button
          variant="secondary"
          onClick={() => {
            prevStep();
          }}
          className="flex gap-4 justify-center items-center group"
        >
          Back{" "}
          <ArrowLeft className="size-5  transform transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            nextStep();
          }}
          className="flex gap-2 justify-center"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default TenantInfo;
