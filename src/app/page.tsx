import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
  <div className='flex flex-col space-y-4 max-w-[200px]'>
    <Button variant="primary">
      primary
    </Button>

    <Button variant="secondary">
      Secondary
    </Button>
    <Button variant="link">
      Link
    </Button>
  </div>
  )
}
