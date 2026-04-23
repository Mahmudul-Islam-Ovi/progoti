import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home(){
  return(
    <div>
      <Hero/>
      <Services/>
      <WhyUs/>
      <Steps/>
      <Testimonials/>
      <FAQ/>
      <CTA/>
    </div>
  )
}
