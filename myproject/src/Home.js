import React from 'react'
import {useEffect,useRef,useState} from 'react'
import v1 from './videos/render.7.mov'
import img1 from './videos/img1.jpg'
import img2 from './videos/img2.jpg'
import v2 from './videos/render.10.mov'
import v3 from './videos/turbine render.41.mov'
import v4 from './videos/v4.mov'
import v5 from './videos/v6.mov'
import v6 from './videos/v1.mov'
import img3 from './videos/screenmodes.png'


function Home(){
    const video1 = useRef(null);
    const video2 = useRef(null);
    const video3 = useRef(null);
    const video4 = useRef(null);
    const video5 = useRef(null);
    const video6 = useRef(null);



  
    const[windowSize,setWindowSize] = useState({
      height:undefined,
      width:undefined,
    });
  
      useEffect(() => {
          let options = {
            rootMargin: "0px",
            threshold: [0.20, 0.75]
          };
          let handlePlay = (entries, observer) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  video1.current.play();
                } else {
                  video1.current.pause();
                }
              });
            };
            let handlePlay2 = (entries, observer) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  video2.current.play();
                } else {
                  video2.current.pause();
                }
              });
            };
            let handlePlay3 = (entries, observer) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  video3.current.play();
                } else {
                  video3.current.pause();
                }
              });
            };
            let handlePlay4 = (entries, observer) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  video4.current.play();
                } else {
                  video4.current.pause();
                }
              });
            };
            let handlePlay5 = (entries, observer) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  video5.current.play();
                } else {
                  video5.current.pause();
                }
              });
            };
            let handlePlay6 = (entries, observer) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  video6.current.play();
                } else {
                  video6.current.pause();
                }
              });
            };
        
            let observer = new IntersectionObserver(handlePlay, options);
            let observer2 = new IntersectionObserver(handlePlay2, options);
            let observer3 = new IntersectionObserver(handlePlay3, options);
            let observer4 = new IntersectionObserver(handlePlay4, options);
            let observer5 = new IntersectionObserver(handlePlay5, options);
            let observer6 = new IntersectionObserver(handlePlay6, options);

  
  
        
            observer.observe(video1.current);
            observer2.observe(video2.current);
            observer3.observe(video3.current);
            observer4.observe(video4.current);
            observer5.observe(video5.current);
            observer6.observe(video6.current);

  
  
            function handleResize(){
              setWindowSize({
                height:window.innerHeight,
                width: window.innerWidth
              });
            }
            window.addEventListener("resize", handleResize);
  
            handleResize();
  
            return() =>window.removeEventListener("resize",handleResize);
          },[]);
      return(
      <>
      <video ref={video1} src={v1} height={windowSize.height} width={windowSize.width} loop autoplay muted></video>
      <img src={img1} className="img"></img>
      <img src={img2} className="img"></img>
      <video ref={video2} src={v2} height={windowSize.height} width={windowSize.width} loop autoplay muted></video>
      <video ref={video3} src={v3} height={windowSize.height} width={windowSize.width} loop autoplay muted></video>
      <video ref={video4} src={v4} height={windowSize.height} width={windowSize.width} loop autoplay muted></video>
      <video ref={video5} src={v5} height={windowSize.height} width={windowSize.width} loop autoplay muted></video>
      <img src={img3} className="img"></img>
      <video ref={video6} src={v6} height={windowSize.height} width={windowSize.width} loop autoplay muted></video>

      </>
      );
}
export default Home