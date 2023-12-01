"use client";

import axios from "axios";
import Main from "../src/app/modules/main";
import Link from "next/link";
import Image from "next/image";
import { ChangeEvent, useState } from "react";


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [sucess,setSucess] = useState(false);
  const [empty,setEmpty] = useState(false);

  const handleCreateUser = async () => {

    if(email == null || email == '' || password == null || password ==  '' || name == null || name == '') {
      setEmpty(true);
    }
    else{
    let payload = {
      name: name,
      password: password,
      email: email
    };
    console.log(payload)

    try {
      const response = await axios.post('/api/createUser', payload);
      if (empty == false)setSucess(true);
      console.log('Novo usuário criado:', response.data);
    } catch (error) {
      console.error('Erro ao realizar a requisição:', error);
    }
  }
  };

  return (
    <Main>
      <div className=" text-center flex-grid">
        <div className='text-center flex-grid place-content-center'>

          <div className='text-center grid place-content-center p-16'>

            <Image
              width={180}
              height={180}
              src='ltktsoftwares-dark.svg'
              alt='logo'
            />
          </div>

          <h1 className='text-gray-500 font-bold text-2xl py-5 '>
            Crie sua <span className='text-[#647dd1] font-bold'>conta</span>
          </h1>
          <p className='text-[#2E7C80] font-bold text-xl  py-5 '>
            Dados Pessoais
          </p>
        </div>
        <div className="grid grid-flow-row content-center">
          <span>
            <input
              className='m-2 h-[2.5rem] xl:w-[30rem]  md:w-auto text-center border-blue-400 border-[1px] '
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder='*Nome'
            ></input>
          </span>
          <span>
            <input
              className='m-2 h-[2.5rem] xl:w-[30rem]  md:w-auto text-center border-blue-400 border-[1px] '
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder='*E-mail'
            ></input>
          </span>

          <span>
            <input
              className='m-2 h-[2.5rem] xl:w-[30rem] md:w-auto text-center border-blue-400 border-[1px] '
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder='*Senha'
            ></input>
          </span>

        </div>
        {empty && <p><span className='text-red-600 font-bold'>Erro algum campo está vazio</span></p>}
        <Link href={"/"}>
          <button
            className='bg-[#75A2A5] nav-btn xl:mr-8 md:mr-5'
          >
            <p>
              CANCELAR
            </p>
          </button>
        </Link>
        <button className='self-end nav-btn' onClick={handleCreateUser}>
          <p>
            <Link href={sucess?'/':''}>
              CADASTRAR
            </Link>
          </p>
        </button>
      </div>
    </Main>
  )
}
export default Signup;