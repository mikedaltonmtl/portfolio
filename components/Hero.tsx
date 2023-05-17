import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from '../components/BackgroundCircles';


type Props = {}

export default function Hero({}: Props) {

  const [text, count] = useTypewriter({
    words: [
      "Mike Dalton",
      "Full-stack Developer",
      "<LovesToCode />"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src="/profile.jpeg"
        alt="my profile picture"
        className="relative rounded-full border border-white h-32 w-32 mx-auto object-cover"
      />
      <div>
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  );
}