import React from "react";
import ushealthcare from "../../public/assets/images/ushealthcare.jpg";
import { PiPhoneCallBold } from "react-icons/pi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { RiBillLine } from "react-icons/ri";

function UsHealthcare() {
  return (
    <>
      {/* hero section started */}
      <div className="h-full w-1/2 pl-44 ml-48 pt-28 pb-28 ">
        <div className="flex justify-center align-middle p-7 pl-24">
          <h1 className="text-4xl text-center text-blue-500 font-extrabold ml-20 ">
            Us <span className="text-orange-400 "> Healthcare Services</span>
          </h1>
        </div>
        <p className="text-center ml-20 pl-20 text-2xl font-medium text-slate-500 hover:text-blue-500 leading-10 pb-5 md:mt-4 md:text-lg">
          Healthcare services in the United States are provided through a
          combination of public and private systems, including hospitals,
          clinics, primary care providers, and specialized care.
        </p>
      </div>

      {/* hero section ended */}

      {/* secoond section started */}

      <div className="h-full w-full pt-10 pb-14 ">
        <img src={ushealthcare} className=" ml-96  hover:rotate-12" />
      </div>

      {/* second section ended */}

      {/* third section started */}

      <div className="h-full w-full p-1 flex justify-between align-middle pt-10 pb-10 ">
        <div className=" w-96 bg-slate-100 hover:bg-blue-500 hover:text-white  p-10 m-10 rounded-lg">
          <PiPhoneCallBold className="size-20 mb-5 " />
          <h1 className="text-2xl font-bold">AR Calling</h1>
          <hr className="p-1 bg-slate-50 shadow mx-1 my-5" />

          <p className="text-wrap font-normal">
            Accounts Receivable (AR) calling is a critical component in the
            financial ecosystem of healthcare organizations. As a fundamental
            part of Revenue Cycle Management (RCM), AR calling involves reaching
            out to payers, insurance companies, or patients to ensure timely and
            accurate payment for the services rendered. Trained professionals in
            AR calling navigate through the complexities of claims processing,
            payment disputes, and reimbursement delays. Their expertise lies in
            effective communication, negotiation, and resolution of outstanding
            accounts. In an environment where timely cash flow is paramount, AR
            calling serves as the frontline defense against revenue
            interruptions
          </p>
        </div>

        <div className="h-full w-96 bg-slate-100 hover:bg-blue-500 hover:text-white p-10 m-10 rounded-lg">
          <LiaLaptopCodeSolid className="  size-20 mb-5" />
          <h1 className="text-2xl font-bold">Medical Coding</h1>
          <hr className="p-1 bg-slate-50 shadow mx-1 my-5" />
          <p className="text-wrap font-normal">
            Medical Coding Services is a specialized function in the Revenue
            Cycle Management which involves healthcare providers, patients,
            payers and Physician administrative staff. Medical Coders work in
            tandem with billers to process accurate revenue codes on the basis
            of the clinical documentation maintained by the healthcare provider.
            The expertise of a certified and experienced Medical Coder is to
            ensure quick and denial-free reimbursement to the providers. Medical
            Coders play a crucial role in translating complex healthcare
            information into standardized codes,which are essential for billing
            processes effective communication among healthcare providers,
            payers, and administrative staff.
          </p>
        </div>

        <div className="h-full w-96 bg-slate-100  hover:bg-blue-500 hover:text-white p-10 m-10 rounded-lg">
          <RiBillLine className=" size-20 mb-5" />

          <h1 className="text-2xl font-bold">Medical Billing</h1>
          <hr className="p-1 bg-slate-50 shadow mx-1 my-5" />

          <p className="text-wrap font-normal">
            As healthcare reforms reshape the industry, medical billing services
            have become indispensable for practitioners. Facing challenges like
            increased denials and operating costs, reduced reimbursements, and
            complex coding requirements, these services act as vital allies.
            With impending reforms such as the Affordable Care Organization
            Concept, ICD-10 transition, and HIPAA 5010 compliance, experienced
            billing services ensure practitioners navigate the evolving
            landscape seamlessly. By handling intricate coding, compliance, and
            reimbursement optimization, these services empower healthcare
            providers to concentrate on industry transformations and their
            mission to provide excellent patient care.
          </p>
        </div>
      </div>
    </>
  );
}

export default UsHealthcare;
