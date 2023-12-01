"use client";
import '../../src/app/global.css';
import  Main  from '../../src/app/modules/main'
import TopBar from '../../src/app/modules/topbar';
import NavCard from '../../src/app/modules/navcard';
import Image from 'next/image';
import Link from 'next/link';
const folhaPagamento = () => {
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
            <div
            className='grid xl:grid-flow-col md:grid-flow-row'>
            <NavCard></NavCard>   
            <div 
            className='bg-[#2E7C80] xl:w-[45rem] md:w-auto h-fit rounded-xl text-center md:mt-10 md:m-auto xl:m-auto p-4 relative top-[4rem] border-r-white border-r-[15px]'
            >
                <p className='text-white'>Por favor, responda os <span className='font-bold'>campos</span> abaixo para continuarmos : </p>
                <div>
                    <p className='text-white font-semibold'>*Nome do funcionário: </p>
                    <select className='h-8 w-96'>
                        <option value="Isabella">Isabella Santos Silva</option>
                    </select>
                    <p className='text-white font-semibold'>*Setor do funcionário: </p>
                    <select className='h-8 w-96'>
                        <option value="TI">TI</option>
                    </select>
                    <div>
                    <p className='text-white font-semibold self-start'>*Para o mês de: </p>
                    <input type="month" className='h-8 w-96'></input>
                    </div>
                </div>
                <Link href={"/landing"}>
                <button
                className='bg-[#75A2A5] nav-btn xl:mr-8 md:mr-5'
                >     
                    <p>
                    CANCELAR
                    </p>
                </button>
                </Link>
                <Link href={"/services/folha-gerada"}>
                <button
                className='nav-btn'
              
                > 
                    <p>
                    VISUALIZAR FOLHA
                    </p>
                </button>
                </Link>
            </div>
            </div>
        </Main>
    )
}
export default folhaPagamento;