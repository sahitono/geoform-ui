import * as Sentry from "@sentry/nuxt"

// Only run `init` when process.env.SENTRY_DSN is available.
if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: "your-dsn",
  })
}
