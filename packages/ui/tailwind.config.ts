import sharedConfig from '@surfbit/tailwind-config/sharedConfig'

import type { Config } from 'tailwindcss';

export const config: Config = {
    ...sharedConfig,
    content: ["./src/**/*.{js,ts,jsx,tsx}",
        "../../apps/**/*.{js,ts,jsx,tsx}"
    ]
}