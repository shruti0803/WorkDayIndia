import { useState, useRef, useEffect } from "react";
import { BsPlayFill, BsCheckCircle } from "react-icons/bs"; // Added BsCheckCircle
import userImg from "../../../assets/images/users.png";  // Placeholder image
import { featureData } from "../../../data/data";

const Features = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        setShowVideo(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    setShowVideo(true);
  };

  return (
    <section className="bg-[#f1fdf7] py-14">
      <div className="contain">
        <div className="flex lg:items-start items-start flex-col lg:flex-row lg:justify-between w-full gap-8 lg:gap-5">
          {/* Left side: Text Content */}
          <div className="flex-1 flex items-start justify-start flex-col gap-5 lg:pr-8">  {/* Add padding-right for spacing */}
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-darkColor text-left">
              A whole world of freelance <br /> talent at your fingertips
            </h2>
            <div className="w-full flex items-start justify-start flex-col gap-5">
              {featureData.map((item, i) => (
                <div
                  className="flex items-start justify-start w-full flex-col gap-3"
                  key={i}
                >
                  <div className="flex items-center justify-start gap-3">
                    <span className="text-darkColor">
                      {/* Tick Icon */}
                      <BsCheckCircle className="w-5 h-5" />
                    </span>
                    <h2 className="text-base sm:text-lg font-semibold text-darkColor">
                      {item.title}
                    </h2>
                  </div>
                  <p className="w-full lg:max-w-[450px] text-sm sm:text-base font-medium text-gray-500 text-left">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Image/Video Preview */}
          <div className="flex-1">
            <div className="w-full relative" onClick={handleButtonClick}>
              {!showVideo && (
                <>
                  <img src="https://www.helpside.com/wp-content/uploads/2021/01/AdobeStock_238255151-2048x1365.jpeg" alt="video preview" className="w-full" />
                  <span className="absolute top-0 w-full h-full flex items-center justify-center text-white">
                    <span className="bg-black/50 rounded-full flex items-center w-[60px] h-[60px] justify-center cursor-pointer">
                      <BsPlayFill size={59} />
                    </span>
                  </span>
                </>
              )}
              {showVideo && (
                <div className="fixed top-0 right-0 bg-[#00000085]  w-full h-full z-40 place-items-center flex justify-center items-center">
                  <div
                    ref={videoRef}
                    className="lg:w-[986px] lg:h-[551px] h-[250px] rounded-2xl w-[90%] flex items-center justify-center"
                  >
                    <iframe
                      className="rounded-md h-full w-full"
                      src="https://www.canva.com/design/DAGQEjvjKiw/Rb20nuUjGgaWpTSukU0cPQ/watch?embed"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      title="Canva Video"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
