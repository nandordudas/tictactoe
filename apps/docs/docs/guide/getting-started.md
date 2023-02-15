# Getting Started

This section will help you build a new Node.js project from scratch. This is an opinionated example, which can be added or subtracted with any additions.

::: warning
What you can read here is not strictly speaking, anyone can modify it in any way they like.
:::

## Recommended applications

This project requires a few applications, they are recommended.

### Available on all platforms

- [Docker Desktop] _(Docker)_
- [git]
- [GPG]
- [Visual Studio Code] _(VS Code)_

Well, if you don't use Windows, you don't need that much help, of course, this doesn't mean that the commands below can't be used for you.

### Available only on Windows

- [Gpg4win]
- [WSL 2] _(WSL)_

::: warning IMPORTANT
Must use files inside the WSL instead of Windows host because HMR may doesn't work or some feature will not work properly.
:::

::: code-group

```ps [Scoop]
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
iex "& {$(irm get.scoop.sh)} -ScoopDir ${Env:USERPROFILE}\Scoop"

scoop install git

scoop bucket add extras
scoop install gpg4win sudo

scoop bucket add nerd-fonts
scoop install JetBrains-Mono Meslo-NF-Mono
```

```ps [Winget]
winget install Docker.DockerDesktop
winget install Microsoft.VisualStudioCode
# winget install Git.Git
# winget install GnuPG.Gpg4win

code --install-extension ms-vscode-remote.remote-containers
code --install-extension ms-vscode-remote.remote-wsl
```

```ini [.wslconfig]
[wsl2]
guiApplications=false
memory=24GB
nestedVirtualization=false
pageReporting=false
processors=4
swap=8GB
```

:::

[Docker Desktop]: https://www.docker.com/products/docker-desktop/
[git]: https://git-scm.com/downloads
[GPG]: https://gnupg.org/download/index.html
[Visual Studio Code]: https://code.visualstudio.com/download
[Gpg4win]: https://www.gpg4win.org/download.html
[WSL 2]: https://learn.microsoft.com/en-us/windows/wsl/
