import { Slideshow, Slide, SlideText } from './components/Slideshow'

import './styles/styles.css';

import img1 from './assets/img/1.jpg';
import img2 from './assets/img/2.jpg';
import img3 from './assets/img/3.jpg';
import img4 from './assets/img/4.jpg';


const App = () => {

  return (
   <main>
      <Slideshow>
        <Slide>
          <a href="https://www.google.com">
            <img src={img1} alt="" />
          </a>
          <SlideText backgroundColor="" textColor="white">
            <p>10% de descuento en electronica</p>
          </SlideText>
        </Slide>

        <Slide>
          <a href="https://www.google.com">
            <img src={img2} alt="" />
          </a>
          <SlideText backgroundColor="" textColor="white">
            <p>15% de descuento</p>
          </SlideText>
        </Slide>

        <Slide>
          <a href="https://www.google.com">
            <img src={img3} alt="" />
          </a>
          <SlideText backgroundColor="" textColor="white">
            <p>15% de descuento</p>
          </SlideText>
        </Slide>

        <Slide>
          <a href="https://www.google.com">
            <img src={img4} alt="" />
          </a>
          <SlideText backgroundColor="" textColor="white">
            <p>15% de descuento</p>
          </SlideText>
        </Slide>

      </Slideshow>

   </main>

  )
}

export default App;
