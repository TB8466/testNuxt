<template>
  <div>
    <section class="bg-frontpage bg-cover bg-center">
      <div class="text-white">
        <div class="py-52">
          <h1 class="text-6xl font-bold leading-tight">Solcelleanlæg &<br/>batteribank</h1>
          
          <h2 class="text-2xl py-4">Hos Viasol tilbyder vi markedets førende produkter,<br/>kombineret med erfarne montører og god service<br/>
            <b>– Alt samlet i én pakkeløsning</b>
          </h2>
          <div class="p-5">
            <ButtonCom class="py-2" :green="true"> <TotalLink>PRØV VORES PRISBERENGER</TotalLink></ButtonCom>
            <ButtonCom @click="scrollMeTo('qualityAssurance')" class="py-2" :transparent="true">LÆS MERE</ButtonCom>
          </div>
        </div>
      </div>
    </section>

    <div class="h-24 bg-dividerlightblue mt-[-1px]" ></div>

    <SectionDivider/>

    <section>
        <h2 class="text-3xl">Hvorfor vælge <b>VIASOL?</b></h2>
        <div class="px-[10%]">
          <div class="inline-block align-top lg:w-1/3 p-[33px] text-left leading-[1.9em]">
            <p class="text-primary">
              Viasol
            </p>
            <p>
              Siden 2011 har Viasol rådgivet og hjulpet over 3.500 husstande med den grønne omstilling. 
              Det har vi gjort ved at tilbyde <b> verdens absolut førende solceller og batteribanke, samlet i én billig pakkeløsning,</b> 
              som gør det nemt og gennemsigtigt for private husejere, at få opsat et solcelleanlæg.
            </p>
            <br/>
            <p>
              Når vi præsenterer et tilbud for dig, er det altid alt inkl., uden skjulte omkostninger eller tillæg.
            </p>
            <br>
            <TotalLink class="text-primary">– Prøv vores prisberegner</TotalLink>
          </div>
          <div class="inline-block align-top lg:w-1/3 p-[33px] text-left leading-[1.9em]">
            <p class="text-primary">
              Solcelleanlæg & batteribank
            </p>
            <p>
              Vores innovative hybrid solcelleanlæg har <b> markedets længste garantier og højeste effektivitet </b> 
              – så du får den højest mulige selvforsyningsgrad. 
              Vores anlæg er <b>inklusiv overvågningssystem,</b> 
              så du kan føle dig tryg og overvåge produktionen fra dine solceller, 
              fra både computer og smartphone.
            </p>
            <br/>
              <p>
                Vi <b> rådgiver dig gratis og sender et uforpligtende tilbud</b> efter dine behov.
              </p>
              <br/>
              <p>
                – Kontakt os nu: <a class="text-primary font-bold" href="tel:+4570207474">7020 7474</a>
                eller
                <a class="text-primary font-bold" href="mailto:kontakt@viasol.dk">kontakt@viasol.dk</a>.
              </p>
          </div>
        </div>
    </section>
    
    <BlogCarousel/>
    
    <div ref="qualityAssurance"></div>
    <QualityAssurance/>

    <WhyViasol/>

    <h1 class="text-xl font-bold pb-10">Læs mere om produkterne herunder</h1>
    <Parallax class="bg-frontpageParallax1">
          <p class="text-4xl sm:text-5xl font-light pb-2 ">SunPower 380 Wp, Shingled Cell</p>
          <div class="shrink w-24 h-[3px] bg-primary mb-10"></div>
          <p class="italic">
            Vi hos Viasol er meget stolte af at være de eneste i Danmark, som kan tilbyde SunPower solceller <br>
            – her mere bestemt SunPowers high Performance paneler, på hele 380 Wp.
          </p>
          <br/>
          <p class="text-primary">SunPower</p>
          <p>
            <a href="https://sunpower.maxeon.com/int/why-sunpower" target="_blank"><u>SunPower</u></a>
            er en amerikansk producent, som har været på markedet i 35 år og er anerkendt blandt branchefolk, for at være førende i verden på enten teknologi og innovation, eller begge. Og netop det demonstrerer SunPower endnu engang, med deres <b>nyeste patenterede teknologi, indenfor Shingled Cell som er integreret i solcellerne.</b>
          </p>
          <br>
          <p class="text-primary">Hvorfor vælge SunPower?</p>
          <p>
            SunPowers teknologi og pionerprojekter ses f.eks. i <b>rumprojekter for NASA</b> og i en lang række professionelle sportsgrene på land, vand og til luft. Foruden det, er de valgt til projekter for flere af verdens største virksomheder, såsom Apple, Toyota, FedEx, Johnson & Johnson og Walmart<br/>– men hvorfor lige præcis SunPower?
          </p>
          <br/>
          <p class="text-primary">Hvad gør dem bedre?</p>
          <p>
            Det skyldes først og fremmest de mange positive forbedringer ift. tidligere teknologier, såsom <b>bedre holdbarhed, højere ydelse og unikke garanti.</b> Disse som ikke kan findes bedre i branchen.
          </p>
          <ul class="font-bold py-4 list-disc list-inside text-primary">
            <li>+35 års forventet levetid</li>
            <li>25 års produktgaranti</li>
            <li>25 års servicegaranti</li>
            <li>25 års ydelsesgaranti</li>
          </ul>
          <p>
            Derudover er SunPower fremtrædende som en af de <b>førende bæredygtige virksomheder</b> i solcelle industrien.
          </p>
          <!-- TODO: -->
          <p class="py-4">– Læs mere om <NuxtLink class="text-primary font-bold underline" to="">SunPower & Singled Cell teknolgi</NuxtLink></p>
          <div class="py-5">
            <Collapse>
              <template v-slot:collapse-header><p class="">Produktinformation</p></template>
              <template v-slot:collapse-content>
                <div>
                  <br/>
                  <p class="font-bold">Mærke:</p>
                  <p>SunPower</p>
                  <br/>
                  <p class="font-bold">Ydelse:</p>
                  <p>380 Wp.</p>
                  <br/>
                  <p class="font-bold">Type:</p>
                  <p>Shingled Cell solceller</p>
                  <br/>
                  <p class="font-bold">Produktgaranti:</p>
                  <p>25 år</p>
                  <br/>
                  <p class="font-bold">Ydelsesgaranti:</p>
                  <p>25 år – Min. 87% ydelse derefter</p>
                  <br/>
                  <p class="font-bold">Servicegaranti</p>
                  <p>25 år</p>
                  <br/>
                  <p class="font-bold">Dimension:</p>
                  <p>169/116/3,5  H/W/D cm.</p>
                  <br/>
                  <p class="font-bold">Temp. omgivelse:</p>
                  <p>-40 ºC – +85 ºC</p>
                  <br/>
                  <p class="font-bold">Vægt:</p>
                  <p>21 kg</p>
                  <br/>
                </div>
              </template>
            </Collapse>
          </div>
    </Parallax>

    <Parallax :isRight="true" class="bg-frontpageParallax2">
      <p class="text-4xl sm:text-5xl font-light pb-2 ">Sonnen hybridanlæg</p>
      <div class="shrink w-24 h-[3px] bg-primary mb-10"></div>
      <p class="italic">
          Viasol er igen meget stolte af, at være en af de få strategisk udvalgte samarbejdspartnere, som har lov til at sælge Sonnens batteribanke.<br/>
          – Dette som sker gennem vores certificerede installatører.
      </p>
      <br/>
      <p class="text-primary">Sonnen</p>
      <p>
        Med <a href="https://sonnengroup.com/sonnenbatterie/" target="_blank"><u>Sonnen</u></a> får du et komplet hybridsystem med batteribank fra <b>verdens førende producent</b> – tyske Sonnen.
        Kombinationen af højtydende solceller og den intelligente sonnenBatterie batteribank giver dig <b>markedets bedste løsning til at blive selvforsynende.</b>
      </p>
      <br>
      <p class="text-primary">Hvorfor vælge Sonnen?</p>
      <p>
        Foruden at anlægget er en samlet æstetisk løsning, så er det unikke ved Sonnen hybriden, at <b>batteribanken altid kan opgraderes.</b>
        Dette kan gøres i steps af 2,5 kWh pr. modul, op til maks 15 kWh.
        Det betyder at du med dette produkt er <b>fremtidssikret</b>, da du med tiden kan opgradere din batteribank, hvis forbruget øges – f.eks. ved køb af elbil eller varmepumpe.
      </p>
      <br/>
      <p class="text-primary">Hvad gør dem bedre?</p>
      <p>
        Sonnen er længst fremme på stort set alle parametre, men f.eks. får man også andre og bedre muligheder, såsom at fastsætte tidspunkter hvor batteriet skal købe <b>strøm fra elnettet.</b>
        Det vil sige, at hvis man f.eks. oplader batteriet med solcelle strøm hen over dagen og aflader det helt om aftenen,
        så vil det blive <b>ladt op til den billigst mulige kW. pris</b> om natten og igen være fuld opladt næste morgen
        – denne funktion kan især være lukrativ i vintermånederne.
      </p>
      <br>
      <p>
        Der er flere klare fordele ved at vælge Sonnen og vi har derfor lavet en blog, hvor vi sammenligner Sonnen med konkurrenter på det danske batteribank marked.
      </p>
      <br>
        <!-- TODO: -->
      <p class="font-bold">– Se bloggen: <NuxtLink class="text-primary underline" to="">Sammenlign konkurrenterne – inverter & batteribank</NuxtLink></p>
      <div class="py-5">
        <Collapse>
          <template v-slot:collapse-header><p>Produktinformation</p></template>
          <template v-slot:collapse-content>
            <div>
              <br/>
              <p class="font-bold underline">Inverter:</p>
              <br/>
              <p class="font-bold underline">Input-output:</p>
              <p>3680 W.</p>
              <br/>
              <p class="font-bold">Produktaranti:</p>
              <p>10 år.</p>
              <br/>
              <p class="font-bold">MPP-Tracker:</p>
              <p>2</p>
              <br/>
              <p class="font-bold underline">Batteribank</p>
              <br/>
              <p class="font-bold">Kapacitet:</p>
              <p>5 – 15 kW.</p>
              <br/>
              <p class="font-bold">Produktaranti:</p>
              <p>10 år.</p>
              <br/>
              <p class="font-bold">Servicegaranti</p>
              <p>25 år</p>
              <br/>
              <p class="font-bold">Ydelsesgaranti:</p>
              <p>>10.000 cyklusser.</p>
              <br/>
              <p class="font-bold">Dimension kabinet:</p>
              <p>88/67/23  H/W/D*</p>
              <br/>
              <p class="font-bold">Vægt fra:</p>
              <p>55 kg*</p>
              <br/>
              <p class="font-bold">Teknologi:</p>
              <p>LiFePO4</p>
              <br/>
              <p class="font-bold">Indkapslingsklasse:</p>
              <p>IP21</p>
              <br/>
              <p class="font-bold">Temp. omgivelse:</p>
              <p>5-30 ºC</p>
              <br>
              <p class="font-bold">Minimum 70% garanteret batterikapacitet ved udløb af ydelsesgarantien. Anlægget leveres med integreret overvågning, der kan styres direkte via app eller computer.</p>
              <br/>
              <p>*Målene og vægten tager udgangspunkt i en 5 kW batteribank og vil ændre sig ved evt. udvidelse af batteribanken.</p>
            </div>
          </template>
        </Collapse>
      </div>
    </Parallax>

    <section class="py-10">
        
        <div>
          <div class="px-[10%] lg:inline-block align-top lg:w-1/2 p-[33px] lg:text-left leading-[1.9em]">
            <SectionDivider/>
            <p class="text-3xl">Følg med i dit forbrug</p>
            Der medfølger altid online styringsværktøjer med i vores tilbud, 
            sådan så du altid kan <b>monitorere dit forbrug</b> og arbejde dig hen mod at blive mest mulig selvforsynet.
            <br/>
            Tilsvarende andre apps og styresystemer, så skaber dette også muligheden for, 
            at producenten løbende kan opdatere anlæggets funktioner. 
            Det er vigtigt, i det at anlægget <b>forbliver funktionsdygtigt langt ud i fremtiden.</b> 
            Altså er du helgarderet for, at anlægget altid er up-to-date og tidssvarende.
          </div>
          <img class="lg:px-[10%] lg:inline-block align-top lg:w-1/2 p-[33px]" src="../assets/img/LandingPage4.webp">
        </div>
    </section>
    
    <SectionDivider/>

    <div class="grid place-items-center">
      <h1 class="text-4xl p-8">Spørgsmål og svar</h1>
      <div>
        <p>Få svar på oftest stillede spørgsmål eller ring og få en snak med en af vores medarbejdere.</p>
      </div>
    </div>

    <section class="pt-10">
      <div class="lg:inline-block align-top lg:w-1/3 text-left leading-[1.9em] lg:px-5 pb-4">
          <Collapse>
            <template v-slot:collapse-header><p>Kan det betale sig at få solceller?</p></template>
            <template v-slot:collapse-content >
              <div class="text-left">
                <p class="pt-4">Bestemt. 
                  Investeringen gør en ende på at smide penge ud af vinduet til dit elselskab. 
                  Solceller tillægger tilmed værdi til dit hus, foruden at du kan nyde godt af store besparelser i mange år.</p>
              </div>
            </template>
          </Collapse>

          <div class="py-4" >
            <Collapse>
              <template v-slot:collapse-header><p>Hvor lang er finansieringen?</p></template>
              <template v-slot:collapse-content >
                <div class="text-left">
                  <p class="pt-4">Tilbagebetalingsperiodens længde er helt op til dig. 
                    Samarbejdet med vores partnerbank gør det muligt at tilbyde et godt, billigt og fleksibelt lån på op til 15 år 
                    – uden bindingsperiode eller ekstra omkostninger ved indfrielse.</p>
                </div>
              </template>
            </Collapse>
          </div>

          <Collapse>
          <template v-slot:collapse-header><p>Hvad sker der med den strøm, som ryger ud på elnettet?</p></template>
          <template v-slot:collapse-content >
            <div class="text-left">
              <p class="pt-4">
                Ikke noget som udgangspunkt. 
                Skifter du derimod over til en eludbyder såsom Vindstød eller Nettopower, 
                betaler de 20 øre pr. kWh, som du sender ud på el-nettet 
              </p>
            </div>
          </template>
        </Collapse>            
      </div>

      <div class="lg:inline-block align-top lg:w-1/3 leading-[1.9em] lg:px-5 ">
        <Collapse>
          <template v-slot:collapse-header><p>Kan det betale sig med en batteribank?</p></template>
          <template v-slot:collapse-content>
            <div>
              <p class="pt-4">Det er individuelt, om man har behov for et batteri. 
                Typisk er det en fordel at have, da batteriet opmagasinerer strøm i løbet af dagen, 
                hvor man ikke er hjemme, til senere brug.</p>
            </div>
          </template>
        </Collapse>

          <div class="py-4">
            <Collapse>
              <template v-slot:collapse-header><p>Producerer solcellerne også om vinteren?</p></template>
              <template v-slot:collapse-content>
                <div class="text-left">
                  <p class="pt-4">
                    Solceller producerer året rundt og faktisk bedre i kulde. 
                    Produktionen er dog lavere om vinteren, pga. lavere solindstråling og færre soltimer.</p>
                </div>
              </template>
            </Collapse>
          </div>
          
          <Collapse>
            <template v-slot:collapse-header><p>Jeg har varmepumpe, har det indflydelse på noget?</p></template>
            <template v-slot:collapse-content>
              <div class="text-left">
                <p class="pt-4">
                  En varmepumpe vil medvirke til et højere forbrug henover hele året. 
                  Dog ligger forbruget hovedsageligt i vintermånedernde. 
                  Derfor dimensionerer man typisk stadig anlægget efter sommerhalvårets forbrug. 
                </p>
              </div>
            </template>
          </Collapse>
        </div>
    </section>

    <ContactUs/>

  </div>
</template>

<script>
import { useHead } from '#app'
export default { 
}
</script>

<script setup>
useHead({
  meta: [
    { name: 'SunPower + sonnenBatterie - Danmarks bedste solcelleanlæg. Prøv prisberegneren nu og få et uforpligtende tilbud med solceller med batteri.', 
    content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>