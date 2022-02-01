import makeFAIcon from "utils/makeFAIcon";

import {
  faPhone,
  faEnvelope,
  faPlus,
  faBars,
  faTimes,
  faGlobe,
  faGraduationCap,
  faTv,
  faLink,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faMediumM,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const PhoneIcon = makeFAIcon(faPhone);
export const EnvelopIcon = makeFAIcon(faEnvelope);
export const PlusIcon = makeFAIcon(faPlus);
export const BarsIcon = makeFAIcon(faBars);
export const GithubIcon = makeFAIcon(faGithub);
export const MediumIcon = makeFAIcon(faMediumM);
export const CloseIcon = makeFAIcon(faTimes);
export const LanguageIcon = makeFAIcon(faGlobe);
export const SlidesIcon = makeFAIcon(faTv);
export const TwitterIcon = makeFAIcon(faTwitter);
export const ScholarIcon = makeFAIcon(faGraduationCap);
export const LinkedinIcon = makeFAIcon(faLinkedinIn);
export const YouTubeIcon = makeFAIcon(faYoutube);
export const LinkIcon = makeFAIcon(faLink);
export const LiveIcon = makeFAIcon(faPlayCircle);

export * from "config/CustomIcons";
