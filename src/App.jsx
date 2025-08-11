import "./App.css";

// hamburger menu
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

// import images
import logo from "/images/logo.png";
import heroImg from "/images/hero.jpeg";
import briefingImg from "/images/card1.jpeg";
import pointer from "/images/here.png";
import aIMarketingImg from "/images/card2.jpeg";
import chchStudentImg from "/images/card3.jpeg";
import dunedinMarketersImg from "/images/card4.jpeg";
import contentCreationImg from "/images/card5.jpeg";
import chchBrainyBrekkieImg from "/images/card6.jpeg";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-orange-200/80 m-h-screen">
      {/* HEADER */}
      <header className=" bg-amber-700 text-white p-4 relative z-10">
        <nav className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between w-full">
            {/* LOGO */}
            <img src={logo} alt="logo" className="w-20 h-auto" />

            {/* DESKTOP MENU */}
            <ul className=" hidden items-center gap-5 md:flex">
              <li>
                <span className="px-6 py-3 rounded-md cursor-pointer hover:bg-amber-800/50 hover:shadow-xl hover:transition delay-50 duration-300 ease-in-out">
                  Home
                </span>
              </li>
              <li>
                <span className="px-6 py-3 rounded-md cursor-pointer hover:bg-amber-800/50 hover:shadow-xl hover:transition delay-50 duration-300 ease-in-out">
                  About Us
                </span>
              </li>
              <li>
                <span className="px-6 py-3 rounded-md cursor-pointer hover:bg-amber-800/50 hover:shadow-xl hover:transition delay-50 duration-300 ease-in-out">
                  Contact Us
                </span>
              </li>
              <li>
                <span className="px-6 py-3 rounded-md cursor-pointer hover:bg-amber-800/50 hover:shadow-xl hover:transition delay-50 duration-300 ease-in-out">
                  Login
                </span>
              </li>
            </ul>

            {/* HAMBURGER ICON */}
            <div className=" flex md:hidden justify-end">
              <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>
          </div>

          {/* MOBILE MENU */}
          {/* conditional render: if toggled && sm screen, render */}
          {isOpen && (
            <div className="md:hidden bg-amber-700 mt-2">
              <ul className="flex flex-col items-end gap-4 p-4">
                <li>
                  <span className="cursor-pointer">Home</span>
                </li>
                <li>
                  <span className="cursor-pointer">About Us</span>
                </li>
                <li>
                  <span className="cursor-pointer">Contact Us</span>
                </li>
                <li>
                  <span className="cursor-pointer">Login</span>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* HERO */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] ">
        <img
          src={heroImg}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* SEARCH BAR */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8">
          <form className="flex flex-col sm:flex-row w-full max-w-md">
            <input
              type="search"
              placeholder="🔎 search event or training"
              className="flex-grow px-4 sm:px-6 py-2 rounded-s-md border-solid border-white bg-white"
            />
            <button
              type="submit"
              className=" px-4 sm:px-5 py-2 bg-lime-950/70 text-white rounded-e-md cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 mt-10">
        {/* CARD 1 */}
        <div className="h-113 w-full max-w-[320px] mx-auto bg-[#576b4d] shadow-md rounded-md overflow-hidden hover:shadow-xl transition-transform duration-1000 ease-in-out hover:scale-115 hover:bg-lime-950/70">
          <div className="relative">
            <img
              src={briefingImg}
              alt="placeholder image for marketing course"
              className="object-cover"
            />
            <span className="absolute bottom-0 left-0 z-3 bg-amber-700 text-md font-semibold text-orange-100 py-1 px-3">
              TRAINING
            </span>
          </div>
          <div className="p-2">
            <h3 className="font-semibold text-lg text-orange-200 mt-2">
              Essential of Briefing Effective Marketing
            </h3>
            <p className="text-sm text-orange-100 mt-2">
              Briefing is a core skill for any marketing practitioner, yet how
              many of us feel...
            </p>
          </div>

          <hr className="border-t-1 border-amber-300/50 mt-4" />

          <div className="flex items-stretch">
            <div className="font-semibold text-orange-100 w-50 p-2">
              {/* left content */}
              <p>12 Aug 2025</p>
              <p className="pb-[2px]">Auckland</p>
            </div>
            <div className="w-px self-stretch bg-amber-300/50 mx-4" />
            <div>
              {/* right content */}
              <img
                src={pointer}
                alt="pointer"
                className="w-15 h-15 min-h-[60px] object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="h-113 w-full max-w-[320px] mx-auto bg-[#576b4d] shadow-md rounded-md overflow-hidden hover:shadow-xl transition-transform duration-1000 ease-in-out hover:scale-115 hover:bg-lime-950/70">
          <div className="relative">
            <img
              src={aIMarketingImg}
              alt="placeholder image for AI marketing course"
              className="object-cover"
            />
            <span className="absolute bottom-0 left-0 z-3 bg-amber-700 text-md font-semibold text-orange-100 py-1 px-3">
              TRAINING
            </span>
          </div>
          <div className="p-2">
            <h3 className="font-semibold text-lg text-orange-200 my-3">
              AI Meets Marketing
            </h3>
            <p className="text-sm text-orange-100 mt-2">
              Designed specifically for marketers, this session delivers
              practical insight into how AI is already reshaping the industry,
              what...
            </p>
          </div>

          <hr className="border-t-1 border-amber-300/50 mt-4" />

          <div className="flex items-stretch">
            <div className="font-semibold text-orange-100 w-50 p-2">
              {/* left content */}
              <p>13 Aug 2025</p>
              <p>Auckland</p>
            </div>
            <div className="w-px self-stretch bg-amber-300/50 mx-4" />
            <div>
              {/* right content */}
              <img
                src={pointer}
                alt="pointer"
                className="w-15 h-15 min-h-[60px] object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="h-113 w-full max-w-[320px] mx-auto bg-[#576b4d] shadow-md rounded-md overflow-hidden hover:shadow-xl transition-transform duration-1000 ease-in-out hover:scale-115 hover:bg-lime-950/70">
          <div className="relative">
            <img
              src={chchStudentImg}
              alt="placeholder image for christchurch student event"
              className="object-cover"
            />
            <span className="absolute bottom-0 left-0 z-3 bg-amber-700 text-md font-semibold text-orange-100 py-1 px-3">
              EVENT
            </span>
          </div>
          <div className="p-2">
            <h3 className="font-semibold text-lg text-orange-200 mt-2">
              Exclusive Student Event Christchurch
            </h3>
            <p className="text-sm text-orange-100 mt-2">
              This free event is your chance to discover the endless
              possibilities a future in marketing...
            </p>
          </div>

          <hr className="border-t-1 border-amber-300/50 mt-4" />

          <div className="flex items-stretch">
            <div className="font-semibold text-orange-100 w-50 p-2">
              {/* left content */}
              <p>13 Aug 2025</p>
              <p className="pb-[2px]">Christchurch</p>
            </div>
            <div className="w-px self-stretch bg-amber-300/50 mx-4" />
            <div>
              {/* right content */}
              <img
                src={pointer}
                alt="pointer"
                className="w-15 h-15 min-h-[60px] object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="h-113 w-full max-w-[320px] mx-auto bg-[#576b4d] shadow-md rounded-md overflow-hidden hover:shadow-xl transition-transform duration-1000 ease-in-out hover:scale-115 hover:bg-lime-950/70">
          <div className="relative">
            <img
              src={dunedinMarketersImg}
              alt="placeholder image for dunedin marketing event"
              className="object-cover"
            />
            <span className="absolute bottom-0 left-0 z-3 bg-amber-700 text-md font-semibold text-orange-100 py-1 px-3">
              EVENT
            </span>
          </div>
          <div className="p-2">
            <h3 className="font-semibold text-lg text-orange-200 my-3">
              Dunedin Marketers Event
            </h3>
            <p className="text-sm text-orange-100 mt-2">
              Come hang out at Emerson's in Dunedin for a relaxed networking
              event. This is your chance to meet...
            </p>
          </div>

          <hr className="border-t-1 border-amber-300/50 mt-4" />

          <div className="flex items-stretch">
            <div className="font-semibold text-orange-100 w-50 p-2">
              {/* left content */}
              <p>13 Aug 2025</p>
              <p className="pb-[2px]">Dunedin</p>
            </div>
            <div className="w-px self-stretch bg-amber-300/50 mx-4" />
            <div>
              {/* right content */}
              <img
                src={pointer}
                alt="pointer"
                className="w-15 h-15 min-h-[60px] object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* CARD 5 */}
        <div className="h-113 w-full max-w-[320px] mx-auto bg-[#576b4d] shadow-md rounded-md overflow-hidden hover:shadow-xl transition-transform duration-1000 ease-in-out hover:scale-115 hover:bg-lime-950/70">
          <div className="relative">
            <img
              src={contentCreationImg}
              alt="placeholder image for ai-powered content creating training course"
              className="object-cover"
            />
            <span className="absolute bottom-0 left-0 z-3 bg-amber-700 text-md font-semibold text-orange-100 py-1 px-3">
              TRAINING
            </span>
          </div>
          <div className="p-2">
            <h3 className="font-semibold text-lg text-orange-200 mt-2">
              Mastering Content Creation With AI-Powered Storytelling
            </h3>
            <p className="text-sm text-orange-100 mt-2">
              As a marketer, you know digital storytelling is key to helping
              your audience understand...
            </p>
          </div>

          <hr className="border-t-1 border-amber-300/50 mt-4" />

          <div className="flex items-stretch">
            <div className="font-semibold text-orange-100 w-50 p-2">
              {/* left content */}
              <p>19 Aug 2025</p>
              <p className="pb-[2px]">Auckland</p>
            </div>
            <div className="w-px self-stretch bg-amber-300/50 mx-4" />
            <div>
              {/* right content */}
              <img
                src={pointer}
                alt="pointer"
                className="w-15 h-15 min-h-[60px] object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* CARD 6 */}
        <div className="h-113 w-full max-w-[320px] mx-auto bg-[#576b4d] shadow-md rounded-md overflow-hidden hover:shadow-xl transition-transform duration-1000 ease-in-out hover:scale-115 hover:bg-lime-950/70">
          <div className="relative">
            <img
              src={chchBrainyBrekkieImg}
              alt="placeholder image for christchurch brainy breakfast event"
              className="object-cover"
            />
            <span className="absolute bottom-0 left-0 z-3 bg-amber-700 text-md font-semibold text-orange-100 py-1 px-3">
              EVENT
            </span>
          </div>
          <div className="p-2">
            <h3 className="font-semibold text-lg text-orange-200 mt-2">
              Brainy Breakfast 2025 / Christchurch
            </h3>
            <p className="text-sm text-orange-100 mt-2">
              The AI Tools Revolution: What's actually happening in marketing
              right now...
            </p>
          </div>

          <hr className="border-t-1 border-amber-300/50 mt-4" />

          <div className="flex items-stretch">
            <div className="font-semibold text-orange-100 w-50 p-2">
              {/* left content */}
              <p>19 Aug 2025</p>
              <p className="pb-[2px]">Christchurch</p>
            </div>
            <div className="w-px self-stretch bg-amber-300/50 mx-4" />
            <div>
              {/* right content */}
              <img
                src={pointer}
                alt="pointer"
                className="w-15 h-15 min-h-[60px] object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <footer>©2025 Marketing Association | All right reserved</footer>
    </div>
  );
}

export default App;
