FROM golang:1.13.7-alpine3.11 AS builder

WORKDIR /go
COPY main.go /go
RUN go build main.go

FROM alpine:3.11

WORKDIR /go
COPY --from=builder /go/main .
CMD ["./main"]
