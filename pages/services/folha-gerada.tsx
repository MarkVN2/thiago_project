"use client";
import '../../app/global.css'
import  Main  from '../../app/modules/main'
import TopBar from '../../app/modules/topbar';
import NavCard from '../../app/modules/navcard';
import Image from 'next/image';
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

            <div className='bg-[#ffffff] xl:w-[45rem] md:w-auto h-fit rounded-xl text-center md:mt-10 md:m-auto xl:m-auto p-4 relative top-[4rem] '>
                <p>Folha de Pagamento</p>
            </div>

            <div>

            </div>
            
        </Main>
    )
}
export default folhaGerada