import Button from '@/components/Button';
import AngleRight from '@/components/icons/AngleRight';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='container mx-auto flex flex-wrap'>
        <div className='w-1/12 hidden md:block'></div> {/* Spacer */}
        <div className='w-full md:w-6/12 md:order-1 px-5 md:px-0'>
          <Image
            src='/hero-img.webp'
            alt='Fametonic Hero Image'
            width={665}
            height={680}
            className='w-full h-auto'
          />
        </div>
        <div className='w-full md:w-5/12 px-5 md:pl-7 pb-12 md:pt-5'>
          <h2 className='font-urbanist font-extrabold text-white text-[25px] text-center md:hidden'>
            Want to Turn Social Media Into a Profitable Career?
          </h2>
          <h2 className='font-urbanist font-bold text-brand-blue drop-shadow-red text-[25px] md:text-[35px] text-center md:text-left mb-4'>
            Discover your way to success with Fametonic:
          </h2>
          <ul>
            <li className='inline-flex items-center gap-2 font-semibold font-figtree text-white text-[16px] mb-3'>
              <span className='text-[22px]' aria-hidden='true'>
                ✨
              </span>
              Start growing your influence right away—no waiting required!
            </li>
            <li className='inline-flex items-center gap-2 font-semibold font-figtree text-white text-[16px] mb-3'>
              <span className='text-[22px]' aria-hidden='true'>
                ✨
              </span>
              Create viral TikToks and Reels step by step with easy-to-follow
              lessons
            </li>
            <li className='inline-flex items-center gap-2 font-semibold font-figtree text-white text-[16px] mb-3'>
              <span className='text-[22px]' aria-hidden='true'>
                ✨
              </span>
              Use a Personal AI Worker to boost your content
            </li>
            <li className='inline-flex items-center gap-2 font-semibold font-figtree text-white text-[16px] mb-3'>
              <span className='text-[22px]' aria-hidden='true'>
                ✨
              </span>
              Learn from expert-led courses designed for aspiring influencers
            </li>
          </ul>
          <div className='flex flex-col items-start'>
            <div className='md:order-1'>
              <p className='font-figtree font-medium text-[12px] text-gray text-center md:text-left mt-8 mb-3'>
                By clicking &quot;Get Started&quot;, you agree with{' '}
                <a
                  href='#'
                  className='transition-colors duration-300 hover:text-brand-red'
                >
                  Terms and Conditions
                </a>
                ,{' '}
                <a
                  href='#'
                  className='transition-colors duration-300 hover:text-brand-red'
                >
                  Privacy Policy
                </a>
                ,{' '}
                <a
                  href='#'
                  className='transition-colors duration-300 hover:text-brand-red'
                >
                  Subscription Terms
                </a>
              </p>
              <p className='font-figtree font-medium text-[10px] text-gray text-center md:text-left'>
                Fametonic {new Date().getFullYear()} ©All Rights Reserved.
              </p>
            </div>
            <Button
              size='lg'
              shadow='blue'
              className='mt-8 mb-2'
              aria-label='Get Started'
              subLabel='1-minute quiz for personalized Insights'
            >
              <span className='font-bold font-figtree text-[20px] uppercase'>
                Get Started
              </span>
              <AngleRight className='h-5 w-5 text-white' />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
