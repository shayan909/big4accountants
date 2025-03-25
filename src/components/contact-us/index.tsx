'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import { tw } from 'twind';
import { XMarkIcon } from '@heroicons/react/20/solid';

const Contactusform = ({ isOpen, setIsOpen }) => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    alert(`Name: ${inputValues.input1}, Email-address: ${inputValues.input2}, Message: ${inputValues.input3}`);
    setIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const isDisabled = Object.values(inputValues).some((value) => value === '');

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Transition appear show={isOpen || false} as={Fragment}>
        <Dialog as="div" className={tw`relative z-50`} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter={tw`ease-out duration-300`}
            enterFrom={tw`opacity-0`}
            enterTo={tw`opacity-100`}
            leave={tw`ease-in duration-200`}
            leaveFrom={tw`opacity-100`}
            leaveTo={tw`opacity-0`}
          >
            <div className={tw`fixed inset-0 bg-black bg-opacity-25`} />
          </Transition.Child>

          <div className={tw`fixed inset-0 overflow-y-auto`}>
            <div className={tw`flex min-h-full items-center justify-center p-4 text-center`}>
              <Transition.Child
                as={Fragment}
                enter={tw`ease-out duration-300`}
                enterFrom={tw`opacity-0 scale-95`}
                enterTo={tw`opacity-100 scale-100`}
                leave={tw`ease-in duration-200`}
                leaveFrom={tw`opacity-100 scale-100`}
                leaveTo={tw`opacity-0 scale-95`}
              >
                <Dialog.Panel
                  className={tw`w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}
                >
                  <div style={{ float: 'right' }}>
                    <XMarkIcon className={tw`h-6 w-6 text-gray-500 cursor-pointer `} onClick={closeModal} />
                  </div>

                  <div className={tw`py-8 lg:py-8 px-4 mx-auto max-w-screen-md`}>
                    <div className={tw`flex justify-between items-center mb-4`}>
                      <Link href="/" className={tw`text-2xl sm:text-4xl font-semibold text-black`}>
                        Get Started
                      </Link>
                    </div>
                    <p className={tw`mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 sm:text-xl`}>
                      Manufacturing Inventory Management
                    </p>
                    <form action="#" className={tw`space-y-8`} onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="text" className={tw`block mb-2 text-sm font-medium text-gray-900`}>
                          Your Name
                        </label>
                        <input
                          id="text"
                          name="input1"
                          value={inputValues.input1}
                          onChange={handleChange}
                          type="text"
                          required
                          className={tw`relative block w-full appearance-none rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                          placeholder="Name..."
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={tw`block mb-2 text-sm font-medium text-gray-900`}>
                          Your email
                        </label>
                        <input
                          id="email"
                          name="input2"
                          value={inputValues.input2}
                          onChange={handleChange}
                          type="email"
                          required
                          className={tw`relative block w-full appearance-none rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                          placeholder="xyz@email.com"
                        />
                      </div>
                      <div className={tw`sm:col-span-2`}>
                        <label htmlFor="message" className={tw`block mb-2 text-sm font-medium text-gray-900`}>
                          Your message
                        </label>
                        <textarea
                          id="message"
                          name="input3"
                          value={inputValues.input3}
                          onChange={handleChange}
                          className={tw`relative block w-full appearance-none rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                          placeholder="Leave a comment..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        style={{
                          backgroundColor: isDisabled ? 'lightgray' : 'rgb(19,3,86)',
                          color: isDisabled ? 'black' : 'white',
                        }}
                        onClick={handleClick}
                        disabled={isDisabled}
                        className={tw(
                          `py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-black rounded-lg bg-blue focus:ring-4 focus:outline-none focus:ring-primary-300`,
                        )}
                      >
                        Send message
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Contactusform;
