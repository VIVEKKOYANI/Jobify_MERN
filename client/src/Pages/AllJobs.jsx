import React, { useContext, createContext } from "react";
import { toast } from "react-toastify";
import { JobsContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/jobs");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllJobsContext = createContext();
function AllJobs() {
  const { data } = useLoaderData();
  console.log("data", data);
  return (
    <>
      <AllJobsContext.Provider value={{ data }}>
        <SearchContainer />
        <JobsContainer />
      </AllJobsContext.Provider>
    </>
  );
}

export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs;
