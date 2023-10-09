import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import FeatureGrid from "../components/FeatureGrid"
import Frustrations from "../components/Frustrations"
import Footer from "../components/Footer"

const IndexPage: React.FC<PageProps> = () => {

  return (
    <main className="bg-gradient-radial">
      <Navbar />
      <Hero />

      <FeatureGrid />
      <h1 className="text-white text-center lg:text-5xl text-2xl mt-32"> We have heard your issues with current solutions</h1>
      <Frustrations />
      <Footer />
    </main>
  )
}


export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
