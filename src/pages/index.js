import Head from "next/head";

import Header from "src/components/Header";
import Company from "src/components/Company";
import Footer from "src/components/Footer";

import companies from "src/data/companies";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contrata-se devs</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap"
          rel="stylesheet"
        />

        <meta property="og:title" content="Contrata-se devs" />
        <meta property="og:image" content="/images/contrata-se-devs.jpg" />
        <meta
          name="description"
          content="Projeto para ajudar desenvolvedores a encontrem vagas de programação e ajudar empresas a divulgarem vagas abertas."
        />
        <meta
          property="og:description"
          content="Projeto para ajudar desenvolvedores a encontrem vagas de programação e ajudar empresas a divulgarem vagas abertas."
        />
        <link
          rel="canonical"
          href="https://contrata-se-devs.lucascaton.com.br/"
        />
        <meta
          property="og:url"
          content="https://contrata-se-devs.lucascaton.com.br/"
        />
      </Head>

      <div className="bg-gradient-to-r from-blue-500 to-pink-500">
        <div className="px-2 lg:px-0 lg:container mx-auto">
          <Header />

          <main>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {companies
                .sort((a, b) => (a.slug > b.slug ? 1 : -1))
                .map((company) => (
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  <Company key={company.slug} {...company} />
                ))}
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
