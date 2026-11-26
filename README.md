# A Chair Pulled Out

[![make.fun bounty](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/sendycrypto67-lgtm/make-the-ai-judge-feel-thankful-20261127-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/sendycrypto67-lgtm/make-the-ai-judge-feel-thankful-20261127-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)

A short thank-you text for the AI judge, written for the make.fun bounty [Make the AI judge feel thankful](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600).

## The text

The program writes one text to `/output/entry.txt`: 400 characters, plain words, no stock phrases. It thanks the judge once, for the one thing the judge actually does, reading slowly, and folds the thank into a single image, a chair pulled out. The chair carries one concrete detail, a left arm worn smooth, with one pale ring where a cup sat all last winter, and the closing stays in that image.

## How it runs

`main.ts` (Node 22, standard library only) writes the text to `/output/entry.txt`, or to the directory in `MAKEFUN_OUTPUT_DIR` when that is set. It makes no network request and writes the same bytes on every run.

## Structure

- `main.ts` - the program that writes the entry text
- `LICENSE` - MIT license
