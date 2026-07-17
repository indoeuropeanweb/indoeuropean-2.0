"use client";
import { useState, useEffect } from "react";
import useFetch from "@/utils/useFetch";
import ErrorTooltip from "./minors/ErrorTooltips";
import SendData from "@/utils/sendData";

const GlobalForm = () => {
let initialForm = {
    name:"",
    email:"",
    phone:"",
    city:"",
    countryID: 67,
    highestQualification:"",
    CallBackTime:"",
    CourseLevel:"",
    destination:""
  }

const [user, setUser] = useState(initialForm);
const [touched, setTouched] = useState({});
const [errors, setErrors] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false)
const [resData, setResData] = useState({});
const [showSuccess, setShowSuccess] = useState(false);

const validate = () => {
  let newErrors = {};
  
  if (!user.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!user.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    newErrors.email = "Invalid email format";
  }

  if (!user.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!/^[0-9]{10}$/.test(user.phone)) {
    newErrors.phone = "Enter valid 10-digit number";
  }

  if (!user.city.trim()) {
    newErrors.city = "City is required";
  }

  if (!user.highestQualification || user.highestQualification === "select") {
    newErrors.highestQualification = "Select qualification";
  }

  if (!user.CourseLevel || user.CourseLevel === "select") {
    newErrors.CourseLevel = "Select course level";
  }

  if (!user.destination || user.destination === "select") {
    newErrors.destination = "Select destination";
  }

  if (!user.CallBackTime || user.CallBackTime === "select") {
    newErrors.CallBackTime = "Select callback time";
  }

  if(resData.service === "Emaildulicate"){
    newErrors.email = "Email ID Already Exist !"
  }

  return newErrors;
};

const handleBlur = (e) => {
const { name, value } = e.target;

  setTouched((prev) => ({
    ...prev,
    [name]: true,
  }));

  let error = "";
  if (!value || value === "select") {
    error = "This field is required";
  }

  if (name === "email" && value) {
    if (!/\S+@\S+\.\S+/.test(value)) {
      error = "Invalid email";
    }
  }

  if (name === "phone" && value) {
    if (!/^[0-9]{10}$/.test(value)) {
      error = "Invalid phone";
    }
  }

setErrors((prev) => ({
  ...prev,
  [name]: error,
  }));
};

useEffect(() => {
  if (isSubmitted) {
    const timer = setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
    return () => clearTimeout(timer);
  }
}, [isSubmitted]);

