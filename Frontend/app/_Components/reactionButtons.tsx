import { useEffect, useState } from "react";
import { getReview, updateReviewsShare, updateUpvoteDownvote } from "../_lib/action";
import { toast } from "react-toastify";

export default function ReactionButtons({ blogId, user }: { blogId: string; user: any }) {
  const [vote, setVote] = useState<boolean | null>(null);

  // Fetch initial vote state
  useEffect(() => {
    const fetchVoteStatus = async () => {
      try {
        const {review} = await getReview(blogId);
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
    navigator.clipboard.writeText(window.location.href);
    const {status,message}=await updateReviewsShare(blogId);
    status?toast.success(message):toast.error(message);

  };

  return (
    <div className="relative top-2 mb-6 flex justify-around w-full rounded-sm overflow-hidden border border-gray-300">
      {/* Upvote Button */}
      <button
        onClick={handleUpvote}
        className={`flex text-sm items-center justify-center border-r border-gray-300 pr-2 py-2 w-1/3 h-full duration-200 
        ${vote === true ? "bg-pink-400 text-white" : "hover:bg-gray-300"}`}
      >
        <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"/>
        </svg>
        <h4>UP</h4>
      </button>

      {/* Downvote Button */}
      <button
        onClick={handleDownvote}
        className={`flex text-sm items-center justify-center border-r border-gray-300 pr-2 py-2 w-1/3 h-full duration-200 
        ${vote === false ? "bg-red-400 text-white" : "hover:bg-gray-300"}`}
      >
        <svg className="rotate-180" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"/>
        </svg>
        <h4>DOWN</h4>
      </button>

      {/* Share Button */}
      <button
        onClick={handleShare}
        className="flex text-sm items-center justify-center pr-2 py-2 w-1/3 h-full duration-200 hover:bg-gray-300"
      >
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12C4 13.3807 5.11929 14.5 6.5 14.5C7.88071 14.5 9 13.3807 9 12C9 10.6193 7.88071 9.5 6.5 9.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 6.5L9 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 17.5L9 14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M16.5 21C17.8807 21 19 19.8807 19 18.5C19 17.1193 17.8807 16 16.5 16C15.1193 16 14 17.1193 14 18.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M18.665 6.74993C17.9746 7.94566 16.4457 8.35535 15.2499 7.66499C14.0542 6.97464 13.6445 5.44566 14.3349 4.24993C15.0252 3.0542 16.5542 2.64451 17.7499 3.33487" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <h4>Share</h4>
      </button>
    </div>
  );
}
