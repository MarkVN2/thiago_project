
import Image from 'next/image'

const GeneratedDoc = ({title,image}) =>{
    return(
        <div className='bg-[#ffffff] xl:w-[45rem] md:w-auto h-fit rounded-xl text-center md:mt-10 md:m-auto xl:m-auto p-4 top-[4rem] '>
                <p className='text-[#234A4D] font-bold text-[1.85rem]'>{title}</p>
                <div id='document-container' 
            className=''>
                <Image 
                src={image} 
                height={900}
                width={900}
                alt={'doc'}  
                ></Image>
            </div>
        </div>
    )
}
export default GeneratedDoc;