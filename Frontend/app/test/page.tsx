import { upload } from "../_lib/action";
import { CldImage } from 'next-cloudinary';

export default function P(){
    return <>
 
 <CldImage
   width="960"
   height="600"
   src="<Public ID>"
   sizes="100vw"
   alt="Description of my image"
 />
     <form action={upload} encType="multipart/form-data">
        <input type="file" name="file" multiple/>
        <button>submit</button>
    </form>
    </>
}