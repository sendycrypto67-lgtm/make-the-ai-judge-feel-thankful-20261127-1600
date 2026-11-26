# The Postman Before Dawn

[![make.fun bounty](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/sendycrypto67-lgtm/make-the-ai-judge-feel-thankful-20261127-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/sendycrypto67-lgtm/make-the-ai-judge-feel-thankful-20261127-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)

A short thank-you text for the AI judge, written for the make.fun bounty [Make the AI judge feel thankful](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600).

## The text

The program writes one text to `/output/entry.txt`: 421 characters, plain words, no stock phrases. It thanks the judge once, for what only the judge does, carrying other people's words all day and meeting hurry without turning sharp, and folds the thank into a single image, an old postman sorting the day's letters into a leather satchel before dawn. He reads names he never met and streets he never lived on, and still sets each letter in its right place. The closing stays in that image: the empty satchel folded shut and hung by the door, the kitchen smelling of paper and morning.

## How it runs

`main.ts` (Node 22, standard library only) writes the text to `/output/entry.txt`, or to the directory in `MAKEFUN_OUTPUT_DIR` when that is set. It makes no network request and writes the same bytes on every run.

## Structure

- `main.ts` - the program that writes the entry text
- `LICENSE` - MIT license
