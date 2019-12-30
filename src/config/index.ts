// eslint-disable-next-line no-unused-vars
import { ConfigOptions } from '../types'

const config: ConfigOptions =
    (process.env.NODE_ENV === 'development' && require('./development')).default ||
    require('./production').default

export default config