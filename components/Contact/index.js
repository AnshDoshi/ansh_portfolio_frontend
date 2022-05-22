import { Formik, Form, Field, ErrorMessage } from "formik";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Button from "../Button";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
  number: "",
  message: "",
};

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required...";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (!value) {
    error = "Required...";
  }
  return error;
}
function validatenumber(value) {
  let error;
  if (!value) {
    error = "Required...";
  }
  return error;
}
// function validatemessage(value) {
//   let error;
//   if (!value) {
//     error = "Required...";
//   }
//   return error;
// }

const validationSchema = Yup.object({
  email: Yup.string().required("Enter E-mail"),
  name: Yup.string().required("Required..."),
  number: Yup.string().required("Required..."),
  message: Yup.string().required("Required..."),
});

export const Contact = () => {
  const [contacts, setcontacts] = useState([]);

  const fetchcontacts = async () => {
    const { data } = await axios.get(
      "https://dry-cliffs-57784.herokuapp.com/api/contacts"
    );

    setcontacts(data[0]);
  };

  useEffect(() => {
    fetchcontacts();
  }, []);

  const [formValues, setformValues] = useState(initialValues);

  async function sendEmail(values = {}) {
    try {
      const data = await emailjs.send(
        "service_0m506k4",
        "template_dj6kxro",
        values,
        "qF8amb4OYDDNedS4j"
      );
    } catch (error) {
      console.log("fail here", error);
    }
  }
  return (
    <div id="contact" name="contact" className="m-5 ">
      <div className="text-center pb-12">
        <h1 className="font-bold  text-3xl  md:text-4xl lg:text-4xl font-heading text-gray-900">
          {contacts.say} <span className="text-indigo-600">{contacts.hi}</span>
        </h1>

        <h3 className="m-4 text-base text-xl font-bold text-indigo-600">
          {contacts.quote}
        </h3>
      </div>
      <div className="flex  justify-center ">
        <Formik
          initialValues={formValues || initialValues}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={(values, helper) => {
            helper.setSubmitting(false);
            helper.resetForm();

            sendEmail(values);
          }}
        >
          {(formik) => (
            <Form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <Field
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Bruce"
                    for="name"
                  />
                  <ErrorMessage
                    name="name"
                    component={(props) => (
                      <div className="text-indigo-600">{props.children}</div>
                    )}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="number"
                  >
                    Number
                  </label>
                  <Field
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="number"
                    id="number"
                    type="text"
                    placeholder="Contact Number"
                    for="number"
                  />
                  <ErrorMessage
                    name="number"
                    component={(props) => (
                      <div className="text-indigo-600">{props.children}</div>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    E-mail
                  </label>
                  <Field
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="brucewayne@gmail.com"
                    for="email"
                  />
                  <ErrorMessage
                    name="email"
                    component={(props) => (
                      <div className="text-indigo-600">{props.children}</div>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="messages"
                  >
                    Message
                  </label>
                  <Field
                    className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    name="message"
                    id="message"
                    component="textarea"
                    for="message"
                  />
                  <ErrorMessage
                    name="message"
                    component={(props) => (
                      <div className="text-indigo-600">{props.children}</div>
                    )}
                  />
                </div>
              </div>

              <div className="md:flex md:items-center">
                <div className=" md:w-1/3">
                  <Button type="submit" title={contacts.btn_name} />
                </div>
                <div className="md:w-2/3"></div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Contact;
