import Link from 'next/link'
import Anchor from '@/components/Anchor'

export function DefaultHeader() {
  return (
    <header className='fixed w-full z-header flex justify-between items-center bg-b-full'>
      <div
        className={`
          max-w-screen-desktop m-auto
          flex-1 px-4 h-12 tablet:h-16
          flex items-center
        `}
      >
        <Link href='/' passHref legacyBehavior>
          <Anchor className='mr-4 text-w-full'>首页</Anchor>
        </Link>
      </div>
    </header>
  )
}
