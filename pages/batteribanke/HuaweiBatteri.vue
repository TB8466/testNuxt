<template>
  <div class="leading-[1.9em]">
    <section class="bg-solcellepage bg-cover pt-28">
      <div class="text-white">
        <div class="pt-28 pb-52">
          <h1 class="text-6xl leading-tight">Huawei Batteribank<br/>BEDST TIL PRISEN</h1>
          <div>
            <ButtonCom class="py-2" @click="scrollMeTo('products')">Se PRODUKTER</ButtonCom>
            <ButtonCom :transparent="true" @click="scrollMeTo('why-Huawei')">LÆS MERE</ButtonCom>
          </div>
        </div>
      </div> 
      </section>

      <div class="h-24 bg-dividerDarkBlue mt-[-1px]" ></div>
      <div class="flex justify-center items-center p-24">
        <div class="shrink w-24 h-[3px] bg-primary"></div>
      </div>
      
      <div ></div>
      <section>
        <p ref="why-Huawei" class="text-3xl">Hvorfor vælge <b>Huawei?</b></p>
        <div class="px-[10%]">
          <span class="inline-block align-top lg:w-1/3 p-[33px] text-left leading-[1.9em]">
            <p class="text-primary"><b>Få mest for pengene</b></p>
            <a href="https://solar.huawei.com/eu" target="_blank"><u>Huawei</u></a> er som bekendt en af verdens største teknologi virksomheder, 
            senest med en plads som <b>#49 af verdens største virksomheder ifølge Forbes500</b>. 
            Med deres inverter og batteribank er de derfor i stand til at benytte deres størrelse til at producere et teknologisk advanceret og høj kvalitets produkt, 
            som samtidigt kan holdes til en lav pris.            <br/>
            <br/>
            Læs mere længere nede på denne side. 
            <br/>
          </span>

          <span class="inline-block align-top lg:w-1/3 p-[33px] text-left leading-[1.9em]">
            <p class="text-primary"><b>Verdens største inverter producent</b></p>
            Med SUN2000 og LUNA2000 har de igennem deres korte tid på markedet formået at blive verdens største inverterproducent. 
            Dette primært på grund af deres høje kvalitet til en lav pris. 
            Deres produkter tilbyder nemlig en høj fleksibilitet så hybridanlægget kan adapteres præcis til ens behov. 
            Dette både med <b>enormt mange størrelser af anlæg, samt muligheden for udendørs placering</b>.
            <br/>
            – Prøv vores prisberegner 
            <TotalLink class="underline italic">her</TotalLink>
          </span>
        </div>
    </section>

    <div ref="products"></div>
    <Parallax :isRight="true" class="bg-huaweiBatteryBankParallax1">
      <p class="text-4xl pb-4">Huawei batteribank<br>– SUN2000 & LUNA2000</p>
      <span>
        Et Huawei hybridanlæg inkluderer de to produkter SUN2000 og LUNA2000. 
      </span>
      <br><br>
      <span>
        SUN2000 er en prisvindende Huawei inverter. 
        Med denne inverter er Huawei blevet til  verdens største inverter producent, 
        da den tilbyder <b>god kvalitet til en lav pris</b>. 
        LUNA2000 er ligeså en Huawei batteribank som er kendt for dets <b>stabilitet, og fleksibilitet</b>. 
      </span>
      <br><br>
      <span>
        Sammen udgør de et Huawei hybridanlæg som tillader for enorm fleksbilitet og fremtidssikring. 
        En Huawei batteribank kan nemlig som den eneste i Danmark <b>placeres både udendørs og indendørs</b> 
        – så man ikke behøver at finde plads i huset til det store batteri.
      </span>
      <br><br>
      <span>
        Dertil tilbyder en Huawei batteribank, at man kan starte med kun inverteren, 
        og senere hen tilkøbe selve batteribanken. 
        <b>En Huawei batteribank derefter løbende udvides</b>, 
        opstår behovet f.eks ved køb af en elbil som gør ens forbrug højere.
      </span>
      <br><br>
      <span>
        En LUNA2000 Huawei batteribank er på mellem <b>5-15 kW kapcitet</b>, 
        men med Huawei har man muligheden for at tilslutte 2 batteribanke til en inverter 
        – dermed er det altså muligt at få <b>en kapacitet på hele 30 kW</b> hvis der er et behov. 
        LUNA2000 tilbyder også en <b>‘depth-of-discharge'(DOD) på 100%</b>. 
        Det vil sige at hele kapaciteten på batteriet kan bruges, hvilket er meget unormalt 
        – den normale DOD vil for langt de fleste batteribanke ligge på omkring de 90%. 
      </span>
      <br><br>
      <span>
        Begge produkter tilbyder <b>10 års garanti</b>, 
        hvilket er sammenligneligt eller bedre end de fleste produkter på markedet. 
      </span>

      <Collapse>
        <template v-slot:collapse-header class=""><h1>Nøgletal</h1></template>
        <template v-slot:collapse-content>
          <h1 class="text-lg py-2"><u>Inverter – SUN2000</u></h1>
          <h1><i>Input-output:</i></h1>
          <p>2-12 kW.</p>
          <br>
          <h1><i>Garanti:</i></h1>
          <p>10 år.</p>
          <br>
          <h1><i>MPP-Tracker:</i></h1>
          <p>2</p>
          <br>
          <h1><i>Dimension kabinet:</i></h1>
          <p>52,5 / 47 / 15  H/W/D</p>
          <br>
          <h1><i>Vægt:</i></h1>
          <p>17 kg</p>
          <br>
          <h1><i>Indkapslingsklasse:</i></h1>
          <p>IP65</p>
          <br>
          <h1><i>Temp. omgivelse:</i></h1>
          <p>-25+60 ºC</p>
          <br>
          <h1 class="text-lg py-2"><u>Batteribank – LUNA2000</u></h1>
          <h1><i>Kapacitet:</i></h1>
          <p>5-30 kW.</p>
          <br>
          <h1><i>Input-output:</i></h1>
          <p>2,5-5 kWh.</p>
          <br>
          <h1><i>Garanti:</i></h1>
          <p>10 år.</p>
          <br>
          <h1><i>Dimension kabinet:</i></h1>
          <p>60-132/67/15 cm  H/W/D*</p>
          <br>
          <h1><i>Vægt:</i></h1>
          <p>64-164 kg*</p>
          <br>
          <h1><i>Teknologi:</i></h1>
          <p>LiFePO4</p>
          <br>
          <h1><i>Indkapslingsklasse:</i></h1>
          <p>IP65</p>
          <br>
          <h1><i>Temp. omgivelse:</i></h1>
          <p>-10-55ºC</p>
          <br>
        </template>
      </Collapse>
      
      <div class="flex w-2/3 m-auto p-5">
        <ButtonCom class="py-2" @click="scrollMeTo('footer')">Se PRODUKTER</ButtonCom>
      </div>
    </Parallax>
      
      <InlineBlock :wide="true">
        <template #col1>
          <img class="m-auto w-80 lg:w-full" src="../../assets/img/battery_bank/Sun2k.webp" alt="Sun2k">
        </template>

        <template #col2>
            <h1 class="text-left text-xl">Kvalitets inverter, med eller uden batteribank</h1>
            <br>
            <ul class="list-disc text-left list-inside">
              <li><b>SUN2000</b></li>
              <li>2 – 10 kW. input/output</li>
              <li>2 MPPT (Brug 2 tagflader)</li>
              <li>10 års garanti</li>
              <li>Kan købes med el. uden batteribank</li>
            </ul>
            <br>
            <span>
              Den prisvindende SUN2000 er inverteren som har gjordt Huawei til den største inverterproducent i verden. 
              Med høj kvalitet og lav pris er det den standard inverter til lavpris løsninger her hos Viasol. 
            </span>
            <br><br>
            <span>
              Inverteren er den eneste i Danmark som kan placeres både inde- og udendørs. 
              Det vil for mange være det foretrukne valg at placere den udendørs, 
              dette så man sparer pladsen indedøre, og da der vil komme en smule støj fra inverteren. 
            </span>
            <br><br>
            <span>
              Inverteren er at fås i 8 forskellige størrelser mellem 2-10 kW input/output, 
              dette som gør det muligt at få en skræddersyet løsning som passer bedst muligt til solcelleanlægget. 
            </span>
            <br><br>
            <span>
              Dertil kommer den med 10 års garanti, som er standarden for højere kvalitets invertere på markedet. 
            </span>
        </template>
      </InlineBlock>

      <div class="flex justify-center items-center px-24 py-3">
        <div class="shrink w-24 h-[3px] bg-[#2c95c9]"></div>
      </div>
      
      <InlineBlock :wide="true">
        <template #col1>
          <h1 class="text-left text-xl">Fremtidssikret batteribank</h1>
            <br>
            <ul class="list-disc text-left list-inside">
              <li><b>LUNA2000</b></li>
              <li>2.5-5.0 kW. output</li>
              <li>5-30 kWh kapacitet</li>
              <li>10 års garanti</li>
              <li>DOD 100%</li>
              <li>Kan altid udvides efter behov (f.eks ved køb af elbil)</li>
            </ul>
            <br>
            <span>
              Huawei’s batteribank LUNA2000 er produktet som man får med et Huawei hybridanlæg, 
              og ligesom inverteren SUN2000, er det en enormt fleksibel batteribank.  
            </span>
            <br><br>
            <span>
              Det er ligesom inverteren den eneste batteribank i Danmark som kan placeres både inde- og udendørs. 
            </span>
            <br><br>
            <span>
              Fleksibiliten i LUNA2000 batteribanken er som sagt længder bedre end konkurrenterne. 
              Til at starte med kan man starte uden en batteribank, og dermed altså kun inverter. 
              Derefter er det muligt at installere en Huawei batteribank med 5 kW, og så senere installere flere moduler helt op til de 15 kW kapacitet. 
              Vil man have yderligere kapacitet er det dog endvidere muligt at opgradere med en helt ekstra batteribank, 
              så man kan opnå hele 30 kW kapacitet på hybridanlægget.
            </span>
            <br><br>
            <span>
              Med en Depth of Discharge (DOD) på hele 100% er Huawei altså også længere fremme end så mange andre på markedet. 
              Det betyder at 100% af batteribankens kapacitet kan udnyttes. 
              Dette er betydeligt bedre end konkurrenterne, som oftest tilbyder mellem 80-90% DOD. 
              Dermed får du med en Huawei batteribank fleksibilitet og maksimal udnyttelse af dit hybrid solcelleanlæg.  
            </span>
        </template>
        <template #col2>
          <img class="m-auto w-64 lg:w-full" src="../../assets/img/battery_bank/Luna2k.webp" width="" alt="Luna2k" />
        </template>
      </InlineBlock>

      <section class="pt-10 text-left ">
        <div class="border-solid border-black border-[1px] md:mx-20 lg:mx-40 p-10">
          <div class="lg:inline-block align-middle lg:w-1/2">
            <img src="../../assets/img/battery_bank/Bank&Suncell.webp" alt="Battery&Suncell">
          </div>
          <div class="lg:inline-block align-middle lg:w-1/2">
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
        </div>
      </section>

      <OfferBox/>

      <section class="pt-10 text-left">
        <div class="shadow-2xl rounded-xl mx-10 md:mx-20 lg:mx-40 p-5 lg:p-16">
          <div class="lg:inline-block align-middle lg:w-1/2">
            <h1>Huawei</h1>
            <br>
            <span>
              Huawei, som primært er kendt for deres mobiltelefoner, er en kinesisk teknologivirksomhed grundlagt i 1987. 
              I 2020 endte de året som verdens 49. største virksomhed ifølge Forbes 500. 
              I senere år har de udviklet enormt gode produkter indenfor batteribanke og invertere, 
              som har ført til deres status som verdens største inverterproducent. 
            </span>
            <br><br>
            <span>
              Som vidnesbyrd på produkternes kvalitet har de i de seneste år også vundet en række awards. 
              Her blandt andet PV magazine’s ‘Best of 2019’, iF’s ‘Design Award 2017’ og Interop ‘Best of Show Award 2020’.
            </span>
          </div>
          <div class="lg:inline-block align-middle lg:w-1/2">
            <img src="../../assets/img/battery_bank/Huawei-awards.webp" alt="Huawei-Awards">
          </div>
        </div>
      </section>

      <hr>
      <h1>INSERT BLOG CAROUSEL</h1>
      <hr>

      <div class="flex justify-center items-center px-24 py-5">
        <div class="shrink w-24 h-[3px] bg-[#2c95c9]"></div>
      </div>

    <Trustpilot/>
  <div ref="footer"></div>
  </div>
</template>

<script>
import Parallax from '../../components/Parallax.vue';
import Collapse from '../../components/Collapse.vue';
import OfferBox from '../../components/OfferBox.vue';
import InlineBlock from '../../components/Inline-Block.vue';
import Trustpilot from '../../components/Trustpilot.vue';
import ButtonCom from '../../components/ButtonCom.vue';
export default {
    components: { Parallax, Collapse, InlineBlock, Trustpilot, OfferBox, ButtonCom }
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