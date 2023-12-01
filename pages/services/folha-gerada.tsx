"use client";
import '../../src/app/global.css'
import  Main  from '../../src/app/modules/main'
import TopBar from '../../src/app/modules/topbar';
import Image from 'next/image';
import Link from 'next/link';
import GeneratedDoc from '../../src/app/modules/generateddoc';
const folhaGerada = () => {

    const user =  null;


    let titulodocument = "Folha de Pagamento";
    let doc = "/isabella_pagamento.jpg";


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
                <GeneratedDoc title={titulodocument} image={doc}></GeneratedDoc>
                <div className='grid grid-flow-col'>
                     <div className=' xl:ml-auto md:ml-auto xl:mr-52 '>
                    <a href={doc}
                    download>
                        <button
                        className='bg-[#75A2A5] nav-btn xl:mr-8 md:mr-5 '
                        >     
                            <p>
                            BAIXAR
                            </p>
                        </button>
                    </a>
                    </div>
                    <div className=' xl:ml-auto md:ml-auto xl:mr-52 '>
                    <Link href={"/services/folha-de-pagamento"}>
                        <button
                        className='bg-[#75A2A5] nav-btn xl:mr-8 md:mr-5 '
                        >     
                            <p>
                            VOLTAR
                            </p>
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
            
        </Main>
    )
}
export default folhaGerada