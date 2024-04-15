import React from "react";
import CommonHeader from "@/components/shared/CommonHeader";
import { auth } from "@clerk/nextjs";
import CreateService from "@/components/shared/CreateService";

const page = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
    <section >
      <CommonHeader title="Create New Service" />
      <CreateService userId={userId}/>
    </section>
  )
}

export default page