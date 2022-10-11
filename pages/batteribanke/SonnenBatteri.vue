<template>
  <div class="leading-[1.9em]">
    <section class="bg-sonnenpage bg-cover pt-28">
      <div class="text-white">
        <div class="pt-28 pb-52">
          <h1 class="text-6xl leading-tight">Sonnen Batteribank<br/>BEDST PÅ MARKEDET</h1>
          <div class="">
              <ButtonCom @click="scrollMeTo('products')" class="py-2">Se PRODUKTER</ButtonCom>
              <ButtonCom @click="scrollMeTo('why-Sonnen')" :transparent="true">LÆS MERE </ButtonCom>
          </div>
        </div>
      </div> 
      </section>

      <div class="h-24 bg-dividerDarkBlue mt-[-1px]"></div>
      <div class="flex justify-center items-center p-24">
        <div class="shrink w-24 h-[3px] bg-primary"></div>
      </div>

      <section>
        <p ref="why-Sonnen" class="text-3xl">Hvorfor vælge <b>Sonnen?</b></p>
        <div class="px-[10%]">
          <span class="inline-block align-top lg:w-1/3 p-[33px] text-left leading-[1.9em]">
            <p class="text-primary"><b>Markedets bedste batteribank</b></p>
            Med <a href="https://sonnengroup.com/" target="_blank"><u>Sonnen</u></a> 
            får du markedets førende lithium-batteribank. 
            Med konstant innovation som fører til 
            <b>den bedste funktionalitet,
            samt de højeste produkt- og ydelsesgarantier</b>, 
            er der ingen tvivl om at man med en Sonnen batteribank har det bedste af det bedste. 
            Her hos Viasol er vi en af meget få som må sælge deres produkter og vi er tilmed deres foretrukne partner i Danmark, 
            hvilket betyder at vi får en række ekstra goder 
            – blandt andet de nyeste modeller, samt god kommunikation skulle der være behov for service. 
            <br/>
            Læs mere længere nede på denne side. 
            <br/>
          </span>

          <span class="inline-block align-top lg:w-1/3 p-[33px] text-left leading-[1.9em]">
            <p class="text-primary"><b>Markedets førende producent</b></p>
            Sonnen blev grundlagt i 2010, og har siden lanceringen af deres første batteribank i 2011 været ledende på markedet for batteribanke. 
            På grund af deres innovative tilgang til energi lagringssystemer er de igennem årene blevet en af Tysklands hurtigst voksende teknologivirksomheder. 
            Dette mundede ud i at de i 2021 opnåede den <b>største markedsandel af batteribanke i Europa</b>, 
            med hele 20 % af alle batterilagringsystemer værende en Sonnen batteribank.
            <br/>
            <!-- TODO: – Prøv vores prisberegner <router-link :to="{name : 'pricecalculator'}" class="text-primary"><u><i>her</i></u></router-link> -->
          </span>
        </div>
    </section>

    <div ref="products"></div>
    <Parallax :isRight="true" class="bg-sonnenBatteryBankParallax1">
      <p class="text-4xl pb-4">Sonnen Batteribank –<br>sonnenBatterie</p>
      <span>
        Her hos Viasol er langt de fleste af vores anlæg installeret med en <b>Sonnen batteribank</b>, 
        dette selvom det er en dyrere løsning end f.eks en Huawei batteribank. 
        Helt simpelt er Sonnen <b>det bedste produkt på markedet</b>. 
        Med dets øgede funktionalitet samt holdbarhed vil det kunne betale sig bedre med en Sonnen batteribank for størstedelen af dem som skal have installeret et solcelleanlæg.
      </span>
      <br><br>
      <span>
        Et Sonnen Hybridanlæg kan tilbyde mellem <b>5-15 kW kapacitet</b>. 
        Hvis behovet er der, er det muligt at tilføje et ekstra batteri, 
        så man kan komme over de 15 kW – langt de fleste private anlæg vil dog kun skulle bruge mellem 5-10 kW. 
        Sonnen skiller sig meget ud fra konkurrenterne på kapaciteten. Ikke på grund af størrelsen, 
        men fordi at man altid kan udvide sin batteribank. 
        Dermed vil man altid være fremtidssikret med en Sonnen batteribank, 
        da man vil kunne udvide batteribanken hvis behovet opstår – f.eks ved køb af en elbil.  
      </span>
      <br><br>
      <span>
        Som udgangspunkt har et Sonnen hybridanlæg <b>10 års produktgaranti på både inverter og batteribank</b>. 
        Her er der dog også en <b>ydelsesgaranti på hele 10.000 cyklusser</b>, 
        med minimum 70% garanteret batterikapacitet ved udløbning af ydelsesgarantien. 
        For at sætte én cyklus i perspektiv, så er en cyklus en hel op- og nedladning af batteribanken 
        – derfor kan man sætte én cyklus lig med en dag, 
        selvom det er et meget konservativt estimat da det er de færreste dage batteribanken bliver ladt helt op og ned. 
      </span>
      <br><br>
      <span>
        Da Sonnen er en et-faset inverter, 
        vil den på grund af regulering fra regeringen være begrænset til 3,68 kW. 
        Men Sonnen har fundet en innovativ løsning så du kan <b>benytte helt op til 6,5 kW produktion fra dine solceller</b>, 
        ved også at lade batteribanken. Læs mere om dette længere nede på siden. 
      </span>
      <br><br>
      <span>
        Men selv med gode garantier og smarte moduler som sikrer at batteribanken er fremtidssikret, 
        så er det mest specielle ved Sonnen noget helt andet; funktionaliteten. 
        En Sonnen batteribank tilbyder nemlig funktioner igennem den medfølgende app som gør det nemmere ikke mindst at følge med i hvor selvforsynende du er, 
        men som tilmed også sparer dig penge. 
        Med en Sonnen batteribank kan man nemlig <b>købe billig strøm om natten</b>. 
        Dermed undgår man de forhøjede elpriser der opstår i dagtimerne. 
        Især i vintermånederne er dette en enorm god udnyttelse af en batteribank som kan hjælpe med det forhøjede forbrug. 
      </span>
      <br><br>
      <span>
        Bedre funktionalitet, bedre garantier & bedre fremtidssikring; det er en Sonnen batteribank. 
      </span>

      <Collapse>
        <template v-slot:collapse-header class=""><h1>Nøgletal</h1></template>
        <template v-slot:collapse-content>
          <h1 class="text-lg py-2"><u>Inverter</u></h1>
          <h1><i>Input-output:</i></h1>
          <p>3680 W. (Kan håndtere 6500 W ved brug af batteribank)</p>
          <br>
          <h1><i>Produktgaranti:</i></h1>
          <p>10 år.</p>
          <br>
          <h1><i>MPP-Tracker:</i></h1>
          <p>2</p>
          <br>
          <h1 class="text-lg py-2"><u>Batteribank</u></h1>
          <h1><i>Kapacitet:</i></h1>
          <p>5 – 15 kW.</p>
          <br>
          <h1><i>Produktgaranti:</i></h1>
          <p>10 år.</p>
          <br>
          <h1><i>Ydelsesgaranti:</i></h1>
          <p>>10.000 cyklusser.</p>
          <br>
          <h1><i>Dimension kabinet:</i></h1>
          <p>88/67/23  H/W/D*</p>
          <br>
          <h1><i>Vægt fra:</i></h1>
          <p>55 kg*</p>
          <br>
          <h1><i>Teknologi</i></h1>
          <p>LiFePO4</p>
          <br>
          <h1><i>Indkapslingsklasse:</i></h1>
          <p>IP21</p>
          <br>
          <h1><i>Temp. omgivelse:</i></h1>
          <p>5-30 ºC</p>
          <br>
        </template>
      </Collapse>
      
      <div class="flex w-1/2 m-auto p-5">
        <ButtonCom  @click="scrollMeTo('bottom')">KONTAKT OS NU OG FÅ ET TILBUD</ButtonCom>
      </div>
    </Parallax>

    <section class="pt-10 text-left">
        <div class="border-solid border-black border-[1px] md:mx-10 lg:mx-20 xl:mx-30 p-10">
          <div class="xl:inline-block align-middle xl:w-1/2">
            <img class="" src="../../assets/img/battery_bank/Variable-elpriser.webp" alt="Battery&Suncell">
          </div>
          <div class="xl:inline-block align-middle xl:w-1/2">
            <h1>Oplad Sonnen batteribank med billig strøm om natten</h1>
            <br>
            <span>
                Det der gør Sonnen så specielt er deres innovative tilgang, 
                og her har de med købe funktionen revolutioneret måden man benytter batteribanke på. 
                Tilsvarende batteribanke på det danske marked er nemlig bare det; batteribanke. 
                Med en Sonnen batteribank får man en batteribank i topkvalitet, 
                som tilmed kan spare dig penge ved at købe billig strøm. 
            </span>
            <br><br>
            <span>
                Et solcelleanlæg kan i mange måneder af året dække det meste af dit forbrug. 
                Men i de måneder hvor solen ikke er fremme vil man oftest være nødt til at købe strøm fra elnettet. 
                Her hvor priserne selvfølgelig er evigt stigende – dog vil priserne altid være betydeligt billigere om natten. 
                Det kan en Sonnen batteribank udnytte ved at købe strømmen når den er billigst om natten. 
                Denne billige strøm er så klar til fri benyttelse i løbet af dagen når man har brug for den – og strømmen ellers er dyrest.  
            </span>
          </div>
        </div>
      </section>

      <section class=" text-left">
        <div class="pt-10 md:mx-10 lg:mx-20 xl:mx-30 p-10">
          <div class="xl:inline-block align-middle xl:w-1/2">
            <h1>Batteribank og solceller</h1>
            <br>
            <span>
              Hvorfor få en batteribank til at starte med? 
              Med et solcelleanlæg uden en batteribank bruger man typisk under 30% af den genererede elektricitet. 
              Produktionen sker nemlig primært i dagtimerne mellem 8-16, som er der den gennemsnitlige dansker er på arbejde, og dermed ikke har noget forbrug i hjemmet. 
              Derfor vil al den overskydende produktion i stedet blive smidt ud på elnettet, og dermed ikke hjælpe med at gøre husstanden selvforsynende. 
              Men, med en batteribank kan dette være anderledes. 
            </span>
            <br><br>
            <span>
              Med en batteribank kan al produktionen nemlig bare blive lagret på batteribanken. 
              Derefter kan denne produktion benyttes om aftenen og om morgenen hvor man vil have det højeste forbrug. 
              Dermed kan mest muligt af den producerede el blive benyttet i husstanden, 
              og bringe selvforsyningsgraden helt op på de 60-70% som man går efter med et solcelleanlæg. 
            </span>
            <br><br>
            <!-- TODO: <router-link :to="{name : 'pricecalculator'}"><p><u>Få et tilbud på et solcelleanlæg med en Sonnen batteribank her.</u></p></router-link> -->
          </div>
          <div class="xl:inline-block align-middle xl:w-1/2">
            <img class="m-auto" src="../../assets/img/battery_bank/Bank&Suncell.webp" alt="Battery&Suncell">
          </div>
        </div>
      </section>

      <section class="pt-10 text-left">
           <div class="border-solid border-2 border-black md:mx-10 lg:mx-20 xl:mx-30">
            <div class="xl:inline-block align-top p-5 xl:lg:w-1/2">
              <iframe class="w-full xl:min-w-[500px] aspect-video" src="https://www.youtube.com/embed/aAlXEwivCR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="xl:inline-block align-top xl:w-1/2 p-5 text-left">
              <h2 class="text-xl">Fremtidssikret batteribank – rekordhøj holdbarhed</h2>
              <br>
              <p>Som tidligere nævnt er kvaliteten der kommer med en Sonnen batteribank helt suveræn.</p>
              <br>
              <span>
                En stor del af dette vises i selve batteribankens holdbarhed, der er længder foran konkurrenterne på markedet. 
                En Sonnen batteribank har 10 års produktgaranti, 
                en garanti som er bedre end de fleste, men stadigt sammenlignelig med andre. 
                Der hvor de virkelig skiller sig ud er på den 10.000 cyklussers ydelsesgaranti, 
                her hvor 70% af batterikapaciteten er garanteret. 
                Som tidligere nævnt kan én cyklus med et konservativt estimat blive sammenlignet med én dag. 
              </span>
              <br><br>
              <span>
                Går man ud fra dette konservative estimat, 
                så kan <b>batteribanken yde over 70%</b> af kapaciteten i 10.000 dage, hvilket svarer til <b>over 27 år</b>. 
                Sonnen har de seneste mange år testet en celle fra deres batteribank for at se hvad den reelt set kan opnå 
                – i 2021 havde denne test formået hele <b>28.000 fulde cyklusser</b> (sammenlignet med garantien på 10.000) på battericellen, 
                men testen er stadigt i gang. 
                Efter de 28.000 cyklusser var der tilmed over hele 60% af battericellens kapacitet stadigt tilgængelig. 
              </span>
              <br><br>
              <span>
                Så om det er 10 år, 10.000 cyklusser, eller 28.000 cyklusser, 
                <b>en Sonnen batteribank kan holde længere tid end konkurrenterne</b>. 
              </span>
            </div>
          </div>
      </section>

      <section class="pt-10">
        <div class="md:mx-10 lg:mx-20 xl:mx-30 w-fit">
          <div class="xl:inline-block align-middle xl:w-1/3 text-left">
            <h2 class="text-xl">Udnyt ALT din producerede strøm</h2>
            <br>
            <span class="text-[16px]">
              Når man snakker Sonnen, er der til tider kunder som er skeptiske over at det er en et-faset inverter. 
              Dette er problematisk i Danmark, da en et-faset inverter maksimalt må have et input-output på 3,68 kW. 
              Men, innovative som de nu er, så har Sonnen fundet en måde at omgå dette så <b>du kan få det maksimale ud af hvad inverteren kan håndtere, altså hele 6,5 kW produktion fra solcellerne</b>. 
            </span>
            <br>
            <span class="text-[16px]">
              De 3,68 kW input-output er stadigt grænsen for hvad der vil kunne blive benyttet i din husstand på et givent tidspunkt. 
              Men, samtidigt med at der smides strøm på huset, kan der smides op til 3,3 kW på batteribanken. 
              Dog skal det nævnes at inverteren maksimalt kan håndtere 6,5 kW, derfor kan man <b>hvis man benytter 3,68 kW i huset, oplade de resterende 2,82 kW på batteribanken</b>. 
              Bruger man mindre end 3,68 i husstanden, kan man oplade op til 3,3 kW på batteribanken. 
            </span>
          </div>
          <div class="xl:inline-block align-middle xl:w-1/3">
            <img src="../../assets/img/battery_bank/Sonnen_Blueprint.png" alt="Sonnen Blueprint">
          </div>
        </div>
      </section>

      <OfferBox/>

      <section class="pt-10 text-left">
        <div class="shadow-2xl rounded-xl mx-10 md:mx-20 lg:mx-40 p-5 lg:p-16">
          <div class="lg:inline-block align-middle lg:w-1/2">
            <h1>Sonnen</h1>
            <br>
            <span>
              Sonnen blev grundlagt i 2010 og kom på markedet i 2011, 
              med de første fuldt integrerede lagringssystemer til lithium-ion-batterier og har siden da været førende på ​​det globale marked for energilagring til boliger. 
              Gennem de senere år, har Sonnen været en af de hurtigst voksende teknologivirksomheder i Tyskland, 
              hvor virksomheden har sin oprindelse. 
            </span>
            <br><br>
            <span>
              Sonnen har blandt andet vundet anerkendte priser såsom: MIT “Top 50 Smartest Companies”, 
              Zayed Future Energy-prisen og Global Cleantech 100 “Continued Excellence Award”. 
              I 2018 blev Sonnen tildelt den prestigefyldte Red Dot Award for sin kombination af fremadskuende teknologi og fremragende design.
            </span>
          </div>
          <div class="lg:inline-block align-middle lg:w-1/2">
            <img src="../../assets/img/LandingPage4.webp" alt="App">
          </div>
        </div>
      </section>

      <hr>
      <h1>INSERT BLOG CAROUSEL</h1>
      <hr>

      <div class="flex justify-center items-center px-24 py-5">
        <div class="shrink w-24 h-[3px] bg-[#2c95c9]"></div>
      </div>
    <hr>
    <Trustpilot/>
    <hr>
    <div ref="bottom"></div>
  </div>
</template>

<script>
import Parallax from '../../components/Parallax.vue';
import Collapse from '../../components/Collapse.vue';
import OfferBox from '../../components/OfferBox.vue';
import ButtonCom from '../../components/ButtonCom.vue';
import Trustpilot from '../../components/Trustpilot.vue';
export default {
    components: { Parallax, Collapse, OfferBox, ButtonCom, Trustpilot }
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