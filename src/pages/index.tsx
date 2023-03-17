import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from 'next/image';
//import profilePic from '../public/profile.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Casey Merritt Porfoloio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>

      <main className=' bg-white'>
        <section className = 'min-h-screen'>

          <nav className='py-10 mb-12 flex justify-between bg-gray-800'>
            <h1 className='text-xl px-10 py-5 font-burtons text-white'>Lauren Is Really Hot</h1>
            <div className='text-5xl flex justify-center gap-16 py-3 text-white'>
              <a href = "https://github.com/CaseyMerritt"  target="_blank"><AiFillGithub/></a>
              <a href = "https://www.youtube.com/channel/UCY2obIB3KYsucwUHBMRWC-w"  target="_blank"><AiFillYoutube/></a>
              <a href = "https://www.linkedin.com/in/caseymerritt/"  target="_blank"><AiFillLinkedin/></a>
            </div>
            <ul className='flex items-center px-10'>
              <li><BsFillMoonStarsFill  className='cursor-pointer text-2xl text-white'/></li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='../public/CaseyMerrittResume.pdf' download>
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Casey Merritt</h2>
            <h3 className='text-2xl py-2'>Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              Computer Science Student Currently looking for a dynamic and challenging oppurtunity to expand my large pool of knowledge and challenge my skills.
            </p>
          </div>

          <div>
            <h3 className='text-center p-10 text-3xl'>Projects</h3>
          </div>

          <div className='text-center p-10 bg-gradient-to-r from-cyan-500 to-teal-500'>
            <h3 className='text-3xl py-1 text-white'>Skills</h3>
            <p className='text-md py-2 leading-8 text-white'>
                Since the <span className='text-black'>beginning</span> of my devlopment journey...
            </p>
          </div>

          <div>
            <h3 className='text-center text-black text-3xl p-10'>About Me</h3>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-center text-3xl p-10 text-white bg-gray-800'>Contact Me</h3>
          </div>
        </section>
      </main>
    </div>
  );
}
