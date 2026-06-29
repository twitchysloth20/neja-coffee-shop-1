import { NJFullSection, NJTestimonial, NJTextSection1, type INJTestimonialProps } from '@neja-digital/react-ui'

export default function TestimonialsSection() {
  const reviews: INJTestimonialProps[] = [{
    njAuthor: 'Johan',
    njReview: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. ' +
        'Sit amet consectetur adipiscing elit quisque faucibus ex.',
    njRating: 5,
  }, {
    njAuthor: 'Mark D',
    njReview: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. ' +
        'Sit amet consectetur adipiscing elit quisque faucibus ex.',
    njRating: 5,
  }, {
    njAuthor: 'Emma',
    njReview: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. ' +
        'Sit amet consectetur adipiscing elit quisque faucibus ex.',
    njRating: 5,
  }]

  const testimonialsJsx = reviews.map(review => <NJTestimonial {...review} />)

  return (
    <>
      <NJFullSection id="testimonials" njBackground="surface">
        <NJTextSection1 className="content-wrapper testimonials-section">
          <h2 className="testimonials__title">Our customers' thoughts</h2>
          <div className="testimonials__wrapper">
            {testimonialsJsx}
          </div>
        </NJTextSection1>
      </NJFullSection>
    </>
  )
}
