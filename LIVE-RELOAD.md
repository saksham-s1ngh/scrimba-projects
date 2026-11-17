## Doc file created with Claude

# Live-reload with Vite

Every project folder is a Vite app. Vite serves it locally and refreshes the browser on every save.

## One-time setup (already done)

- `pnpm-workspace.yaml` at the root marks every subfolder as a project.
- `node_modules` is listed in `.gitignore`, so installed packages stay out of GitHub.

## Adding a new Scrimba project

1. Download the zip from Scrimba and unzip it into this folder.
2. From the root (`scrimba-projects/`), run:

   ```sh
   pnpm install
   ```

   This links Vite into the new project from pnpm's shared store, so no extra copy is downloaded.

## Working on a project

```sh
cd <project-folder>
pnpm dev
```

Open the URL it prints (usually http://localhost:5173). Saving in nvim (`:w`) updates the browser.

Stop the server with `Ctrl+C`.

### Running it next to nvim

- tmux: `pnpm dev` in one pane, nvim in another.
- Inside nvim: `:vsplit | term pnpm dev`. Press `<C-\><C-n>` to leave terminal mode.

## Folder without a package.json

```sh
cd <folder>
pnpm dlx vite
```

## When done

Commit and push to GitHub, then paste the solution into Scrimba for checking.
