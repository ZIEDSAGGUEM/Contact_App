import React from "react";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllContacts } from "../fetchData/fetchContact";
import Loading from "./Loading";
import Error from "./Error";

const Contacts = () => {
  const navigate = useNavigate();
  const data1 = [
    {
      id: 1,
      fullName: "Amir Amiri",
      email: "amir@gmail.com",
      phoneNumber: 123412312341234,
      image:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      birth: "12/14/2000",
    },
    {
      id: 2,
      fullName: "Amir Amiri",
      email: "amir@gmail.com",
      phoneNumber: 123412312341234,
      image:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      birth: "12/14/2000",
    },
    {
      id: 3,
      fullName: "Amir Amiri",
      email: "amir@gmail.com",
      phoneNumber: 123412312341234,
      image:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      birth: "12/14/2000",
    },
    {
      id: 4,
      fullName: "Amir Amiri",
      email: "amir@gmail.com",
      phoneNumber: 123412312341234,
      image:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      birth: "12/14/2000",
    },
    {
      id: 5,
      fullName: "Amir Amiri",
      email: "amir@gmail.com",
      phoneNumber: 123412312341234,
      image:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      birth: "12/14/2000",
    },
  ];

  const { data, isLoading, isError } = useQuery("contact", getAllContacts);

  return (
    <div
      className="w-[80%] mx-auto my-[3rem] border-2 border-blue-100 shadow-md shadow-gray-400
    rounded-lg relative"
    >
      <h1 className="p-6 text-center flex-1 text-2xl font-bold text-gray-700">
        Contact Application
      </h1>
      <div className="text-right mr-10">
        <button
          className=" button text-sm px-4"
          onClick={() => navigate("/add")}
        >
          Add Contact
        </button>
      </div>

      <div className="p-4 lg:p-7 flex items-center flex-wrap gap-5 w-[95%] mx-auto">
        {isError && <Error />}
        {isLoading && <Loading />}
        {data?.allContacts.length === 0 ? (
          <div
            className="mb-4 rounded-lg bg-blue-400 text-center mx-auto px-52 py-5 text-xl text-primary-600"
            role="alert"
          >
            No Contact Exist
          </div>
        ) : (
          data?.allContacts.map((contact, i) => (
            <Contact contact={contact} key={i} />
          ))
        )}
      </div>
    </div>
  );
};

export default Contacts;
