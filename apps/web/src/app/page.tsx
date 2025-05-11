import { FlameKindling } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
        <div className='mb-2'>
          <FlameKindling size='48px' strokeWidth={1.5} />
        </div>
        <p className='text-lg'><strong>Campfire Films</strong></p>
        
        <p className='text-gray-400'>Coming soon to Dayton, Ohio</p>
    </div>
  )
}
