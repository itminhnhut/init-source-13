import { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className={`flex min-h-screen flex-col items-center `}>
      <section className="pt-[129px] text-white w-[600px] text-center">
        <h1 className="text-[64px] font-semibold">
          Empowering the decentralised Web
        </h1>
        <p className="text-lg mt-4">
          SCI Labs invests in technical teams that build and support the
          decentralised web.
        </p>
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "home"])),
    },
  };
};
