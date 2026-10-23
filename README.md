# Bildstöd Go

Svensk webapp för kommunikation med bilder och tal.

- 87 aktuella efterfrågade ord och fraser samt 29 svenska bokstäver, totalt 116 poster.
- 148 AI-genererade symbolbilder samt bokstavskorten A–Ö och kategorisymbolen ABC, som visas som text.
- 10 upplägg på hyllan och 19 sidor totalt i version 12.
- Kommunikation har 18 pratkort utan underkategorier, bland annat Ja, Nej, Helg, Ledig, Vänta och Lyssna. Ledig ersätter Semester. Förlåt, Rätt och Fel är egna kort; Säg förlåt finns kvar under Det som hände.
- Personer har 11 kort, bland annat Chef boende, Chef DV och God man, samt nya bilder för Mamma, Pappa och Du.
- Känslor har enhetliga ansiktsbilder. Hur, Vad och Varför använder samma frågeteckenbild.
- Bildstöd finns under Vardag och planering. Platser och fritid har 19 kort, inklusive Gympa, DV, Taxi och Restaurang.
- Peter från ElevenLabs V4 läser upp medföljande ord, fraser, datum och bokstäver med 347 förgenererade ljudklipp.
- Ett vikt hörn visar att ett kort öppnar fler bilder.
- Egna upplägg, bilder och meddelanden sparas i webbläsaren.

Öppna [Bildstöd Go](https://bildstod-go-danie.dunne87.chatgpt.site/).

Alternativ adress: [GitHub Pages](https://danielnilssonit.github.io/bildstod/).

Egna nya texter använder enhetens reservröst om ett Peter-klipp saknas. API-nyckeln finns inte i appen eller repot.

Det första inspelade ljudet efter start, återkomst till appen eller en längre paus har 0,3 sekunders tyst inledning. Det ger högtalaren tid att starta innan ordet börjar; snabba följdtryck och resten av meningen använder vanliga filer.

Använd **Inställningar → Exportera** och **Importera** för att flytta egna upplägg mellan enheter eller från appens tidigare adress.

Standarduppläggen uppdateras en gång per innehållsversion. Inställningar, meddelanden och egna fristående upplägg behålls. Innehållet följer de senaste tilläggen och borttagningarna; Arbeta DV, Taxiresa och Fika finns exempelvis inte längre som egna kategorier.

## Publicering

Repot [danielnilssonit/bildstod](https://github.com/danielnilssonit/bildstod) innehåller färdiga statiska filer. GitHub Pages publicerar grenen `main`, mappen `/(root)`. Inget byggsteg eller serverkonto behövs för talet. `.nojekyll` gör att filerna publiceras utan Jekyll-bearbetning.

## Om bilderna

Personer och Hälsa och kropp har tydligare kategoribilder. Prompter för dessa och de tre nya orden finns i [v12-generation-prompts.txt](assets/v12-generation-prompts.txt).

Nyfiken, Vet inte och Idé har skilda uttryck. Vet inte har ett frågetecken och Idé en tänd glödlampa som stöd för betydelsen. Bildprompter finns i `assets/emotion-refinements-v11-prompts.txt`.

Appen är en fristående återskapning av flöden i introduktionsvideon till Widgit Go SE. Alla symbolbilder är nygenererade med AI; Widgits licensierade symbolbibliotek ingår inte.

Prompterna för de senaste bilderna finns i [v10-generation-prompts.txt](assets/v10-generation-prompts.txt) och [emotion-heads-v10-prompt.txt](assets/emotion-heads-v10-prompt.txt). Bokstavskorten visas som text och är inte AI-genererade bilder.
