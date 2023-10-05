import Image from "next/image";
import React, { useState, ReactNode } from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Lock, Person } from '@mui/icons-material';

import principal from '../../assets/principal.png'
import logo from '../../assets/logo.svg'
import { Checkbox, FormControl, FormControlLabel } from "@mui/material";

import { useRouter } from 'next/router'
import axios from 'axios';

interface TailwindButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  children: ReactNode;
}

const TailwindButton = ({onClick, children }: TailwindButtonProps) => {
  return (
    <button onClick={onClick} className="bg-default w-96 h-10 rounded self-center hover:bg-default/90">
      {children}
    </button>
  );
};

export default function Login() {
  const router = useRouter();
  const [input, setInput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    console.log('Valor do input:', e.target.value); // Log para verificar o valor do input
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      console.log('Enviando solicitação à API...'); // Log para verificar o início da solicitação
      const response = await axios.get(`https://kind-ruby-seahorse-sock.cyclic.app/alunos/${input}`);
      console.log('Resposta da API:', response.data); // Log para verificar a resposta da API
      
      if (response.data) {
        console.log('Redirecionando para /Home...'); // Log para verificar o redirecionamento
        router.push('/Home'); 
      }
    } catch (error) {
      console.error('Erro na solicitação à API:', error);
    }
  };

  return (
    <main className="bg-gray-200 flex justify-center items-center h-screen">
      <section className="w-full h-screen bg-white md:w-1/2  md:flex ">
        <div className="w-full md:w-1/2 md:pr-4 bg-grayPrincipal p-6 flex flex-col justify-center">
          <Image
            src={logo}
            alt="logo unicap"
          />
          <FormControl className="space-y-3 mt-4">
            <TextField
              id="outlined-required"
              label="RA"
              value={input}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="outlined-required"
              label="Senha"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
              <FormControlLabel control={<Checkbox />} color="primary" label="Manter conectado" sx={{ color: 'black'}} />
            <TailwindButton onClick={handleSubmit} children="Acessar"/>
          </FormControl>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0 flex items-center justify-center">
          <Image
          src={principal}
          alt="Imagem campus"
          />
        </div>
      </section>
    </main>
  )
}
