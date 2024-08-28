"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);
  const images = ["/images/sldr.jpg", "/images/metalart.jpg"];
  const intervalTime = 4000;
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images.length, intervalTime]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="grid grid-cols-1 grid-rows-1 items-stretch overflow-hidden">
        {images.map((image, idx) => (
          <img key={idx} src={image} alt={`Image ${index}`} className={`object-cover w-full h-auto ekran1168:h-[37vw] lg:h-[44vw] ekran865:h-[50vw] md:block hidden  ${idx === index ? "fade-in" : "fade-out"}`} style={{ gridColumn: 1, gridRow: 1 }} />
        ))}
        {!isSmallScreen ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 px-5 py-3 rounded-lg max-w-[80%]">
              <h1 className="text-white text-lg pb-2 text-center lg:text-2xl">MARKA X</h1>
              <p className="text-white text-sm text-center lg:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis recusandae quaerat quisquam deleniti repellendus. Ipsa sunt repudiandae exercitationem dicta. Quaerat iste tenetur sequi doloremque repudiandae vero perferendis voluptas eligendi debitis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <Link href="/" className="text-black text-center block py-3">
                <span className="bg-white p-2 rounded-full">Detaylı Bilgi</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 p-4">
            <div className="col-span-2 px-2">
              <p className="text-black text-end">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis recusandae quaerat quisquam deleniti repellendus. Ipsa sunt repudiandae exercitationem dicta. Quaerat iste tenetur sequi doloremque repudiandae vero perferendis voluptas eligendi debitis.</p>
            </div>
            <div className="col-span-1">
              <img src="/images/urunler/prefabrik.jpg" alt="asdasd" />
            </div>
          </div>
        )}
      </section>
      <section>
        {!isSmallScreen ? (
          <div className="border-t-2 border-black text-center">
            <h1 className="text-center text-3xl mt-3">Uğraş Alanlarımız</h1>
            <div className="rounded-lg flex justify-center items-center m-20 p-4 border-2 border-black">
              <img className="max-w-sm rounded-lg mr-[10px]" src="/images/urunler/metalart.jpg" alt="metalart" />
              <div>
                <h2 className="text-2xl font-bold">Metal Art</h2>
                <p className="text-gray-700">Bu ürün metal malzemeden yapılmıştır. Incididunt adipisicing deserunt amet occaecat magna ex pariatur excepteur ad. Tempor Lorem aute proident deserunt culpa nulla non velit mollit.</p>
              </div>
            </div>
            <div className="rounded-lg flex justify-center items-center m-20 p-4 border-2 border-black">
              <div className="urun-bilgi">
                <h2 className="text-2xl font-bold">Kereste</h2>
                <p className="text-gray-700">Bu ürün doğal ahşap malzemeden yapılmıştır. Nostrud incididunt incididunt cillum commodo magna commodo nisi ad adipisicing nostrud veniam aliquip cillum. Incididunt nulla in et anim ea nostrud laboris deserunt reprehenderit deserunt do. Non excepteur mollit est non qui. Sunt nostrud duis sint dolor cillum aliqua. Mollit mollit culpa dolor officia consequat veniam consectetur ex. Minim mollit laborum consectetur incididunt exercitation sint aliqua fugiat do ipsum elit et anim. Tempor pariatur fugiat qui officia magna dolor laborum aute et.</p>
              </div>
              <img className="max-w-sm rounded-lg ml-[10px]" src="/images/urunler/kereste.jpg" alt="kereste" />
            </div>
            <div className="rounded-lg flex justify-center items-center m-20 p-4 border-2 border-black">
              <img className="max-w-sm rounded-lg mr-[10px]" src="/images/urunler/prefabrik.jpg" alt="prefabrik" />
              <div className="urun-bilgi">
                <h2 className="text-2xl font-bold">Prefabrik</h2>
                <p className="text-gray-700">Bu ürün fabrikada hazırlanmıştır ve montajı kolaydır. Ex velit quis reprehenderit ex tempor dolor et ut mollit.</p>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}
