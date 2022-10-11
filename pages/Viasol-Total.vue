<template>
  <div>
    <section class="text-left leading-[1.9em]">
      <InlineBlock>
        <template #col1>
          <p class="text-3xl font-black">SELVFORSYNENDE MED SOLCELLER <span class="text-primary">– VI STÅR FOR ALT</span></p>
          
          <p class="pt-4"><span class="text-primary">√</span>Vi rådgiver, leverer, installerer og står for papirarbejdet</p>
          
          <p class="pt-4"><span class="text-primary">√</span>Spar op til 70% på elregningen og undgå stigende elpriser</p>
          
          <p class="pt-4"><span class="text-primary">√</span>Bliv grøn nu med verdens førende solceller og batteribanke</p>
          
          <ButtonCom class="py-4" :green="true">Få et uforpligtende tilbud nu</ButtonCom>
          <img src="../assets/img/Erhverv-logoer.webp" alt="Logos">
        </template>

        <template #col2 class="w-20">
          <iframe class="w-full xl:min-w-[500px] aspect-video" src="https://www.youtube.com/embed/gzbl91bsePI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="w-6 relative left-[10%] lg:left-[35%] ">
            <img src="../assets/img/Arrow-up.png" alt="Arrow">
          </div>
          <p class="text-center font-black">Se hvordan det fungerer</p>
        </template>
      </InlineBlock>
    </section>

    <section ref="formular">
      <Parallax :prisbergner="true" class="bg-PriceCalculator1">
        <Calculator/>
      </Parallax>
    </section>
<!-- 1 -->
    <section class="py-10">
      <div class=" m-auto">
        <h1 class="text-3xl">Hvorfor solceller fra Viasol?</h1>
        <p class="text-lg">Vi gør det nemt at få Danmarks bedste solcelleanlæg</p>
        <div class="lg:px-[25%] px-[5%]">
          Med over <span class="text-primary"> <b> +3500 solcelleanlæg installeret</b> </span>, behøver du ikke bekymre dig når du handler med Viasol. <br>
          Vi skræddersyer en pakkeløsning til dig, med verdens førende solceller og batteribanke, 
          så du nemt kan komme i fronten af den grønne omstilling.
        </div>
        <p class="py-2 font-black">  Se hele processen nedenfor</p>
      </div>
    </section>
    <section>
      <div>
        <img src="../assets/img/Prisbergner/PrisbergnerNr1.webp" class="w-[8%] h-full m-auto" alt="">
      </div>
      <h1 class="py-2 text-2xl">VI HJÆLPER DIG MED GRATIS RÅDGIVNING</h1>
      <p class="text-base">Sammen med dig finder vi det perfekte solcelleanlæg til netop dine behov</p>
      <InlineBlock>
        <template #col1>
           <img src="../assets/img/Prisbergner/PrisbergnerSolcellerTegning.webp" class="box-border h-24 w-24 p-4 border-[2px] border-solid  rounded-full m-auto " alt="">
          <div class="pt-2 pb-4">
            <div class="box-border p-4 border-[1px] border-solid m-auto rounded-md text-center mx-[5%]">
            <h1>Hvor stort skal dit solcelleanlæg være?</h1>
            <p>Med vores avancerede modeller finder vi det rette anlæg</p>
            <p>
              Vores solceller er blandt verdens førende og har garantier på hele 25 år, 
              så du tjener penge på dit anlæg mange år efter det er tjent hjem. 
              Men hvor stort skal dit solcelleanlæg være? – Det hjælper din rådgiver dig med!
            </p>
            <p class="font-black">  Klik på knappen for at læse om vores solceller: </p>
            </div>
          </div>
            <ButtonCom :blackWhiteOutline="true" class="py-4 flex w-4/5 m-auto">Få et uforpligtende tilbud nu</ButtonCom>
      
        </template>
        <template #col2 >
        
           <img src="../assets/img/Prisbergner/PrisbergnerBlueBattery10-980x980.png" class="box-border h-24 w-24 p-4 border-[2px] border-solid border-primary rounded-full m-auto" alt="">
           <div class="pt-2 pb-4  m-auto">
           <div class="box-border p-4 border-[1px] border-solid m-auto rounded-md text-center border-primary mx-[5%]">
            <h1 class="text-primary text-xl">Skal du have batteribank?</h1>
            <h2>Din rådgiver vurderer ud fra dit forbrugsmønster</h2>
            <p>
              Det næste valg er om du har behov for en batteribank. En batteribank gør det muligt, 
              at opmagasinere den store mængde strøm du producerer midt på dagen, 
              til brug om aftenen – hvor dit forbrug er størst.
            </p>
            <p class="font-black"> Klik på knappen for at læse mere om batteribanke:</p>
            </div>           
           </div>
           <ButtonCom  class="py-4 flex w-4/5 m-auto">Få et uforpligtende tilbud nu</ButtonCom>
        </template>
      </InlineBlock>

      <img src="../assets/img/Prisbergner/PrisbergnerAfdrag-_2_-kopi.webp" class="lg:w-[50%] w-[90%] rounded-lg h-full m-auto" alt="">
    </section>

