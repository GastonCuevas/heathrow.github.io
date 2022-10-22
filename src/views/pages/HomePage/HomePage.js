import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Typography } from '@material-ui/core'
// import leche from '~/assets/leche.jpg'
// import dulceLeche from '~/assets/dulceLeche.jpg'
// import queso from '~/assets/queso.jpg'
import plane1 from '~/assets/plane1.jpg'
import plane2 from '~/assets/plane2.png'
import plane3 from '~/assets/plane3.jpg'
import plane4 from '~/assets/plane4.jpg'
import plane5 from '~/assets/plane5.jpg'
import plane6 from '~/assets/plane6.JPG'
import plane7 from '~/assets/plane7.jpg'
import plane8 from '~/assets/plane8.jpg'
import plane9 from '~/assets/plane9.jpg'
import { NavBar, Footer, MainLayout } from '~/views/pages/shared'
import { useStyles } from './HomePage.style'

export const HomePage = () => {
  const classes = useStyles()
  const [scrollTop, setScrollTop] = useState(0)
  const NAVBAR_TRANSPARENT_SCROLL = 180
  const settings = {
    className: classes.slickSlider,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    lazyLoad: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  const array = [
    // { name: 'Leche 1 litro', image: leche },
    // { name: 'Dulce de leche 200 gramos', image: dulceLeche },
    // { name: 'Queso 250 gramos', image: queso },
    { name: 'Heathrow Airport', image: plane1 },
    { name: 'Greater London', image: plane2 },
    { name: 'A Qantas Boeing 747-400 on approach to London Heathrow runway 27L', image: plane3 },
    { name: 'Aerial photo of Heathrow Airport from the 1950s, before the terminals were built', image: plane4 },
    { name: 'Heathrow in 2009, much expanded from its original layout.', image: plane5 },
    { name: 'Central waiting area in Terminal 5', image: plane6 },
    { name: 'Concorde G-BOAB in storage at Heathrow', image: plane7 },
    { name: "Heathrow's control tower with a departing Virgin Atlantic Boeing 747-400 in the background.", image: plane8 },
    { name: 'British Airways aircraft at Terminal 5C', image: plane9 }
  ]

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop)
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  return (
    <MainLayout>
      <NavBar transparent={scrollTop < NAVBAR_TRANSPARENT_SCROLL} />
      <div className={classes.mainContainer}>
        <header>
          <div className={classes.previewImage}>
            <div className={classes.containerHeader}>
              <Typography className={classes.title} component='h5'>
                Heathrow Airport
              </Typography>
              <Typography className={classes.subtitle}>Making every journey better</Typography>
            </div>
          </div>
        </header>
        <div className={classes.bodyContainer}>
          <Typography variant='h5' color='primary'>
            Facilities
          </Typography>
          <Slider {...settings}>
            {array.map(({ image, name, price = 30 }, i) => (
              <div key={i} className={classes.card}>
                <div className={classes.titleContainer}>
                  <Typography variant='h5'>{name}</Typography>
                </div>
                <img src={image} alt='img' className={classes.image} />
                {/* <div className={classes.titleContainer}>
                  <Typography variant='h6'>{`$${price}`}</Typography>
                </div> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </MainLayout>
  )
}
