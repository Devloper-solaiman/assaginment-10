import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Chakout = () => {
    return (
        <div>
            <section>

                <div className="mx-auto">

                    <div className="bg-white py-12 md:py-24">
                        <div className="mx-auto max-w-lg px-4 lg:px-8">
                            <form className="grid grid-cols-6 gap-4">
                                <div className="col-span-3">
                                    <label for="FirstName" className="block text-xs font-medium text-gray-700" >
                                        First Name
                                    </label>

                                    <input type="text" className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" />
                                </div>

                                <div className="col-span-3">
                                    <label for="LastName" className="block text-xs font-medium text-gray-700" >
                                        Last Name
                                    </label>

                                    <input type="text" className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" />
                                </div>

                                <div className="col-span-6">
                                    <label for="Email" className="block text-xs font-medium text-gray-700">
                                        Email
                                    </label>

                                    <input type="email" className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" />
                                </div>

                                <div className="col-span-6">
                                    <label for="Phone" className="block text-xs font-medium text-gray-700">
                                        Phone
                                    </label>

                                    <input type="tel" className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" />
                                </div>

                                <fieldset className="col-span-6">
                                    <legend className="block text-sm font-medium text-gray-700">
                                        Card Details
                                    </legend>

                                    <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                        <div>
                                            <label for="CardNumber" className="sr-only"> Card Number </label>

                                            <input type="text" placeholder="Card Number" className="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm" />
                                        </div>

                                        <div className="flex">
                                            <div className="flex-1">
                                                <label for="CardExpiry" className="sr-only"> Card Expiry </label>

                                                <input type="text" placeholder="Expiry Date" className="relative w-full rounded-es-md border-gray-200 focus:z-10 sm:text-sm"
                                                />
                                            </div>

                                            <div className="-ms-px flex-1">
                                                <label for="CardCVC" className="sr-only"> Card CVC </label>

                                                <input type="text" placeholder="CVC" className="relative w-full rounded-ee-md border-gray-200 focus:z-10 sm:text-sm" />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset className="col-span-6">
                                    <legend className="block text-sm font-medium text-gray-700">
                                        Billing Address
                                    </legend>

                                    <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                        <div>
                                            <label for="Country" className="sr-only">Country</label>

                                            <select className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                                            >
                                                <option>Bangladesh</option>
                                                <option>India</option>
                                                <option>England</option>
                                                <option>Wales</option>
                                                <option>Scotland</option>
                                                <option>France</option>
                                                <option>Belgium</option>
                                                <option>Japan</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="sr-only" for="PostalCode"> ZIP/Post Code </label>

                                            <input type="text" placeholder="ZIP/Post Code" className="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </fieldset>

                                <div className="col-span-6">
                                    <Link onClick={() => { toast('thanks for Payment') }} className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition text-center"> Pay Now</Link>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Chakout;