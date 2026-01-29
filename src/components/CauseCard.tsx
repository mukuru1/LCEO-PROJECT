import { Link } from "wouter";
import { Cause } from "@shared/schema";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface CauseCardProps {
  cause: Cause;
}

export function CauseCard({ cause }: CauseCardProps) {
  const percentage = Math.min(100, Math.round((cause.raisedAmount / cause.goalAmount) * 100));

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-border/40 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-10 transition-opacity z-10" />
        <img 
          src={cause.imageUrl} 
          alt={cause.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-primary shadow-sm z-20">
          FEATURED
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {cause.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
          {cause.description}
        </p>

        {/* Progress Stats */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm font-semibold">
            <span className="text-primary">${cause.raisedAmount.toLocaleString()}</span>
            <span className="text-muted-foreground">${cause.goalAmount.toLocaleString()} Goal</span>
          </div>
          <Progress value={percentage} className="h-2 bg-secondary/30" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Raised</span>
            <span>{percentage}%</span>
          </div>
        </div>

        {/* Action */}
        <div className="pt-6 border-t border-border/40">
          <Button 
            className="w-full rounded-xl bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold py-6"
            onClick={() => {/* Open donation modal logic would go here */}}
          >
            Donate Now <Heart className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
