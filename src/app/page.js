
import HomeHeader from '../components/HomeHeader'
import Image from 'next/image'
import HomeSearch from '../components/HomeSearch'


export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col w-full items-center justify-center">
            <Image
            src={"/GLEAM_HOME.png"}
            width={500}
            height={500}
            alt="logo"
             />

             <HomeSearch />
             
             
        </div>
    </>
  )
}
