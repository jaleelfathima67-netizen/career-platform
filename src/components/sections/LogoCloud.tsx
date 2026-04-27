'use client';

const logos = [
  {
    name: 'Microsoft',
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto fill-[#f25022]">
        <path d="M0 0h11.222v11.222H0V0zm12.778 0H24v11.222H12.778V0zM0 12.778h11.222V24H0V12.778zm12.778 0H24V24H12.778V12.778z"/>
      </svg>
    )
  },
  {
    name: 'Google',
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto fill-[#4285F4]">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.21 5.42-7.84 5.42-4.84 0-8.8-4.01-8.8-8.91s3.96-8.91 8.8-8.91c2.76 0 4.6 1.18 5.66 2.18l2.59-2.5c-1.66-1.55-3.82-2.5-8.25-2.5C5.07.05 0 5.12 0 11.37s5.07 11.32 11.32 11.32c6.52 0 10.85-4.59 10.85-11.04 0-.74-.08-1.31-.22-1.87h-9.47v.14z"/>
      </svg>
    )
  },
  {
    name: 'Amazon',
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto fill-[#FF9900]">
        <path d="M15.072 11.177c-2.31 1.705-5.91 2.213-9.112.592-3.155-1.594-5.26-5.836-3.155-8.504 1.487-1.896 4.904-1.933 6.902-.075 2.115 1.97 1.077 5.76-.63 7.987zm9.155 8.163c-.482 1.408-1.928 2.37-3.41 2.89s-3.56.705-5.116.592c-1.556-.113-3.11-.482-4.407-.816l-.888-.222 2.666-3.85c1.85-.37 3.924-.112 5.334.3 1.41.41 2.223 1.148 2.223 1.148z"/>
      </svg>
    )
  },
  {
    name: 'IBM',
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto fill-[#052FAD]">
        <path d="M0 0v2.182h24V0H0zm0 3.273v2.182h24V3.273H0zm0 3.272v2.182h24V6.545H0zm0 3.273v2.182h24v-2.182H0zm0 3.273v2.182h24v-2.182H0zm0 3.272v2.183h24v-2.183H0zm0 3.273V24h24v-2.182H0z"/>
      </svg>
    )
  },
  {
    name: 'Deloitte',
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto fill-[#86BC25]">
        <path d="M12.446 16.946h-1.892v-2.162h1.892v2.162zm0-3.243h-1.892V4h1.892v9.703zm-3.243 3.243H7.311v-2.162h1.892v2.162zm0-3.243H7.311V8.324h1.892V13.703zm3.243-7.568H7.311V4h5.135v2.135zm8.108 7.568h-1.892v-2.162h1.892v2.162zm0-3.243h-1.892V4h1.892v9.703zm-3.243 3.243h-1.892v-2.162h1.892v2.162zm0-3.243h-1.892V8.324h1.892V13.703zm3.243-7.568h-5.135V4h5.135v2.135z"/>
      </svg>
    )
  }
];

export function LogoCloud() {
  return (
    <section id="clients" className="py-16 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-bold tracking-widest text-[#002C77] uppercase mb-12">
          TRUSTED BY INDUSTRY LEADERS WORLDWIDE
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
              {logo.svg}
              <span className="ml-2 font-bold text-[#475569] text-xl tracking-tight leading-none">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
