// TODO: re-enable this ESLint rule when we update the data file to camelCase
/* eslint-disable camelcase */

import { urlWithCampaignParams } from "src/utils";

const Company = ({
  slug,
  name,
  url,
  stack,
  open_roles_url,
  application_url,
  application_via_email,
  number_of_employees,
  locations,
  remote,
}) => (
  <div className="rounded bg-gray-100 shadow-lg">
    <div className="p-4 bg-white rounded-t">
      <a href={urlWithCampaignParams(url)} target="_blank" rel="noreferrer">
        <img
          src={`images/companies-logos/${slug}.png`}
          alt={`Logo da ${name}`}
          className="mx-auto p-2"
        />
      </a>
    </div>

    <div className="p-4 grid grid-cols-2 gap-4 rounded-b">
      <div>
        <a
          href={urlWithCampaignParams(url)}
          className="mb-4 block underline text-lg font-bold"
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>

        {number_of_employees && <p>{number_of_employees} devs</p>}

        {remote && <p>Remoto? {remote}</p>}

        <div className="mt-2 pt-2 border-t">
          <h4 className="font-bold">Stack de tecnologias:</h4>

          {stack.map((tech) => (
            <p key={tech}>{tech}</p>
          ))}
        </div>

        {!!locations.length && (
          <div className="mt-2 pt-2 border-t">
            <h4 className="font-bold">Localização:</h4>

            {locations.map((location) => (
              <p key={location}>{location}</p>
            ))}
          </div>
        )}
      </div>

      <div className="text-right">
        {open_roles_url && (
          <a
            href={urlWithCampaignParams(open_roles_url)}
            className="block underline font-bold"
            target="_blank"
            rel="noreferrer"
          >
            Vagas abertas
          </a>
        )}

        {application_url && (
          <a
            href={urlWithCampaignParams(application_url)}
            className="block underline font-bold"
            target="_blank"
            rel="noreferrer"
          >
            Me canditadar via site
          </a>
        )}

        {application_via_email && (
          <a
            href={`mailto:${application_via_email}?subject=Interesse+em+vaga+da+${name}&body=Olá,%0D%0A%0D%0AFiquei sabendo através do site https://contrata-se-devs.lucascaton.com.br que vocês têm vagas disponíveis para programadores e gostaria de saber mais informações.%0D%0A%0D%0AObrigado!`}
            className="block underline font-bold"
            target="_blank"
            rel="noreferrer"
          >
            Contato por email
          </a>
        )}
      </div>
    </div>
  </div>
);

export default Company;
