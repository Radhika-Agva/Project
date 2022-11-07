import React from 'react'
import {useEffect,useRef,useState} from 'react'
import movfile from './videos/render.7.mov'
import movfile2 from './videos/render.10.mov'
import movfile3 from './videos/turbine render.41.mov'

function Home(){
    const videoRef = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);
  
    const[windowSize,setWindowSize] = useState({
      height:undefined,
      width:undefined,
    });
  
      useEffect(() => {
          let options = {
            rootMargin: "0px",
            threshold: [0.25, 0.75]
          };
          let handlePlay = (entries, observer) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  videoRef.current.play();
                } else {
                  videoRef.current.pause();
                }
              });
            };
            let handlePlay2 = (entries, observer) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  videoRef2.current.play();
                } else {
                  videoRef2.current.pause();
                }
              });
            };
            let handlePlay3 = (entries, observer) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  videoRef3.current.play();
                } else {
                  videoRef3.current.pause();
                }
              });
            };
        
            let observer = new IntersectionObserver(handlePlay, options);
            let observer2 = new IntersectionObserver(handlePlay2, options);
            let observer3 = new IntersectionObserver(handlePlay3, options);
  
  
        
            observer.observe(videoRef.current);
            observer2.observe(videoRef2.current);
            observer3.observe(videoRef3.current);
  
  
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
      <video ref={videoRef} src={movfile} height={windowSize.height} width={windowSize.width} loop autoplay muted></video>
      <video ref={videoRef2} src={movfile2} height={windowSize.height} width={windowSize.width} loop  autoplay muted></video>
      <video ref={videoRef3} src={movfile3} height={windowSize.height} width={windowSize.width} loop  autoplay muted></video>
      
  
      </>
      );
}
export default Home