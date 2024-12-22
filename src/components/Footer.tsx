import { colors } from '../styles/colors'

export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center ">
      <div className="container mx-auto">
        <p className="text-muted">
          &copy; 2023 BlockTik. All rights reserved. Powered by
          <a className='ml-1' href='https://github.com/EmmaUmeh'>@bruisecoder</a>
          .
        </p>
      </div>
    </footer>
  )
}

