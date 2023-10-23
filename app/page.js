import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-white w-full min-h-screen flex justify-center' >
      <div className='text-black w-full grid grid-cols-2 gap-8 justify-center md:w-1/2 my-10 px-5'>
        
        <a href="https://shope.ee/9UaHAMt1UM" target='_blank' className="border rounded-xl flex flex-col gap-4 item-center w-full h-[15rem]">
          <img src="./asset/product1.jpg" className='w-[100%] rounded-t-xl h-[75%] object-cover'/>
          <p className='text-center'>เทียนหอม</p>
        </a>
      </div>
    </main>
  )
}
