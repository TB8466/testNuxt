<template>
  <div>
    <section class="pt-28 pb-20">
      <div class="pb-4">
        <h1 class="text-xl md:text-4xl">VORES UDVALG AF BATTERIBANKE</h1>
        <p class="md:text-2xl">Verdens førende hybridanlæg på alle parametre</p>
      </div>
      <div class="w-fit md:w-full lg:flex sm:px-20 md:px-40 xl:px-80">
          <div class="">
            <div class="border-black border-solid border-[6px] rounded-xl px-10 m-5 h-full">
              <NuxtLink to="/batteribanke/huaweibatteri">
              <h1 class="text-3xl">Bedst til prisen</h1>
              <p class="text-2xl">Huawei SUN2000 & LUNA2000</p>
              <img src="../../assets/img/battery_bank/Sun2k_Luna2k.webp" alt="">
              <ul class="list-disc text-left">
                <li><b>10 års garanti / 4.000 cyklusser</b></li>
                <li><b>5-30 kW kapacitet</b></li>
                <li>Kan sættes udendørs</li>
                <li>Kan altid udvides (f.eks hvis du får elbil)</li>
                <li>60% effekt efter garanti</li>
              </ul>
            </NuxtLink>
              <div class="text-left">
                <p class="text-center text-2xl pt-4">Huawei</p>
                <span>
                  <a href="https://solar.huawei.com/eu" target="_blank"><u>Huawei</u></a>
                  er et af verdens største tech firmaer,
                  som i gennem årene er sprunget frem som en af de førende virksomheder indenfor inverterer og batteribanke.
                  Her hvor de er den <b>absolut største producent af invertere i verden.</b>
                </span>
                <br><br>
                <span>
                  Grundet deres størrelse er det muligt for dem at levere et <b>godt produkt til en stabil lav pris</b>.
                  Derfor vil Huawei ofte være valget i vores lavpris pakker
                  – selvom det stadigt har rigtigt meget godt at tilbyde.
                </span>
                <br><br>
                <span>
                  Som en ekstra funktion, så er Huawei’s batteribank <b>den eneste i Danmark, som kan positioneres udendørs</b>.
                  Altså kan du spare pladsen indenfor, og gemme den væk bag huset.
                </span>
              </div>
          </div>
          <NuxtLink to="/batteribanke/huaweibatteri">
            <ButtonCom :blackWhiteOutline="true">Læs mere om Huawei</ButtonCom>
          </NuxtLink>
          </div>
          
        
          <div class="">
            <div class="border-primary border-solid border-[6px] rounded-xl px-10 m-5 h-full">
              <NuxtLink to="/batteribanke/sonnenbatteri">
              <h1 class="text-3xl">Bedst på markedet</h1>
              <p class="text-2xl">SonnenBatterie hybrid</p>
              <img src="../../assets/img/battery_bank/SonnenBatterie.webp" alt="">
              <ul class="list-disc text-left list-inside">
                <li><b>10 års garanti / 10.000 cyklusser</b></li>
                <li><b>5-30 kW kapacitet</b></li>
                <li><b>Kan købe billig strøm om natten</b></li>
                <li>Kan altid udvides (f.eks hvis du får elbil)</li>
                <li>70% effekt efter garanti</li>
              </ul>
            </NuxtLink>
            
            <div class="text-left">
                <p class="text-center text-2xl pt-4">Sonnen</p>
                <span>
                  Tyske
                  <a href="https://sonnengroup.com/" target="_blank"><u>Sonnen</u></a>
                  har efterhånden været kendt som <b>de bedste i branchen</b> i mange år.
                  Bygget på et fundament af innovation, har den tyske producent revolutioneret funktionalitet i batteribanke.
                </span>
                <br><br>
                <span>
                  Udover en generel kvalitet i deres batteribanke som giver markedets bedste garanti,
                  så gør deres ekstra funktionalitet at du kan spare penge selv hvis solcellerne ikke genererer strøm
                  – nemlig ved at <b>købe billig strøm om natten</b>.
                </span>
                <br><br>
                <span>
                  Så mens mange vil gå i vintermånederne og ærge sig over en mindre produktion fra deres solcelleanlæg,
                  så vil man med en Sonnen batteribank stadigt kunne få <b>store besparelser da elprisen er meget mindre i nattetimerne</b>.
                </span>
              </div>
          </div>
          <NuxtLink to="/batteribanke/sonnenbatteri">
            <ButtonCom :whiteAndBlue="true">Læs mere om Sonnen</ButtonCom>
          </NuxtLink>
          </div>
      </div>
    </section>

    <Quality-assurance/>
    
    <WhyViasol />
  </div>
</template>

<script>
import QualityAssurance from '../../components/QualityAssurance.vue';
import WhyViasol from '../../components/WhyViasol.vue';
import ButtonCom from '../../components/ButtonCom.vue';
export default {
    components: { QualityAssurance, WhyViasol, ButtonCom }
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