<!-- 2 -->
    <section class="py-10">
      <div>
        <img src="../assets/img/Prisbergner/PrisbergnerNr2.webp" class="w-[8%] h-full m-auto" alt="">
      </div>
      <h1 class="py-2 text-2xl">LANDSDÆKKENDE MONTØR OG ELINSTALLATØR</h1>
      <p class="text-base lg:px-[30%] px-[5%]">
        Efter produkterne, er det absolut vigtigste at dine solceller 
        bliver monteret og installeret korrekt og professionelt. 
        Vælger du Viasol er du i gode hænder, da vi samarbejder med Danmarks 
        førende montører og elinstallatører.
      </p>
      
      <InlineBlock :nopading="true" class="box-border border-[3px] border-solid lg:mx-[20%] mx-[5%] rounded-lg text-center border-primary">
        
        <template #col1 class="px-2">
          
          <div class="py-2 pb-4 text-center"> 
            <h1 class="text-primary text-lg"><strong> Hvem monterer dine solceller? </strong><br> RTN BYG ApS</h1>
            <p>Med vores avancerede modeller finder vi det rette anlæg</p>
            <p>
              RTN BYG har været vores eksklusive montagepartner i over 10 år. 
              De er er certificeret til opsætning af vores SunPower solceller, 
              og <u> tilføjer derfor en 25 års servicegaranti</u> på dem.
            </p>
            <p class="font-black">  &#62; SunPower Advantage certificeret &#60; </p>
            <p class="font-black">  &#62; Årets håndværker finalist 2019, 2020, 2021 & 2022 &#60; </p>
            <p class="font-black">  &#62; Landsækkende service &#60; </p>
            
        
          </div>
      
        </template>
        <template #col2>
          <div class="py-2 text-center">
            <h1 class="text-primary text-lg"><strong> Hvem monterer dine solceller?</strong><br> RTN BYG ApS</h1>
            <p>
              Vores elinstallatør, Trekantens El Teknik, 
              har mange års erfaring med den grønne omstilling. 
              De er certificeret til opsætning af vores produkter og 
              <u> står for at tilmelde dit anlæg til Energistyrelsen.</u>
            </p>
            <p class=" font-black">  &#62; Autoriseret el-installatør &#60; </p>
            <p class=" font-black">  &#62; Årets håndværker finalist 2018, 2020, 2021 & 2022 &#60; </p>
            <p class=" font-black">  &#62; Landsdækkende service &#60; </p>
          </div>
        </template>
      </InlineBlock>
    
      <div class="py-5">
        <img src="../assets/img/Prisbergner/PrisbergnerAfdrag-_1920-×-720px_.webp" class="lg:w-[50%] w-[90%] rounded-lg h-full m-auto" alt="">
      </div>
    </section>
    <section>
      <div>
        <img src="../assets/img/Prisbergner/PribergnerNr3-980x980.webp" class="w-[8%] h-full m-auto" alt="">
      </div>

     
          <div class="text-center py-3 ">
            <h1 class="text-xl">KONTANT ELLER FINANISERET MED VIASOL TOTAL?</h1>
            <div class="lg:mx-[33%]">
            <p class=" py-2">
              Når du og din rådgiver har fundet frem til det rette anlæg, 
              er næste skridt at beslutte om købet skal finansieres eller betales kontant. 
              Kontant vil give den korteste tilbagebetalingstid, 
              men med en finansieret løsning vil besparelserne fra 
              solcelleanlægget betale dine afdrag undervejs. 
            </p>
            <p class="py-2">
              På lige fod med at vi tilbyder de bedste produkter, 
              montører og elinstallatører, har vi hos Viasol etableret et 
              samarbejde med Santander Consumer Bank – som er kendte for at kunne 
              <u> tilbyde billige og bindingsfrie lån.</u>
            </p>
            <p class="py-2 font-black"> Dette samarbejde betyder at vi kan tilbyde finansiering med en rente på kun 2,98%.</p>
            <img src="../assets/img/Prisbergner/PrisbergnerSantander-logo.webp" class="w-[30%] h-full m-auto" alt="">
            </div>
          </div>
       
    </section>
    <section>
      <div>
        <img src="../assets/img/Prisbergner/PrisbergnerNr4-980x980.webp" class="w-[8%] h-full m-auto" alt="">
      </div>
          <div class="text-center py-3 ">
            <h1 class="text-xl">SPAR DIN ELREGNING</h1>
            <div class="lg:mx-[33%]">
            <p class=" py-2">
              Efter det er monteret og installeret, 
              sørger vi for papirarbejdet til energistyrelsen og 
              din el-leverandør. Så kan du bare læne dig tilbage og se besparelserne trille ind.
            </p>
            </div>
            <img src="../assets/img/Prisbergner/PrisbergnerGraf.webp" class="m-auto" alt="">
            <div class="lg:mx-[33%]">
            <p class="py-2"> 
              Er du interesseret i at se din mulige gevinst ud fra netop dine forhold, 
              så kan vores prisberegner give dig et hurtigt estimat.Efter at have prøvet prisberegneren, 
              har du mulighed for at få gratis rådgivning, hvor vi vil yderligere tilpasse tilbuddet i samarbejde med dig.
            </p>
            <p class="font-black"> Prøv prisberegneren nu, og se hvad du kan spare med et solcelleanlæg fra Viasol</p>
            <ButtonCom class="py-4" :green="true" @click="scrollMeTo('formular')">BEREGN DINE BESPARELSER NU</ButtonCom>
            </div>
          </div>
    </section>


    <section class="py-5">
      <div>
        <div class="inline-block align-top lg:w-1/5 px-5">
          <div class="flex justify-center items-center py-4">
            <div class="shrink w-24 h-[3px] bg-[#2c95c9]"></div>
          </div>
              <h1 class="text-2xl">Vil du høre mere?</h1>
              <div class="lg:text-left">
              <p class="py-3">
                Vi oplever stor efterspørgsel efter vores solcelleanlæg med 
                <b> Sonnen batteribank </b> og <b>SunPower solceller</b>. 
                Ønsker du en snak eller at få et uforpligtende tilbud?
              </p>
              <p>
                Kontakt os nu – så vender en af vores rådgivere tilbage med uforpligtende rådgivning.
              </p>
            </div>
        </div>
            <img class="lg:inline-block  w-[25%] h-full m-auto rounded-lg" src="../assets/img/Prisbergner/PrisbergnerPraesentation.webp">
    </div>
    </section>
    
    
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