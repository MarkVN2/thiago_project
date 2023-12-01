"use client";

import axios from "axios";
import Main from "../src/app/modules/main";
import Link from "next/link";
import { ChangeEvent, useState } from "react";


const Signup = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    var sucesso:Boolean = false;
    const handleCreateUser = async () => {
  
        let payload = {
          name:name,
          password:password,
          email:email
        };
        console.log(payload)
 
        try {
          const response = await axios.post('/api/createUser',payload);
          sucesso = true;
          console.log('Novo usuário criado:', response.data);
        } catch (error) {
          console.error('Erro ao realizar a requisição:', error);
        }
      };

    return (
        <Main>
            
            <div>
                    <span>
                        <input
                        className='m-2 h-[2.5rem] xl:w-[30rem]  md:w-auto text-center'
                        type='name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder='name'
                        ></input>
                    </span>
                    <span>
                        <input
                        className='m-2 h-[2.5rem] xl:w-[30rem]  md:w-auto text-center'
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder='E-mail'
                        ></input>
                    </span>

                    <span>
                        <input
                        className='m-2 h-[2.5rem] xl:w-[30rem] md:w-auto text-center'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder='Senha'
                        ></input>
                    </span>
                    <button className='self-end'id='login-btn' onClick={handleCreateUser}> 
                    <p>
                    <Link href={''}>
                    CADASTRAR
                    </Link>
                    </p>
                </button>
            </div>
            
        </Main>
    )
}
export default Signup;