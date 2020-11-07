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
  <div key={slug} className="rounded bg-gray-100 shadow-lg">
    <div className="p-4 bg-white rounded-t">
      <a href={url} target="_blank">
        <img
          src={`images/companies-logos/${slug}.png`}
          alt={`Logo da ${name}`}
          className="mx-auto p-2"
        />
      </a>
    </div>

    <div className="p-4 grid grid-cols-2 gap-4 rounded-b">
      <div>
        <a href={url} target="_blank" className="mb-4 block underline text-lg font-bold">
          {name}
        </a>

        {number_of_employees && <p>{number_of_employees} devs</p>}

        {remote && <p>Remoto? {remote}</p>}

        <div className="mt-2 pt-2 border-t">
          <h4 className="font-bold">Stack de tecnologias:</h4>

          {stack.map((tech) => (
            <p>{tech}</p>
          ))}
        </div>

        <div className="mt-2 pt-2 border-t">
          <h4 className="font-bold">Localização:</h4>

          {locations.map((location) => (
            <p>{location}</p>
          ))}
        </div>
      </div>

      <div className="text-right">
        {open_roles_url && (
          <a href={open_roles_url} target="_blank" className="block underline font-bold">
            Vagas abertas
          </a>
        )}

        {application_url && (
          <a href={application_url} target="_blank" className="block underline font-bold">
            Me canditadar via site
          </a>
        )}

        {application_via_email && (
          <a
            href={`mailto:${application_via_email}`}
            target="_blank"
            className="block underline font-bold"
          >
            Me canditadar via email
          </a>
        )}
      </div>
    </div>
  </div>
);

export default Company;
