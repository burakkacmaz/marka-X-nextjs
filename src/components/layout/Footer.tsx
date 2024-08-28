import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;
library.add(fas, fab);
export default function Footer() {
  return (
    <footer className="bg-primary text-white px-10 pt-4 pb-2 mt-8">
      <div className="flex justify-between px-10 m-2">
        <div className="flex-1">
          <h2 className="mb-2 text-xl">İletişim Bilgileri</h2>
          <p className="my-1">Adres: 1234 Sokak, Simav/KUTAHYA</p>
          <p className="my-1">Telefon: 555-555-5555</p>
          <p className="my-1">E-posta: info@gmail.com</p>
        </div>
        <div className="flex-1">
          <h2 className="mb-2 text-xl">Hızlı Linkler</h2>
          <ul className="list-none p-0">
            <li className="mb-1">
              <a href="/" className="no-underline hover:underline">
                Anasayfa
              </a>
            </li>
            <li className="mb-1">
              <a href="/" className="no-underline hover:underline">
                Galeri
              </a>
            </li>
            <li className="mb-1">
              <a href="/" className="no-underline hover:underline">
                Katalog
              </a>
            </li>
            <li className="mb-1">
              <a href="/" className="no-underline hover:underline">
                Hakkımızda
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-xl">Sosyal Medya</h2>
          <ul className="flex gap-2 justify-center p-0">
            <li className="mr-2 p-0 last:mr-0">
              <a href="/" className="text-2xl text-white hover:text-ccc" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
            </li>
            <li className="mr-2 list-none p-0 last:mr-0">
              <a href="/" className="text-2xl text-white hover:text-ccc" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </li>
            <li className="mr-2 list-none p-0 last:mr-0">
              <a href="//" className="text-2xl text-white hover:text-ccc" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-2 text-center">2024 X Tüm hakları saklıdır.</p>
    </footer>
  );
}
