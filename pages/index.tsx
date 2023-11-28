"use client";
import  Main  from '../app/modules/main'
import '../app/global.css'
import Image from 'next/image'
import Link from 'next/link';

const Home = () =>{
    return(
    <Main>
       <div 
       className='bg-[#234A4D] xl:w-[45rem] md:w-auto h-fit rounded-xl text-center m-auto p-4 relative top-[4rem]'
       >
            <div
            className='text-center flex-grid place-content-center '> 

                <div
                className='text-center grid place-content-center p-16'
                >
                <Image 
                width={180}
                height={180}
                src='ltktsoftwares.svg'
                alt='logo'
                />
                </div>

                <h1
                className='text-white font-semibold text-3xl'
                >LOGIN</h1>     

                <p
                className='text-white text-xl py-5 '
                >
                Acesse sua conta <span className='text-[#64C8D1] font-bold'>agora mesmo!</span>
                </p>

            </div>
            <div
            className=' text-center flex-grid  '> 
                <div 
                className=' flex-grid grid-flow-row'>
                    <span>
                        <input
                        className='m-2 h-[2.5rem] xl:w-[30rem]  md:w-auto text-center'
                        placeholder='E-mail'
                        ></input>
                    </span>

                    <span>
                        <input
                        className='m-2 h-[2.5rem] xl:w-[30rem] md:w-auto text-center'
                        placeholder='Senha'
                        ></input>
                    </span>
                    <p
                    className='text-white text-base pb-5'
                    >
                   Não possui login, <span className='text-[#64C8D1] font-bold'><a>cadastre-se</a></span> já!
                    </p>
                </div>

                <button
                className='self-end'
                id='login-btn'
                > 
                    <p>
                    <Link href={'/landing'}>
                    ENTRAR
                    </Link>
                    </p>
                </button>
            </div>
       </div>
       </Main>

    )
}

export default Home;