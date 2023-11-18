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
        </Main>
    )
}
export default folhaGerada