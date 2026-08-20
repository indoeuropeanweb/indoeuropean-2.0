import { useState, useEffect } from "react";
import axios from "axios";

const fetchCourses = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const url = 'https://crm.indoeuropean.in/WebService/CourseFinder/Programs_api.asmx/ProgramsAPI?countryid=&univid=&levelid=&intakeid=&searchtext='

   useEffect(() => {
      if (!url) return;
      setLoading(true);
      try {
      const fetchData = async () => {
      const response = await axios.get(url);
      setData(response);
      setLoading(false);
      }
      fetchData();
      } catch (error) {
        console.log("Something Went Wrong !", error);
        setError(error)
      }
   }, [url])
   return {data, loading, error};
}

export default fetchCourses;