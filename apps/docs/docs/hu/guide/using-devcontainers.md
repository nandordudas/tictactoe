# Devcontainers használata

::: tip TL;DR
A devcontainers használata nem szükséges, de megkönnyíti a fejlesztő életét
:::

Ebben a témában egy kicsit olvasni kell a [Developing inside a Container] témában. De nem kell mindent tudnunk erről. Egy meglévő projektet fogunk használni, amely megfelelően be van állítva.

## Előre be van állítva

A devcontainer jelenlegi konfigurációja a `.devcontainer` mappában található.

::: code-group

```html [devcontainer.json]
Beállításokat tartalmaz az aktuális tároló megadásához. VS Code kiterjesztések
és beállítások, Docker szolgáltatás a konténer indításához és egyebek...
```

```html [docker-compose.yml]
Tartalmazza az összes szolgáltatást, amelyet a konténerben használnak majd
```

```html [Dockerfile]
Tartalmazza az összes parancsot, amely a tároló követelményeinek telepítéséhez szükséges
```

```html [.env]
Még nincs megemlítve, de a devcontainernek szüksége van rá, ha be van állítva
a `docker-compose.yml`-ben
```

:::

## Használható mint `GitHub Codespace`

Ha a `GitHub Codespace`-t szeretné használni, most van erre a legalkalmasabb alkalom.

## Hordozható

Nem kell minden bináris fájlt és alkalmazást projektenként telepítenie, és néhányat hónapokra hagynia kell. Minden projektben csak a szükséges binárisok és alkalmazások vannak, és azokat éppen időben használják fel.

[Developing inside a Container]: https://code.visualstudio.com/docs/devcontainers/containers
