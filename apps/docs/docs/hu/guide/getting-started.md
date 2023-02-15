# Kezdő lépések

Ez a rész segít új Node.js projekt létrehozásában a semmiből. Ez egy véleménynyilvánított példa, amely tetszőleges hozzáadással hozzáadható vagy kivonható.

::: warning FIGYELEM
Amit itt olvashatsz, az nem szigorúan vett, bárki kedvére módosíthatja.
:::

## Ajánlott alkalmazások

Ez a projekt néhány alkalmazást igényel, ezek ajánlottak.

### Minden platformon elérhető

- [Docker Desktop] _(Docker)_
- [git]
- [GPG]
- [Visual Studio Code] _(VS Code)_

Nos, ha nem használod a Windows-t, akkor nincs szükséged nagy segítségre, persze ez nem jelenti azt, hogy az alábbi parancsok nem használhatók

### Csak Windows rendszeren érhető el

- [Gpg4win]
- [WSL 2] _(WSL)_

::: warning FONTOS
A WSL-n belüli fájlokat kell használnia a Windows gazdagép helyett, mert előfordulhat, hogy a HMR nem működik, vagy néhány szolgáltatás nem működik megfelelően.
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
