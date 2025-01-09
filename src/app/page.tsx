import Image from "next/image";
import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import BestProducts from "@/components/BestProducts";
import FooterComp from "@/components/footer";
import ImgBelow from "@/components/ImgBelow";
export default function Home() {
  return (
   <main>
    <Hero/>
    <NewProducts/>
    <BestProducts/>
    <ImgBelow/>
    <FooterComp/>
   </main> 
  );
}
