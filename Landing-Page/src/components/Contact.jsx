import React, { useState } from "react";
import contactSvg from "../assets/fact.svg";
import { addDoc, collection } from "firebase/firestore";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await addDoc(collection(db, "contacts"), {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phoneNo: phoneNo.trim(),
      message: message.trim(),
    });
    setEmail("");
    setFirstName("");
    setLastName("");
    setMessage("");
    setPhoneNo("");
  }

  return (
    <div id="contact" className="">
      <div className="mx-auto max-w-screen-xl px-10">
        <div className="mx-auto  py-12 md:py-24">
          <div className="flex w-full items-center justify-center">
            <div className="flex flex-1 items-center justify-start">
              <div className="pr-2 md:pr-12 w-full">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">
                  Fillin-Contact
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, temporibus?
                </p>
                <form
                  id="contactForm"
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-4"
                >
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first_name"
                      >
                        First Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="email"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                      pattern="[0-9]{10}"
                      title="Please enter a 10-digit number"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      maxLength={10}
                      required
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex  w-full rounded-md border border-gray-300 bg-transparent px-3 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      placeholder="Leave us a message"
                      cols={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <input
                    type="submit"
                    value={"Send Message"}
                    className="w-full rounded-md bg-sky-500 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  />
                </form>
              </div>
            </div>
            <div className=" hidden lg:block flex-1">
              <img
                alt="Contact us"
                className=" max-h-full w-full rounded-lg object-cover "
                src={contactSvg}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="py-20">
            <div className="flex flex-col m-auto md:w-4/5 md:flex-row items-center space-y-5 md:space-y-0 justify-between md:space-x-10">
              <div className="space-y-4">
                <p className="w-full text-4xl font-bold text-gray-900">
                  Contact us
                </p>
                <p className="hidden md:block w-full text-lg text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="space-y-4 divide-y-2">
                <div className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full">
                  <p className="w-full text-xl font-semibold  text-gray-900">
                    Bengaluru office
                  </p> 
                   <p className="w-full text-base  text-gray-600">
                    Mon-Sat 9am href 5pm.
                  </p>
                  <a
                    href="https://wa.link/567izl"
                    className="w-full text-base  text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    
                  >
                    <i class="fa fa-whatsapp mr-2">
                   
                    </i>+91 87854541212
                   
                    
                  </a>                 
                  <a
                  
                    href="mailto: grobbiz.services@gmail.com"
                    className="w-full text-base  text-gray-600"
                  >
                    <i class="fa fa-at mr-2 "></i>
                     lorem.services@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
