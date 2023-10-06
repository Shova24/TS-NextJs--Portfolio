import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const certifications = [
  {
    id: 1,
    image: "/assets/cer.jpg",
    link: "/",
    title: " Appreciation for achieving highest CGPA : Summer 2019",
  },
  {
    id: 2,
    image: "/assets/4th.png",
    link: "https://toph.co/c/4th-diu-swe-intra-2019-j/standings",
    title:
      "4th in 4th DIU-SWE Intra Department Programming Contest, Summer 2019 (Top 3%)",
  },
  {
    id: 3,
    image: "/assets/9th.jpg",
    link: "https://algo.codemarshal.org/contests/diu_iugpc_19",
    title:
      "9th in DIU Intra University Girls Programming Contest 2019 (Top 6%)",
  },
  {
    id: 4,
    image: "/assets/12th.png",
    link: "https://toph.co/c/3rd-diu-swe-intra-2018-j/standings",
    title:
      "12th in 3rd DIU-SWE Intra Department Programming Contest, Spring 2019 (Top 11%)",
  },
];

function CertificateCard({}: Props) {
  return (
    <>
      {certifications.map((item) => (
        <Link key={item.id} href={item.link}>
          <article
            className="flex flex-col rounded-lg items-center space-y-5 flex-shirk-0 
          w-[400px] md:w-[400px] xl:w-[400px]   h-[300px] md:h-[300px] xl:h-[300px] 
          snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 "
          >
            <div className="w-[300px] md:w-[300px] xl:w-[300px]   h-[250px] md:h-[250px] xl:h-[250px] overflow-hidden">
              <Image src={item.image} width={300} height={200} alt="Picture" />
            </div>
            <p className="font-light ">{item.title}</p>
          </article>
        </Link>
      ))}
    </>
  );
}

export default CertificateCard;
