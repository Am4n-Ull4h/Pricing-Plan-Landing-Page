// pages/Brave.js
import "@fortawesome/fontawesome-free/css/all.css";

const Brave = () => {
  return (
    <>
      <div className="Brave-div absolute left-[40%]"></div>
      <h1 className="text-white text-center text-xl py-5 text-2xl font-bold relative mt-[70px]">
        Open your eyes to the brave nude world of{" "}
        <span
          className="text-purple-500 text-2xl font-semibold font-sans leading-27px font-bold"
          style={{
            background: "linear-gradient(90deg, #9A57EE, #F35CB9, #EE9A3D)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Bikinioff.ai
        </span>
      </h1>
      <div className="flex w-[80%] justify-center lg:justify-between flex-wrap lg:gap-x-0 gap-x-5 mx-auto">
        <div
          className="w-full sm:w-[80%] md:w-[45%] Brave-top  lg:w-[30%]  p-5 pb-0 mt-5 bg-white bg-opacity-10 rounded-2xl  flex flex-col justify-start items-start gap-5 relative overflow-hidden"
          style={{ background: "#261E2B" }}
        >
          <div
            className="absolute  w-1/4 h-1/5 right-[-20px] top-[-20px]"
            style={{
              background: "linear-gradient(#9A57EE,#F35CB9,#EE9A3D)",
              filter: "blur(80px)",
              boxShadow:
                "-10px 10px 20px #EE9A3D,-20px 20px  20px #F35CB9,-40px 30px  20px #9A57EE",
            }}
          ></div>
          <div className="Brave-Border">
            <div className="brv2">
              <i class="fa-solid fa-wand-magic-sparkles text-white"></i>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="text-white text-xl font-semibold leading-9">
              Unleash{" "}
              <span className="text-purple-500 bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Limitless
              </span>{" "}
              Creativity
            </div>

            <div className="w-86 text-gray-400 text-sm font-medium leading-6 ">
              Go beyond photo editing! Bikinioff's AI grants you the power to
              create entirely new realities. Craft dream scenarios, unique
              characters, and explore boundless artistic expression. Traditional
              tools limit you, Bikinioff sets you free
            </div>
          </div>
        </div>

        <div
          className="w-full sm:w-[80%] md:w-[45%]   lg:w-[30%]   p-5 mt-5 bg-white bg-opacity-10 rounded-2xl Brave-top flex flex-col justify-start items-start gap-5 relative overflow-hidden"
          style={{ background: "#261E2B" }}
        >
          <div
            className="absolute w-1/4 h-1/5 right-[-20px] top-[-20px]"
            style={{
              background: "linear-gradient(#9A57EE,#F35CB9,#EE9A3D)",
              filter: "blur(80px)",
              boxShadow:
                "-10px 10px 20px #EE9A3D,-20px 20px  20px #F35CB9,-40px 30px  20px #9A57EE",
            }}
          ></div>

          <div className="Brave-Border">
            <div className="brv2">
              <i class="fa-solid fa-person-dress text-white text-xl"></i>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="text-white text-xl font-semibold leading-9">
              Unleash
              <span className="text-purple-500 bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                -Hyper Results{" "}
              </span>
              &nbsp; That Stun
            </div>

            <div className="w-86 text-gray-400 text-sm font-medium leading-6 ">
              Don't settle for grainy or fake-looking edits. Bikinioff's
              cutting-edge AI delivers unparalleled realism. Every detail, from
              hair texture to skin tones, is meticulously rendered for
              jaw-dropping visuals that push the boundaries of image generation
            </div>
          </div>
        </div>

        <div
          className="w-full sm:w-[80%] md:w-[45%]   lg:w-[30%]  p-5 mt-5 bg-white bg-opacity-10 rounded-2xl Brave-top flex flex-col justify-start items-start gap-5 relative overflow-hidden"
          style={{ background: "#261E2B" }}
        >
          <div
            className="absolute w-1/4 h-1/5 right-[-20px] top-[-20px]"
            style={{
              background: "linear-gradient(#9A57EE,#F35CB9,#EE9A3D)",
              filter: "blur(80px)",
              boxShadow:
                "-10px 10px 20px #EE9A3D,-20px 20px  20px #F35CB9,-40px 30px  20px #9A57EE",
            }}
          ></div>
          <div className="Brave-Border">
            <div className="brv2">
              <i class="fa-regular fa-lightbulb text-white text-xl "></i>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="text-white text-xl font-semibold leading-9">
              <span className="text-purple-500 bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Effortless Workflow
              </span>{" "}
              for Busy Creatives
            </div>

            <div className="w-86 text-gray-400 text-sm font-medium leading-6 ">
              Bikinioff's intuitive interface allows anyone to become a master
              creator. Our user-friendly tools and AI automation make crafting
              stunning visuals faster and easier than ever before. Focus on your
              vision, Bikinioff handles the heavy lifting.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brave;
