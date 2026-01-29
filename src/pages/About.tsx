import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />

      {/* Page Header */}
      <section className="bg-foreground text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">About Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our mission, vision, and the passionate team behind LCEO.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
             <div className="w-full lg:w-1/2 relative">
               <div className="grid grid-cols-2 gap-4">
                 <img 
                   src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop" 
                   className="rounded-2xl shadow-lg mt-8" 
                   alt="Volunteers smiling"
                 />
                 <img 
                   src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=600&auto=format&fit=crop" 
                   className="rounded-2xl shadow-lg" 
                   alt="Helping hands"
                 />
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-6 shadow-2xl">
                 <Heart className="w-12 h-12 text-primary fill-current" />
               </div>
             </div>
             
             <div className="w-full lg:w-1/2">
               <h3 className="font-display font-bold text-3xl md:text-4xl mb-6 text-foreground">
                 We are Helping People in Need Around the World
               </h3>
               <p className="text-muted-foreground leading-relaxed mb-6">
                 At LCEO, we believe in the power of compassion and collective action. Our journey began with a simple idea: to make a meaningful difference in the lives of those who need it most.
               </p>
               <p className="text-muted-foreground leading-relaxed mb-8">
                 Today, we operate in over 12 countries, providing essential services like clean water, education, healthcare, and emergency relief. Our approach is community-centered, ensuring that our interventions are sustainable and culturally respectful.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {["Clean Water Initiatives", "Education for All", "Medical Assistance", "Emergency Relief"].map((item) => (
                   <div key={item} className="flex items-center gap-2 text-foreground font-medium">
                     <CheckCircle2 className="w-5 h-5 text-primary" />
                     {item}
                   </div>
                 ))}
               </div>
             </div>
          </div>
          
          {/* Values Section */}
          <div className="bg-gray-50 rounded-3xl p-12 lg:p-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Values</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                What Drives Us
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Integrity", desc: "We operate with complete transparency and accountability in everything we do." },
                { title: "Compassion", desc: "Empathy is at the core of our mission. We serve with kindness and respect." },
                { title: "Sustainability", desc: "We focus on long-term solutions that empower communities to thrive independently." }
              ].map((val, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-border/40 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-6">
                    0{i + 1}
                  </div>
                  <h4 className="font-display font-bold text-xl mb-3">{val.title}</h4>
                  <p className="text-muted-foreground">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">Ready to Make a Difference?</h2>
          <Link href="/causes">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 font-bold">
              Donate to a Cause
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
