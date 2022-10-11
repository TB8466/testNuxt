<template>
  <div>
    <section class="bg-chargingStansPage bg-cover bg-center pt-28">
      <div class="text-white">  
        <div class="pt-28 pb-52">
          <p class="text-6xl font-bold leading-tight">Elbil ladestander <br/></p>
          <p class="text-2xl"><b>Zappi</b> – Klog ladestander optimeret til brug med solcelleanlæg </p>
          <div>
            <ButtonCom class="py-2" @click="scrollMeTo('products')">Se PRODUKTER</ButtonCom>
            <ButtonCom :transparent="true" @click="scrollMeTo('info')">LÆS MERE</ButtonCom>
          </div>
        </div>
      </div> 
    </section>

    <div class="h-24 bg-dividerDarkBlue mt-[-1px]"></div>
    <div class="flex justify-center items-center p-24">
       <div class="shrink w-24 h-[3px] bg-primary"></div>
    </div>
    

    <section>
      <p ref="info" class="text-3xl">Hvorfor vælge <b>VIASOL</b></p>
       <div class="px-[10%]">
        <span class="inline-block align-top md:w-1/3 p-[33px] text-left leading-[1.9em]">
          <p class="text-primary">Viasol</p>
          <p>
           Siden 2011 har Viasol rådgivet og hjulpet over 3000 husstande med den grønne omstilling. 
           Det har vi gjort ved at tilbyde løsninger, som gør det <b>nemt og gennemsigtigt</b> 
           for private husejere, at få opsat enten solcelleanlæg eller en ladestander til elbil. 
           I alle sammenhænge tilbyder vi at stå for totalentreprisen og levere 
           <b>højeste kvalitet og god service.</b>
          </p>
           <br>
           <br>
           <p>Læs også om solcelleanlæg<NuxtLink to="/" class="text-primary">her</NuxtLink></p>
           
        </span>

        <span class="inline-block align-top lg:w-1/3 p-[33px] text-left leading-[1.9em]">
            <p class="text-primary">Ladestander</p>
            <p>Med <b>Zappi</b> har vi muligheden for at sælge den klogeste,
              og muligvis bedste, ladestander tilgængeligt på markedet. 
              Ladestanderen er udviklet, testet og produceret i England, 
              af den kendte britiske producent Myenergi. Myenergi specialiserer 
              sig i at tilbyde innovative og smarte løsninger til alt der hedder 
              vedvarende energi. En Zappi ladestander fra Myenergi tilbyder 
             <b>den ypperste form for synergi med solceller.</b>
            </p> 
            <br/>
            <br/>
            <p><i>- Prøv vores prisberegner til solcelleanlæg<TotalLink>her.</TotalLink></i></p>
        </span>
      </div>
    </section>
    <div ref="products"></div>
    <Parallax :isRight="true" class="bg-ladeStanderParallax1">
    <h1 class="">Zappi by Myenergi</h1>
    <div class="" >
      <p>Myenergi’s smarte ladestation Zappi, er den absolut bedste løsning
         til en ladestander til elbil i kombination med et solcelleanlæg. 
         Zappi ladestanderens intelligente ladefunktioner tilbyder en 
         <b>optimeret opladnings process</b>, som tillader for den <b>bedst
           mulige udnyttelse af ens selvproducerede energi med en elbil</b>.
      </p>
      <br>

      <p>Ved hjælp af <b> Myenergis ‘Harvi’</b> kan Zappi følge med i solcelleanlæggets 
      produktion. Baseret på denne information kan elbil ladestanderen, alt efter valg af 
      ladetilstand, oplade elbilen optimalt. Dertil er det muligt at følge med i  
      produktion samt at styre hvilken ladefunktion er benyttet via en smart app. 
      </p>
      <br>

      <p><u>Hovedfunktionaliteten som tillader ekstra synergi med solceller,
         kommer i form af de forskellige ladetilstande:</u>
      </p>
      <br>

      <p>– ECO ladefunktionen tilbyder muligheden for at lade hurtigt, dog med 
        <b>mest muligt energi fra solcelleanlægget.</b>
      </p>
      <br>

      <p>– ECO+ ladefunktionen giver muligheden for at lade 
        <b>udelukkende med selvproduceret energi fra eget tag.</b>
      </p>
      <br>

      <p>– FAST ladefunktionen <b>benytter ladestanderens fulde ydeevne til 
        hurtigst muligt at oplade elbilen</b>, med en blanding af energi fra 
        eget tag og energi fra elnettet.
      </p>
      <br>

      <p>Læs med længere nede på denne side for en dybdegående forklaring af de
        forskellige ladefunktioner, samt en FAQ omkring Zappi ladestanderen.
      </p>
      <br>

      <p>Sidst men ikke mindst er man nødt til at nævne Zappi’s ydeevne. 
        Zappi er nemlig ikke kun smart og funktionel i kombination med solceller, 
        den er tilmed også <b>en af de mest kraftfulde ladestandere på hele markedet.</b> 
        Leveret med 11 kW, og med mulighed for hele 22 kW, vil enhver husstand 
        på alle måder være fremtidssikret med Zappi.
      </p>

    </div>
    <Collapse class="p-5  border-none border-[1px]">
      <template v-slot:collapse-header><span class="py-4">Nøgletal</span><h1 class="float-right text-[#ffffff] w-5 bg-primary rounded-full"></h1></template>
      <template v-slot:collapse-content>
        <div>
          <br>
          <p><b>Rated Power: 22.0 (11.0) kW</b></p>
          <br>
          <p>Rated Supply voltage: 400 V</p>
          <br>
          <p>1- eller 3 faset: 3 faset (m. <b>dynamiske faser</b>)</p>
          <br>
          <p>Load balancing</p>
          <br>
          <p><b>Kabel længde: 6.5 meters kabel </b></p>
          <br>
          <a href="https://rainfordsolutions.com/products/ingress-protection-ip-rated-enclosures/ip-enclosure-ratings-standards-explained/" target="_blank"><u>IP65 beskyttelse</u></a>
          <br>
          <br>
          <p>Størrelse: 439 x 282 x 122 mm</p>
        </div>
      </template>
    </Collapse>
    <Collapse class="border-none">
      <template v-slot:collapse-header><span class="py-4">Datablad</span><h1 class="float-right text-[#ffffff] w-5 bg-primary rounded-full"></h1></template>
      <template v-slot:collapse-content>
        <br>
        <a href=""><u>Datablad Zappi</u></a>
        <br>
        <br>
        <a href=""><u>Datablad Harvi</u></a>
      </template>
    </Collapse>
    <br>
    <p>Ring på 70 20 74 74 for mere information.</p>
    <br>
    <div class="flex w-1/2 m-auto ">
      <ButtonCom @click="scrollMeTo('knowMore')">KONTAKT OS NU OG FÅ ET TILBUD</ButtonCom>
    </div>
    </Parallax>

    <div>
      <h1 class="pt-6">Ladefunktionalitet</h1>
      <p>Lær mere om Zappi’s smarte-ladefuntioner her</p>
      <section>
        <div class="px-[5%]" align-baseline>
          <span class="inline-block align-top lg:w-1/2 p-[33px]">
            <img class="box-border" src="../assets/img/ChargingStans/ChargingStansS2.webp" alt="">
          </span>
          <span class="inline-block lg:w-1/2 p-[33px] text-left leading-[1.9em]">
            <strong>ECO</strong>
            <p>Med ladefunktionen ECO, som for mange er den foretrukne ladefunktion, 
              bliver der benyttet et mix af grøn energi fra solcelleanlægget og energi 
              fra elnettet til at oplade elbilen – dog med energi fra solcellerne først og fremmest</p>
            <br>
            <p>Ladestanderen overvåger forbruget i forhold til hvor meget der bliver genereret 
              fra taget, samt hvor meget energi der bliver brugt i husstanden. </p>
            <br>
            <p>Ud fra denne information vil ladestanderen vurdere om der efter forbruget 
              fra husstanden er mere selvproduceret energi at tage af til at lade bilen.</p>
            <br>
            <p>Oplader man i løbet af dagen i høj-produktions perioder er det derfor muligt 
              at oplade med 100% grøn energi fra eget tag, netop da dette er ladefunktionens 
              ‘foretrukne’ energikilde..</p>
            <br>
            <p>Dette kan lade sig gøre ved hjælp af ladestanderens <b>‘dynamiske faser’</b>, 
            det vil sige at den kan gå fra at være 1-faset til 3-faset. Var den kun 3-faset, 
            så skulle solcelleanlægget producere mindst 4,14 kW overproduktion for at kunne lade. 
            Men, grundet ladestanderens dynamiske faser kan den skifte til at være 1-faset, 
            hvor grænsen derfor kun ligger på 1,4 kW. </p>
          </span>
        </div>
      </section>

      <section class="">
        <div class="px-[5%]" >
           <div class="border-solid border-2 border-black">

            <span class="inline-block align-top lg:w-1/2 p-[33px] text-left leading-[1.9em] ">
              <strong>ECO+</strong>
              <p>Ladefunktionen ECO+ er meget lig den normale ECO ladefunktion, 
                med den forskel at ECO+ ikke vil lade med energi fra elnettet. </p>
              <br>
              <p>ECO+ ladefunktionen gør nemlig at elbilen lader med absolut mest muligt strøm fra solcelleanlægget.  </p>
              <br>
              <p>Opdager ladestanderen at der er importeret strøm fra elnettet,
                 så vil ladestanderen pause ladningen indtil der igen er nok selvproduceret 
                 energi fra solcellerne til at lade elbilen.</p>
              <br>
              <p>Dermed er det muligt at sikre man næsten kører på udelukkende grøn og selvproduceret energi.  </p>
            </span>
            <span class="inline-block lg:w-1/2 p-[33px]">
              <img src="../assets/img/ChargingStans/ChargingStansS3.webp" alt="logobilder" style="margie: 20px">
            </span>
          </div>
        </div>
      </section>

      
      <section class="">
        <div class="px-[5%]  " >
          <span class="inline-block lg:w-1/2 p-[33px]">
            <img src="../assets/img/ChargingStans/ChargingStansS4.webp" alt="logobilder" style="margie: 20px">  
          </span>
          <span class="inline-block align-top lg:w-1/2 p-[33px] text-left leading-[1.9em] ">
            <strong>FAST</strong>
            <p>Med ladefunktionen FAST er formålet, som navnet hentyder, at oplade bilen hurtigst muligt. </p>
            <br>  
            <p>Det gør ladestanderen ved at benytte energi fra både solcelleanlægget samt elnettet.
               Dermed udnytter ladestanderen altså dens fulde ydeevne – hvilket er den højeste på markedet. </p>
            <br>  
            <p>Med muligheden for at lade med helt op til 22 kW er Zappi det ultimative på markedet 
              indenfor ydeevne, og fremtidssikrer dig mange år ud i fremtiden – samtidigt med den tilbyder 
              ekstra funktionalitet i samarbejde med solceller.</p>
            <br>
            <p>Er man i markedet for en ladestander som kan det hele, samt udnytte energien fra dit 
              solcelleanlæg til det fulde, så findes der ikke en bedre løsning en Zappi fra Myenergi.</p>
          </span>
        </div>
      </section>
    </div>
    
    <section class="grid place-items-center">
      <div class="w-full bg-white border border-gray-200 rounded-lg shadow-2xl lg:max-w-screen-xl">
        <div class="px-[5%]" >
            <span class="inline-block align-top lg:w-1/2 p-[33px] text-left leading-[1.9em] ">
              <strong>Hvem er Myenergi?</strong>
              <p>Myenergi blev grundlagt i 2016 i England med et fokus på at optimere forbrug af vedvarende 
                energikilder i privaten. I de seneste år har Myenergi fulgt dette mål og udviklet innovative 
                produkter som tilbyder en ‘eco-smart’ løsning til brug af vedvarende energikilder, til forbrugere 
                som netop er interesseret i disse former for energi. </p>
              <br>
              <p>Sidenhen er deres produkter blevet enormt populære. Ladestanderen Zappi er nu den mest 
                populære ladestander i hele England, og er i gang med et voldsomt skub rundt om i Europa 
                for at få deres fantastiske produkter ud til flest muligt. Dertil er de gået fra at være en 
                virksomhed bestående af 6 mennesker, til at have flere hundreder ansatte og kontorer i 4 forskellige lande.  </p>
            </span>
            <span class="inline-block lg:w-1/2 p-[33px]">
              <img src="../assets/img/ChargingStans/ChargingStansS5.webp" alt="logobilder" style="margie: 20px">
            </span>
        </div>
      </div>
    </section>

    <div class="flex justify-center items-center p-24">
       <div class="shrink w-24 h-[3px] bg-primary"></div>
    </div>

    <div class="grid place-items-center">
      <h1 class="text-4xl p-8">Spørgsmål og svar</h1>
      <div>
        <p>Få svar på oftest stillede spørgsmål omkring den populære ladestander, eller ring og få en snak med en af vores medarbejdere.</p>
      </div>
    </div>

    <section class="">
      <div class="">
            <span class="inline-block align-top lg:w-1/3 px-[33px] pt-[33px] text-left leading-[1.9em] ">
              <Collapse class="">
              <template v-slot:collapse-header class=""><p class="">Kan man oplade alle typer elbil?</p></template>
              <template v-slot:collapse-content >
                <div class="text-left">
                  <p class="pt-4">Zappi er kompatibel med stort set alle el- 
                    og hybrid biler. Det er kun sjældent, at det ikke vil være 
                    muligt. Men der er meget få bilproducenter, som har lavet 
                    deres egne unikke systemer, som kræver egne produkter. 
                    Altså kan det sammenlignes en smule med at alle smartphones, 
                    foruden iPhone, kan oplade med samme oplader.</p>
                  <p>Her hvor kun iPhone har lavet deres eget lukkede system.</p>
                  <br>
                  <p>Derudover skal det noteres at for at benytte ladestanderens 
                    smartfunktioner skal elbilen tillade at ladestationen kan pause ladningen.
                     Dette er ikke en funktion alle elbiler har, dog er det ved at blive normalen.
                      Vi er her hos Viasol igang med at sammensætte en liste af kompatible biler, 
                      men indtil da kan du kontakte din elbilproducent for at høre om din bil er kompatibel.</p>
                </div>
              </template>
            </Collapse>
            </span>
            
            <span class="inline-block align-top lg:w-1/3 px-[33px] pt-[33px] leading-[1.9em]">
              <Collapse class="">
              <template v-slot:collapse-header class=""><p class="">Hvor meget oplader man med i timen?</p></template>
              <template v-slot:collapse-content>
                <div class="">
                  <p class="pt-4">Zappi ladestanderen bliver leveret med mulighed for 22 kW i timen. 
                    Dog skal det noteres at den leveres med en grænse på 11 kW, dette kan dog ændres. 
                    Så ud fra hvor stor elbil man har og hvor meget den kan trække i timen, 
                    så handler det om at vurdere hvilken kW der er den rette at gå videre med. 
                    I forlængelse kan man også vurdere det ud fra, 
                    hvilken størrelse inverter man har til ens solcelleanlæg, 
                    hvis man har det eller vil erhverve sig et i samme omgang.</p>
                </div>
              </template>
              </Collapse>
            </span>
      </div>
      <div class="">
            <span class="inline-block align-top lg:w-1/3 p-[33px] leading-[1.9em] ">
              <Collapse class="">
              <template v-slot:collapse-header class=""><p class="">Hvor hurtigt kan jeg lade min bil op?</p></template>
              <template v-slot:collapse-content >
                <div class="text-left">
                  <p class="pt-4">Det kommer meget an på om det er en hybrid- eller elbil, 
                    og hvilket størrelse batteri bilen har. 
                    Derudover er det også forskelligt hvor 
                    meget selve batteriet i bilen kan lade op i timen.</p>
                    <p>Men med en Zappi på 22kW, så vil man kunne lade med op til 22kW i timen. Dermed er det bare at gange timerne op til hvor stort batteriet er på bilen.</p>
                </div>
              </template>
            </Collapse>
            </span>
            
            <span class="inline-block align-top lg:w-1/3 p-[33px] text-left leading-[1.9em]">
              <Collapse class="">
              <template v-slot:collapse-header class=""><p class="">Kan den lade på strøm fra <br> et solcelleanlæg?</p></template>
              <template v-slot:collapse-content>
                <div class="text-left">
                  <p class="pt-4">Ja, det er netop det som en Zappi er bygget til. 
                    Med hjæp fra Harvi sporingssystemet forstår ladestanderen din 
                    produktion og optimerer ladningen så du bedst muligt bruger 
                    din selvproducerede strøm. Læs mere om dette i beskrivelsen 
                    om Zappi’s forskellige ladefunktioner længere oppe på denne side. </p>
                </div>
              </template>
              </Collapse>
            </span>
      </div>
      <div class="">
            <span class="inline-block align-top lg:w-1/3 px-[33px] text-left leading-[1.9em] ">
              <Collapse class="">
              <template v-slot:collapse-header class=""><p class="">Hvor skal den placeres ift. bil og eltavle?</p></template>
              <template v-slot:collapse-content >
                <div class="text-left">
                  <p class="pt-4">
                    Du kan placere ladestanderen hvor du ønsker den. 
                    Derfra vil vi blot kable den ind til eltavlen i 
                    huset og på den måde tilslutte den.
                  </p>
                </div>
              </template>
            </Collapse>
            </span>
            
            <span class="inline-block align-top lg:w-1/3 px-[33px] text-left leading-[1.9em]">
              <Collapse class="">
              <template v-slot:collapse-header class=""><p class="">Kan den klare alle vejrforhold?<br> et solcelleanlæg?</p></template>
              <template v-slot:collapse-content>
                <div class="text-left">
                  <p class="pt-4">
                    Ladestanderen har en beskyttelses rating på IP65, 
                    hvilket er en af de bedste der kan opnås. 
                    En længere beskrivelse af hvad IP65 helt præcist er, 
                    kan findes 
                    <a href="https://rainfordsolutions.com/products/ingress-protection-ip-rated-enclosures/ip-enclosure-ratings-standards-explained/" target="_blank" class="text-primary">her.</a> 
                  </p>
                </div>
              </template>
              </Collapse>
            </span>
      </div>
    </section>

    <BlogCarousel/>

    <section>
       <div class="px-[10%]" ref="knowMore">
        <span class="inline-block align-top md:w-1/3 p-[33px] text-center leading-[1.9em]">
          <div class="flex justify-center items-center p-10">
            <div class="shrink w-24 h-[3px] bg-primary"></div>
          </div>
          <h1 class="text-5xl px-[20px] pb-[20px]">Vil du høre mere?</h1>
          <div class="text-left">
            <p>
              Ønsker du rådgivning eller et uforpligtende tilbud på et solcelleanlæg med en Zappi by Myenergi ladestander?
            </p>
            <br>
            <p>
              Kontakt os allerede i dag, så vender en af vores konsulenter hurtigt tilbage.
            </p>
          </div>
          
        </span>

        <span class="inline-block align-top lg:w-1/3 p-[33px] text-left leading-[1.9em]">
          <span class=" lg:w-1/2 p-[33px]">
              <img src="../assets/img/ChargingStans/ChargingStansS6.webp" alt="logobilder" style="margie: 20px">
            </span>  
        </span>
      </div>
    </section>

    <div class="flex justify-center items-center p-10">
      <div class="shrink w-24 h-[3px] bg-primary"></div>
    </div>

    <Trustpilot/>

  </div>
</template>

<script>
 export default {
}


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