import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  certificate: {
    id: string;
    link: string;
    image: string;
    title: string;
  };
};


function CertificateCard({ certificate }: Props) {
  return (
    <>

      <Link key={certificate.id} href={certificate.link} className="h-full max-h-[40lvh]">
        <article
          className="border border-gray-500 py-8 px-6 h-full flex flex-col rounded-lg items-center justify-center space-y-5 flex-shirk-0 
          snap-center bg-[#292929]  hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 "
        >
          <div className="w-full overflow-hidden h-[80%] object-cover object-center flex justify-center items-center ">
            <Image src={certificate.image} width={300} height={200} alt="Picture" className="object-cover object-center w-full aspect-[7/5] xl:max-w-[25lvw]" />
          </div>
          <p className="font-medium max-w-[80%] text-center">{certificate.title}</p>
        </article>
      </Link>

    </>
  );
}

export default CertificateCard;
