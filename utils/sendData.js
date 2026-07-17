import axios from "axios";

const SendData = async (user, url) => {
    const details = {
    Fname: user?.name?.split(" ")[0] || "",
    Lname: user?.name?.split(" ").slice(1).join(" ") || "",
    CountryCodeid: String(user.countryID || "67"),
    PhoneNo: String(user.phone || ""),
    WhatsappNo: String(user.phone || ""),
    Emailid: user.email || "",
    EnquirySourceCategoryID: "2",
    EnquirySourceID: "4",    
    EnqStageid: "1",
    branchid: "1",           
    Country1: String(user.destination),
    Levelid: String(user.CourseLevel),
    Intakeid: "8",             
    Address1Citytext: user.city || "",
    Isstatusid: "1",
    EnqDate: "",             
    Dob: "",
    PrefferedCallBackTime: String(user.CallBackTime),
    HighestQualifcation: String(user.highestQualification),
    PrefferedBranchID: "1", 
    LandingPageUrl: window.location.href,
    PhonenoOTPStatus: "0",
    };

  try {
    const res = await axios.get(url, {
      params: details,
    });

    // console.log("Request Params:", details);
    // console.log("Response:", res.data);

    return res.data;
  } catch (error) {
    console.log("Status:", error.response?.status);
    console.log("Response:", error.response?.data);
    console.log(error);

    return null;
  }
};

export default SendData;