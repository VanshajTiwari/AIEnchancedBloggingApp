import { useEffect, useState } from "react";
import { getReview, updateReviewsShare, updateUpvoteDownvote } from "../_lib/action";
import { toast } from "react-toastify";
import { FaHeart,FaHeartBroken } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
export default function ReactionButtons({ blogId,classes }: { blogId: string;classes?:string}) {
  const [vote, setVote] = useState<boolean | null>(null);

  // Fetch initial vote state
  useEffect(() => {
    const fetchVoteStatus = async () => {
      try {
        const {review} = await getReview(blogId);
        // console.log(review);
        if (review!) {
          if (review.upvote) setVote(true);
          else if (review.downvote) setVote(false);
          else setVote(null);
        }
      } catch (error) {
        console.error("Error fetching review:", error);
      }
    };
    fetchVoteStatus();
  }, [blogId]);

  const handleUpvote = async () => {
    if (vote === true) return;
    setVote(true);
    await updateUpvoteDownvote(blogId, true);
  };

  const handleDownvote = async () => {
    if (vote === false) return;
    setVote(false);
    await updateUpvoteDownvote(blogId, false);
  };

  const handleShare = async() => {
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/post/${blogId}`);
    const {status,message}=await updateReviewsShare(blogId);
    status?toast.success(message):toast.error(message);

  };

  return (
    <div className={`relative dark:text-gray-500 max-w-full top-2 mb-6 flex justify-around overflow-hidden border border-gray-300 ${classes}`} >
      {/* Upvote Button */}
      <button
        onClick={handleUpvote}
        className={`flex text-sm items-center justify-around border-r border-gray-300 pl-2 pr-2 py-2 w-1/3 h-full duration-200 
        ${vote === true ? "bg-pink-400 text-white" : "hover:bg-gray-300"}`}
      >
        <FaHeart/>
        <h4>UVOTE</h4>
      </button>

      {/* Downvote Button */}
      <button
        onClick={handleDownvote}
        className={`flex text-sm items-center justify-around border-r border-gray-300 pl-2 pr-2 py-2 w-1/3 h-full duration-200 
        ${vote === false ? "bg-red-400 text-white" : "hover:bg-gray-300"}`}
      >
        <FaHeartBroken/>
        <h4>DVote</h4>
      </button>

      {/* Share Button */}
      <button
        onClick={handleShare}
        className={`flex text-sm items-center justify-around border-r border-gray-300 pl-2 pr-2 py-2 w-1/3 h-full duration-200 `}
      >
        <FaShare/>
        <h4>Share</h4>
      </button>
    </div>
  );
}
