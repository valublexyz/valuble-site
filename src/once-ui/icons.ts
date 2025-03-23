import { IconType } from 'react-icons';
import { SiOpensea } from "react-icons/si";
import { PiHouseDuotone } from "react-icons/pi";
import { GrGallery } from "react-icons/gr";
import { FaEthereum } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFaucet } from "react-icons/fa";

import {
  HiChevronUp,
  HiChevronDown,
  HiChevronRight,
  HiChevronLeft,
  HiOutlineArrowPath,
  HiCheck,
  HiOutlineSun,
  HiOutlineMoon,
  HiMiniQuestionMarkCircle,
  HiMiniMinus,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiMiniPlus,
  HiMiniUser,
  HiMiniXMark,
  HiEyeDropper,
  HiOutlineClipboard,
  HiOutlineMagnifyingGlass,
  HiCalendar,
  HiOutlineLink,
  HiExclamationTriangle,
  HiArrowUpRight,
  HiInformationCircle,
  HiExclamationCircle,
  HiCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

import { RiVisaLine } from "react-icons/ri";

import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  chevronUp: HiChevronUp,
  chevronDown: HiChevronDown,
  chevronRight: HiChevronRight,
  chevronLeft: HiChevronLeft,
  refresh: HiOutlineArrowPath,
  check: HiCheck,
  light: HiOutlineSun,
  dark: HiOutlineMoon,
  helpCircle: HiMiniQuestionMarkCircle,
  infoCircle: HiInformationCircle,
  warningTriangle: HiExclamationTriangle,
  errorCircle: HiExclamationCircle,
  checkCircle: HiCheckCircle,
  eyeDropper: HiEyeDropper,
  clipboard: HiOutlineClipboard,
  person: HiMiniUser,
  close: HiMiniXMark,
  openLink: HiOutlineLink,
  discord: FaDiscord,
  google: FaGoogle,
  github: FaGithub,
  arrowUpRight: HiArrowUpRight,
  minus: HiMiniMinus,
  plus: HiMiniPlus,
  calendar: HiCalendar,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  search: HiOutlineMagnifyingGlass,
  visa: RiVisaLine,
  security: HiOutlineShieldCheck,
  sparkle: HiOutlineSparkles,
  opensea:SiOpensea,
	PiHouseDuotone:PiHouseDuotone,
	GrGallery:GrGallery,
  HiOutlineHeart,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineSquares2X2,
  FaEthereum,
  FaLinkedin,
  FaFaucet
};
