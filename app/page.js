import Image from 'next/image'
import Hero from '../components/hero/hero'
import News from '../components/news/news'
import Modalnotification from '@/components/layout/Modalnotification'

export default function Home() {
  return (
 <div className='relative'>
  <Hero/>
  <Modalnotification/>
  <News/>
 </div>
  )
}
