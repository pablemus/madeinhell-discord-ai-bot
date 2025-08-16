# 🤖 Discord Bot + Ollama (phi4-mini)

Un bot de Discord que responde a los slash commands utilizando tu propia instancia local de **Ollama** con el modelo `phi4-mini`.  
Este proyecto elimina la dependencia de la API de OpenAI: ¡corre 100% en tu VPS o PC!

---

## 🚀 Características

- Slash commands en Discord (ej. `/ask`)
- Conecta con Ollama (modelo `phi4-mini`) en local
- 100% configurable vía variables de entorno
- Fácil de desplegar en cualquier VPS con Node.js

---

## ⚙️ Requisitos

- **Node.js** v18+
- Una cuenta de **Discord Developer Portal** (para registrar el bot)
- **Ollama** instalado en tu máquina o VPS → [ollama.com](https://ollama.com)
- Modelo **phi4-mini** descargado:
  ```bash
  ollama pull phi4-mini:latest
  ```

---

## 🔑 Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
DISCORD_BOT_TOKEN=tu_token_de_discord
CLIENT_ID=tu_client_id
GUILD_ID=tu_guild_id
OLLAMA_URL=http://127.0.0.1:11434
```

- `DISCORD_BOT_TOKEN` → El token de tu bot (desde Discord Developer Portal).
- `CLIENT_ID` → ID de la aplicación del bot.
- `GUILD_ID` → ID del servidor donde registrarás los slash commands.
- `OLLAMA_URL` → URL de tu instancia de Ollama (por defecto `http://127.0.0.1:11434`).

---

## 📦 Instalación

Clona el repo e instala dependencias:

```bash
git clone https://github.com/tuusuario/discord-ollama-bot.git
cd discord-ollama-bot
npm install
```

---

## ▶️ Uso

Arranca el bot:

```bash
npm run dev
```

Si todo está correcto verás en consola algo como:

```
Refrescando los slash commands
Comandos refrescados
Ready! logged in as TuBot#1234
```

En Discord, prueba:

```
/ask texto: ¿Qué es Node.js?
```
