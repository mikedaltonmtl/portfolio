import { PhoneIcon, MapPinIcon, EnvelopeIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};


export default function Contact() {

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:michael.j.dalton@gmail.com?subject=${formData.subject}&body=Message From: ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="ml-3 min-h-screen relative flex flex-col text-justify md:flex-row md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl">
        &nbsp;Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center mt-20">
          Nice to meet you.&nbsp;
          <span className="underline decoration-[#F7AB0A]/50">Let&apos;s Connect.</span>
        </h4>

        <div className="flex flex-col items-start mx-auto space-y-2">
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse text-left" />
            <p className="text-2xl">Montreal</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <span className="fill-[#F7AB0A] h-7 w-7 flex items-center justify-center space-x-5 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
            </span>
            <p className="text-2xl">mike-dalton-4a002224</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <span className="fill-[#F7AB0A] h-7 w-7 flex items-center justify-center space-x-5 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
            </span>
            <p className="text-2xl">mikedaltonmtl</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">michael.j.dalton@gmail.com</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">(514) 267-9278</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input {...register("name")} placeholder="Name" className="contactInput" type="text" />
            <input {...register("email")} placeholder="Email" className="contactInput" type="email" />
          </div>

          <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />

          <textarea {...register("message")} placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}