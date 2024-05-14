import {Instagram, Youtube, Github, Mail, MessageCircle} from 'lucide-react'

export default function Content(){
  return (
    <section className="w-full flex-1 px-72 flex items-center">
      <div className="h-36 w-full flex items-center justify-center border border-white rounded-md">
        <div className='flex items-center justify-center gap-4'>
          <a href="" className='border border-zinc-800 p-2 rounded-md hover:opacity-50 transition-all'>
            <Instagram />
          </a>
          <a href="" className='border border-zinc-800 p-2 rounded-md hover:opacity-50 transition-all'>
            <Youtube />
          </a>
          <a href="" className='border border-zinc-800 p-2 rounded-md hover:opacity-50 transition-all'>
            <Github />
          </a>
          <a href="" className='border border-zinc-800 p-2 rounded-md hover:opacity-50 transition-all'>
            <Mail />
          </a>
        </div>
      </div>
    </section>
  )
}