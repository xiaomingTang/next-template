# docker build --build-arg NEXT_PUBLIC_APP_ENV=development -t next-test . 
# docker run --env NEXT_PUBLIC_APP_ENV=staging --name  next-test  -p 3000:3000  -d  next-test

FROM registry-vpc.cn-hangzhou.aliyuncs.com/box3/box-web-portal:base-v2 AS deps
WORKDIR /app
COPY package.json yarn.lock* ./
RUN YARN_CACHE_FOLDER=/root/.yarn-cache yarn --frozen-lockfile --ignore-scripts


FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN  yarn build


# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
RUN mkdir -p ./public/writable \
    && chown nextjs:nodejs ./public/writable
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node-utils ./node-utils
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "run-standalone"]
