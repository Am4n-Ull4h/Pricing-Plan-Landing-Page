import "./Contact.css"
import 'remixicon/fonts/remixicon.css'


const Contact = () => {
  return (
    <div>
      <div className="w-[80%] h-[20vh] px-[5%] py-[20px] overflow-hidden relative my-[50px] mx-auto bg-white bg-opacity-10 rounded-2xl flex justify-start items-center wave"  style={{backgroundColor:"#261E2B"}}>
      <p class=" absolute bottom-[-60px] left-[-10px]" style={{fontSize:"100px",color:"#392037"}}>✦</p>
      <p class=" absolute top-[-50px] right-[20%]" style={{fontSize:"100px",color:"#392037"}}>✦</p>
      <p class=" absolute top-[-10px] left-[-2%]" style={{fontSize:"55px",color:"#392037", transform:"rotate(140deg)"}}>︵‿︵</p>
      <p class=" absolute bottom-[-10px] right-[-2%]" style={{fontSize:"55px",color:"#392037", transform:"rotate(-40deg)"}}>︵‿︵</p>

        <div className="flex-grow flex-shrink-0 flex-col justify-center items-start gap-2.5">
          <div className="text-purple-500 text-3xl font-semibold font-sans leading-[41px]" style={{ background: "linear-gradient(90deg, #9A57EE, #F35CB9, #EE9A3D)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>I have a specific question not answered here</div>
          <div className="self-stretch text-gray-400 text-base font-medium font-sans leading-snug" >Feel free to reach out and we'll be happy to answer any questions you have</div>
        </div>
        <div className="w-[137px] px-8 py-2.5 bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 rounded-[40px] justify-center items-center flex">
          <div className="text-white text-sm font-medium font-sans leading-snug">Contact us</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;