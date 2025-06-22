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
      <div className={styles.sectionHeader} >
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
        <div className={styles.sectionDestinoPraia} >
          <Image />
          <h1 id="DESTINO" >PRAIAS</h1>
          <p>
            O Espírito Santo possui múltiplas riquezas naturais de norte a sul de seu território. As opções variam de mar à montanha, das águas turvas dos manguezais às águas cristalinas das lagoas, de serras antigas cobertas por matas inexploradas a pontões rochosos, entre outros vários chamarizes que, em cada região do Estado, possuem características paisagísticas singulares que dão ao turista vastas possibilidades de apreciar e interagir com a natureza.
          </p>
          <h3>
            Muitas opções: escolha a sua
          </h3>
          <p>
            Com cerca de 410 quilômetros de extensão, o litoral do Espírito Santo tem os mais diversos tipos de praia, com dunas, desertas, semidesertas, com enseadas, com águas mornas e cristalinas e também com areia monazítica, muito utilizada para o uso medicinal.
          </p>
          <p>
            A região metropolitana abriga praias como Guarapari, Curva da Jurema, Camburi, da Costa, Itapoã, Coqueiral de Itaparica, Jacaraípe e Manguinhos. Já a capital do Espírito Santo, Vitória, possui 105 quilômetros de praias.
          </p>
        </div>

        <div className={styles.sectionDestinoEcoturismo} >
          <Image />
          <h1 id="DESTINO" >ECOTURISMO</h1>
          <p>
            O Espírito Santo possui múltiplas riquezas naturais de norte a sul de seu território. As opções variam de mar à montanha, das águas turvas dos manguezais às águas cristalinas das lagoas, de serras antigas cobertas por matas inexploradas a pontões rochosos, entre outros vários chamarizes que, em cada região do Estado, possuem características paisagísticas singulares que dão ao turista vastas possibilidades de apreciar e interagir com a natureza.
          </p>
          <h3>
            Muitas opções: escolha a sua
          </h3>
          <p>
            Com cerca de 410 quilômetros de extensão, o litoral do Espírito Santo tem os mais diversos tipos de praia, com dunas, desertas, semidesertas, com enseadas, com águas mornas e cristalinas e também com areia monazítica, muito utilizada para o uso medicinal.
          </p>
          <p>
            A região metropolitana abriga praias como Guarapari, Curva da Jurema, Camburi, da Costa, Itapoã, Coqueiral de Itaparica, Jacaraípe e Manguinhos. Já a capital do Espírito Santo, Vitória, possui 105 quilômetros de praias.
          </p>
        </div>

        <div className={styles.sectionDestinoAgroturismo} >
          <Image />
          <h1 id="DESTINO" >AGROTURISMO</h1>
          <p>
            O Espírito Santo possui múltiplas riquezas naturais de norte a sul de seu território. As opções variam de mar à montanha, das águas turvas dos manguezais às águas cristalinas das lagoas, de serras antigas cobertas por matas inexploradas a pontões rochosos, entre outros vários chamarizes que, em cada região do Estado, possuem características paisagísticas singulares que dão ao turista vastas possibilidades de apreciar e interagir com a natureza.
          </p>
          <h3>
            Muitas opções: escolha a sua
          </h3>
          <p>
            Com cerca de 410 quilômetros de extensão, o litoral do Espírito Santo tem os mais diversos tipos de praia, com dunas, desertas, semidesertas, com enseadas, com águas mornas e cristalinas e também com areia monazítica, muito utilizada para o uso medicinal.
          </p>
          <p>
            A região metropolitana abriga praias como Guarapari, Curva da Jurema, Camburi, da Costa, Itapoã, Coqueiral de Itaparica, Jacaraípe e Manguinhos. Já a capital do Espírito Santo, Vitória, possui 105 quilômetros de praias.
          </p>
        </div>     
      </div>

      

      
    </div>
  );
}
