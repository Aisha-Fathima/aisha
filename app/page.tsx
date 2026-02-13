'use client'

import Header from '@/components/portfolio/Header'
import Featured from '@/components/portfolio/Featured'
import LinksSection from '@/components/portfolio/LinksSection'
import Gallery from '@/components/portfolio/Gallery'
//import Resume from '@/components/portfolio/Resume'
import Footer from '@/components/portfolio/Footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-xl px-4 py-8 sm:px-6">
        <Header />
        <Featured />
        <LinksSection />
        <Gallery />
       
        <Footer />
      </div>
    </main>
  )
}
