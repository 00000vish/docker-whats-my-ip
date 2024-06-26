# docker-network-whats-my-ip

A container that you can add to your docker compose network which will serve static webpage with your docker networks public ip.

# Docker Run

```
docker run -e PORT=3000 -p 3000:3000 00000vish/docker-whats-my-ip
```

# Docker Compose

```
services:
▏ whats-my-ip:
▏ ▏ image: 00000vish/docker-whats-my-ip:latest
▏ ▏ container_name: whats-my-ip
▏ ▏ environment:
▏ ▏ ▏ - PORT=3000
▏ ▏ ports:
▏ ▏ ▏ - 3000:3000
▏ ▏ restart: unless-stopped
```
