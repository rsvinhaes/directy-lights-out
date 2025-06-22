'use client'

import { Header } from "../app/components/header"
import Image from "next/image"
import styles from "./page.module.css"
import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react"
import { Virtual, Navigation, Pagination, EffectFade } from 'swiper/modules'
import { register } from 'swiper/element/bundle'

register()

import 'swiper/css'
import 'swiper/css/virtual'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import slide1 from "../../public/catedralvitorianoite.png"
import slide2 from "../../public/conventodapenhanoite.png"
import slide3 from "../../public/pedraazul.png"
import slide4 from "../../public/pontedapassagemnoite.png"
import slide5 from "../../public/terceirapontedia.png"
import slide6 from "../../public/terceirapontenoite.png"

export default function Home() {

  const data = [
    { id: '1', image: slide1  },
    { id: '2', image: slide2  },
    { id: '3', image: slide3  },
    { id: '4', image: slide4  },
    { id: '5', image: slide5  },
    { id: '6', image: slide6  }
  ]

  return (
    <div className={styles.page}>
      <div>
        <Header />
      </div>
      
      <div className={styles.sectionHome} >
        <Swiper  
          modules={[Virtual, Pagination, Navigation, EffectFade]}
          spaceBetween={50} loop={true} autoplay={{
          delay: 5000,
          disableOnInteraction: false,}}
          pagination={{clickable: true, }}
          navigation={true} 
          slidesPerView={1}
          virtual={true}
          effect={'fade'}
        >
       
             {data.map((slideContent, index) => (
             <SwiperSlide key={slideContent} virtualIndex={index}>
             <Image className={styles.sectionImg} src={slideContent.image} alt="slider" />
             </SwiperSlide>
             ))}
        </Swiper>
      </div>
           
      <div className={styles.sectionDestino} >
        <h1 id="DESTINO" >DESTINOS</h1>
      </div>
    </div>
  );
}
