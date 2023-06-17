import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { useCarts } from "@/store/context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { CartsCheckout } from "@/widgets/carts";
import { useUsers } from "@/store/context/UserContext";
import { useOrders } from "@/store/context/OrderContext";
import moment from 'moment';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';


export function PayPal() {

    return (
        <>
            <img
                src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                className="absolute inset-0 z-0 h-full w-full object-cover"
            />
            <div className="mx-3 mt-12 mb-8 flex flex-col gap-12">
                <Card>
                    <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
                        <Typography variant="h6" color="white">
                            Payment
                        </Typography>
                    </CardHeader>
                    <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">

                            <div className="w-full bg-white   px-5 py-10 text-gray-800">
                                <div className="w-full">
                                    <div className="-mx-3 md:flex items-start">
                                        <div className="px-3 md:w-7/12 lg:pr-10">
                                            <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                                                <div className="w-full flex items-center">
                                                    <div className="flex-grow">
                                                        <span className="text-gray-600">Total</span>
                                                    </div>
                                                    <div className="pl-3">
                                                        $10
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-3 md:w-5/12">
                                            <div className="w-full mx-auto rounded-lg bg-white  text-gray-800 font-light mb-6">
                                                <div>
                                                    <PayPalScriptProvider>
                                                        <PayPalButtons
                                                        />
                                                    </PayPalScriptProvider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>

            </div>
        </>
    )
}

export default PayPal