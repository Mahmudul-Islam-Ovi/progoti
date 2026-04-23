import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import Services from "@/components/Services";
import services from "@/data/services.json";

export default function Service() {
  return (
    <div className="pt-20">

<Services/>
      {/* <div className="p-10 pt-40">
        <h1 className="text-3xl font-bold mb-6">সকল সার্ভিস</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s: any) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div> */}
    </div>
  );
}
