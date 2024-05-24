import {Instagram, Youtube, Github, Mail, MessageCircle} from 'lucide-react'

export default function Content(){
  return (
    <section className="w-full flex-1 px-72 flex items-center">
      <div className="h-36 w-full flex items-center justify-center border border-zinc-800 rounded-md">
        <div className='flex items-center justify-center gap-4'>
          <a href="https://www.instagram.com/gersinwq" className='border border-zinc-800 p-2 rounded-md hover:opacity-50 transition-all'>
            <Instagram />
          </a>
          <a href="https://www.youtube.com/channel/UCWFrJWuRMXoc8YyMRg0JNjw" className='border border-zinc-800 p-2 rounded-md hover:opacity-50 transition-all'>
            <Youtube />
          </a>
          <a href="https://github.com/gerson-passos" className='border border-zinc-800 p-2 rounded-md hover:opacity-50 transition-all'>
            <Github />
          </a>
          <button className='border border-zinc-800 p-2 rounded-md hovesr:opacity-50 transition-all'>
            <Mail />
          </button>
        </div>
      </div>
    </section>
  )
}