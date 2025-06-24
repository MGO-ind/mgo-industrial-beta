"use client";
import { testimonials } from '@/data/testimonials';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
    return (
       
          
        <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-2 lg:max-w-full">
             <motion.div
            className="py-16 px-4 sm:px-6 lg:px-8 bg-hero-background"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }} >
            
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className=""
                >
                    <div className="flex items-center text-center mb-4 w-full justify-center lg:justify-center">
                        {/*<Image
                            src={testimonial.avatar}
                            alt={`${testimonial.name} avatar`}
                            width={50}
                            height={50}
                            className="rounded-full shadow-md"
                        />*/}
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-secondary">{testimonial.name}</h3>
                            <p className="text-sm text-foreground-accent">{testimonial.role}</p>
                        </div>
                    </div>
                    <p className="text-foreground-accent text-center lg:text-center">&quot;{testimonial.message}&quot;</p>
                </div>
            ))}

              </motion.div>

        </div>
    );
};

export default Testimonials;
