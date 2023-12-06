import React from 'react'

import PropTypes from 'prop-types'

const GalleryCard3 = (props) => {
  return (
    <>
      <div className={`gallery-card3-gallery-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="gallery-card3-image"
        />
      </div>
      <style jsx>
        {`
          .gallery-card3-gallery-card {
            width: 100%;
            max-width: 208px;
          }
          .gallery-card3-image {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .gallery-card3-root-class-name {
            height: auto;
          }
          .gallery-card3-root-class-name1 {
            height: auto;
          }
          .gallery-card3-root-class-name2 {
            height: auto;
          }
          .gallery-card3-root-class-name3 {
            height: auto;
          }
          .gallery-card3-root-class-name4 {
            height: auto;
          }
          .gallery-card3-root-class-name5 {
            height: auto;
          }
          .gallery-card3-root-class-name6 {
            height: auto;
          }
          .gallery-card3-root-class-name7 {
            height: auto;
          }
          .gallery-card3-root-class-name8 {
            height: auto;
          }
          .gallery-card3-root-class-name9 {
            height: auto;
          }
          .gallery-card3-root-class-name10 {
            height: auto;
          }
          .gallery-card3-root-class-name11 {
            height: auto;
          }

          .gallery-card3-root-class-name24 {
            height: auto;
          }
          .gallery-card3-root-class-name25 {
            height: auto;
          }
          .gallery-card3-root-class-name26 {
            height: auto;
          }
          .gallery-card3-root-class-name27 {
            height: auto;
          }
          .gallery-card3-root-class-name28 {
            height: auto;
          }
          .gallery-card3-root-class-name29 {
            height: auto;
          }
          .gallery-card3-root-class-name30 {
            height: auto;
          }
          .gallery-card3-root-class-name31 {
            height: auto;
          }
          @media (max-width: 479px) {
            .gallery-card3-gallery-card {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

GalleryCard3.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&w=1500',
}

GalleryCard3.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default GalleryCard3
