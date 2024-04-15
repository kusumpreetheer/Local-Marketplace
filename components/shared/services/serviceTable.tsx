"use client"

import { FaCreditCard, FaPaypal, FaStripe } from 'react-icons/fa';
import { useEffect, useRef, useState } from "react"
import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ServiceOffered, columns } from "./columns"
import { Cash } from '@/public/assets/icons/Cash';
import { InteractTransfer } from '@/public/assets/icons/InteractTransfer';
import { Stripe } from '@/public/assets/icons/Stripe';
import { Paypal } from '@/public/assets/icons/Paypal';
import { Phone } from '@/public/assets/icons/Phone';
import { Mail } from '@/public/assets/icons/Mail';
import { Checkmark } from '@/public/assets/icons/Checkmark';
import ReactCurvedText from "react-curved-text";
import { Sloth } from '@/public/assets/icons/Sloth';
import { IService } from '@/lib/database/models/service.model';
import { createReservation } from '@/lib/actions/reservation.actions';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
};

interface ExtendedDataTableProps<TData, TValue> extends DataTableProps<TData, TValue> {
    userId: string
    service: IService
};

export function ServiceTable<TData, TValue>({
    columns,
    data,
    service,
    userId
}: ExtendedDataTableProps<TData, TValue>) {

    /**************************************************************************
     *  React Table
     **************************************************************************/
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        // getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    /**************************************************************************
     *  Modal
     **************************************************************************/
    const [opened, { open, close: closeModal }] = useDisclosure(false);
    const [step, setStep] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedServices, setSelectedServices] = useState<ServiceOffered[]>([]);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
    const confettiProps = typeof window !== 'undefined' ? {
        width: window.innerWidth,
        height: window.innerHeight
    } : {};

    /**************************************************************************
     *  Step 1: Confirm Reservation 
     **************************************************************************/

    const ConfirmReservation = () => {
        return (


            <div>
                <div className="flex items-center justify-center space-x-4 pb-5">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-200 text-gray-700 rounded-full">1</div>
                    <div className="w-12 h-0.5 bg-gray-200"></div>
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-700 rounded-full">2</div>
                    <div className="w-12 h-0.5 bg-gray-200"></div>
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-700 rounded-full">3</div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-semibold my-5 text-left">Reservation Details</h1>
                </div>

                {/* Table */}
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Service</TableHead>
                            {/* <TableHead>Rating</TableHead> */}
                            <TableHead>Price</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {selectedServices.map((service, index) => (
                            <TableRow key={index}>
                                <TableCell>{service.title}</TableCell>
                                {/* <TableCell>{service.rating}</TableCell> */}
                                <TableCell>{service.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* line below table */}
                <div className="border-b my-4"></div>

                {/* Total Price */}
                <div className="flex flex-col items-end">
                    <h3 className="text-end mr-4">Total Price <span className="font-bold">${totalPrice}</span></h3>
                    <div className="border-b my-4 w-32"></div>
                </div>

                {/* okay button */}
                <div className="flex justify-end">
                    <Button onClick={() => setStep(2)} variant="default">Next</Button>
                </div>
            </div>
        )
    }

    // Calculate total price
    const calculateTotalPrice = () => {
        const selectedServicesArray = Object.keys(rowSelection).map(rowId => getServiceDetails(rowId));
        setSelectedServices(selectedServicesArray);

        let total = 0;
        selectedServicesArray.forEach(service => {
            // Check if service.price is a string before parsing it

            // if price is not defined then it is assigned 0
            if (!service.price) service.price = 0;

            if (typeof service.price === 'string') {
                total += parseInt(service.price, 10); // Parse the string to integer
            } else {
                total += service.price; // If it's already a number, directly add it to total
            }
        });
        setTotalPrice(total);
    }

    // Get the selected service details by rowId
    const getServiceDetails = (rowId: string) => {
        // Get the selected row data
        const selectedRow = table.getRowModel().rows.find((row) => row.id === rowId);
        return selectedRow?.original as ServiceOffered;
    };

    /**************************************************************************
     *  Step 2: Payment Screen
     **************************************************************************/
    const PaymentScreen = () => {

        const handleNextClick = () => {
            if (selectedPaymentMethod) {
                handleCreateReservation();
                setStep(3);
            } else {
                alert('Please select a payment method');
            }
        };

        const isStripeEnabled = false;
        const isPaypalEnabled = false;

        return (
            <div>
                {/* form progress tracker */}
                <div className="flex items-center justify-center space-x-4 pb-5">
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-500 text-white rounded-full">
                        <Checkmark className="w-4 h-4" />
                    </div>
                    <div className="w-12 h-0.5 bg-gray-200"></div>
                    <div className="flex items-center justify-center w-8 h-8 bg-green-200 text-gray-700 rounded-full">2</div>
                    <div className="w-12 h-0.5 bg-gray-200"></div>
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-700 rounded-full">3</div>
                </div>

                {/* Payment methods section */}
                <h2 className="text-xl font-semibold mb-3">Select Payment Method:</h2>


                <Accordion type="single" collapsible className="w-full" onValueChange={(value:string) => setSelectedPaymentMethod(value)}>
                    <AccordionItem value="inPerson" className=''>
                        <AccordionTrigger className="">
                            <span className="">Cash</span>
                            <Cash className="w-6 h-6" />
                        </AccordionTrigger>
                        <AccordionContent>
                            Pay in Person
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="interac">
                        <AccordionTrigger>
                            <span className="">Interac</span>
                            <InteractTransfer className="w-6 h-6" />
                        </AccordionTrigger>
                        <AccordionContent>
                            {service.provider.firstName}
                        </AccordionContent>
                    </AccordionItem>
                    {isStripeEnabled && <AccordionItem value="stripe">
                        <AccordionTrigger>
                            <span className="">Stripe</span>
                            <Stripe className="w-6 h-6" />
                        </AccordionTrigger>
                        <AccordionContent>

                        </AccordionContent>
                    </AccordionItem> }
                    {isPaypalEnabled && <AccordionItem value="paypal">
                        <AccordionTrigger>
                            <span className="">Paypal</span>
                            <Paypal className="w-6 h-6" />
                        </AccordionTrigger>
                        <AccordionContent>

                        </AccordionContent>
                    </AccordionItem>}

                </Accordion>


                {/* next and back button  */}
                <div className="flex justify-between">
                    <Button onClick={() => setStep(1)} variant="default">Back</Button>
                    <Button onClick={ handleNextClick } variant="default">Next</Button>
                </div>
            </div>
        )
    }

    // Open modal and calculate total price
    const handleReserve = () => {
        open();
        calculateTotalPrice();
    }

    /**************************************************************************
     *  Step 3: Payment Success
     **************************************************************************/
    // create reservation function
    const handleCreateReservation = async () => {

        console.log("2- userId", userId);

        const reservationParams = {
            providerId: service.provider._id,
            serviceId: service._id,
            createdAt: new Date(),
            selectedServices: selectedServices.map(service => service.id),
        }

        try {
            const reseravation = await createReservation({
                userId: userId,
                serviceId: service._id,
                reservation: reservationParams,
                path: '/profile'
            });
            if (reseravation) {
                console.log('Reservation created successfully:', reseravation)
            }
        } catch (error) {
            console.log('Error creating reservation:', error)
        }
    }
    const PaymentSuccess = () => {
        let paymentSuccessMessage = "";
        let setrx = 140;

        // Generate different success messages based on the selected payment method
        switch (selectedPaymentMethod) {
            case "inPerson":
                paymentSuccessMessage = "Pending for approval...";
                setrx = 140;
                break;
            case "interac":
                paymentSuccessMessage = "Pending for approval...";
                setrx = 140;
                break;
            case "stripe":
                paymentSuccessMessage = "Payment Success through Stripe";
                setrx = 180;
                break;
            case "paypal":
                paymentSuccessMessage = "Payment Success through PayPal";
                setrx = 180;
                break;
            default:
                paymentSuccessMessage = "Pending for approval...";
        }

        return (

            <div>
                <div className="flex items-center justify-center space-x-4 pb-5">
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-500 text-white rounded-full">
                        <Checkmark className="w-4 h-4" />
                    </div>
                    <div className="w-12 h-0.5 bg-gray-200"></div>
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-500 text-white rounded-full">
                        <Checkmark className="w-4 h-4" />
                    </div>
                    <div className="w-12 h-0.5 bg-gray-200"></div>
                    <div className="flex items-center justify-center w-8 h-8 bg-green-200 text-gray-700 rounded-full">3</div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="text-xl font-bold text-center">
                        <ReactCurvedText
                            width={370}
                            height={100}
                            cx={160}
                            cy={120}
                            rx={setrx}
                            ry={80}
                            startOffset={80}
                            reversed={true}
                            text={paymentSuccessMessage}
                        />
                    </div>
                    <div className="mt-4">
                        <Sloth className="w-12 h-12" />
                    </div>
                </div>
            </div>
        );
    }

    /**************************************************************************
     *  Reserve Dashboard Modal
     **************************************************************************/
    const ReserveDashboard = () => {

        return (
            <Modal
                opened={opened}
                onClose={close}
                title=""
                transitionProps={{ transition: 'fade', duration: 200 }}
            >

                {step === 1 && <ConfirmReservation />}
                {step === 2 && <PaymentScreen />}
                {step === 3 && <PaymentSuccess />}

                {/* show confetti */}
                {/* <Confetti
                {...confettiProps}
                numberOfPieces={500}
                recycle={false}
                initialVelocityY={10}
                initialVelocityX={10}
                colors={['#f44336', '#2196f3', '#ffeb3b', '#4caf50']}
            /> */}
            </Modal>
        )
    }

    const close = () => {
        setStep(1);
        setSelectedPaymentMethod(null);
        closeModal();
    }

    /**************************************************************************
     *  Render
     **************************************************************************/
    return (
        <div className="rounded-lg border p-4">
            <div className="flex items-between px-2 gap-x-6 pt-2 pb-4">
                {/* Search bar */}
                <Input
                    placeholder="Find services..."
                    value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("title")?.setFilterValue(event.target.value)
                    }
                    className="w-full"
                />
                {/* show */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Show
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter(
                                (column) => column.getCanHide()
                            )
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Content */}
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {/* Bottom */}
            <div className="flex items-center justify-end space-x-2 p-2">
                {/* # of selected service */}
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} service(s) selected.
                </div>

                {/* Reserve Button */}
                <Button onClick={handleReserve} disabled={table.getFilteredSelectedRowModel().rows.length === 0} variant="default">Reserve</Button>
            </div>

            {/* Reserve Modal */}
            <ReserveDashboard />


        </div>
    )
}