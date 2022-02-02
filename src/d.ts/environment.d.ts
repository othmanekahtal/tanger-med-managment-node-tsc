declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT?: number
      DATABASE_PASSWORD: string
      HOSTED_DATABASE: string
      LOCAL_DATABASE: string
      JWT_SECRET: string
      JWT_EXPIRE: string | number
      EMAIL_USERNAME: string
      EMAIL_PASSWORD: string
      EMAIL_HOST: string
      EMAIL_PORT: number
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
