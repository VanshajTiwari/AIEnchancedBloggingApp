import Spinner from "./_Components/spinner";

export default function Loader(){
    return <>
    <div className="dark:bg-gray-900 w-full flex item-center justify-center" style={{height:"100vh"}}>
        <Spinner></Spinner>

    </div>
    </>
}