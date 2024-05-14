import Header from './components/Header';
import Content from './components/Content';

export default function App(){
  return (
    <main className='h-screen w-screen overflow-x-hidden flex flex-col font-jb font-semibold bg-zinc-950 text-white relative text-center'>
      <Header />
      <Content />
    </main>
  )
}