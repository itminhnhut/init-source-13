import { useTranslation } from "next-i18next";

const Footer = (): any => {
  const {
    t,
  } = useTranslation()

  return (
    <footer className="text-white flex flex-col justify-center items-center pb-6 absolute inset-x-0 bottom-0 opacity-50">
      <p className="text-sm font-light">Copyrights © 2023 SCI.com. All Rights Reserved.</p>
      <div className="flex flex-row text-sm font-normal">
        <div className="lg:no-underline underline underline-offset-2 cursor-pointer">{t('footer:term_of_use')}</div>
        <ul className="list-outside list-disc ml-6">
          <li></li>
        </ul>
        <div className="lg:no-underline underline underline-offset-2 cursor-pointer">{t('footer:privacy_policy')}</div>
      </div>
    </footer>
  );
};


export default Footer;
