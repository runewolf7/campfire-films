export function About() {
  return (
    <section className="py-20 px-6 relative">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          About <span className="text-orange-400">Us</span>
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <p className="text-lg text-white/80 leading-relaxed">
              Welcome to Campfire Films. We’re a creative hub for artists & storytellers, making films that tell human stories reflecting our ever-changing world. Our journey began with one collective vision: <strong className="text-orange-400">make cool shit with our friends</strong>.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              We create raw, meaningful, cinematic stories, and build magnetic, collaborative, creative community around them. Every project begins with a spark of inspiration and grows into something worth gathering around. 
            </p>
                        
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-lg border border-orange-400/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">

                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>

                </div>
                <p className="text-white/60 text-sm">Cool Shit Goes Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
