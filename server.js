import cliDev from 'next/dist/cli/next-dev.js'
import cliProd from 'next/dist/cli/next-start.js'

const config = (await import(`./config.js`)).default(process.env.NEXT_PUBLIC_NODE_ENV)

if (process.env.NEXT_PUBLIC_NODE_ENV == 'dev') {
    cliDev.nextDev(['-p', config.port || 3000]);
} else {
    cliProd.nextStart(['-p', config.port || 3000]);
}

