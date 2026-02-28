# OpenRouter + Cursor Setup (Vibe Code Competition)

Use this as a checklist when configuring Cursor to use OpenRouter for the competition.

---

## 1. Get your OpenRouter API key

- Copy the **OpenRouter API key** from the competition instructions (or from [OpenRouter Keys](https://openrouter.ai/keys)).

---

## 2. Cursor Settings → Models → API Keys

1. Open **Cursor Settings** (gear icon, bottom-left).
2. Go to **Models**.
3. In the **API Keys** section:
   - **Turn ON** “OpenAI API Key”.
   - Paste your **OpenRouter API key** into the OpenAI API Key field.
   - **Enable** “Override OpenAI Base URL”.
   - Set the base URL to exactly:
     ```
     https://openrouter.ai/api/v1
     ```
   - Save/verify the key if Cursor asks.

---

## 3. Add OpenRouter models

1. Go to [openrouter.ai/models](https://openrouter.ai/models) and pick the model(s) you want.
2. In Cursor **Settings → Models**, find **“Add or search model”**.
3. Paste the **model ID** from OpenRouter (e.g. from the model’s page or the list below).
4. Click **“+ Add”**.

### Suggested model IDs (paste exactly)

| Model ID | Description |
|----------|-------------|
| `anthropic/claude-sonnet-4.5` | Claude Sonnet 4.5 |
| `openai/gpt-5-codex` | GPT-5 Codex |
| `google/gemini-2.5-pro` | Gemini 2.5 Pro |
| `x-ai/grok-code-fast-1` | Grok Code Fast |
| `openrouter/auto` | OpenRouter Auto (routing) |

---

## 4. Use the model in Agent Chat

1. Open **Cursor’s Agent chat** (e.g. from the sidebar or command palette).
2. In the model dropdown at the top, select the OpenRouter model you added.
3. Start chatting; requests will go through OpenRouter using your API key and base URL.

---

## Quick reference

- **Base URL:** `https://openrouter.ai/api/v1`
- **Models page:** https://openrouter.ai/models
- **API keys:** https://openrouter.ai/keys

If “Override OpenAI Base URL” causes issues, check [Cursor Community Forum – OpenRouter](https://forum.cursor.com/t/override-openai-base-url-breaks-requests-when-pointing-to-openrouter/142520) for workarounds.
