interface SaleBannerProps {
  tagline: string;
  message: string;
}

const SaleBanner: React.FC<SaleBannerProps> = ({ tagline, message }) => {
  return (
    <div className='bg-gradient-to-r from-brand-red to-brand-blue p-5 md:py-[10px]'>
      <div className='container mx-auto'>
        <h2 className='text-center font-figtree leading-6'>
          <span className='capitalize font-extrabold text-brand-blue text-[16px] md:text-[22px] mr-1'>
            {tagline}
          </span>
          <span className='font-bold text-white text-[14px] md:text-[22px]'>
            {message}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default SaleBanner;
