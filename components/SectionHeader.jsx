import Image from 'next/image';

const SectionHeader = ({ sectionName, paddingTop, paddingBottom }) => {
  return (
    <div
      className={`flex items-center justify-center ${paddingTop} ${paddingBottom} relative mx-auto w-max `}
    >
      <Image
        src={'/page-break.png'}
        width={82}
        height={73}
        className="absolute w-8 -left-12"
        alt="page break"
      />
      <h1 className="">{sectionName}</h1>
    </div>
  );
};

export default SectionHeader;
