import Image from 'next/image'
import UserWidget from '../userwidget';
import { useState } from 'react';

const TopBar = ({companyname,username}) =>{
    const [open,open2] = useState(false);

    return (
        <div 
        className="bg-[#234A4D] w-full h-36 border-b-[white] border-b-4 "
        >
            <div className=' grid grid-flow-col columns-2'>
                <div
                className='grid place-content-center'>
                    <div 
                    className="text-center w-32">
                        <span className="text-white font-bold"><h1
                        className='py-10'
                    >{companyname}</h1></span>
                    </div>
                </div>

                <div
                className="grid grid-flow-col place-content-end px-32">

                    <div 
                    className=' place-content-center text-center w-32'>
                        <span className='text-white font-bold'><h1
                        className="py-10 px-3"
                        >{username}</h1>
                        </span>
                    </div>
                    <div className='grid grid-flow-row'>
                    <Image
                        width={102}
                        height={105}
                        src='/testpic.png'
                        alt='logo'
                        className='py-5'
                        onMouseOver={() => { open? open2(false):open2(true)}}
                        
                        />
                       { open && <UserWidget></UserWidget>}
                    </div>
                </div>
               
            </div>
            
        </div>

    )
}

export default TopBar;