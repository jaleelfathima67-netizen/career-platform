import Link from 'next/link';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="font-black text-2xl text-brand tracking-tighter italic">accredian</span>
              <span className="ml-1 text-[10px] font-bold text-slate-400 self-end mb-1 uppercase tracking-widest">Enterprise</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="#programs" className="text-slate-700 hover:text-brand transition-colors text-[15px] font-semibold relative group">
              Programs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#features" className="text-slate-700 hover:text-brand transition-colors text-[15px] font-semibold relative group">
              Why Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#clients" className="text-slate-700 hover:text-brand transition-colors text-[15px] font-semibold relative group">
              Clients
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#testimonials" className="text-slate-700 hover:text-brand transition-colors text-[15px] font-semibold relative group">
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#contact" className="hidden md:inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-brand hover:bg-brand-dark transition-all shadow-sm hover:shadow-md">
              Contact Sales
            </Link>
            <button className="md:hidden p-2 text-muted-foreground hover:text-foreground">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
