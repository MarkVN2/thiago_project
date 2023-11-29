"use client";
import '../../app/global.css'
import  Main  from '../../app/modules/main'
import TopBar from '../../app/modules/topbar';
import NavCard from '../../app/modules/navcard';
import Image from 'next/image';
import Link from 'next/link';
const folhaGerada = () => {
    return(
        <Main>
             <Image
            className='pointer-events-none grid-1 bg-repeat -z-10'
            alt='background'
            src="/background_landing.png"
            objectFit='cover' 
            layout='fill' 
            objectPosition='center'
            />
            <TopBar companyname={"Maximus Soluções"} username={"Matheus da Silva Lima"}></TopBar>
            <div className='grid grid-flow-row content-center'>
                <div className='bg-[#ffffff] xl:w-[45rem] md:w-auto h-fit rounded-xl text-center md:mt-10 md:m-auto xl:m-auto p-4 top-[4rem] '>
                    <p className='text-[#234A4D] font-bold text-[1.85rem]'>Folha de Pagamento</p>
                    <div id='document-container' 
                className=''>
                    <Image 
                    src={'/placeholder.jpg'} 
                    height={900}
                    width={900}
                    alt={''}  
                    ></Image>
                </div>
                </div>
                
                <div>
                <Link href={"/landing"}>
                <button
                className='bg-[#75A2A5] nav-btn xl:mr-8 md:mr-5'
                >     
                    <a>
                    VOLTAR
                    </a>
                    
                </button>
                </Link>
                </div>
            </div>
            
        </Main>
    )
}
export default folhaGerada