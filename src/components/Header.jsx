import { ChevronUp } from 'lucide-react';

export default function Header(){
  return (
    <header className='w-full h-24 px-72 flex items-center border-b border-zinc-800'>
        <div className='w-full h-10 flex items-center justify-between'>
            <a href="#home" className='flex items-center'>
                {/* <img src="/gerson-logo-white.svg" className='h-8 text-white'/> */}
                <p className='text-2xl font-semibold'>gerson passos</p>
            </a>
            <ul className='h-full flex gap-4'>
                <li>
                    <button className='about-me h-full flex items-center justify-between hover:bg-zinc-900 rounded-md p-4 gap-1'>
                        sobre
                        <ChevronUp className='h-4 w-4 transition-all'/>
                    </button>
                    <div className='about-me-drop bg-zinc-950 w-60 h-fit rounded-md p-4 absolute border border-zinc-900 hidden'>
                        <ul className='w-full h-full flex flex-col gap-2'>
                            <li className='h-8 hover:bg-zinc-900 rounded overflow-hidden'>
                                <button className='h-full w-full flex items-center p-4'>about item1</button>
                            </li>
                            <li className='h-8 hover:bg-zinc-900 rounded overflow-hidden'>
                                <button className='h-full w-full flex items-center p-4'>about item2</button>
                            </li>
                            <li className='h-8 hover:bg-zinc-900 rounded overflow-hidden'>
                                <button className='h-full w-full flex items-center p-4'>about item3</button>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <button className='h-full flex items-center justify-between hover:bg-zinc-900 rounded-md p-4 gap-1'>
                        setup
                        <ChevronUp className='h-4 w-4 transition-all'/>
                    </button>
                    <div className='about-me-drop bg-zinc-950 w-60 h-fit rounded-md p-4 absolute border border-zinc-900 hidden'>
                        <ul className='w-full h-full flex flex-col gap-2'>
                            <li className='h-8 hover:bg-zinc-900 rounded overflow-hidden'>
                                <button className='h-full w-full flex items-center p-4'>setup item1</button>
                            </li>
                            <li className='h-8 hover:bg-zinc-900 rounded overflow-hidden'>
                                <button className='h-full w-full flex items-center p-4'>setup item2</button>
                            </li>
                            <li className='h-8 hover:bg-zinc-900 rounded overflow-hidden'>
                                <button className='h-full w-full flex items-center p-4'>setup item3</button>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#loja" className='h-full flex items-center hover:bg-zinc-900 rounded-md p-4 justify-center text-center'>loja</a>
                </li>
                <li>
                    <a href="#contato" className='h-full flex items-center hover:bg-zinc-900 rounded-md p-4 justify-center text-center'>contato</a>
                </li>
            </ul>
        </div>
    </header>
  )
}