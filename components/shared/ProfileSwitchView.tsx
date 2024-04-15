"use client";

import React, { useState } from 'react'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ReservationItem } from '@/lib/database/models/reservation.model';
import { IService } from '@/lib/database/models/service.model';
import Collection from '@/components/shared/Collection'
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./ingredients";

type ProfileSwitchViewProps = {
    myReservations: ReservationItem[],
    myServices: IService[],
    myRequests: ReservationItem[]
}



const ProfileSwitchView = ({ myReservations, myServices, myRequests }: ProfileSwitchViewProps) => {


    // Provider View
    const ProviderView = () => {
        return (
            <>
                {/* Client Requests */}
                <section className="my-5 wrapper">
                    <Collection
                        title={{ _id: "Client Requests", name: "Client Requests" }}
                        direction='horizontal'
                        itemType='reservation'
                        items={myRequests}
                        hasButton={true}
                        hasViewMore={true}
                        link={"/profile/requests"}
                        nextPrevButton={true}
                    />
                </section>
                {/* My Services */}
                <section className="my-5 wrapper" >
                    <Collection
                        title={{ _id: "My Services", name: "My Services" }}
                        direction='horizontal'
                        itemType='service'
                        items={myServices}
                        hasButton={true}
                        hasViewMore={true}
                        link={"/profile/services"}
                        nextPrevButton={true}
                    />
                </section>
            </>
        )
    }

    // Client View
    const ClientView = () => {
        return (
            <>
                {/* My Reservations */}
                <section className="my-5 wrapper">
                    <Collection
                        title={{ _id: "My Reservations", name: "My Reservations" }}
                        direction='horizontal'
                        itemType='reservation'
                        items={myReservations}
                        hasButton={true}
                        hasViewMore={true}
                        link={"/profile/reservations"}
                        nextPrevButton={true}
                    />
                </section>
            </>
        )
    }

    // for framer motion
    const views: { label: string, value: JSX.Element }[] = [
        {
            label: "Client View",
            value: <ClientView />
        },
        {
            label: "Provider View",
            value: <ProviderView />
        }
    ]
    const [selectedView, setSelectedView] = useState(views[0]);

    return (
        <div>
            {/* Switch for views */}
            <section className="wrapper flex justify-end items-center space-x-4">
                <Label htmlFor="client-view" className="text-xl font-semibold text-gray-500">
                    {selectedView ? selectedView.label : null}
                </Label>
                <Switch
                    id="client-view"
                    className=""
                    onCheckedChange={(checked) => {
                        setSelectedView(checked ? views[1] : views[0])
                    }
                    }
                />

            </section>

            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedView ? selectedView.label : 0}
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -500, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {selectedView ? selectedView.value : null}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default ProfileSwitchView
