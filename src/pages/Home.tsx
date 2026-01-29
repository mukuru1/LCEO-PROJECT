import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCauses } from "@/hooks/use-causes";
import { CauseCard } from "@/components/CauseCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";

// Helper for animations
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { data: causes, isLoading } = useCauses();

  // Filter for featured causes or take first 3
  const featuredCauses = causes?.slice(0, 3) || [];

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* African children smiling/learning - inspirational stock image */}
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop" 
            alt="Children smiling" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 md:bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block font-handwriting text-3xl md:text-5xl text-secondary mb-4 transform -rotate-2">
              Unlocking Potential
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight tracking-tight text-shadow-lg">
              Life Changing <span className="text-primary italic">Endeavor</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              We empower communities to break the cycle of poverty through sustainable education, healthcare, and economic development initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/causes">
                <Button size="lg" className="rounded-full px-8 py-7 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 border-0">
                  Donate Now <Heart className="ml-2 w-5 h-5 fill-current" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-lg bg-white/10 text-white border-2 border-white/30 hover:bg-white hover:text-black hover:border-white backdrop-blur-sm">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Heart, count: "50K+", label: "Lives Impacted" },
              { icon: Globe, count: "12", label: "Countries Served" },
              { icon: Users, count: "2,500+", label: "Volunteers" },
              { icon: Award, count: "15+", label: "Awards Won" }
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-secondary opacity-80" />
                <h3 className="font-display font-bold text-4xl mb-2">{stat.count}</h3>
                <p className="text-white/80 font-medium uppercase tracking-wide text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Causes Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Causes</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-foreground">
              Support Our <span className="italic text-primary">Latest</span> Campaigns
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our current initiatives and find a cause that resonates with your heart. Every contribution makes a tangible difference.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[500px] rounded-2xl bg-gray-200 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCauses.map((cause) => (
                <CauseCard key={cause.id} cause={cause} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/causes">
              <Button variant="outline" size="lg" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white">
                View All Causes <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission/About Preview Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-secondary rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b73?q=80&w=1000&auto=format&fit=crop" 
                  alt="Volunteers working" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border-l-4 border-primary">
                <p className="font-handwriting text-2xl text-foreground mb-2">"Together we can change the world"</p>
                <p className="text-sm font-bold text-primary">- LCEO Founder</p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">About LCEO</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-foreground leading-tight">
                We Are Non-Profit Team <br />
                <span className="text-primary">Working Worldwide</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Founded on the belief that every individual deserves a chance to thrive, LCEO has been working tirelessly to provide education, healthcare, and economic opportunities to underserved communities across the globe.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Provide nutritious food to hungry children",
                  "Support education for underprivileged students",
                  "Medical camps and healthcare support",
                  "Women empowerment and skill development"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                    <span className="text-foreground/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button className="rounded-full px-8 h-12 bg-foreground text-white hover:bg-foreground/90">
                  Discover More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Background texture image */}
        <div className="absolute inset-0 mix-blend-overlay opacity-10">
          <img 
            src="https://pixabay.com/get/g1bae66205fa28becf7577e4665897f3e3e9e4bf84f5b8129cee2625ab8f5ac00b36da20a69d7320d965623348e40d0e068562d9a56fe9fc5148df99ccced6a8b_1280.jpg" 
            alt="Texture" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">
            Become a Volunteer
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Join our community of changemakers. Whether you have time, skills, or resources to share, there is a place for you at LCEO.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 py-6 bg-secondary text-foreground hover:bg-white border-0 font-bold">
                Join Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
