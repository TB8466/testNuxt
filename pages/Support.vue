<template>
  <div>
    <section class="bg-support bg-cover bg-center pt-28 ">
      <div class="text-white">  
        <div class="pt-28 pb-52">
          <p class="text-6xl font-bold leading-tight">Velkommen til support portalen <br/></p>
          <p class="text-2xl">Find svar på dine tekniske spørgsmål og udfordringer her på Viasols support portal. <br> Vælg en overordnet kategori, så løser vi problemet sammen med dig.</p>
        </div>
      </div> 
       <section class="grid place-items-center  py-10 relative lg:mx-[25%] mx-[5%]">
      <div class=" rounded-lg shadow-2xl lg:max-w-screen-xl bg-[#f9f9f9] p-10 py-8 lg:absolute h-fit w-fit">
        <div class="" >
          <div class="flex justify-center items-center pb-4">
            <div class="shrink w-24 h-[2px] bg-[#2c95c9]"></div>
          </div>
          <h1>Hvilket produkt oplever du problemer med?</h1>
          <p>Vælg en kategori herunder for at finde løsningen på din tekniske udfordring.</p>
          <p class="text-sm"> <i>Er der forekommet en skade ved levering eller montering, så opret en sag her. </i></p>
          <p class="py-2 underline-offset-auto font-black italic">STATUSMEDDELELSE: </p>
          <p>Grundet energikrisen, er der på nuværende tidspunkt længere svartid. Servicesager hvor vi er nødt til at inddrage vores samarbejdspartnere (f.eks. vedrørende garantisager), vil tage desto længere tid at få svar på – dette da de, ligesom alle led i resten af branchen, er under enormt pres.</p>
        
        </div>
      </div>
      </section>
    </section>


    <div class="h-24 bg-dividerlightblue mt-[-1px]"></div>
    <InlineBlock :noPading="true">
