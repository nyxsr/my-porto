import Link from 'next/link'
 
async function NotFound() {
  return (
    <main id='main' className='min-h-screen max-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-[3rem] sm:text-[5rem] font-bold bg-[#F0FB3B] text-[#1f1f1f]'>404</h1>
        <p className='text-[1rem] sm:text-[2rem]'>Oops! I think we just lost...</p>
        <p className='text-[.75rem] sm:text-[1.25rem]'>Maybe we should <Link href="/portfolio" className='text-[#F0FB3B] underline'>go home</Link></p>
    </main>
  )
}

export default NotFound