# To Run

You will require a server of some-kind, I recommend [Live-Server](https://github.com/ritwickdey/vscode-live-server)

# Learnings

## add stylesheet

I keep googling this literary everytime

> Correct way

```
<link rel="stylesheet" href="./index.css" />


```

> Incorrect way I keep doing it

```
<style src="./index.css"></style>


```

## Linking external javascript

```
<script type="text/javascript" src="/index.js"></script>
```

> Note: You have to add the `type="text/javascript` or you'll be wondering why are all my already defined functions erroring out _undefined_ _undefined_ _undefined_ like some glitching transformer
