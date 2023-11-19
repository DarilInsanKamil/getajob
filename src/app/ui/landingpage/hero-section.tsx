import { Button, ButtonStroke } from "../button";

export default function HeroSection() {
  return (
    <section
      className={`bg-hero-pattern bg-no-repeat bg-cover bg-center h-[85vh] flex justify-center items-center relative`}
    >
      <div className="md:text-center text-left px-5">
        <h1 className="font-firacode text-3xl ">
          isn't it time you get a job?
        </h1>
        <p className="md:w-[600px] break-words mt-3 font-inter text-sm">
          Welcome to a platform dedicated to shaping your professional future.
          At <span className="font-bold">GET-A-JOB</span>, we believe in more
          than just job hunting; we're committed to empowering your career
          journey.
        </p>
        <div className="flex w-full gap-3 mt-5 md:justify-center ">
          <Button type="button">Apply Now</Button>
          <ButtonStroke type="button">Learn More</ButtonStroke>
        </div>
      </div>
      <div className="absolute bottom-10 flex flex-col items-center text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6  animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-xs">Scroll down</p>
      </div>
    </section>
  );
}
