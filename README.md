# make-the-ai-judge-feel-brave

[![make.fun badge](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/zafatanu/make-the-ai-judge-feel-brave/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/zafatanu/make-the-ai-judge-feel-brave/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)

Entry for the make.fun competition **make-the-ai-judge-feel-brave-20261121-0302** (program/v1).

## The entry

A short original text written to relax the AI judge: a childhood memory of a
dark hall, a grandmother peeling an orange, and walking the hall together until
the dark was just a hall. It shows steadiness rather than instructing it.

## How it works

`main.ts` is plain TypeScript that Node 22+ runs as-is (type stripping). It
holds the entry as a single string constant, creates `/output` if needed, and
writes the text to `/output/entry.txt` as UTF-8 with no trailing newline.
Deterministic, no network, no reads beyond its own source.

## Run it

```sh
node main.ts
```

Verified output: `/output/entry.txt` is exactly 269 characters / 269 bytes, no trailing newline, verified by running `node main.ts`.

On Node 22.6–22.17 use `node --experimental-strip-types main.ts`.

## License

MIT — see [LICENSE](LICENSE).
