# Using Devcontainers

::: tip TL;DR
Using devcontainers is not necessary but it makes the developer's life easier
:::

This topic needs a bit reading about [Developing inside a Container]. But we don't need to know everything about that. We will using an existing project which has been setup properly.

## It's preconfigured

The current configuration of devcontainer can be found inside the `.devcontainer` folder.

::: code-group

```html [devcontainer.json]
It contains settings for stating up the current container. VS Code extensions
and settings, Docker service for starting the container and others...
```

```html [docker-compose.yml]
It contains all the services which will be used inside container
```

```html [Dockerfile]
It contains all the command which need to install requirements for the container
```

```html [.env]
It's not mentioned yet but devcontainer needs if it has been setup
in `docker-compose.yml`
```

:::

## It can be used as `GitHub Codespace`

If you want to use `GitHub Codespace`, now is the best time to do so.

## It is portable

You don't need to install every binaries and application per project and left some of them for months. Every project has only the required binaries and applications and they are used just in time.

[Developing inside a Container]: https://code.visualstudio.com/docs/devcontainers/containers
