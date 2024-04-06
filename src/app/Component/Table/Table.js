import React from "react";

const Table = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-2xl font-bold text-white my-9 mt-[100px]">
          Compare Plans
        </h1>
        <p className="text-center text-gray-400 mb-9">
          Select the perfect plan that aligns with your specific requirements.
        </p>
        <div
          className="w-[80%] h-60 bg-neutral-800 rounded-xl mx-auto flex justify-end pt-5 sticky top-0"
          style={{ background: "#261E2B" }}
        >
          <div className="w-[25%]">
            <h1 className="shade-h1 text-xl font-bold w-[30%]">Newbie</h1>
            <h2 className="text-white mt-3 text-[22px] font-semibold font-['Sans']  leading-[30px]">
              $9.99 USD
            </h2>
            <p className="text-gray-400 my-3 text-sm font-medium font-['General Sans'] leading-snug">
              /month
            </p>
            <div className="Table-btn">
              <div className="Table-btn2">
                <button className="Table-btn3">create account</button>
              </div>
            </div>
          </div>
          <div className="w-[20%]">
            <h1 className="shade-h1 text-xl font-bold w-[53%]">Amatuer</h1>
            <h2 className="text-white mt-3 text-[22px] font-semibold font-['Sans']  leading-[30px]">
              $19.99 USD
            </h2>
            <p className="text-gray-400 my-3 text-sm font-medium font-['General Sans'] leading-snug">
              /month, billed annually
            </p>
            <div className="Table-btn">
              <div className="Table-btn2">
                <button className="Table-btn3">Get Started</button>
              </div>
            </div>
          </div>
          <div className="w-[20%]">
            <h1 className="shade-h1 text-xl font-bold w-[70%]">Sex Master</h1>
            <h2 className="text-white mt-3 text-[22px] font-semibold font-['Sans']  leading-[30px]">
              $39.99 USD
            </h2>
            <p className="text-gray-400 my-3 text-sm font-medium font-['General Sans'] leading-snug">
              /month, billed annually
            </p>
            <div className="Table-btn">
              <div className="Table-btn2">
                <button className="Table-btn3">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <table className="w-[80%] mx-auto ">
          <tbody className="">
            <tr>
              <td className="py-4">Undressing and NSFW content creation</td>
              <td className="py-4">400 moans/month</td>
              <td className="py-4">1000 moans/month</td>
              <td className="py-4">2500 moans/month</td>
            </tr>
            <tr>
              <td className="py-4">
                Reality modes & themes (Realistic, hentai, etc)
              </td>
              <td className="py-4 ">2</td>
              <td className="py-4 ">5</td>
              <td className="py-4 ">10</td>
            </tr>
            <tr>
              <td className="py-4">Advanced body sculpting features</td>
              <td className="py-4">No</td>
              <td className="py-4">Yes</td>
              <td className="py-4">Yes</td>
            </tr>
            <tr>
              <td className="py-4">High-resolution images</td>
              <td className="py-4">Basic</td>
              <td className="py-4">Top</td>
              <td className="py-4">Top</td>
            </tr>
            <tr>
              <td className="py-4">Collection of sex positions</td>
              <td className="py-4">Basic</td>
              <td className="py-4">Amatuer</td>
              <td className="py-4">Limitless</td>
            </tr>
            <tr>
              <td className="py-4">Personalized prompt history</td>
              <td className="py-4">No</td>
              <td className="py-4">No</td>
              <td className="py-4">Yes</td>
            </tr>
            <tr>
              <td className="py-4">Seamless face swapping</td>
              <td className="py-4">Yes</td>
              <td className="py-4">Yes</td>
              <td className="py-4">Yes</td>
            </tr>
            <tr>
              <td className="py-4">AI influencer program (Only Fans & more)</td>
              <td className="py-4">No</td>
              <td className="py-4">Yes</td>
              <td className="py-4">Yes</td>
            </tr>
            <tr>
              <td className="py-4">Video creation (coming soon)</td>
              <td className="py-4">No</td>
              <td className="py-4">No</td>
              <td className="py-4">Yes</td>
            </tr>
            <tr>
              <td className="py-4">Industry-leading encryption for privacy</td>
              <td className="py-4">Yes</td>
              <td className="py-4">Yes</td>
              <td className="py-4">Yes</td>
            </tr>
            <tr>
              <td className="py-4">Priority customer support</td>
              <td className="py-4">No</td>
              <td className="py-4">Yes</td>
              <td className="py-4">Yes</td>
            </tr>
            <tr>
              <td className="py-4">Commercial use</td>
              <td className="py-4">Yes</td>
              <td className="py-4">Yes</td>
              <td className="py-4">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
