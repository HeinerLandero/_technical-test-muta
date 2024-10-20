import {React, useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

export const Portafolio = ({limite}) => {
  const [slide, setSlide] = useState(window.innerWidth > 992 ? 3 : 1);

  useEffect(() => {
    const updatedSlides = () => {
      setSlide(window.innerWidth > 992 ? 2 : 1);
    };
    window.addEventListener('resize', updatedSlides);
    return () => {
      window.removeEventListener('resize', updatedSlides);
    };
  }, []);


  // return (
  //   <div className='container_swiper'>
  //     <h2 className='title_porfolio mt-4 mb-4'>Proyectos</h2>
  //     <Swiper spaceBetween={20}
  //             slidesPerView={slide}
  //             cssMode={true}
  //             navigation={true}
  //             mousewheel={false}
  //             keyboard={true}
  //             watchSlidesProgress={true}
  //             loop={true}
  //             modules={[Navigation,  Mousewheel, Keyboard]} >
  //     {
  //       proyectos.map( proyecto => (
  //         <div className="col-12 col-md-6 col-lg-3 mb-4" key={proyecto.id} >
  //           <SwiperSlide  className="card">
  //               <img src={proyecto.imagen} className="card-img-top" alt={proyecto.alt} />
  //               <div className="card-body">
  //                 <h3 className="card-title">{proyecto.name}</h3>
  //                 <p className="card-text">{proyecto.content}</p>
  //                 <span className='learn_more-proyct'><Link to={'/portafolio/'+proyecto.id}>LEE MAS</Link></span>
  //               </div>
  //           </SwiperSlide>
  //         </div>
  //       ))
  //     }
  //     </Swiper>
  //   </div>
  // )
}
