import Head from "next/head";

import Company from "src/components/Company";

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
        ></link>

        <meta property="og:title" content="Contrata-se devs" />
        <meta property="og:image" content="/images/contrata-se-devs.jpg" />
        <meta
          name="description"
          content='Lista de empresas que estão contratando programadores/desenvolvidores de software (aka. "devs").'
        />
        <meta
          property="og:description"
          content='Lista de empresas que estão contratando programadores/desenvolvidores de software (aka. "devs").'
        />
        <link rel="canonical" href="https://contrata-se-devs.lucascaton.com.br/" />
        <meta property="og:url" content="https://contrata-se-devs.lucascaton.com.br/" />
      </Head>

      <header className="py-6 bg-gradient-to-r from-blue-600 to-pink-600 text-2xl font-extrabold text-white">
        <div className="lg:container mx-auto text-center lg:text-left">
          <h1>Contrata-se devs</h1>
        </div>
      </header>

      <main className="bg-gradient-to-r from-blue-500 to-pink-500">
        <div className="lg:container mx-auto px-2">
          <div className="py-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {companies
              .sort((a, b) => (a.slug > b.slug ? 1 : -1))
              .map((company) => (
                <Company key={company.slug} {...company} />
              ))}
          </div>
        </div>
      </main>

      <footer className="py-6 px-4 bg-gradient-to-r from-blue-600 to-pink-600 shadow-lga text-white">
        <div className="lg:container mx-auto text-center">
          <p>
            Esse site foi criado por{" "}
            <a href="https://www.lucascaton.com.br/" target="_blank" className="underline">
              Lucas Caton
            </a>{" "}
            e é open-source (
            <a
              href="https://github.com/lucascaton/contrata-se-devs"
              target="_blank"
              className="underline"
            >
              repositório no GitHub
            </a>
            ).
          </p>
        </div>
      </footer>
    </>
  );
}
