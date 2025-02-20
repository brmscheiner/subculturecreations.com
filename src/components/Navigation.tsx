import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

function Item(props: { label: string; url: string }) {
  const { label, url } = props
  return (
    <Link
      to={url}
      className='text-base font-medium text-gray-900 hover:text-gray-700'
    >
      {label}
    </Link>
  )
}

export default function Navigation() {
  return (
    <div>
      <div className='fixed top-12 ml-20 hidden flex-col xl:flex'>
        <Link to='/' className='mb-2'>
          <img className='h-36 w-auto' src={logo} alt='View home page' />
        </Link>
        <div className='ml-8 flex flex-col'>
          <Item label='About' url='/about' />
          {/* <Item label="Articles" url="/articles" /> */}
          <Item label='Photos' url='/photos' />
          <Item label='Projects' url='/projects' />
        </div>
      </div>
      <div className='flex w-full items-center justify-between border-b-2 border-b-slate-800 p-4 xl:hidden'>
        <Link to='/' className='shrink-0'>
          <img className='h-20 w-auto' src={logo} alt='View home page' />
        </Link>
        <div className='flex flex-col items-end'>
          <Item label='About' url='/about' />
          {/* <Item label="Articles" url="/articles" /> */}
          <Item label='Photos' url='/photos' />
          <Item label='Projects' url='/projects' />
        </div>
      </div>
    </div>
  )
}
