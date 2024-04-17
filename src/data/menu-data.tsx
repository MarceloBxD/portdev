export const SEE_PROJECTS = "See projects";
export const SEE_PROFILE = "See profile";

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
];
