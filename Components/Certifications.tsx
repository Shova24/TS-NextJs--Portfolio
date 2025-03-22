import React from "react";
import CertificateCard from "./CertificateCard";

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
    id: 4,
    image: "/assets/12th.png",
    link: "https://toph.co/c/3rd-diu-swe-intra-2018-j/standings",
    title:
      "12th in 3rd DIU-SWE Intra Department Programming Contest, Spring 2019 (Top 11%)",
  },
  {
    id: 3,
    image: "/assets/9th.jpg",
    link: "https://algo.codemarshal.org/contests/diu_iugpc_19",
    title:
      "9th in DIU Intra University Girls Programming Contest 2019 (Top 6%)",
  },
];


function Certifications({ }: Props) {
  return (
    <>
      <div className="relative flex flex-col items-center max-w-full min-h-screen gap-10 px-5 mx-auto overflow-hidden text-left justify-evenly">
        <h3 className="top-5 uppercase tracking-[20px] text-gray-500 text-2xl">
          Certifications
        </h3>

        <div className="grid h-full grid-cols-1 gap-[3rem] mt-10 md:grid-cols-2 ">
          {
            certifications.map((item) => (
              <CertificateCard certificate={{ ...item, id: item.id.toString() }} />
            ))}

        </div>



      </div>
    </>
  );
}

export default Certifications;
