import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ArrowRight, PlayCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-brand/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-brand-light/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold tracking-wider uppercase">
              Enterprise Upskilling Platform
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1]">
              Transform Your Workforce with <span className="text-brand">Accredian Enterprise</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Future-proof your team with world-class training in Data Science, AI, and Product Leadership. Designed for modern enterprises to drive measurable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg gap-2">
                Get Started Now <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg gap-2">
                <PlayCircle size={20} /> Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">500+</span>
                <span className="text-xs text-muted-foreground uppercase font-semibold">Corporate Clients</span>
              </div>
              <div className="w-px h-10 bg-border hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">98%</span>
                <span className="text-xs text-muted-foreground uppercase font-semibold">Satisfaction Rate</span>
              </div>
              <div className="w-px h-10 bg-border hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">20k+</span>
                <span className="text-xs text-muted-foreground uppercase font-semibold">Professionals Trained</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent z-10" />
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Teams training"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 lg:-left-12 lg:right-auto glass-effect p-6 rounded-xl shadow-xl z-20 max-w-sm border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Success Stories</h4>
                    <p className="text-sm text-slate-600">Company X boosted efficiency by 40% after AI training.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
