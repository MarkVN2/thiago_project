"use client";
import  Main  from '../src/app/modules/main'
import TopBar from '../src/app/modules/topbar'
import '../src/app/global.css'
import Image from 'next/image'
import NavCard from '../src/app/modules/navcard';

const Landing = () =>{
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
        <TopBar companyname="Maximus Soluções" username="Matheus da Silva Lima"></TopBar>
        <NavCard></NavCard>
        
    </Main>

    )
}

export default Landing;