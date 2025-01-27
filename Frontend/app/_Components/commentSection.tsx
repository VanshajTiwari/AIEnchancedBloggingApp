export default function CommentSection(){
    return (
        <div className="px-4">
            <h1 className="text-2xl py-5 font-semibold">Comments</h1>
            <div className="flex flex-col gap-y-2">
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </div>
    )
}

function Comment(){
    return <>
    <div className="mx-auto border shadow-sm px-6 py-4 rounded-lg">
                <div className="flex items-center mb-6">
                <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Avatar" className="w-12 h-12 rounded-full mr-4"/>
        <div>
            <div className="text-lg font-medium text-gray-800">John Doe</div>
            <div className="text-gray-500">2 hours ago</div>
        </div>
    </div>
    <p className="text-lg leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lorem
        nulla. Donec consequat urna a tortor sagittis lobortis.</p>
    <div className="flex justify-between items-center">
        <div>
            <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-thumbs-up"></i> Like</a>
            <a href="#" className="text-gray-500 hover:text-gray-700"><i className="far fa-comment-alt"></i> Reply</a>
        </div>
        <div className="flex items-center">
            <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-flag"></i> Report</a>
            <a href="#" className="text-gray-500 hover:text-gray-700"><i className="far fa-share-square"></i> Share</a>
        </div>
    </div>
</div>
    
    </>
}