<!--     <div class="lg:mx-[20%] lg:py-[20%] m-[5%] ">
      <div class="flex "> -->
        <template #col1>
          <ButtonCom @click="scrollMeTo('sonne')">SONNEN</ButtonCom>
        </template>
        <template #col2>
          <ButtonCom @click="scrollMeTo('huawei')">HUAWEI</ButtonCom>
        </template>
        <template #col3>
          <ButtonCom @click="scrollMeTo('growatt')">GROWATT</ButtonCom>
        </template>
        <template #col4>
          <ButtonCom @click="scrollMeTo('generelt')">GENERELT</ButtonCom>
        </template>
      <!-- </div>
      </div> -->
    </InlineBlock>

    <section class="py-[5%]">

        <div refs="sonne">
           <div>
            <span class="inline-block align-top lg:w-1/2 pt-[33px] text-left">
              <div class="shrink w-24 h-[2px] bg-[#2c95c9]  "></div>
              <div class="py-4">
                <strong class="text-4xl">Sonnen hybridanlæg</strong>
                <p class="py-2 text-sm">Her finder du svar på tekniske spørgsmål vedr. Sonnen</p>
              </div>
            </span>
            <span class="inline-block">
              <img src="../assets/img/support/supportSonnenInverterHybrid.jpg" alt="" height="151" width="151" style="">
            </span>
          </div>
        </div>
    </section>
 
  

  <section>
    <div  class="inline-block align-top lg:w-1/3 px-[33px] pt-[33px] text-left leading-[1.9em] ">
            <!-- 1 -->
            <span class="">
              <h1 class="py-2 font-bold text-2xl">Introduktion til Sonnen</h1>
              <Collapse class="bg-sky-500/100">
              <template v-slot:collapse-header class=""><p class="text-white ">Hvordan fungerer Sonnen anlægget?</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left text-white pt-4">
                  <p>
                    For at hjælpe dig med at komme ordentligt i gang med dit solcelleanlæg,
                     har vi udarbejdet en introduktions guide som giver dig et overblik over 
                     hvordan din batteribank fungerer.
                  </p>
                  <br>

                  <p>Find introduktionsguiden her: <a href="https://www.viasol.dk/wp-content/uploads/Introduktion-Sonnen.pdf" target="_blank"> <i> <b> https://www.viasol.dk/wp-content/uploads/Introduktion-Sonnen.pdf </b></i></a> </p>
                  
                </div>
              </template>
            </Collapse>
            </span>
            <!-- 3 -->
            <span class="">
              <h1 class="py-4 font-bold text-2xl">Batteri</h1>
              <Collapse class="">
              <template v-slot:collapse-header class=""><p class="">Mit batteri starter først opladning sent på dagen?</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                 <p> 
                  Det er Sonnens forecast funktion der er aktiveret. 
                  Denne funktion er med til at optimere økonomien for 
                  anlægget hvis man får afregning for sin overskudsproduktion 
                  af solcellestrøm via sit elselskab.
                  </p>
                  <br>
                  <h1 class="text-primary">Nedenfor følger uddybende beskrivelse:</h1>
                  <br>
                  <p>
                    Der ligger en begrænsning på feed-in på 3.68kW når man har et 1-faset system ved lovkrav.
                  </p>
                  <br>
                  <p>
                    Hvis man derfor producerer 4.5 kW, har et fuldt opladt batteri (SOC 100%) og forbruger 0.5 kW
                     i huset ville man reelt kunne eksportere 4 kW (feed-in), men feed-in er begrænses til 3.68 kW.
                  </p>
                  <br>
                  <p>
                    Sonnen forecast funktionen kobler dit forbrugsmønster sammen med vejrdata. 
                    Sonnen systemet vurderer således om det giver mening først at starte med at lade batteriet senere på dagen, 
                    da systemet kan forudsige om du vil opnå et fuldt batteri alligevel. Således optimeres feed-in til 
                    nettet og den mængde strøm der evt. vil blive ramt af begrænsningen på feed-in på 3,68 kW minimeres.
                  </p>
                  <br>
                  <p>
                    Funktionen kan slås fra hvis man ikke ønsker denne. 
                    Gør man dette vil batteriet starte med at lade fra starten af 
                    dagen så snart der er excess power (overskudsproduktion i forhold til forbrug)
                  </p>
                  <br>
                  <h1 class="text-primary">Jeg ønsker forecast funktionen slået fra:</h1>
                  <br>
                  <p>
                    Det er muligt at deaktivere Forecast funktionen via Sonnens internetportal 
                    eller ved at oprette en servicesag nederst på vores supportside, 
                    hvor du blot angiver dine relevante oplysninger og din forespørgsel om deaktivering af funktionen.
                  </p>
                  <br>
                  <p>
                    Ønsker du selv at deaktivere funktionen, gøres dette ved at følge guiden nedenfor, eller downloade den her:
                  </p>
                  <br>
                  <h1 class="text-primary"> <a href="https://www.viasol.dk/wp-content/uploads/2022/06/Forecast.pdf" target="_blank">https://www.viasol.dk/wp-content/uploads/2022/06/Forecast.pdf</a></h1>
                  <br>
                  <h1>1. Tilgå Sonnens konfigurationsportal</h1>
                  <br>
                  <p>
                    Vi anbefaler at der benyttes enten PC, Mac, Chromebook (el. lign) for at tilgå portalen og derved få adgang til de nødvendige indstillinger. 
                    Vær opmærksom på at den enhed du benytter til at tilgå portalen også skal være tilkoblet samme net som Sonnen enheden selv.
                  </p>
                  <br>
                  <p>
                    1.1 Skriv følgende webadresse i din internetbrowser: <a href="https://find-my.sonnen-batterie.com" target="_blank">https://find-my.sonnen-batterie.com</a>
                  </p>
                  <br>
                  <p>2.1 Tryk da på ”Configure Assistant 2.0” og indtast følgende login informationer:</p>
                  <br>
                  <p class="py-2">  User: <span class="border-b-2 border-solid border-black text-white ">______________</span>user </p>
                  <p>  Password: <span class="border-b-2 border-solid border-black text-white">______________</span>sonnenUser3552 </p>
                  <br>
                  <h1>2. Deaktiver Forecast</h1>
                  <br>
                  <p>2.1 Navigér til ”Settings” under ”Menu” i venstre side af portalen</p>
                  <br>
                  <p>2.2 Under settings finder du sektionen ”Weather forecast”. Denne funktionen er aktiveret fra fabrikken, men kan deaktiveres ved at trykke på ”Disable”.</p>
                  <br>
                  <img src="../assets/img/support/support11111.png" alt="">

                </div>
              </template>
            </Collapse>
            </span>
              <!-- 5 -->
            <span class="">
              <h1 class="py-4 font-bold text-2xl">Overvågning via App og Computer</h1>
              <Collapse class="">
              <template v-slot:collapse-header class=""><p class="">Jeg mangler adgang til overvågningen</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>
                    My For at få adgang til dit Sonnen system skal du blot registrere dig som bruger via computer og app (MySonnen).
                  </p>
                  <br>
                  <p>
                    Følg vejledningen herunder eller benyt linket:
                  </p>
                  <br>
                  <p><a href="https://www.viasol.dk/wp-content/uploads/2021/07/Sonnen-overvagning_opret-login.pdf" target="_blank" class="text-primary font-bold">  Sonnen overvågning opret login </a> </p>
                  <br>
                  <h2>Via PC/Mac:</h2>
                  <br>
                  <p>
                    1. Benyt link: my.sonnen.de <br>       (https://account.sonnen.de/users/sign_in)
                  </p>
                  <br>
                  <p>2. Vælg registrer som vist nedenfor og indtast din email</p>
                  <br>
                  <img src="../assets/img/support/support404.png" alt="">
                  <br>
                  <p>
                    OBS! Her skal bruges din email (Samme email som installatøren har fået oplyst af dig og brugt  ved installationen af anlægget)
                  </p>
                  <br>
                  <h1>Via app:</h1>
                  <br>
                  <div class="inline-block align-top lg:w-1/3 text-left leading-[1.9em]">
                    <img src="../assets/img/support/supportSonnen-App-logo.png" width="" height="" alt="">
                  </div>
                  <div class="inline-block align-top lg:w-2/3 text-left leading-[1.9em]">
                    <p>1. Download MySonnen App</p>
                    <span>2. Åben App’en og vælg registrer som vist nedenfor og indtast din email.</span>
                  </div>
                  <br>
                  <p>
                    (Vigtigt! Samme email som installatøren har benyttet ved installationen)
                  </p>
              

                </div>
              </template>
            </Collapse>
            </span>
              <!-- 7 -->
              <div class="py-3 ">
              <Collapse class="">
              <template v-slot:collapse-header class=""><p class=" ">Introduktion til MySonnen Appen</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>
                    sonnen-appen <b> MySonnen </b>viser dig alle dine energidata på farten! Du kan følge alt på din telefon, 
                    herunder solcelleproduktionen, husstandens forbrug, samt batteriets ladestand.
                  </p>
                  <br>
                  <p>
                    Hvis du har installeret en ekstra inverter kan du aflæse den totale produktion fra hele anlægget via din MySonnen app.
                  </p>
                  <br>
                  <p>
                    For at downloade appen skal du blot søge efter “my sonnen” på din Google Play-butik eller App Store.
                  </p>
                  <br>
                  <p>
                    Følg vejledningen beskrevet herunder eller via linket
                  </p>
                  <br>
                  <p><a href="https://www.viasol.dk/wp-content/uploads/2021/07/Introduktion-til-My-Sonnen-App.pdf" target="_blank" class="text-primary font-bold">  Introduktion til My Sonnen App</a> </p>
                  <br>
                  <img src="../assets/img/support/supportSonnen-App-logo.png" alt="">
                  <br>
                  <h1 class="text-primary">Forklaring af udtryk angivet i MySonnen appen:</h1>
                  <br>
                  <p>
                    Production                      = Produktion fra solceller i kW
                  </p>
                  <br>
                  <p>Consumption                  = Husstandens forbrug i kW</p>
                  <br>
                  <p>Sonnen battery               = Batteriet ladning/afladning i kW</p>
                  <br>
                  <p>State of charge                = Batteriets ladestand i %</p>
                  <br>
                  <p>Independence i % af din solcellestrøm          = Hvor meget af dit forbrug er dækket </p>
                  <br>
                  <p>Grid Buy i %                     = Hvor meget strøm køber du på nettet</p>
                  <br>
                  <p>Self consumption i % forbruger du selv    = Hvor meget af din solcellestrøm </p>
                  <br>
                  <p>Grid feed-in i % sender du ud på elnettet              = Hvor meget af din solcellestrøm </p>
                </div>
              </template>
            </Collapse>
              </div>
               <!-- 9 -->
            <span class="">
              <h1 class="py-4 font-bold text-2xl">Mit anlæg er offline</h1>
              <Collapse class="">
              <template v-slot:collapse-header class=""><p class=" ">Jeg kan ikke følge min produktion på anlægget</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>
                    Hvis dit sonnenBatterie ikke længere har forbindelse til internettet, 
                    kan det hjælpe at genstarte internet routeren. Se evt. din brugervejledningen 
                    til <b> din router </b>for at få oplysninger om hvordan du gør dette. Ellers skal du forsøge at 
                    frakoble routeren fra strømforsyningen og derefter tilslutte strømkablet igen efter 5 min
                  </p>
                  <br>
                  <h1>Genstart sonnen</h1>
                  <br>
                  <p>
                    Hvis dit sonnenBatterie ikke fungerer korrekt, kan det hjælpe at genstarte systemet. 
                    For at genstarte systemet skal du blot følge nedenstående vejledningen. 
                    Du kan også downloade vejledningen via linket:
                  </p>
                  <br>
                  <p><a href="https://www.viasol.dk/wp-content/uploads/2021/07/Anlaeg-offline_Tjek-internet_Sonnen_001.pdf" target="_blank" class="text-primary font-bold">  Anlæg offline_Tjek internet_Sonnen_001</a> </p>
                  <br>
                  <h1>Sluk for sonnenBatteriet</h1>
                  <br>
                  <img src="../assets/img/support/supportSonnen-genstart-150x150.png" alt="">
                  <br>
                  <p>1. Sluk for batterierne – Slå relæet F1 over på off</p>
                  <br>
                  <p>2. Sluk for Sonnen anlægget – drej knappen SPV over på 0</p>
                  <br>
                  <p>
                    3. Gå til din eltavle og slå relæet til dit solcelleanlæg fra 
                    (Sluk evt. for din internet router hvis der har været problemer med at få anlægget online)
                  </p>
                  <br>
                  <p>4. Afvent 10 min.</p>
                  <br>
                  <h1 class="text-primary">Tænd for sonnenBatteriet igen</h1>
                  <br>
                  <p>1. Gå til din eltavle og slå relæet til solcelleanlægget til</p>
                  <br>
                  <p>2. Tænd for Sonnen anlægget – drej SPV knappen over på 1</p>
                  <br>
                  <p>3. Tænd batterierne – Slå relæet over på ON</p>
                  <br>
                  <p>Herefter skulle anlægget gerne være online igen</p>
                  <br>
                  <h1 class="text-primary">Stadig problemer?</h1>
                  <br>
                  <h1>FORBIND NETVÆRKSKABLET DIREKTE TIL DIN COMPUTER:</h1>
                  <br>
                  <img src="../assets/img/support/supportSonnen-tjek-internetkabel-150x150.png" alt="">
                  <br>
                  <p>1. Fjern netværkskablet fra din sonnen enhed <b> XS03 </b> og forbind det direkte til din computer.</p>
                  <br>
                  <p>2. Slå WIFI signalet fra på din computer.</p>
                  <br>
                  <p>3. Test om du kan gå på nettet og finde en ny webside du ikke har besøgt tidligere.</p>
                  <br>
                  <div class="px-5">
                    <p>1. hvis ja fungerer netværkskablet</p>
                    <br>
                    <p>2. hvis nej, fjern da kablet fra din router (se eksempel på en router herunder) og skift til en anden port i din router</p>
                    <br>
                    <p>3.hvis der stadig ikke er forbindelse er netværkskablet formentlig i stykker og skal udskiftes</p>
                  </div>
                  <br>
                  <img src="../assets/img/support/supportInternet-router.png" alt="">
                  <br>
                  <h1 class="text-primary">OBS! ER DER INSTALLERET EN WIFI REPEATER?</h1>
                  <br>
                  <img src="../assets/img/support/supportAsusu-repeater-150x150.png" alt="">
                  <br>
                  <p>
                    Hvis der er opsat en WIFI repeater mellem din router og Sonnen systemet 
                    skal denne repeater genstartes og opsættes på ny, så der er forbindelse 
                    mellem Sonnen enheden og WIFI repeateren.
                  </p>
                  <br>
                  <p> <i>(WIFI repeater er en enhed der er placeret i en stikkontakt hvorfra netværkskablet forbindes til Sonnen enheden)</i></p>
                  
                </div>
              </template>
            </Collapse>
            </span>
              <!-- 11 -->
              <span class="">
              <h1 class="py-4 font-bold text-2xl">Genstart af Sonnen</h1>
              <Collapse class="">
              <template v-slot:collapse-header class=""><p class=" ">En genstart løser langt de fleste problemer</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                 <p>Genstart af sonnen systemet er altid første skridt hvis der opstår problemer med anlægget. Følg derfor vejledningen herunder.</p>
                 <br>
                 <h1>Genstart sonnen</h1>
                 <br>
                 <p>
                  Hvis dit sonnenBatterie ikke fungerer korrekt, kan det hjælpe at genstarte systemet. 
                  For at genstarte systemet skal du blot følge nedenstående vejledningen. 
                  Du kan også downloade vejledningen her:
                  </p>
                  <br>
                  <h1 class="text-primary">Sonnen Eclipse & Genstart</h1>
                  <br>
                  <h1>Sluk for sonnenBatteriet</h1>
                  <br>
                  <p>På toppen af dit Sonnen kabinet finder du de forskellige knapper der skal anvendes</p>
                  <br>
                  <img src="../assets/img/support/supportSonnen-genstart-150x150.png" alt="">
                  <br>
                  <p>1. Sluk for batterierne – Slå relæet F1 over på off</p>
                  <br>
                  <p>2. Sluk for Sonnen anlægget – drej knappen SPV over på 0</p>
                  <br>
                  <p>
                    3. Gå til din eltavle og slå relæet til dit solcelleanlæg fra 
                    (Sluk evt. for din internet router hvis der har været problemer med at få anlægget online)
                  </p>
                  <br>
                  <p>4. Afvent 10 min</p>
                  <br>
                  <h1>Tænd for sonnenBatteriet igen</h1>
                  <br>
                  <p>1. Gå til din eltavle og slå relæet til solcelleanlægget til</p>
                  <br>
                  <p>2. Tænd for Sonnen anlægget – drej SPV knappen over på 1</p>
                  <br>
                  <p>3. Tænd batterierne – Slå relæet over på ON</p>
                  <br>
                  <h1>Genstarten er udført.</h1>
                </div>
              </template>
            </Collapse>
            </span>
              <!-- 13 -->
            <span class="">
              <h1 class="py-4 font-bold text-2xl">Mit anlæg lyser blåt / gult / rødt</h1>
              <Collapse class="">
              <template v-slot:collapse-header class=""><p class=" ">Hvad betyder lyset i logoet på mit anlæg?</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>sonnen eclipse (cirklen over sonnen logoet) fungerer som statusindikator for dit sonnenBatterie. Lyset er pulserende og varierer derfor i styrke.</p>
                  <br>
                  <p>
                    Farven gør det nemmere for dig at finde ud af, om der er et problem med batteriet, og om der er behov for fejlfinding. 
                    Nedenfor finder du en enkel vejledning i de forskellige farvers betydning, og de første trin, du kan tage for at løse problemet.
                  </p>
                  <br>
                  <p>
                    Bemærk, genstart af SonnenBatteriet er altid første step for at få anlægget tilbage i drift igen. Se vejledning til <span class="text-primary"> Genstart af Sonnen </span>her på siden.
                  </p>
                  <br>
                  <h1>Farveindikation</h1>
                  <br>
                  <h2>1. Blåt</h2>
                  <br>
                  <p>Normal betjeningstilstand for systemet.</p>
                  <br>
                  <h2>2. Gult</h2>
                  <br>
                  <p>
                    Ingen internetforbindelse. Anlægget er ikke afhængig af internetforbindelse for at producere, 
                    du kan blot ikke følge med på overvågningen, og derfor er det ikke et akut problem.
                  </p>
                  <br>
                  <p>Kontroller, at internetforbindelsen fungerer i huset. Følg endvidere vejledningen her på siden, <b> Mit anlæg er offline.</b></p>
                  <br>
                  <h2>3. Rødt</h2>
                  <br>
                  <p>Problem registreret: Genstart systemet. Hvis det ikke løser problemet, udfyld service sag her på siden og du vil blive kontaktet mht. service.</p>
                  <br>
                  <p>Download vejledning til genstart her:</p>
                  <br>
                  <p><a href="https://www.viasol.dk/wp-content/uploads/2021/07/Sonnen-Eclipse-Genstart.pdf" target="_blank" class="text-primary font-bold"> Sonnen Eclipse & Genstart</a> </p>
                  
                </div>
              </template>
            </Collapse>
            </span>
            </div>
    <div class="inline-block align-top lg:w-1/3 px-[33px] pt-[33px] text-left leading-[1.9em] ">
      
            
            <!-- 2 -->
            <span class="">
              <h1 class="py-2 font-bold text-2xl">Køb af strøm fra nettet (Time of Use)</h1>
              <Collapse class="">
              
              <template v-slot:collapse-header class=""><p class="">Hvordan indstiller jeg til køb af billig strøm?</p></template>
              <template v-slot:collapse-content>
                <div class="text-left pt-4">
                  <p>
                    Time of Use funktionen gør det muligt at vælge et specifikt tidsrum på dagen, 
                    hvor batteriet tvinges til at oplade fra elnettet. Dette kan især være brugbart 
                    hvis man ønsker at købe strøm på tidspunkter hvor priserne af lave, 
                    til brug når de igen er høje.
                  </p>
                  <br>
                  <p>
                    For at indstille denne funktion, skal du blot følge de nedenstående trin.
                  </p>
                  <h2 class="py-2">1. Tilgå Sonnens konfigurationsportal</h2>
                  <p>
                    Vi anbefaler at der benyttes enten PC, Mac, Chromebook (el. lign) for at tilgå 
                    portalen og derved få adgang til de nødvendige indstillinger. Vær opmærksom på at 
                    den enhed du benytter til at tilgå portalen også skal være tilkoblet samme net som Sonnen enheden selv.
                  </p>
                  <br>
                  <p>
                    1.1 Skriv følgende webadresse i din internetbrowser: <a href="https://find-my.sonnen-batterie.com/" target="_blank"></a>  
                  </p>
                  <br>
                  <p>
                    1.2 Tryk da på “Configure Assistant 2.0” og indtast følgende login informationer.
                  </p>
                  <br>
                  <p class="py-2">  User: <span class="border-b-2 border-solid border-black text-white ">______________</span>user </p>
                  <p>  Password: <span class="border-b-2 border-solid border-black text-white">______________</span>sonnenUser3552 </p>
                  <br>
                  <h2 class="py-2">2. Find Time of Use</h2>
                  <p>2.1 Navigér til “Settings” under “Menu” i venstre side af portalen.</p>
                  <br>
                  <p>2.2 Under settings finder du sektionen “Operating Mode” som indeholder funktionen “Time-of-Use”.</p>
                  <br>
                  <p>2.3 Dernæst trykkes der på “Add new charge event”.</p>
                  <img src="../assets/img/support/supportTOU1.png" alt="">
                  <br>
                  <h2>3. Indstil Time of Use</h2>
                  <br>
                  <p>
                    3.1 Efter step 2.3 skulle ”Configure charging” menuen gerne vises. 
                    Her angives et tidsrum hvor batteriet oplader fra nettet, 
                    med udgangspunkt i for hvornår batteriet starter med at oplade fra elnettet 
                    (Start) og et tidspunkt for hvornår batteriet stopper med at oplade (End).
                  </p>
                  <br>
                  <p>
                    3.2 Dernæst indstilles ”Max. Power from grid”. Denne funktion angiver størrelsen på effekten 
                    (W) som batteriet lader med i dette tidsrum. Vi anbefaler at sætte denne til det maksimale 
                    ved at føre slideren helt til højre (ønsker man derimod at indstille batteriet til hverken at op- 
                    eller aflade, kan denne sættes til 0).
                  </p>
                  <br>
                  <img src="../assets/img/support/supoortTOU2.png" alt="">
                  <br>
                  <p>3.3 Tryk nu på ”apply” som foroven og herefter på ”Save schedule”, som det ses under step 2.3. Indstillingen skulle nu være gemt.</p>
                </div>
              </template>
              </Collapse>
            </span>

            <!-- 4 -->
            <span class="">
              <h1 class="py-4 font-bold text-2xl">Hvorfor sender mit anlæg strøm på nettet?</h1>
              <Collapse class="">
              
              <template v-slot:collapse-header class=""><p class="">Mit anlæg sender og trækker strøm fra nettet, hvorfor det?</p></template>
              <template v-slot:collapse-content>
                <div class="text-left pt-4">
                  <p>
                    Selv når anlægget kører optimalt vil man kunne opleve meget små værdier af tilgang eller afgang til elnettet.
                  </p>
                  <br>
                  <p>
                    Anlægget fungerer helt lavpraktisk således:
                  </p>
                  <br>
                  <p>
                    Når der er solcelleproduktion, sender Sonnen systemet en minimal 
                    mængde strøm ud mod elnettet for at blokere strømmen fra elnettet 
                    i at komme ind i husstanden. På samme måde kan man opleve at der trækkes 
                    en minimal mængde strøm fra nettet for at blokere batteriet fra at sende strøm ud på nettet.
                  </p>
                  <br>
                  <p>
                    Selvom Sonnen systemet har en meget hurtig reaktionstid, kan der opstå korte ”spikes”, 
                    hvis man f.eks. starter en elkedel der lynhurtigt suger strøm, hvor Sonnen systemet ikke 
                    reagerer præcis på samme tid, men sekunder efter.
                  </p>
                  <br>
                  <p>
                    Sonnen Systemet lader og aflader med op til 2,5 kW hvis man har 5 kW batteri. Hvis man har 7,5 kW 
                    batteri eller mere lader og aflader batteriet med op til 3,3 kW. Dvs. der kan forekomme tidspunkter 
                    hvor solcellerne producerer mere end der kan forbruges i husstanden og lades på batteriet, 
                    og her vil overskudsproduktion blive sendt ud på nettet.
                  </p>
                  <br>
                  <p>
                    Yderligere skal der altid indregnes en usikkerhed på målinger/visninger pga. tidsforskydning af målt og vist data.
                  </p>
                  <br>
                  <p>
                    En anden ting man kan opleve i de mørke vintermåneder er, at batteriet selv foretager en opladning fra elnettet. 
                    Dette sker typisk efter 30 dage hvor batteriet ikke har været ladet i nogen nævneværdig grad. 
                    Dette sker automatisk og som en del af vedligeholdelsen af batterierne. Den strøm der er hentet fra 
                    nettet forbruges blot efterfølgende i husstanden når der registreres forbrug.
                  </p>
                  <br>
                  <h1 class="text-primary"> <a href="https://www.viasol.dk/wp-content/uploads/2022/04/Mit-anlaeg-sender-og-traekker-strom-fra-nettet-hvorfor-det-.pdf" target="_blank">  
                  Mit anlæg sender og trækker strøm fra nettet, hvorfor det? </a></h1>                 
                </div>
              </template>
              </Collapse>
            </span>

            <!-- 6 -->
            <span class="">
              <h1 class="py-4 font-bold text-2xl">Hvordan fungerer Sonnen systemet</h1>
              <Collapse class="">
              
              <template v-slot:collapse-header class=""><p class="">Her følger en generel forklaring af systemets funktion</p></template>
              <template v-slot:collapse-content>
                <div class="text-left pt-4">
                  <p>Max Solcellestrøm:   6.5 kWp</p>
                  <br>
                  <p>
                    Max ladning / afladning af batteri                    3,3 kW
                  </p>
                  <span> </span>
                  <br>
                  <p>
                    Max solcellestrøm til forbrug og net                3,68 kW
                  </p>
                  <br>
                  <h1>Max solcellestrøm direkte til net            3,68 kW</h1>
                  <img src="../assets/img/support/supportSonnen_begraensninger.png" alt="">
                  <br>
                  <h1>Unik og optimal udnyttelse med Sonnens intelligente styring:</h1>
                  <br>
                  <p>Hele produktionen på 6,5 kW kan bruges.</p>
                  <br>
                  <p>Eksempel 1. Direkte forbrug på 3,68 kW i huset og overskud på 1,9 kW lades på batteriet</p>
                  <br>
                  <p>Eksempel 2. Direkte forbrug på 3,2 kW i huset og overskud på 3,3 kW lades på batteriet</p>
                  <br>
                  <h1>Generelt omkring systemet:</h1>
                  <br>
                  <p>
                    Hybrid-inverteren er speciel fordi batteriet sidder på samme side som panelerne. 
                    Det giver et mindre systemtab og dermed en større effektivitet, og er en betydeligt 
                    mere rentabel løsning end at have et batteri ved siden af sit solcelleanlæg (kaldet et AC-batteri).
                  </p>
                  <br>
                  <p>
                    Batteriet i sig selv kan maksimalt sende 3,3 kW ud af gangen, 
                    så hvis der ikke er nogen produktion fra panelerne, så vil man maksimalt kunne hive 3,3 kW 
                    ud af systemet direkte fra batteriet, selvom inverteren i teorien kan klare 3,68kW.
                  </p>
                  <br>
                  <p><a href="https://www.viasol.dk/wp-content/uploads/2022/04/Generel-forklaring-af-systemets-funktion.pdf" target="_blank" class="text-primary font-bold">  Generel forklaring af systemet </a> </p>
                 
                </div>
              </template>
              </Collapse>
            </span>

            <!-- 8 -->
            <span class="">
              <h1 class="py-4 font-bold text-2xl">Mit system lader ikke på batteriet?</h1>
              <Collapse class="">
              
              <template v-slot:collapse-header class=""><p class="">Mit system er lige blevet sat op, og det lader ikke på batterierne?</p></template>
              <template v-slot:collapse-content>
                <div class="text-left pt-4">
                  <p>
                    Når anlægget lige er blevet installeret og idriftsat, starter batterierne med at kalibrere. 
                    Det betyder blot at batterierne synkroniseres med hinanden således at anlægget kan lade og aflade optimalt. 
                    Denne proces kan tage op til 24 timer.
                  </p>
                  <br>
                  <p>
                    <b> OBS! </b>En klar fordel ved Sonnen Systemet frem for andre batterisystemer er således også her 
                    at man altid på et senere tidspunkt kan udvide sin batterikapacitet med 
                    flere batterier da batterierne kan synkroniseres.
                  </p>
                  <br>
                  <p><a href="https://www.viasol.dk/wp-content/uploads/2022/04/Mit-system-er-lige-blevet-sat-op-og-det-lader-ikke-pa%CC%8A-batterierne-.pdf" target="_blank" class="text-primary font-bold">  Mit system er lige blevet sat op, og det lader ikke på batteriet?</a> </p>
                </div>
              </template>
              </Collapse>
            </span>

            <!-- 10 -->
            <span class="">
              <h1 class="py-4 font-bold text-2xl">Datablad på sonnen systemet</h1>
              <Collapse class="">
              
              <template v-slot:collapse-header class=""><p class="">Her finder du datablad på Sonnen systemet</p></template>
              <template v-slot:collapse-content>
                <div class="text-left pt-4">
                  <p>
                    Downloade datablad via linket herunder
                  </p>
                  <br>
                  <p><a href="https://www.viasol.dk/wp-content/uploads/2021/07/Datasheet_hybrid_9.53_RoW.pdf" target="_blank" class="text-primary font-bold"> Datasheet_hybrid_9.53_RoW</a> </p>
                </div>
              </template>
              </Collapse>
            </span>

            <!-- 12 -->
            <span class="">
              <h1 class="py-4 font-bold text-2xl">Appen viser at der lades på batteri fra nettet?</h1>
              <Collapse class="">
              
              <template v-slot:collapse-header class=""><p class="">Forkert billede kan opstå i Appen under Live state</p></template>
              <template v-slot:collapse-content>
                <div class="text-left pt-4">
                  <p>Sonnens app er ikke indkodet til den danske begrænsning med 3.68 kW. Derfor kan der opstå et forkert billede under Live state i Sonnen app’en.</p>
                  <br>
                  <p>
                    Billedet herunder er et eksempel på netop denne forkert visning. App’en registrerer at forbruget er højere end produktionen, og derfor viser 
                    den en animation af at hele produktionen bliver sendt ud i huset. I virkeligheden sendes 3.68 kW ud i huset og 1 kW sendes på batteriet.
                  </p>
                  <br>
                  <p>
                    Sonnen registrerer at der lades 1 kW på batteriet, men fordi systemet tror hele produktionen sendes ud til forbrug i huset konkluderer 
                    Appen at de 1 kW til batteriet kommer fra nettet, så det viser App animationen
                  </p>
                  <br>
                  <p>
                    Den korrekte APP animation skulle vise produktionen fordele sig ud på huset og batteriet, og importen fra nettet skulle alene gå til huset uden at være delt.
                  </p>
                  <br>
                  <p>Anlægget kører således som det skla det er kun APP’en der i animationen viser fordelingen forkert. </p>
                  <br>
                  <img src="../assets/img/support/supportSonnen-APP-Live-State001-e1628864325506.png" alt="">
                  <br>
                  <p><a href="https://www.viasol.dk/wp-content/uploads/2022/04/Forkert-billede-i-appen-under-Live-state.pdf" target="_blank" class="text-primary">  <b>Forkert billede kan opstå i appen under ‘Live state’</b></a> </p>
                </div>
              </template>
              </Collapse>
            </span >
            </div>
            
    </section>

    <section>
      <div class="py-[5%]">
        <h1 class="text-2xl">Fandt du ikke hvad du søgte?</h1>
        <p class="py-[20px]">Prøv spørgsmål generelt</p>
        <ButtonCom @click="scrollMeTo('generelt')">GENRELT</ButtonCom>
      </div>
    </section>

    <section>
      <div class="bg-[#f9f9f9]" refs="huawei">
        <div>
           <div>
            <span class="inline-block align-top lg:w-1/2 pt-[33px] text-left">
              <div class="shrink w-24 h-[2px] bg-[#2c95c9]  "></div>
              <div class="py-4">
                <strong class="text-4xl">Huawei hybridanlæg</strong>
                <p class="py-2 text-sm">Her finder du svar på tekniske spørgsmål vedr. Huawei</p>
              </div>
            </span>
            <span class="inline-block">
              <img src="../assets/img/support/supportHuaweiBatteriOgInverter.png" width="151" height="151" alt="">
            </span>
          </div>
        </div>


        <div class="inline-block align-top lg:w-1/3 px-[33px] pt-[33px] text-left leading-[1.9em]">
          <h1 class="font-bold text-2xl">Downloads (datablade, manualer, mm.)</h1>
          <div class="py-4">
            <Collapse class="">
              <template v-slot:collapse-header class=""><p class="py-[]">Her kan du downloade datablade på systemet</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <h1>Batteri</h1>
                  <br>
                  <p class="pt-3">Huawei LUNA 2000:</p>
                  
                  <p class="pt-3"><a href="https://www.viasol.dk/wp-content/uploads/2021/07/Huawei-Batteri_Luna2000.pdf" target="_blank" class="text-primary font-black">  Huawei Batteri_Luna2000</a> </p>
                  
                  <h1 class="pt-3">Inverter</h1>

                  <p class="pt-3">Huawei 2-6KTL-L1:</p>
                  
                  <p class="pt-3"><a href="https://www.viasol.dk/wp-content/uploads/2021/07/Huawei-Inverter_2-6KTL-L1_Datablad.pdf" target="_blank" class="text-primary font-black">  Huawei Inverter_2-6KTL-L1_Datablad</a> </p>
                  
                  <p class="pt-3">Huawei 3-10KTL-M1:</p>
                  
                  <p class="pt-3"><a href="https://www.viasol.dk/wp-content/uploads/2021/07/Huawei-Inverter_3-10KTL-M1_Datablad.pdf" target="_blank" class="text-primary font-black">  Huawei Inverter_3-10KTL-M1_Datablad</a> </p>
                  
                </div>
              </template>
            </Collapse>
          </div>

          <Collapse>
            <template v-slot:collapse-header class=""><p class=" ">Her kan du downloade brugermanualer til systemet</p></template>
            <template v-slot:collapse-content class="">
              <div class="text-left pt-4">
                <h1 class=" pt-4">Batteri</h1>
                
                <p><a href="https://www.viasol.dk/wp-content/uploads/2021/11/EN_User-manual_Luna2000-5-15-S0-1.pdf" target="_blank" class="text-primary pt-4">  Huawei LUNA 2000 </a> </p>
                
              </div>
            </template>
          </Collapse>
        </div>
        
        <div class="inline-block align-top lg:w-1/3 px-[33px] pt-[33px] text-left leading-[1.9em]">
          <h1 class="font-bold text-2xl">Køb af strøm fra elnettet (Time of Use)</h1>
          <div class="py-4">
            <Collapse>
              <template v-slot:collapse-header class=""><p class="">Indstilling af Time of Use</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p class="pt-2">
                    <b> OBS</b>: Grundet en opdatering fra Huawei’s 
                    side er det i øjeblikket nødvendigt at oprette en 
                    serviceticket for at kunne få de nødvendige brugerrettigheder 
                    tildelt og derved benytte denne funktion.
                  </p>
                   
                  <NuxtLink to="Servicesag" class="underline-offset-auto pt-2">Klik her for at oprette en serviceticket. </NuxtLink>
                  
                  <p class="pt-2">
                    Med funktionen Time of Use kan du manuelt indstille 
                    lagring of afladning af dine batterier i ønskede tidssegmenter. 
                    For eksempel kan du indstille dit anlæg således, at du tillader at 
                    batterierne henter strøm til lagring i de tidsrum hvor elpriserne er lave, 
                    så du kan benytte strømmen senere hvor elpriserne er højere.
                  </p>
                  
                  <p class="pt-2">
                    Følg vejledning til indstilling ”Time of Use” til dit Huawei anlæg herunder via enten PC/Mac eller mobilt (Android eller iOS).
                  </p>
                  
                  <p class="pt-2 text-primary">Indstilling af Time of Use via PC/Mac</p>
                  
                  <p class="pt-2">
                    <b> 1.</b> Gå til siden <a href="https://eu5.fusionsolar.huawei.com/" target="_blank" ><u> https://eu5.fusionsolar.huawei.com/</u></a>  og log ind med dine oplysninger
                  </p>
                  
                  <p class="pt-2"> <b> 2.</b> Du vil herefter videresendes til FusionSolar dashboardet, hvor du skal trykke på fanen ”Device Management”.</p>
                  
                  <img src="../assets/img/support/supportPC1X.png" alt="">
                  
                  <p class="pt-2">
                    <b>3.</b> Dernæst trykkes der på ”+” ikonet udenfor din inverter.
                  </p>
                  
                  <img src="../assets/img/support/supportPC2X.png" alt="">
                  
                  <p class="pt-2"> <b>4.</b> Marker derefter ”Battery” med et flueben og tryk på ”Set Parameters”. </p>
                  
                  <img src="../assets/img/support/supportPC3X.png" alt="">
                  
                  <p class="pt-2"> <b>5. </b>I dialogboksen ”Parameter Settings” vælges der i menuen i venstre side ”Operation Mode”.</p>
                  
                  <p class="pt-2">
                    <b>6. </b>Her vælges der fra drop-down menuen ”Operation Mode” indstillingen TOU, 
                    som står for Time of Use og de ønskede indstillinger for lagring (charge) og afladning (discharge) indstilles.
                  </p>
                  
                  <img src="../assets/img/support/supportPC4X.png" alt="">
                  
                  <p class="pt-2"><b>7. </b>Til sidst vælges ”Priority of excess PV energy”, og her findes to valgmuligheder:</p>
                  
                  <p class="pt-2">
                    <u> Charge preference</u>: Genereres der mere strøm fra solcellerne end der forbruges, lagres dette på batterierne. 
                    Når batterierne er fuldt    ladt op af enten strøm fra elnettet, solcellerne eller et mix af begge, 
                    vil den overskydende produktion sendes tilbage på elnettet.
                  </p>
                  
                  <p class="pt-2">
                    <u>Fed to grid preference</u>: Genereres der mere strøm fra solcellerne end der forbruges, sendes dette til elnettet. 
                    Hvis inverteren når sit maksimale output, vil den overskydende strøm bruges til at lade batterierne.
                  </p>
                  
                  <p class="pt-2">
                    <b>8. </b>Når disse er valgt trykkes der på den blå knap ”Set” i højre hjørne. 
                    Du kan med fordel trykke på knappen ”Refresh” efter, 
                    for at sikre dig at dine indstillinger er gemt
                  </p>
                  
                  <a href="https://www.viasol.dk/wp-content/uploads/2022/04/Indstilling-af-Time-of-Use.pdf" target="_blank" class="text-primary">Indstilling af Time of Use</a>
                </div>
              </template>
            </Collapse> 
          </div>
        </div>
        
        <div class="py-[5%]">
          <h1 class="text-2xl">Fandt du ikke hvad du søgte?</h1>
          <p class="py-[20px]">Prøv spørgsmål generelt</p>
          <ButtonCom @click="scrollMeTo('generelt')">GENRELT</ButtonCom>
        </div>
      </div>
    
    </section>

    <section class="py-[5%]">
      <div refs="growatt">
         <div>
          <span class="inline-block align-top lg:w-1/2 pt-[33px] text-left">
            <div class="shrink w-24 h-[2px] bg-[#2c95c9]  "></div>
            <div class="py-4">
              <strong class="text-4xl">Growatt hybridanlæg</strong>
              <p class="py-2 text-sm">Her finder du svar på tekniske spørgsmål vedr. Growatt</p>
            </div>
          </span>
          <span class="inline-block">
            <img src="../assets/img/support/supportGrowatt-batt-og-inv-crop.png" alt="" height="151" width="151" style="">
          </span>
        </div>
      </div>
    </section>

    <section>
      <div>
        <div class="inline-block align-top lg:w-1/3 px-[33px] pt-[33px] text-left leading-[1.9em]">
          <h1 class="font-bold text-2xl">Inverteren er offline </h1>
          <div class="py-4">
            <Collapse class="">
              <template v-slot:collapse-header class=""><p class="py-[]">Jeg kan ikke få angang til overvågningen</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>Måske du har skiftet internet udbyder eller der er noget ander der har ændret sig i din opsætning.</p>
                  <br>
                  <p>
                    Du kan genskabe forbindelsen til Growatt overvågningen (ShinePhone) ved at lave en genstart af forbindelsen. 
                    Du skal slåedes blot klikke på linket herunder og følge vejledningen.
                  </p>
                  <br>
                  <p><a href="https://www.viasol.dk/wp-content/uploads/2021/07/2.-Growatt-inverteren-er-offline_reset-WIFI_vejledning_Privat-kunde.pdf" target="_blank" class="text-primary">  <b>2. Growatt inverteren er offline_reset WIFI_vejledning_Privat kunde</b></a> </p>
                </div>
              </template>
            </Collapse>
          </div>

          <h1 class="font-bold text-2xl">Opsætning af overvågning</h1>
          <div class="py-4">
          <Collapse>
            <template v-slot:collapse-header class=""><p class=" ">Hvordan opsætter jeg overvågningen via ShinePhone appen</p></template>
            <template v-slot:collapse-content class="">
              <div class="text-left pt-4">
                <p>For at udføre opsætningen af overvågningen via ShinePhone skal du blot klikke på linket herunder og følge vejledningen.</p>
                <br>
                <p><a href="https://www.viasol.dk/wp-content/uploads/2021/07/1.-Veljedning-til-opsaetning-af-Growatt-Shinephone_APP_Privat-kunde.pdf" target="_blank" class="text-primary">  <b>1. Veljedning til opsætning af Growatt Shinephone_APP_Privat kunde</b></a> </p>
              </div>
            </template>
          </Collapse>
          </div>

          <h1 class="font-bold text-2xl">Genstart af Growatt systemet</h1>
          <div class="py-4">
            <Collapse class="">
              <template v-slot:collapse-header class=""><p class="py-[]">Her kan du downloade datablade på systemet</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>Herunder følger link med vejledning til genstart af dit Growatt system</p>
                  <br>
                  <p><a href="https://www.viasol.dk/wp-content/uploads/2021/07/Growatt-genstart.pdf" target="_blank" class="text-primary">  <b>Growatt genstart</b></a> </p>
                </div>
              </template>
            </Collapse>
          </div>

          <h1 class="font-bold text-2xl">Mit system går i standby om morgenen</h1>
          <div class="py-4">
            <Collapse class="">
              <template v-slot:collapse-header class=""><p class="py-[]">Hvorfor går mit system i standby om morgenen?</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>
                    Det der sker er at systemet skifter fra ikke-PV til PV mode. 
                    Processen begynder så snart der registreres PV effekt fra panelerne, 
                    men til at starte med er der endnu ikke spænding nok på panelerne til at inverteren kan fungere, 
                    i stedet for at melde systemfejl med ”Low PV Voltage”, 
                    så går systemet på midlertidigt standby og afventer at effekten fra panelerne stabiliseres, 
                    så der ikke opstår fejl med ”Low PV Voltage”.
                  </p>
                  <br>
                  <p>Det er således et udtryk for at systemet faktisk virker som det skal.</p>
                  <br>
                  <p><a href="https://www.viasol.dk/wp-content/uploads/2022/04/Mit-system-ga%CC%8Ar-i-standby-om-morgenen.pdf" target="_blank" class="text-primary">  <b>Mit system går i standby om morgenen</b></a> </p>

                </div>
              </template>
            </Collapse>
          </div>
        </div>

        <div class="inline-block align-top lg:w-1/3 px-[33px] pt-[33px] text-left leading-[1.9em]">
          <h1 class="font-bold text-2xl">Datablad på Growatt systemet</h1>
          <div class="py-4">
            <Collapse>
              <template v-slot:collapse-header class=""><p class="">Her kan du downloade datablade på systemet</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>Download datablade her</p>
                  <br>
                  <br>
                  <p><a href="https://www.viasol.dk/wp-content/uploads/2021/07/Growatt-SPH3600-Datasheet.pdf" target="_blank" class="text-primary">  <b>Growatt SPH3600 Datasheet</b></a> </p>
                  <br>
                  <p><a href="https://www.viasol.dk/wp-content/uploads/2021/07/Growatt-GBLI6531-Lithium-battery.pdf" target="_blank" class="text-primary">  <b>Growatt GBLI6531 Lithium battery</b></a> </p>
                </div>
              </template>
            </Collapse>
            <h1 class="font-bold text-2xl">Produktion og egetforbrug er 0</h1>
            <div class="py-4">  
            <Collapse class="">
              <template v-slot:collapse-header class=""><p class="py-[]">Produktion og egetforbrug vises som 0 værdier i appen?</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>Dette skyldes en softwarefejl fra Growatts side. Anlægget producerer stadig, hvilket kan aflæses via displayet på inverteren.</p>
                  <br>
                  <p>Problemet kan løses via en opdatering som Growatt kan udføre.</p>
                  <br>
                  <p>Der skal blot oprettes en service-sag her på siden, så sætter vi Growatt igang med opdateringen.</p>
                  <br>
                  <p><a href="https://www.viasol.dk/wp-content/uploads/2022/04/Produktion-og-egetforbrug-er-0.pdf" target="_blank" class="text-primary">  <b>Produktion og egetforbrug er 0</b></a> </p>
                </div>
              </template>
            </Collapse>
          </div>
          <h1 class="font-bold text-2xl">Hvorfor eksporterer anlægget strøm?</h1>
          <div class="py-4">
            <Collapse class="">
              <template v-slot:collapse-header class=""><p class="py-[]">Hvorfor eksporterer mit anlæg strøm imens mit batteri aflades?</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>Når man oplever dette skyldes det typisk måler-forsinkelser og Growatt systemet der reagerer langsomt.</p>
                  <br>
                  <p>De data man kan se opdateres hvert 5 min. og her kan der være forsinkelser i de data der kan ses i øjeblikket</p>
                  <br>
                  <p>Brug dags-opgørelserne fremfor øjebliks-tal som pejlesnor for om anlægget fungerer som det skal.</p>
                  <br>
                  <p><a href="https://www.viasol.dk/wp-content/uploads/2022/04/Hvorfor-eksporterer-mit-anlaeg-strom-imens-mit-batteri-aflades-.pdf" target="_blank" class="text-primary">  <b>Hvorfor eksporterer anlægget strøm?</b></a> </p>

                </div>
              </template>
            </Collapse>
          </div> 
          </div>
        </div>

        <div class="py-[5%]">
          <h1 class="text-2xl">Fandt du ikke hvad du søgte?</h1>
          <p class="py-[20px]">Prøv spørgsmål generelt</p>
          <ButtonCom @click="scrollMeTo('generelt')">GENRELT</ButtonCom>
        </div>
      </div>
    </section>
    <section class="bg-[#f9f9f9] ">
        <div>
           <div>
            <span class="inline-block align-top pt-[33px] " >
              <div class="flex justify-center items-center px-24 py-2">
                <div refs="generelt" class="shrink w-24 h-[3px] bg-[#2c95c9]"></div>
              </div>
              <div class="py-4" ref="generelt">
                <strong class="text-4xl">Generelle spørgsmål</strong>
                <p class="py-2 text-sm">Her finder du svar på generelle spørgsmål i forbindelse med dit solcelleanlæg</p>
              </div>
            </span>
            
          </div>
        </div>


        <div class="inline-block align-top lg:w-1/3 px-[33px] pt-[33px] text-left leading-[1.9em]">
          <h1 class="font-bold text-2xl">Jeg har bestilt et solcelleanlæg</h1>
          <div class="py-4">
            <Collapse class="">
              <template v-slot:collapse-header class=""><p class="">Jeg har lavet en aftale om et solcelleanlæg - hvad sker der så nu?</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>Linket herunder giver dig adgang til en kort guide der beskriver de få simple steps vi har inden du får dit solcelleanlæg:</p>
                  <br>
                  <a href="https://www.viasol.dk/wp-content/uploads/2022/06/Intro-guide-foer-opsaetning.pdf" target="_blank" class="text-primary"> <b> Intro guide før opsætning</b></a>
                </div>
              </template>
            </Collapse>
          </div>


          <h1 class="font-bold text-2xl">Udfyld montagelink</h1>
          <div  class="py-4">
            <Collapse>
            <template v-slot:collapse-header class=""><p class=" ">Jeg skal udfylde montagelinket, hvor finder jeg det?</p></template>
            <template v-slot:collapse-content class="">
              <div class="text-left pt-4">
                <p>Via linket herunder får du adgang til montagelinket. Du skal blot følge vejledningen.</p>
                <br>
                <p>router-link</p>
                <!-- TODO:link 
                <router-link class="text-primary"><b> Montagelink</b></router-link>-->
              </div>
            </template>
            </Collapse>
          </div>

          <h1 class="font-bold text-2xl">Underskriv fuldmagt</h1>
          <div class="py-4">
            <Collapse>
            <template v-slot:collapse-header class=""><p class=" ">Jeg skal underskrive en fuldmagt, hvor finder jeg den?</p></template>
            <template v-slot:collapse-content class="">
              <div class="text-left pt-4">
                <p>Via linket herunder får du adgang til fuldmagten. Du skal blot følge vejledningen.</p>
                <br>
                <p>router-link</p>
                
                <!-- TODO:link 
                <router-link class="text-primary"><b> Fuldmagt</b></router-link>-->
              </div>
            </template>
            </Collapse>
          </div>

          <h1 class="font-bold text-2xl">Køb af overskudsstrøm</h1>
          <div class="py-4">
          <Collapse>
            <template v-slot:collapse-header class=""><p class=" ">Her finder du info om de selskaber der køber overskudsstrøm</p></template>
            <template v-slot:collapse-content class="">
              <div class="text-left pt-4">
                <p>Via linket herunder finder du info om de selskaber der er godkendt til at købe dit overskydende solcellestrøm.</p>
                <br>
                <h1>Betaling for overskuds-solcellestrøm</h1>
                <br>
                <p>
                  Dit GSRN nummer skal bruges hvis du ønsker at modtage betaling for din overskuds solcelleproduktion. 
                  Du kan kontakte en produktionselleverandør og indgå en aftale. Du finder listen med produktionselleverandører her:
                </p>
                <br>
                <a href="https://energinet.dk/El/Elmarkedet/Produktionselleverandoer/Oversigt-over-produktionselleverandoerer" target="_blank" class="text-primary"> <b> energinet.dk/El/Elmarkedet/<br>Produktionselleverandoer/ <br>  Oversigt-over-produktionselleverandoerer</b></a>
                <br>
                <br> 
                <h1>GSRN nummer</h1>
                <br>
                <p>Hvis ikke du selv har modtaget dit GRSN nummer på mail eller via eBoks, kan du kontakte dit netselskab for at få oplyst dit GSRN nummer. Du kan finde dit netselskab her:</p>
                <br>
                <a href="https://www.danskenergi.dk/vejledning/nettilslutning/find-netselskab" target="_blank" class="text-primary"> <b> www.danskenergi.dk/vejledning/ <br> nettilslutning/find-netselskab</b></a>
                
                <br>
                <a href="https://www.viasol.dk/wp-content/uploads/2022/04/Kob-af-overskudsstrom.pdf" target="_blank" class="text-primary"> <b> Køb af overskudsstrøm</b></a>
              </div>
            </template>
          </Collapse>
          </div>

          <h1 class="font-bold text-2xl">Hvordan får jeg mit GSRN nummer</h1>
          <div class="py-4">
          <Collapse>
            <template v-slot:collapse-header class=""><p class=" ">Du får dit GSRN nummer via dit netselskab, se yderligere forklaring her</p></template>
            <template v-slot:collapse-content class="">
              <div class="text-left pt-4">
                <p>Elselskabet som du modtager din elregning fra er ikke det samme som dit netselskab. Dit netselskab leverer strømmen til din husstand og afregner dette med dit elselskab.</p>
                <br>
                <p>
                  Det er dit netselskab der tildeler dit solcelleanlæg sit unikke nr. (GSRN nummeret), 
                  som du skal bruge hvis du ønsker af lave en aftale med et selskab der ønsker at købe din overskuds-solcellestrøm.
                </p>
                <br>
                <p>Hvis du er i tvivl om hvem dit netselskab er, kan du finde dit netselskab via følgende link :</p>
                <br>
                <a href="www.danskenergi.dk/vejledning/nettilslutning/find-netselskab" target="_blank" class="text-primary"> </a>
                <br> <!-- www.danskenergi.dk/vejledning/nettilslutning/find-netselskab -->
                <br>
                <a href="https://www.viasol.dk/wp-content/uploads/2022/04/Hvordan-fa%CC%8Ar-jeg-mit-GSRN-nummer.pdf" target="_blank" class="text-primary"> <b> Hvordan får jeg mit GSRN nummer? </b></a>
              </div>
            </template>
          </Collapse>
          </div>

          <h1 class="font-bold text-2xl">Hvem er mit netselskab?</h1>
          <div class="py-4">
          <Collapse>
            <template v-slot:collapse-header class=""><p class=" ">Her finder du info om dit netselskab</p></template>
            <template v-slot:collapse-content class="">
              <div class="text-left pt-4">
                <p>
                  Elselskabet som du modtager din elregning fra er ikke det samme som dit netselskab. 
                  Dit netselskab leverer strømmen til din husstand og afregner denne med dit elselskab.</p>
                <br>
                <p>
                  DDet er dit netselskab der tildeler dit solcelleanlæg sit unikke nr. 
                  (GSRN nummeret), som du skal bruge hvis du ønsker af lave en aftale med et selskab der ønsker at købe din overskuds-solcellestrøm.
                </p>
                <br>
                <p>Viasol har et samarbejde med netselskabet Nettopower. Samarbejdet sikrer at du altid får dig en gunstig aftale, så du får mest muligt ud af din overskydende solcellestrøm</p>
                <br>
                <p>Læs mere om Nettopower her:</p>
                <br>
                <a href="https://www.nettopower.dk/" target="_blank" class="text-primary"> https://www.nettopower.dk/</a>
                <br>
                <br>
                <a href="https://www.viasol.dk/wp-content/uploads/2022/04/Hvem-er-mit-netselskab-.pdf" target="_blank" class="text-primary"> <b>Hvem er mit netselskab? </b></a>
              </div>
            </template>
          </Collapse>
          </div>
        </div>
        
        <div class="inline-block align-top lg:w-1/3 px-[33px] pt-[33px] text-left leading-[1.9em]">
          <h1 class="font-bold text-2xl">Der er opstået en skade </h1>
          <div class="py-4">
            <Collapse>
              <template v-slot:collapse-header class=""><p class="">En skade er forekommet under levering, montering eller installation</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>
                    Det hænder når man har at gøre med håndværk og tunge produkter at der opstår en skade – 
                    det er meget beklageligt. Hvis ansvaret ligger hos os, vil vi selvfølgelig udbedre skaden.
                  </p>
                  <br>
                  <p>Opret en servicesag og vedhæft et billede af skaden – så vil vi tage kontakt til dig med den videre process.</p>
                  <br>
                  <p @click="scrollMeTo('servicesag')" class="text-primary"><b> Opret en servicesag her. </b></p>
                </div>
              </template>
            </Collapse> 
          </div>

          <h1 class="font-bold text-2xl">Skal jeg have skiftet måler?</h1>
          <div class="py-4">
            <Collapse>
              <template v-slot:collapse-header class=""><p class="">Du skal sikre at du har installeret en summationsmåler</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>
                    Når du får installeret et solcelleanlæg er du berettiget til at få installeret en summationsmåler hvis du ikke allerede har dette. 
                    Summationsmåleren sørger for at summere produktion og forbrug ud på alle 3 faser i huset, således at du får mest muligt ud af dit solcelleanlæg. 
                    Vejl. pris for udskiftning er ca. 1.600 DKK som du vil blive opkrævet af netselskabet der dækker dit område.
                  </p>
                  <br>
                  <p>
                    <b>Kontakt</b> dit netselskab og få dem til at skifte din måler til en summationsmåler.
                  </p>
                  <br>
                  <p>Du kan finde dit netselskab her:</p>
                  <a href="https://www.danskenergi.dk/vejledning/nettilslutning/find-netselskab" target="_black" class="text-primary">www.danskenergi.dk/vejledning/ <br> nettilslutning/find-netselskab</a>
                  <br>
                  <br>
                  <p>Du kan læse mere omkring summationsmåler via linket herunder:</p>
                  <a href="www.viasol.dk/2020/10/15/1-eller-3-faset-inverter-gor-det-en-forskel-summationsmaler" target="_black" class="text-primary">www.danskenergi.dk/vejledning/ <br> nettilslutning/find-netselskab</a>
                  <br>
                  <br>
                  <a href="" target="_black" class="text-primary"><b> Skal jeg have skiftet måler?</b> </a>
                </div>
              </template>
            </Collapse> 
          </div>

          <h1 class="font-bold text-2xl">Regning fra netselskabet?</h1>
          <div class="py-4">
            <Collapse>
              <template v-slot:collapse-header class=""><p class="">Jeg har modtaget en regning fra netselskabet?</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>Det fremgår af din aftale med os at der forekommer en engangsbetaling til dit netselskab. Det er beskrevet i din aftale således:</p>
                  <br>
                  <p class="text-primary"><b> OBS:</b></p>
                  <br>
                  <p class="text-primary"> – Ved oprettelse af mikro VE anlæg, forkommer der et administrationsgebyr fra din eldistributør: Vejl. Pris: 1.800 kr.</p>
                  <br>
                  <p class="text-primary"> – Hvis du skal have udskiftet fasemåler til summationsmåler, kan der være en udskiftningspris: Vejl. Pris: 1.600 kr.</p>
                  <br>
                  <p class="text-primary"> Begge omkostning er IKKE dækket af nærværende tilbud.</p>
                  <br>
                  <a href="https://www.viasol.dk/wp-content/uploads/2022/04/Regning-fra-netselskabet-.pdf" target="_black" class="text-primary"><b> Regning fra netselskabet?</b> </a>
                </div>
              </template>
            </Collapse> 
          </div>
          <h1 class="font-bold text-2xl">Hvor angiver jeg håndværkerfradraget?</h1>
          <div class="py-4">
            <Collapse>
              <template v-slot:collapse-header class=""><p class="">Her finder du vejledning til at angive dit håndværkerfradrag</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>
                    Du skal selv angive håndværkerfradrag på din årsopgørelse. Det ligger under rubrik 460. Her kan du lægge jeres udgift til montage og el-arbejde ind. 
                    De står angivet på den faktura du har modtaget fra os – husk at tilføje momsen på beløbene. Mere info kan findes på Skats hjemmeside.
                  </p>
                  <br>
                  <a href="https://skat.dk/data.aspx?oid=2234759" target="_black" class="text-primary">www.skat.dk/skat.aspx?oid=2234759</a>
                </div>
              </template>
            </Collapse> 
          </div>
          <h1 class="font-bold text-2xl">Montagevejledning til selvmontage</h1>
          <div class="py-4">
            <Collapse>
              <template v-slot:collapse-header class=""><p class="">Find montagevejledninger herunder</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>Hvis man har valgt løsning med selvmontage, er det naturligvis en selvfølge at man har indsigt i hvordan et solcelleanlæg skal monteres.</p>
                  <br>
                  <p>Herunder kan du finde lidt hjælp og vejledning til at udføre montagen på taget:</p>
                  <br>
                  <p>Strengning af solcellepaneler på inverteren –</p>
                  <br>
                  <a href="https://www.viasol.dk/wp-content/uploads/2021/07/Strengningsoversigt_011.pdf" target="_black" class="text-primary">Strengningsoversigt_011</a>
                  <br>
                  <br>
                  <p>Standard montage – Tag med hældning – generelt –</p>
                  <br>
                  <a href="https://www.youtube.com/watch?v=JTuJpEVrvcQ" target="_black" class="text-primary">www.youtube.com/watch?v=JTuJpEVrvcQ</a>
                  <br>
                  <br>
                  <a href="https://www.viasol.dk/wp-content/uploads/2022/04/Montagevejledning-til-selvmontage.pdf" target="_black" class="text-primary"><b> Montagevejledning til selvmontage</b></a>
                </div>
              </template>
            </Collapse> 
          </div>

          <h1 class="font-bold text-2xl">Er jeg tilmeldt afregningsgruppe 2 eller 3?</h1>
          <div class="py-4">
            <Collapse>
              <template v-slot:collapse-header class=""><p class="">Herunder følger beskrivelse af afregningsgruppe 2 og 3</p></template>
              <template v-slot:collapse-content class="">
                <div class="text-left pt-4">
                  <p>For at følge reglerne, og sikre vores kunder mod fejlagtige tilmeldinger, tilmelder vi altid i <b> gruppe 3 (øjebliksafregning).</b></p>
                  <br>
                  <h1>Regler hos Skat og Energinet</h1>
                  <br>
                  <p>
                    Efter dialog med Skat og Energinet har begge bekræftet, at der siden 2017 ikke har været mulighed for at søge om anlæg hvor forlods modregning ved el-opvarmning er muligt. 
                    (Havde man søgt i 2017, så havde man 2 år til at tilslutte sit solcelleanlæg. Derfor er de seneste anlæg hvor dette er muligt installeret i 2019).
                  </p>
                  <br>
                  <p>
                    Viasol har dialog med skattestyrelsen og Energinet som administrerer Datahub og meddeler info omkring anlæg til Skat. 
                    Skat bekræftede, at der ikke er lovhjemmel til forlods modregning efter ændring af 2017 (da EAL blev ændret i 2016). 
                    Energinet har meddelt, at det slet ikke er muligt, da Energinet selv kontrollerer de tilmeldte anlæg og sender info videre til Skat via Datahub.
                  </p>
                  <br>
                  <p>
                    Dvs. uanset om du som kunde bliver tilmeldt gruppe 2 eller 3 i dag, vil du altså IKKE kunne forlods modregne 4.000 kWh. 
                    “Det der bliver henvist til på diverse online medier bl.a. Facebook, er således forældet praksis baseret på gammel lovgivning”
                  </p>
                  <br>
                  <h1>Yderligere argumentation for valg af gruppe 3</h1>
                  <br>
                  <p>
                    Under afregningsgruppe 3 kan man være sikker på ikke at skulle betale højere abonnement fra Forsyningsselskabet, hvilket kan være tilfældet ved gruppe 2 (timeafregning)
                  </p>
                  <br>
                  <p>Samtidig skal man ikke ansøge om tilladelse til opsætning af solcelleanlægget, hvilket er en bureaukratisk proces med 2 ansøgningsrunder både før og efter installationen.</p>
                  <br>
                  <p>Gruppe 3 giver mulighed for salg af overskudsstrøm fra solcelleanlægget</p>
                  <br>
                  <p>Hvis man vælger <b> gruppe 2 (Timeafregning)</b>, er der 2 væsentlige ting man skal være opmærksom på.</p>
                  <ul class="list-disc py-4 list-inside">
                    <li>
                      Det koster typisk et årligt tillæg, i form af et højere abonnement fra Forsyningsselskabet, 
                      hvilket gør at denne løsning ikke er fordelagtig (Der kan naturligvis være undtagelser hvor der 
                      ikke opkræves et højere abonnement i øjeblikket, men derimod vil der således ofte være højere tilslutning/oprettelses- afgift). 
                      Man kan altid forhøre sig hos sit Forsyningsselskab omkring prisen for det højere abonnement.
                    </li>
                    <br>
                    <li>
                      Gruppe 2 kræver forudgående tilsagn fra Energistyrelsen og man skal derfor ansøge energistyrelsen 
                      om tilladelse inden man påbegynder installationen af et nyt solcelleanlæg på gruppe 2, og der skal 
                      søges igen om endelig tilladelse efter installationen er udført. Her ligger der selvsagt en risiko for at 
                      anlægget ikke godkendes efterfølgende.
                    </li>
                  </ul>
                  <br>
                  <a href="https://www.viasol.dk/wp-content/uploads/2021/09/Beskrivelse_Valg-af-afregningsgruppe-3.pdf" target="_black" class="text-primary"><b> Er jeg tilmeldt afregningsgruppe 2 eller 3?</b></a>
                </div>
              </template>
            </Collapse> 
          </div>
        </div>
    </section>

    <section>
      <div ref="servicesag">
        <div class="flex justify-center items-center px-26 py-16">
          <div class="shrink w-24 h-[3px] bg-[#2c95c9]"></div> 
        </div>
        <div>
          <h1 class="text-3xl pb-4">Opret en servicsag </h1>
          
          <p>Fandt du ikke hvad du søgte på support portalen, kan du oprette en specifik servicesag her.</p>
          <br>
          <p> <b> OBS: Der er lige nu længere svartid, grundet mange henvendelser som følge af energikrisen. </b></p>
          <br>

          <NuxtLink to="Servicesag"> <ButtonCom class="text-2xl">OPRAT SERVICESAG</ButtonCom> </NuxtLink>
        </div>
      </div>
    </section>

    <ContactUs class="pt-40">
        <div class="flex justify-center items-center pb-2">
                <div class="shrink w-24 h-[3px] bg-[#2c95c9]"></div>
              </div>
        <div class="text-left leading-[1.9em] text-lg">
          <h1 class="text-4xl text-center py-8">Interesseret i et nyt tilbud? </h1>
          <span>
            Er du landet forkert her på service portalen og ønsker at blive kontaktet vedr. et nyt eller eksisterende tilbud?
          </span>
          <br><br>
          <span>
            Kontakt os allerede i dag, så vender en af vores konsulenter hurtigt tilbage.
          </span>
        </div>
      </ContactUs>


  </div>
</template>

<script>

</script>
<script setup>
  useHead({
    meta: [
      { name: '', 
      content: '' }
    ],
    bodyAttrs: {
      class: ''
    }
  })
  </script>
<style>

</style>