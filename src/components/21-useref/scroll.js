import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./scroll.scss";

const Scroll = () => {
  const refAboutUs = useRef(null);

  

  useEffect(() => {

    const handleScroll = () => {
      const aboutUsEl = refAboutUs.current;
      const currentScrollPosition = window.scrollY;

      const elScrollPosition = aboutUsEl.offsetTop;
      const currentWindowHeight = window.innerHeight;
      const elCurrentHeight = aboutUsEl.offsetHeight;

      const targetScrollPosition = 
      elScrollPosition - currentWindowHeight + elCurrentHeight;

      if(currentScrollPosition >= targetScrollPosition){
        aboutUsEl.classList.add("active"); 
      }

    }

    document.addEventListener("scroll",handleScroll);
  
    return () => {
      document.removeEventListener("scroll",handleScroll); 
    }
  }, [])
  



  return (
    <Container>
      {[...new Array(30)].map((item, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          earum, quibusdam tempore fuga temporibus voluptatem voluptatibus
          tenetur aperiam dicta facilis voluptatum dolore, quis, voluptate
          totam? Nam eveniet eius ea esse?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laborum a numquam cum facere, est voluptatibus
          quidem illum, odio, aspernatur dignissimos laboriosam iste pariatur
          minima ipsa ut magnam aliquid totam consectetur.
        </p>
      ))}

      <p className="about-us" ref={refAboutUs}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nobis
        aliquam facere, ratione aspernatur cupiditate id non soluta assumenda
        maxime unde dolorem modi neque totam ipsam consectetur autem enim? Dicta
        dolore pariatur ducimus voluptas fugit esse, laborum iusto nemo
        obcaecati error velit perferendis dolores maiores corporis
        necessitatibus magnam labore neque non laboriosam. Veritatis dolorum
        itaque ducimus reiciendis ut hic voluptatum!
      </p>

      {[...new Array(30)].map((item, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          earum, quibusdam tempore fuga temporibus voluptatem voluptatibus
          tenetur aperiam dicta facilis voluptatum dolore, quis, voluptate
          totam? Nam eveniet eius ea esse?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laborum a numquam cum facere, est voluptatibus
          quidem illum, odio, aspernatur dignissimos laboriosam iste pariatur
          minima ipsa ut magnam aliquid totam consectetur.
        </p>
      ))}
    </Container>
  );
};

export default Scroll;
