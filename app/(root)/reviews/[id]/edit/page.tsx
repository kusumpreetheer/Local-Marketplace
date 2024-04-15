import CommonHeader from "@/components/shared/CommonHeader"
import ReviewForm from "@/components/shared/ReviewForm";
import { auth } from "@clerk/nextjs";

const EditReview = () => {
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;

    return (
        <div>
            <CommonHeader title='Edit Review' />
            <ReviewForm 
                userId={userId} 
                type="Edit" 
            />
        </div>
    )
}

export default EditReview;
