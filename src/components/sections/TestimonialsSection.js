/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const testimonials = [
    {
        name: 'John Doe',
        text: 'This is an amazing service! Highly recommended.',
        image: 'path/to/image1.jpg'
    },
    {
        name: 'Jane Smith',
        text: 'I had a fantastic experience working with this team.',
        image: 'path/to/image2.jpg'
    },
    // Añade más testimonios aquí
];

function TestimonialsSection() {
    return (
        <section className="bg-gray-100 p-8 testimonialsSection">
            <h2 className="text-2xl font-bold mb-6 text-center">Testimonials</h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="max-w-sm p-4 m-4 bg-white rounded-lg shadow-md">
                        <img
                            className="w-16 h-16 rounded-full mx-auto"
                            src={testimonial.image}
                            alt={`${testimonial.name} photo`}
                        />
                        <p className="mt-4 text-center">{testimonial.text}</p>
                        <p className="mt-2 text-center font-bold">{testimonial.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TestimonialsSection;
