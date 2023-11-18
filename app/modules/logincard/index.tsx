import Image from 'next/image'

const LoginCard = () =>{
    return(
        <div className=''>
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
                        className='m-2 h-[2.5rem] w-[30rem] text-center'
                        placeholder='E-mail'
                        ></input>
                    </span>

                    <span>
                        <input
                        className='m-2 h-[2.5rem] w-[30rem] text-center'
                        placeholder='Senha'
                        ></input>
                    </span>
                    <p
                    className='text-white text-base'
                    >
                   Não possui login, <span className='text-[#64C8D1] font-bold'><a>cadastre-se</a></span> já!
                    </p>
                </div>

                <button
                className='self-end'
                id='login-btn'
                > 
                    <p>
                    ENTRAR
                    </p>
                </button>
            </div>
        </div>
    )
}

export default LoginCard;