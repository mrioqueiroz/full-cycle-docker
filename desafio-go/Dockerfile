FROM golang:1.17.0-alpine3.14 as builder

WORKDIR /app 

COPY codeedu.go .

# 1.77MB
# After ommiting the symbol table, debug information and the DWARF table: 1.2MB
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" codeedu.go

FROM scratch

WORKDIR /app

COPY --from=builder /app/codeedu /usr/bin/

ENTRYPOINT ["codeedu"]
