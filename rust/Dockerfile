FROM rust:1.41.0-alpine3.11 AS builder

WORKDIR /rust
COPY main.rs /rust
RUN rustc main.rs

FROM alpine:3.11

WORKDIR /rust
COPY --from=builder /rust/main .
CMD ["./main"]
