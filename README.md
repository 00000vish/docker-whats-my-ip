# docker-network-whats-my-ip

A docker container that spins up a web-page with your docker networks public IP.

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

# Screenshot

![Screenshot 2024-06-26 032817](https://github.com/00000vish/docker-whats-my-ip/assets/11762008/8c549f64-ada4-435c-944a-29e55038d228)
