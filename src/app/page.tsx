import { FlameKindling } from "lucide-react";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  row-start-2 items-center sm:items-start">
        
        <div className='mb-2'>
          <FlameKindling size='48px' strokeWidth={1.5} />
        </div>
        <p className='text-lg'><strong>Campfire Films</strong></p>
        
        <p className='text-gray-400'>Coming soon to Dayton, Ohio...</p>

      </main>
    </div>
  );
}
