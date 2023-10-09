import { IconType } from 'react-icons';
import {
  FaRegCompass as NavigationIcon,
  FaExternalLinkAlt as TargetBlankIcon,
  FaGlobe as ExternalLinkIcon,
  FaLink as InternalLinkIcon,
  FaImage,
  FaApple,
  FaGoogle,
} from 'react-icons/fa';
import {
  GrDocumentPdf as AttachmentIcon,
  GrBlockQuote as BlockQuoteIcon,
  GrNavigate,
  GrYoga,
  GrTextAlignCenter,
  GrSchedules,
  GrPin,
} from 'react-icons/gr';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoShareSocial,
  IoLogoWhatsapp,
  IoLogoYoutube,
} from 'react-icons/io5';
import {
  MdOutlineScreenSearchDesktop,
  MdOutlineEvent,
  MdPerson,
  MdVideoLabel,
  MdVideocam,
  MdOutlinePostAdd,
  MdEdit,
  MdWeb,
} from 'react-icons/md';
export { ImBlog as PostIcon } from 'react-icons/im';
export {
  FiPenTool as BlogIcon,
  FiArchive as AllIcon,
  FiUser as AuthorIcon,
  FiHash as CategoryIcon,
} from 'react-icons/fi';
import { HelpCircleIcon } from '@sanity/icons';
import { GoMegaphone, GoLaw } from 'react-icons/go';
import { RiPagesLine, RiLinksLine } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
export type IconKey = keyof typeof IconDictionary;

const IconDictionary: { [key: string]: IconType } = {
  default: InternalLinkIcon,
  facebook: IoLogoFacebook,
  twitter: IoLogoTwitter,
  whatsapp: IoLogoWhatsapp,
  linkedin: IoLogoLinkedin,
  youtube: IoLogoYoutube,
  instagram: IoLogoInstagram,
  social: IoShareSocial,
  attachment: AttachmentIcon,
  externalLink: ExternalLinkIcon,
  internalLink: InternalLinkIcon,
  internalReference: RiPagesLine,
  targetBlank: TargetBlankIcon,
  blockquote: BlockQuoteIcon,
  questionAndAnswer: HelpCircleIcon,
  navItem: NavigationIcon,
  navLink: GrNavigate,
  image: FaImage,
  seo: MdOutlineScreenSearchDesktop,
  google: FaGoogle,
  apple: FaApple,
  cta: GoMegaphone,
  classSetting: MdOutlineEvent,
  person: MdPerson,
  personDoc: FiUser,
  legal: GoLaw,
  yoga: GrYoga,
  route: RiLinksLine,
  video: MdVideoLabel,
  pageSections: MdOutlinePostAdd,
  longText: GrTextAlignCenter,
  edit: MdEdit,
  page: MdWeb,
  schedule: GrSchedules,
  pin: GrPin,
};

export const getIcon = (type: IconKey = 'default') => {
  return IconDictionary[type];
};