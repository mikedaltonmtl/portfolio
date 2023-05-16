import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center">
      <div className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon url="https://www.linkedin.com/in/mike-dalton-4a002224/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon url="https://github.com/mikedaltonmtl"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon url="https://discord.com/users/778371798575611944"
          network="discord"
          fgColor="transparent"
          bgColor="gray"
        />
      </div>

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Contact Me
        </p>
      </div>
    </header>
  );
}