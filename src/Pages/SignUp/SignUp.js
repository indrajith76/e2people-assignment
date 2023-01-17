import React from "react";
import { IoCloudUploadSharp } from "react-icons/io5";

const SignUp = () => {
  return (
    <div>
      <div className="bg-[#F2F2F2] py-[32px]">
        <h2 className="text-[32px] font-bold text-[#353535] text-center">
          Registration
        </h2>
      </div>
      <div className="w-[780px] mx-auto my-[70px] px-3">
        <form>
          <div>
            <p className="text-base font-bold mb-2 text-[#353535]">
              Registration Type
            </p>
            <input
              type="radio"
              id="foreign_delegate"
              name="registration_type"
              value="Foreign Delegate"
            />
            <label for="foreign_delegate" className="mr-8 ml-1 text-[15px]">
              Foreign Delegate
            </label>
            <input
              type="radio"
              id="local_delegate"
              name="registration_type"
              value="Local Delegate"
            />
            <label for="local_delegate" className="ml-1 text-[15px]">
              Local Delegate
            </label>
          </div>
          {/* name field */}
          <div className="mt-4">
            <label className="font-bold text-[#353535]">
              Name{" "}
              <small>
                <em className="text-red-600 font-normal">(Required)</em>
              </small>
            </label>
            <div className="flex gap-3 mt-1">
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border border-slate-700 rounded h-10 pl-2"
                />
                <label htmlFor="">First</label>
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border border-slate-700 rounded h-10 pl-2"
                />
                <label htmlFor="">Last</label>
              </div>
            </div>
          </div>

          {/* email and phone */}
          <div>
            <div className="mt-4">
              <div className="flex gap-3 mt-1">
                <div className="flex flex-col">
                  <label className="font-bold text-[#353535]">
                    Email{" "}
                    <small>
                      <em className="text-red-600 font-normal">(Required)</em>
                    </small>
                  </label>
                  <input
                    type="text"
                    className="border border-slate-700 rounded h-10 pl-2 mt-1"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold text-[#353535]">
                    Phone Number{" "}
                    <small>
                      <em className="text-red-600 font-normal">(Required)</em>
                    </small>
                  </label>
                  <input
                    type="text"
                    className="border border-slate-700 rounded h-10 pl-2 mt-1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Organization and desination */}
          <div>
            <div className="mt-4">
              <div className="flex gap-3 mt-1">
                <div className="flex flex-col">
                  <label className="font-bold text-[#353535]">
                    Organization{" "}
                    <small>
                      <em className="text-red-600 font-normal">(Required)</em>
                    </small>
                  </label>
                  <input
                    type="text"
                    className="border border-slate-700 rounded h-10 pl-2 mt-1"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold text-[#353535]">
                    Designation{" "}
                    <small>
                      <em className="text-red-600 font-normal">(Required)</em>
                    </small>
                  </label>
                  <input
                    type="text"
                    className="border border-slate-700 rounded h-10 pl-2 mt-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold text-[#353535] my-4">Interested Sector</p>
            <div className="flex gap-24">
              <div>
                <div>
                  <input
                    type="checkbox"
                    name="agribusiness"
                    id="agribusiness"
                    value="Agribusiness"
                  />
                  <label className="text-[15px]" htmlFor="agribusiness">
                    {" "}
                    Agribusiness
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="ceramics"
                    id="ceramics"
                    value="Ceramics"
                  />
                  <label className="text-[15px]" htmlFor="ceramics">
                    {" "}
                    Ceramics
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="electronics_electrical_equipment"
                    id="electronics_electrical_equipment"
                    value="Electronics and Electrical Equipment"
                  />
                  <label
                    className="text-[15px]"
                    htmlFor="electronics_electrical_equipment"
                  >
                    {" "}
                    Electronics and Electrical Equipment
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="healthcare_services"
                    id="healthcare_services"
                    value="Healthcare Services"
                  />
                  <label className="text-[15px]" htmlFor="healthcare_services">
                    {" "}
                    Healthcare Services
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="jute_and_jute_products"
                    id="jute_and_jute_products"
                    value="Jute and Jute Products"
                  />
                  <label
                    className="text-[15px]"
                    htmlFor="jute_and_jute_products"
                  >
                    {" "}
                    Jute and Jute Products
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="light_engineering"
                    id="light_engineering"
                    value="Light Engineering"
                  />
                  <label className="text-[15px]" htmlFor="light_engineering">
                    {" "}
                    Light Engineering
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="motorcycle_and_parts"
                    id="motorcycle_and_parts"
                    value="Motorcycle and Parts"
                  />
                  <label className="text-[15px]" htmlFor="motorcycle_and_parts">
                    {" "}
                    Motorcycle and Parts
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="plastics"
                    id="plastics"
                    value="Plastics"
                  />
                  <label className="text-[15px]" htmlFor="plastics">
                    {" "}
                    Plastics
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="shipbuilding"
                    id="shipbuilding"
                    value="Shipbuilding"
                  />
                  <label className="text-[15px]" htmlFor="shipbuilding">
                    {" "}
                    Shipbuilding
                  </label>
                </div>
              </div>

              <div>
                <div>
                  <input
                    type="checkbox"
                    name="automobile"
                    id="automobile"
                    value="Automobile"
                  />
                  <label className="text-[15px]" htmlFor="automobile">
                    {" "}
                    Automobile
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="construction_materials"
                    id="construction_materials"
                    value="Construction Materials"
                  />
                  <label
                    className="text-[15px]"
                    htmlFor="construction_materials"
                  >
                    {" "}
                    Construction Materials
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="financial_sector"
                    id="financial_sector"
                    value="Financial Sector"
                  />
                  <label className="text-[15px]" htmlFor="financial_sector">
                    {" "}
                    Financial Sector
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="IT_and_IT_enabled_services​"
                    id="IT_and_IT_enabled_services​"
                    value="IT and IT-enabled Services​"
                  />
                  <label
                    className="text-[15px]"
                    htmlFor="IT_and_IT_enabled_services​"
                  >
                    {" "}
                    IT and IT-enabled Services​
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="leather_and_footwear"
                    id="leather_and_footwear"
                    value="Leather and Footwear"
                  />
                  <label className="text-[15px]" htmlFor="leather_and_footwear">
                    {" "}
                    Leather and Footwear
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="medical_equipment"
                    id="medical_equipment"
                    value="Medical Equipment"
                  />
                  <label className="text-[15px]" htmlFor="medical_equipment">
                    {" "}
                    Medical Equipment
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="pharmaceuticals_and_api"
                    id="pharmaceuticals_and_api"
                    value="Pharmaceuticals & API"
                  />
                  <label className="text-[15px]" htmlFor="">
                    {" "}
                    Pharmaceuticals & API
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="readymade_garments"
                    id="readymade_garments"
                    value="Readymade Garments"
                  />
                  <label className="text-[15px]" htmlFor="readymade_garments">
                    {" "}
                    Readymade Garments
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold text-[#353535] mt-4 mb-2">
              Do you need help with lodging?
            </p>
            <input
              type="checkbox"
              name="need_help_with_lodging"
              id="need_help_with_lodging"
              value="Yes"
            />
            <label className="text-[15px]" htmlFor="need_help_with_lodging">
              {" "}
              Yes
            </label>
          </div>
          <div>
            <p className="font-bold text-[#353535] mt-4 mb-2">
              Do you want to create a business profile for B2B matchmaking?
            </p>
            <input
              type="checkbox"
              name="create_business_profile"
              id="create_business_profile"
              value="Yes"
            />
            <label className="text-[15px]" htmlFor="create_business_profile">
              {" "}
              Yes
            </label>
          </div>

          <div className="flex gap-2 mt-11">
            <button
              className="border border-[#c36] hover:bg-[#c36] text-[#c36] hover:text-white px-5 py-2 rounded"
              type="submit"
            >
              Submit
            </button>
            <button className="border border-[#c36] text-[#6b7280] px-5 py-2 rounded">
              <IoCloudUploadSharp className="inline text-[#616875] text-lg" /> Save and Continue Later
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
