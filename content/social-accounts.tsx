import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

export const SOCIAL_ACCOUNTS = {
  github: {
    name: "GitHub",
    href: "https://github.com/edsonarauj0",
    Icon: ({ className = "" }) => <SiGithub className={className} />,
  },

  twitter: {
    name: "Twitter",
    href: "https://twitter.com/eu_edsonaraujo",
    Icon: ({ className = "" }) => <SiTwitter className={className} />,
  },
  linkedin: {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/edson-alves-araujo/",
    Icon: ({ className = "" }) => <SiLinkedin className={className} />,
  },
  instagram: {
    name: "Instagram",
    href: "https://www.instagram.com/edsonaraujo013/",
    Icon: ({ className = "" }) => <SiInstagram className={className} />,
  }
};
