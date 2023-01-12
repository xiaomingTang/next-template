import Anchor from '@/components/Anchor'

const now = new Date()

export function DefaultFooter() {
  return (
    <footer
      className={`
        flex flex-col justify-between items-center text-sm text-center px-4 py-6 bg-b-100
        tablet:flex-row
        `}
    >
      <div className='flex flex-col justify-center items-center tablet:flex-row'>
        <div className='flex justify-center items-center'>
          <span>© {now.getFullYear()}</span>
          <Anchor className='flex justify-center items-center mx-2'>
            author
          </Anchor>
        </div>
        <Anchor
          href='https://beian.miit.gov.cn/'
          className='my-1 tablet:my-0 tablet:ml-2'
        >
          备案号
        </Anchor>
      </div>
    </footer>
  )
}
