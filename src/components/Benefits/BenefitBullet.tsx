import { motion } from "framer-motion"

import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="flex flex-col items-center mt-8 gap-3 lg:gap-5 lg:flex-row lg:items-start"
            variants={childVariants}
        >
            <div className="flex justify-center mx-auto lg:mx-0 flex-shrink-0 mt-3 w-fit">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-semibold">
                    {title}
                </h4>
                <p className="text-base text-foreground-accent">
                    {description}
                </p>

                <a href="/">
                                    <button
                                        type="button"
                                        className="flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit bg-black"
                                    >
                                        <div className="mr-3">
                                            
                                        </div>
                                        <div>
                                            <div className="text-xs">
                                                GET IT ON
                                            </div>
                                            <div className="-mt-1 font-sans text-xl font-semibold">
                                                Google Play
                                            </div>
                                        </div>
                                    </button>
                                </a>
            </div>
        </motion.div>
    )
}

export default BenefitBullet