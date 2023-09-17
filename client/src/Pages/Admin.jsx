import React from "react";
import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/StatsContainer";
import { toast } from "react-toastify";
import { redirect, useLoaderData } from "react-router-dom";

export const loader = async () => {
  try {
    const response = await customFetch.get("/users/admin/app-stats");
    return response.data;
  } catch (error) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};

function Admin() {
  const { users, jobs } = useLoaderData();
  return (
    <Wrapper>
      <h1>Admin</h1>
    </Wrapper>
  );
}

export default Admin;