"use client"

import { useEffect, useState } from "react"
import { loadEnvConfig, processEnv } from '@next/env'

interface TypewriterProps {
  text: string;
}

const TypewriterEffect = ({ text }: TypewriterProps) => {

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      // Usamos setTimeout para adicionar um caractere de cada vez
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 40);

      // Função de limpeza do efeito
      return () => clearTimeout(timeout);
    }
  },); // O efeito roda de novo quando um caractere é adicionado

  // Retornamos o texto atualizado (aqui o whitespace-pre-wrap é crucial)
  return <span className="whitespace-pre-wrap">{currentText}</span>;
};








export default function Home() {
  const [text, setText] = useState('noob_x64%00')
  const [glinch , setGlinch] = useState(false);
  
  const [userIP, setUserIp] = useState<string | null>(null);
  const [isLoarding , setIsLoarding] = useState(false);
  const [erro, setErro] = useState<string|null>(null);

  const [city , setCity] = useState('');
  const [region , setRegion] = useState('');
  const [pais , setPais] = useState('');
  const [loc , setLoc] = useState('');
  const [provedor , setProvedor] = useState('');


  const fullText = "noob_x64%00"

  const characteres = 'ABCDEFGHIJKLMLOPQ0123456789@#$%&*'


  
  useEffect(()=>{

    const Interval = setInterval(()=>{
      if(Math.random() > 0.7){
        setGlinch(true);

        // aplica o glinch 
        let iteration = 0 ;
        const Interva2 = setInterval(()=>{
          setText( prev => 
            prev.split('')
             .map((char , index) => {
            
              if(char === '_' || char == 'x') return char;
              if(iteration > index) return 'noob_x64%00'[index];
              return characteres[Math.floor(Math.random() * characteres.length)]

          })
          .join('')
        );

        iteration += 1/3;

        if(iteration >= text.length){
          clearInterval(Interva2);
          setGlinch(false);
        }
         
       }, 50 )
     }
    }, 1000);
  
    return () => clearInterval(Interval);

  },[]);


  useEffect(()=>{

    const fetchUserIP = async () => {
      try{

        interface IpResponse {
          ip: string;
          city: string;
          region: string;
          country: string;
          loc: string;
          org: string;

        }

        const response = await fetch("ttps://ipinfo.io/geo?format=json");

        if(!response.ok){
            throw new Error('Erro ao buscar seu Endereco IP')
        }
        const data: IpResponse = await response.json();

        setUserIp(data.ip);
        setCity(data.city);
        setRegion(data.region);
        setPais(data.country)
        setLoc(data.loc);
        setProvedor(data.org);

      }catch(err){
          setErro('Nao foi possivel Obter seu IP ')
      }finally{
          setIsLoarding(false);
      }

    };

    fetchUserIP();

  },[]);

   const palavraCompleta = `[+] - Iniciando a Coleta de Informacoes [#######################] 100% \n[+] - city : ${city},\n[+] - regiao : ${region},\n[+] - pais : ${pais},\n[+] - location : ${loc},\n[+] - provedor : ${provedor}\n\n[noob@noob_x64 ~/noob-x64]$`;

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center gap-8 overflow-hidden">
      {/* Efeito de brilho no fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>

      {/* Nickname */}
      <div className="relative z-10">
        <div className="font-mono text-6xl md:text-8xl font-bold">
          <span className="text-green-400">{text}</span>
          <span className="inline-block w-[3px] h-16 md:h-20 bg-green-500 ml-1 animate-pulse"></span>
        </div>

        {/* Linha de comando fictícia */}
        <div className="mt-8 font-mono text-green-600 text-center">
          <span className="animate-pulse">&gt; </span>
            Pentester | Developer Backend 
          <span className="animate-pulse"> &lt;</span>
        </div>
      </div>


    <div className="relative z-10 w-full max-w-2xl px-4 ">
      <div className="bg-gray-800 text-white rounded-t-lg px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="ml-4 text-sm text-gray-400">bash  — 80x24</span>
      </div>

      <div className="bg-[#101020] text-green-400 font-mono p-4 rounded-b-lg text-sm">
        <p>[noob@noob_x64 ~/noob-x64]$ curl -i <a href="https://github.com/JaconiasDev">https://github.com/JaconiasDev</a></p>
        <p className="text-green-400">[noob@noob_x64 ~/noob-x64]$ curl -i <a href="www.linkedin.com/in/jaconias-rocha-x64">www.linkedin.com/in/jaconias-rocha</a></p>
        <p>[noob@noob_x64 ~/noob-x64]$ curl <a href="https://www.instagram.com/jaconias_03/"> https://www.instagram.com/jaconias_03</a></p>
      </div>
    </div>





    <div className="flex gap-1 h-50 " > 
      
      <div className="relative z-10 w-full max-w-2xl px-4 ">
        <div className="bg-gray-800 text-white rounded-t-lg px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-sm text-gray-400">bash  — 80x24</span>
        </div>
        <div className="bg-[#101020] text-green-400 font-mono p-4 rounded-b-lg text-sm whitespace-pre-wrap">
            <p>[noob@noob_x64 ~/noob-x64]$ ./myInformations.py ........................................................................</p>
            {isLoarding && <p>[noob@noob_x64 ~/noob-x64]$ carregando...</p> }
            {erro && <p className="text-red-500">{erro}</p>}
            {userIP && <TypewriterEffect text={palavraCompleta}/>}
            {userIP && <span> | </span>}
            <br/>
        </div>
      </div>

      <div>
      
      </div>

    </div>
    



      {/* Decoração minimalista */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <div className="font-mono text-xs text-gray-700">
          [ access: {new Date().toLocaleDateString('pt-BR')} ]
        </div>
      </div>
    </div>
  )
}
