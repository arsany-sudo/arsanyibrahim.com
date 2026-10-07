# Wikidata: what you submit yourself

Prepared Oct 7, 2026. Nothing here has been submitted. You do every step while logged in to your own Wikidata account.

## Read this first: deletion risk

- **No independent press exists yet.** A search on Oct 7, 2026 found only self-published or aggregator pages (LinkedIn, RocketReach, your own site and Instagram). Wikidata's notability rule needs "serious and publicly available references".
- **The company item has one independent source.** That's the OpenCorporates mirror of the California Secretary of State record for Elite Cratif LLC (entity 202461811698, Active).
- **The human item has none.** It survives mainly through "structural need": the company item points to it as founder. That's why step 3 links the two, and why you should create both items within days of each other.
- **What fixes this:** one real press mention or published quote. Add it as a reference (P248 "stated in" or P854 "reference URL") to the occupation and founder statements as soon as it exists.
- **If you can, enter the statements by hand in the web interface.** Brand-new accounts that run QuickStatements batches look more like bulk promotion. The `.txt` file is still the exact spec, line by line.

## Order of operations

1. **Log in** to wikidata.org with your own account. Make a few small, unrelated edits over a few days first, so the account isn't a single-purpose one.
2. **Check that neither item already exists.** Search "Arsany Ibrahim" and "Elite Créatif". There were no matches on Oct 7, 2026.
3. **Create the human item (step 1 in `quickstatements.txt`).**
   - In the web UI, click "Create a new Item". Use label "Arsany Ibrahim" and description "Los Angeles-based entrepreneur and marketer, founder of Elite Créatif".
   - Add each statement with its reference: instance of (P31) human (Q5), occupation (P106) entrepreneur (Q131524), occupation (P106) marketer (Q1900657), official website (P856), X username (P2002), Instagram username (P2003), LinkedIn personal profile ID (P6634), YouTube channel ID (P2397) UCiI4b0Qw9K8NJLLEwtznh6g.
   - **Write down the new Q-ID.**
4. **Disclose your conflict of interest.** On the human item's Discussion (talk) page, post something like:
   > I am Arsany Ibrahim, the subject of this item, and I created it. I have a conflict of interest. Statements are referenced; please review.
5. **Wait at least a day.** Space out your edits.
6. **Create the company item (step 2).** Replace `QHUMAN` with your Q-ID first. Post the same disclosure on its talk page ("I am the founder of this company").
7. **Wait again, then add step 3.** It adds "owner of" (P1830) on your item, pointing to the company.
8. **Send me both Q-IDs.** I'll add `https://www.wikidata.org/wiki/Q...` to the Person `sameAs` and the Elite Créatif Organization `sameAs`, then redeploy.

## Held back on purpose

Your brief asked for these two statements, but **the only source for either is your own site**, which your brief says is not enough on its own. **The California registry also contradicts both**, so they could draw a challenge:

| Statement | Value | Problem |
|---|---|---|
| P571 inception | 2018 | The LLC's registration date shows as Apr 10, 2024 (third-party mirror; the official site blocked automated lookup). The brand may predate the LLC, but nothing independent says 2018. |
| P159 headquarters location | Los Angeles (Q65) | The registry mirror lists the LLC under Santa Clarita, not Los Angeles. |

Add them once an independent source states them. Ready-to-paste lines, with `QCOMPANY` and the source URL replaced:

```
QCOMPANY	P571	+2018-00-00T00:00:00Z/9	S854	"SOURCE_URL"	S813	+2026-10-07T00:00:00Z/11
QCOMPANY	P159	Q65	S854	"SOURCE_URL"	S813	+2026-10-07T00:00:00Z/11
```

## Left out by choice

- **P21 (sex or gender) and P27 (country of citizenship):** optional, and you left the call to me. I left them out instead of guessing.
- **Arabic label:** no spelling was given.
- **P18 image:** add it only after you upload your headshot to Wikimedia Commons yourself under a free license.
- **Items for the other companies:** none yet, per the plan. Two items to start.
