/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./slider.css";

export default function Slider(props) {
  const { slides } = props;
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = useCallback(() => {
    setCurrentSlide(
      currentSlide === slides.length - 1 ? 0 : (prev) => prev + 1
    );
  }, [currentSlide, slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="slidercontainer">
      <div
        className="sliderwrapper"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slidercontent">
            {slide.content}
          </div>
        ))}
      </div>
      <div className="arrowcontainer">
        <AiOutlineArrowLeft className="arrow" onClick={prevSlide} />
        <AiOutlineArrowRight className="arrow" onClick={nextSlide} />
      </div>
    </div>
  );
}
