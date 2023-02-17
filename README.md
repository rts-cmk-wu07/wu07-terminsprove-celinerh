# Kom igang med Trainer App

Det udleverede API kan forkes fra GitHub her: https://github.com/rts-cmk-opgaver/trainer-api

Både API'et og dette projekt skal først have installeret deres dependencies med `npm i` og derefter startes de med `npm start`.

## Projekt dokumentation

### URL ADRESSER:

- `/`
- `/home`
- `/classes/:id`
- `/search`
- `/schedule`
- `/404`

### PREDEFINED USERS

- username: `user1`, password: `1234`
- username: `user2`, password: `1234`
- username: `user3`, password: `1234`
- username: `user4`, password: `1234`

### TECH STACK

Front-end: React, Tailwind

Jeg har valgt at bruge React, da det er et populært framework med et stort community omkring det. Reacts dokumentation er dybdegående og gennemført med brugbare eksempler. Derudover findes der mange React kompatible pakker, som gør at jeg som udvikler ikke skal skrive alt fra bunden selv.
Jeg har valgt at bruge Tailwind, da det ligesom react er populært, der er en god dokumentation og så er det "utility first" - altså kommer CSS framworked ikke med stylede komponenter, men derimod med predefinerede klasser, der gør det mere fleksibelt for mig at bruge som udvikler. Det er hurtigt at style sine elementer, designet bliver mere konsistent og man sløjfer et led (class names).
