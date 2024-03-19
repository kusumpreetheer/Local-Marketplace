import ServiceForm from "@/components/shared/ServiceForm"
import { auth } from "@clerk/nextjs";

const CreateService = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
      <section className="wrapper py-5 md:py-10">
        <h3 className="h3-bold text-start sm:text-left mb-3">New Service Post</h3>
        <ServiceForm 
          userId={userId} 
          type="Create" 
        />
      </section>
  )
}

export default CreateService