const handleChange = (e) => {
  const { name, value } = e.target;
  setUser((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) return;

  try {
    const response = await SendData(
      user,
      "https://crm.indoeuropean.in/WebService/Lead.asmx/OnlineLead"
    );

    if (!response) {
      setErrors({
        api: "No response received from server.",
      });
      return;
    }

    const { status, data } = response;

    if (status === true) {
        setShowSuccess(true);

        setUser(initialForm);

        setErrors({});
        setTouched({});

        setTimeout(() => {
            setShowSuccess(false);
        }, 5000);
    }

    if (status === "Emaildulicate" || data === "Email Id Allready Exist") {
      setErrors((prev) => ({
        ...prev,
        email: "Email ID already exists!",
      }));
      return;
    }

    if (status === "Mobiledulicate" || data === "Mobile No Allready Exist") {
      setErrors((prev) => ({
        ...prev,
        phone: "Mobile No. already exists!",
      }));
      return;
    }

  } catch (err) {
    console.error(err);
    setErrors({
      api: "Something went wrong. Please try again.",
    });
  }
};

const {data:countryID, loading:loadingCountryID} = useFetch("https://crm.indoeuropean.in/webService/lead.asmx", "GetCountryCode", "");
const {data:highestQualification, loading:loadingQualification} = useFetch("https://crm.indoeuropean.in/WebService/Lead.asmx", "GetHighestQualification", "");
const {data:CallBackTime, loading:loadingCallback} = useFetch("https://crm.indoeuropean.in/WebService/Lead.asmx", "GetPreferredCallBackTime", "");
const {data:CourseLevel, loading:loadingLevel} = useFetch("https://crm.indoeuropean.in/WebService/Lead.asmx", "GetCourseLevel", "");
const {data:destinations, loading:loadingDestination} = useFetch("https://crm.indoeuropean.in/WebService/CourseFinder/Programs_api.asmx", "CountryAPI", "");

  return (
    <>
        <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <ErrorTooltip error={errors.name} touched={touched.name}>
                  <input
                    name="name"
                    value={user.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`rounded-sm w-full bg-white ps-2 py-1 outline-none  ${errors.name ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-400"}`}
                    placeholder="Your Name"
                  />
                  </ErrorTooltip>
                  <ErrorTooltip error={errors.email} touched={touched.email}>
                  <input
                    name="email"
                    value={user.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`rounded-sm w-full bg-white ps-2 py-1 outline-none ${errors.email ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-400"}`}
                    placeholder="Your Email"
                  />
                  </ErrorTooltip>
                </div>

               <div className="flex w-full gap-2">
                <select
                  name="countryID"
                  value={user.countryID}
                  onChange={handleChange}
                  className="w-20 sm:w-24 shrink-0 px-2 py-1 border border-zinc-400 bg-white rounded-sm outline-none"
                >
                  {loadingCountryID ? (
                    <option value="">No data</option>
                  ) : (
                    countryID?.map((c, i) => (
                      <option value={c.ID} key={i}>
                        {c.Code}
                      </option>
                    ))
                  )}
                </select>

                <div className="flex-1 min-w-0">
                  <ErrorTooltip error={errors.phone} touched={touched.phone}>
                    <input
                      type="tel"
                      name="phone"
                      value={user.phone}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className={`w-full px-4 py-1 border bg-white rounded-sm outline-none ${
                        errors.phone
                          ? "border-red-500 focus:ring-2 focus:ring-red-200"
                          : "border-gray-400"
                      }`}
                    />
                  </ErrorTooltip>
                </div>
              </div>
                <ErrorTooltip error={errors.highestQualification} touched={touched.highestQualification}>
                <select
                  name="highestQualification"
                  value={user.highestQualification}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`w-full rounded-sm text-black bg-white px-4 py-1 outline-none ${errors.highestQualification ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-400"}`}
                  placeholder="Highest Qualifications"
                >
                <option value="">Highest Qualification</option>
                {loadingQualification ? (
                    <option value="">No data</option>
                            ) : (
                            highestQualification?.map((c, i) => (
                                <option value={c.ID} key={i}>
                                {c.QUALIFICATION}
                    </option>
                    ))
                )}
                </select>
                </ErrorTooltip>
                <ErrorTooltip error={errors.CourseLevel} touched={touched.CourseLevel}>
                <select
                name="CourseLevel"
                value={user.CourseLevel}
                onBlur={handleBlur}
                onChange={handleChange}
                  className={`w-full rounded-sm bg-white px-4 py-1 outline-none  ${errors.CourseLevel ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-400"}`}
                  placeholder="Select Course"
                >
                 <option value="">Select Course</option>
                    {loadingLevel ? (
                        <option value="">No data</option>
                    ) : (
                        CourseLevel.slice(0, 5)?.map((course, i) => (
                        <option value={course.QUALLEVELID} key={i}>
                            {course.QUALDESC}
                        </option>
                        ))
                    )}
                </select>
                </ErrorTooltip>
                <ErrorTooltip error={errors.city} touched={touched.city}>
                <input
                  name="city"
                  value={user.city}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`w-full rounded-sm bg-white px-4 py-1 outline-none ${errors.city ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-400"}`}
                  placeholder="City"
                />
                </ErrorTooltip>
                <ErrorTooltip error={errors.destination} touched={touched.destination}>
                <select
                  name="destination"
                  value={user.destination}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`w-full rounded-sm bg-white px-4 py-1 outline-none`}
                  placeholder="Select Destination"
                >
                <option value="">Select Destination</option>
                    {loadingDestination ? (
                        <option value="">No data</option>
                    ) : (
                        destinations?.map((d, i) => (
                        <option value={d.COUNTRYID} key={i}>
                            {d.COUNTRYNAME}
                        </option>
                        ))
                    )}
                </select>
            </ErrorTooltip>
            <ErrorTooltip error={errors.CallBackTime} touched={touched.CallBackTime}>
                <select
                name="CallBackTime"
                value={user.CallBackTime}
                onBlur={handleBlur}
                onChange={handleChange}
                  className={`w-full rounded-sm bg-white px-4 py-1 outline-none ${errors.CallBackTime ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-400"}`}
                  placeholder="Best Time to Call"
                >
                <option value="">Best Time to Call</option>
                    {loadingCallback ? (
                        <option value="">No data</option>
                    ) : (
                        CallBackTime?.map((t, i) => (
                        <option value={t.ID} key={i}>
                            {t.CALL_BACK_TIME}
                        </option>
                        ))
                    )}
                </select>
            </ErrorTooltip>
                <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="relative cursor-pointer w-full inline-flex items-center justify-center overflow-hidden rounded-sm bg-linear-to-r from-secondary to-primary px-4 py-2 text-md font-semibold font-Jakarta text-white transition-colors duration-500 before:absolute before:inset-0 before:bg-primary before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-x-100"
                >
                  <span className="relative z-1">
                    Get Free Consultation
                  </span>
                </button>
                </div>
              </form>
              {showSuccess && (
  <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/50">
    <div className="bg-white rounded-xl shadow-xl p-8 w-[90%] max-w-sm text-center animate-[fadeIn_.3s_ease]">

      <div className="mx-auto flex h-12 w-32 items-center justify-center rounded-full">
         <div className="relative w-full aspect-video overflow-hidden rounded-xl">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/check-mark.mp4" type="video/mp4" />
            </video>
            </div>
      </div>

      <h2 className="mt-5 text-2xl font-bold text-primary">
        Thank You!
      </h2>

      <p className="mt-3 text-zinc-600">
       Your form submitted successfully, Our team will contact you shortly !
      </p>

      <button
        onClick={() => setShowSuccess(false)}
        className="mt-6 rounded-md bg-primary cursor-pointer px-6 py-2 text-white hover:opacity-90 transition"
      >
        OK
      </button>
    </div>
  </div>
)}</>)
}

export default GlobalForm