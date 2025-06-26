"use client";
import { testimonials } from '@/data/testimonials';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};


const Testimonials: React.FC = () => {
    return (
       
          
        <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-2 lg:max-w-full">
             <motion.div
            className="flex flex-wrap flex-col items-center justify-center lg:flex-row lg:flex-nowrap mb-24 lg:max-w-full"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }} >
            
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
