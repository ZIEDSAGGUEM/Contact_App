import React from "react";
import axios from "axios";

const baseUrl = "http://localhost:5000";

export const getAllContacts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/contact`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
export const addContact = async (data) => {
  if (data.image) {
    const form = new FormData();
    const name = Date.now() + data.image.name;
    form.append("name", name);
    form.append("file", data.image);
    data.image = name;

    try {
      await axios.post(`${baseUrl}/api/upload`, form);
    } catch (error) {
      throw Error(error);
    }
  }
  try {
    const res = await axios.post(`${baseUrl}/api/contact/create`, data);
    return res.data;
  } catch (error) {
    throw Error(error);
  }
};

export const removeContact = async (id) => {
  try {
    await axios.delete(`${baseUrl}/api/contact/delete/${id}`);
  } catch (e) {
    throw Error(e);
  }
};
export const updateContacts = async (data) => {
  try {
    await axios.put(`${baseUrl}/api/contact/update/${data._id}`, data);
  } catch (error) {
    throw Error(error);
  }
};
