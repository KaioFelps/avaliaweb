"use client"
import { Metadata } from 'next'
import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import Text from "@/components/Text";
import formatarDataHora from "@/utils/Date"

export const metadata: Metadata = {
  title: 'Home',
  description: '...',
}


export default function Home() {

  const dataAtual = new Date();
  const dataFormatada = formatarDataHora(dataAtual);


  return (
    <main className="flex">
      <Sidebar />
      <div className="flex flex-col bg-bground h-screen w-screen pl-12 pr-28 pt-36">
        <div className="mb-8">
          <Text size="2xl" weight="semibold" fontFamily="sans" color="black">
            Nome do aluno
          </Text>
          <Text size="xl" weight="normal" fontFamily="sans" color="black" >
            {dataFormatada}
          </Text>
        </div>
        <div >
          <Card title="Tarefa 1" description="Esta é a descrição da tarefa 1." status="feito" />
          <Card title="Tarefa 2" description="Esta é a descrição da tarefa 2." status="pendente" />
          <Card title="Tarefa 3" description="Esta é a descrição da tarefa 3." status="incompleto" />
        </div>

      </div>
    </main>
  );
}