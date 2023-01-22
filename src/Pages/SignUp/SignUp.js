import React, { useContext, useState } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const { createUser, emailVerification, user, googleSignIn } =
    useContext(AuthContext);
  const [interestedSectors, setInterestedSectors] = useState([]);
  const [createBusinessProfile, setCreateBusinessProfile] = useState(false);

  console.log(createBusinessProfile);

  const interestedSectorsHandler = (e) => {
    interestedSectors.includes(e.target.value)
      ? setInterestedSectors(
          interestedSectors.filter((value) => value !== e.target.value)
        )
      : interestedSectors.push(e.target.value);
  };

  const googleSignInHandler = () => {
    googleSignIn()
      .then((result) => {
        // success message
      })
      .catch((err) => console.log(err));
  };

  const signUpHandler = (email, password) => {
    createUser(email, password)
      .then((result) => {
        alert("account created successfully");
        sendVerification();
      })
      .catch((err) => console.log(err));
  };

  const sendVerification = () => {
    emailVerification()
      .then((result) => {
        alert("please check you email for verification");
      })
      .catch((err) => console.log(err));
  };

  const registrationHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const registrationType = form.registration_type.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const organization = form.organization.value;
    const designation = form.designation.value;
    const interestedSector = interestedSectors;
    const need_help_with_lodging = form.need_help_with_lodging.value;
    const create_business_profile = form.create_business_profile.value;
    const password = form.password.value;

    const userData = {
      registrationType: registrationType,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      organization: organization,
      designation: designation,
      interestedSector: interestedSector,
      need_help_with_lodging: need_help_with_lodging,
      create_business_profile: create_business_profile,
    };

    signUpHandler(email, password);

    fetch("https://techxbazar-server-side.vercel.app/products/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("added successfully");
        event.target.reset();
      });
  };

  return (
    <div>
      <div className="bg-[#F2F2F2] py-[32px]">
        <h2 className="text-[32px] font-bold text-[#353535] text-center">
          Registration
        </h2>
      </div>
      <div className="w-[780px] mx-auto my-[70px] px-3">
        <form onSubmit={(e) => registrationHandler(e)}>
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
            <label htmlFor="foreign_delegate" className="mr-8 ml-1 text-[15px]">
              Foreign Delegate
            </label>
            <input
              type="radio"
              id="local_delegate"
              name="registration_type"
              value="Local Delegate"
            />
            <label htmlFor="local_delegate" className="ml-1 text-[15px]">
              Local Delegate
            </label>
          </div>

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
                  name="firstName"
                  defaultValue={user?.displayName?.split(" ")[0]}
                />
                <label htmlFor="">First</label>
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border border-slate-700 rounded h-10 pl-2"
                  name="lastName"
                  defaultValue={user?.displayName?.split(" ")[1]}
                />
                <label htmlFor="">Last</label>
              </div>
            </div>
          </div>

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
                    type="email"
                    className="border border-slate-700 rounded h-10 pl-2 mt-1"
                    name="email"
                    defaultValue={user?.email}
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
                    name="phoneNumber"
                  />
                </div>
              </div>
            </div>
          </div>

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
                    name="organization"
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
                    name="designation"
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
                    onChange={(e) => interestedSectorsHandler(e)}
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
              onChange={() => setCreateBusinessProfile(!createBusinessProfile)}
            />
            <label className="text-[15px]" htmlFor="create_business_profile">
              {" "}
              Yes
            </label>
          </div>

          {createBusinessProfile && (
            <div className="mt-4">
              <div className="flex flex-col">
                <label
                  htmlFor="about_business"
                  className="font-bold text-[#353535]"
                >
                  Short info about your business{" "}
                  <small>
                    <em className="text-red-600 font-normal">(Required)</em>
                  </small>
                </label>
                <textarea
                  name="about_business"
                  id="about_business"
                  cols="30"
                  rows="10"
                  className="border border-slate-700 rounded h-[160px] p-2 mt-1 w-4/5"
                ></textarea>
                <small className="text-gray-500 mt-1">
                  0 of 2000 max characters
                </small>
              </div>

              <div className="flex flex-col mt-4">
                <label className="font-bold text-[#353535]">
                  Business address{" "}
                  <small>
                    <em className="text-red-600 font-normal">(Required)</em>
                  </small>
                </label>
                <input
                  type="text"
                  className="border border-slate-700 rounded h-10 pl-2 mt-1 w-full"
                  name="street_address"
                  id="street_address"
                />
                <label htmlFor="street_address">Street Address</label>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="city"
                    className="border border-slate-700 rounded h-10 pl-2 mt-1 w-full"
                    id="city"
                  />
                  <label htmlFor="city">City</label>
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="state_province_region"
                    className="border border-slate-700 rounded h-10 pl-2 mt-1 w-full"
                    id="state_province_region"
                  />
                  <label htmlFor="state_province_region">
                    State / Province / Region
                  </label>
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="zip_postalCode"
                    className="border border-slate-700 rounded h-10 pl-2 w-full"
                    id="zip_postalCode"
                  />
                  <label htmlFor="zip_postalCode">ZIP / Postal Code</label>
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="country"
                    className="border border-slate-700 rounded h-10 pl-2 w-full"
                    id="country"
                  />
                  <label htmlFor="country">Country</label>
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <label className="font-bold text-[#353535]">
                  Business website link{" "}
                  <small>
                    <em className="text-red-600 font-normal">(Required)</em>
                  </small>
                </label>
                <input
                  type="text"
                  className="border border-slate-700 rounded h-10 pl-2 mt-1 w-[55%]"
                  name="street_address"
                  id="street_address"
                />
              </div>
            </div>
          )}

          <div className="mt-4">
            <div className="flex flex-col">
              <label className="font-bold text-[#353535]">
                Password{" "}
                <small>
                  <em className="text-red-600 font-normal">(Required)</em>
                </small>
              </label>
              <input
                type="password"
                className="border border-slate-700 rounded h-10 pl-2 mt-1 w-1/2"
                name="password"
                required
              />
            </div>
          </div>

          <div className="flex gap-2 mt-11">
            <button
              className="border border-[#c36] hover:bg-[#c36] text-[#c36] hover:text-white px-5 py-2 rounded"
              type="submit"
            >
              Submit
            </button>
            <button className="border border-[#c36] text-[#6b7280] px-5 py-2 rounded">
              <IoCloudUploadSharp className="inline text-[#929aa8] text-lg" />{" "}
              Save and Continue Later
            </button>
          </div>
        </form>
        <button
          onClick={googleSignInHandler}
          className="border border-[#c36] hover:bg-slate-100 text-[#6b7280] px-5 py-2 rounded mt-10 w-2/5"
        >
          <FcGoogle className="inline text-xl" /> Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
