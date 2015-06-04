# brobbot-google

A brobbot plugin for googling.

```
brobbot google [me] <query>
```

Googles `query` and returns 1st result's URL

## Configuration

### Referer

```bash
BROBBOT_GOOGLE_REFERER=url
```

Set the referer URL to pass to the Google API (see https://developers.google.com/web-search/docs/).
