import { Link } from 'react-router-dom';
import './Slider.scss';
import { observer } from 'mobx-react';
import { useLocation } from 'react-router-dom';

import SliderItem from './SliderItem';

import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

const Slider = observer(({ list, title }) => {
  return (
    <div className="slider__wrapper">
      <h3>{title}</h3>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        navigation
        slidesPerView="auto"
        // pagination={{
        //   clickable: true,
        //   type: 'bullets',
        //   bulletActiveClass: 'swiper-pagination-bullet-active',
        //   bulletClass: 'swiper-pagination-bullet'
        // }}
      >
        {list.map((node, key) => {
          return (
            <SwiperSlide key={key}>
              <SliderItem item={node} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
});

export default Slider;
