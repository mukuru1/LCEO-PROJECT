import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCauses } from "@/hooks/use-causes";
import { CauseCard } from "@/components/CauseCard";
import { Loader2 } from "lucide-react";

export default function Causes() {
  const { data: causes, isLoading } = useCauses();

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      
      {/* Page Header */}
      <section className="bg-foreground text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Our Causes</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose a cause that speaks to you and help us make a lasting impact.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-12 h-12 animate-spin text-primary" />
            </div>
          ) : causes && causes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {causes.map((cause) => (
                <CauseCard key={cause.id} cause={cause} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl text-muted-foreground">No causes found at the moment.</h3>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
