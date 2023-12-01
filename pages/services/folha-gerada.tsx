"use client";
import '../../app/global.css'
import  Main  from '../../app/modules/main'
import TopBar from '../../app/modules/topbar';
import NavCard from '../../app/modules/navcard';
import Image from 'next/image';
import Link from 'next/link';
import GeneratedDoc from '../../app/modules/generateddoc';
const folhaGerada = () => {
    let titulo_do_document = "Folha de Pagamento";
    let doc = "/placeholder.jpg";


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
                <GeneratedDoc title={titulo_do_document} image={doc}></GeneratedDoc>
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