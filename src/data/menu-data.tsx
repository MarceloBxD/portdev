export const SEE_PROJECTS = "Projetos Realizados";
export const SEE_PROFILE = "Cursos";
export const CERTIFICATES = "Certificados";
export const CONTACT = "Entrar em Contato";
export const PORTFOLIO_OWNER = "M.Bracet";

type navDataProps = {
  id: string;
  title: string;
  path: string;
  icon?: JSX.Element;
};

export const navData: navDataProps[] = [
  {
    id: "datamenu-0",
    title: SEE_PROJECTS,
    path: "/projects",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L12 22M22 12L2 12"></path>
      </svg>
    ),
  },
  {
    id: "datamenu-1",
    title: SEE_PROFILE,
    path: "/profile",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L12 22M22 12L2 12"></path>
      </svg>
    ),
  },
  {
    id: "datamenu-2",
    title: CERTIFICATES,
    path: "/certificates",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L12 22M22 12L2 12"></path>
      </svg>
    ),
  },
  {
    id: "datamenu-3",
    title: CONTACT,
    path: "/contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L12 22M22 12L2 12"></path>
      </svg>
    ),
  },
];
