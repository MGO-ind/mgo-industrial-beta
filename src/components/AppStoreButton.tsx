import React from 'react'
import clsx from 'clsx'
import { GiOilDrum } from "react-icons/gi";

import { ctaDetails } from '@/data/cta'

const AppStoreButton = ({ dark }: { dark?: boolean }) => {
    return (
        <a href={ctaDetails.appStoreUrl}>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", { "text-white bg-foreground": dark, "text-foreground bg-white": !dark })}
            >
                <div className="mr-3">
                    <GiOilDrum />
                </div>
                <div>
                    <div className="text-xs">
                        Conoce más de
                    </div>
                    <div className="-mt-1 font-sans text-xl font-semibold">
                        MGO Industrial
                    </div>
                </div>
            </button>
        </a>
    )
}

export default AppStoreButton