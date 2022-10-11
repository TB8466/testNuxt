<template>
  <div class="w-full">
    <section class="bg-solcellepage bg-cover bg-center pt-28">
      <div class="text-white">
        <div class="pt-28 pb-52">
          <p class="text-6xl font-bold leading-tight">SunPower solceller <br/>BEDST PÅ MARKEDET</p>
          <div>
              <ButtonCom @click="scrollMeTo('sunPowerSolceller')" class="inline-block p-10" >Se PRODUKTER</ButtonCom>
              <ButtonCom @click="scrollMeTo('whySunPower')" class="inline-block" :transparent="true" >LÆS MERE</ButtonCom>
          </div>
        </div>
      </div> 
      </section>

      <div  class="h-24 bg-dividerDarkBlue mt-[-1px]"></div>
      <div class="flex justify-center items-center p-24">
        <div ref="whySunPower" class="shrink w-24 h-[3px] bg-primary"></div>
      </div>

      
      <section >
        <p class="lg:text-3xl text-xl">Hvorfor vælge <strong>SunPower?</strong></p>
        <div class="lg:px-[10%] px-[2%]"> 
          <span class="inline-block align-top lg:w-1/3 py-[33px] pl-[20px] text-left leading-[1.9em] ">
            <p class="text-primary"> <strong>Markedets bedste solceller</strong></p>
            Med <a href="https://sunpower.maxeon.com/int/" target="_blank"><u>SunPower</u></a> solceller har vi mulighed for at sælge de absolut <b>bedste solcellepaneler tilgængeligt på det danske marked.</b> Ikke kun kan vores SunPower solceller prale med at have den <b>højeste ydeevne</b> i Danmark, de har dermed også den nye shingled cell teknologi som øger solcellepanelets holdbarhed, samt <b>ydeevne i skyggeforhold; 380 Wp, 25 års produkt-, ydelses-, og servicegaranti, samt 15% ydeevne i diffust lys.</b> 
            <br/>
            <br/>
            Læs mere længere nede på denne side.
            <br/>
            
          </span>

          <span class="inline-block align-top lg:w-1/3 py-[33px] pl-[20px] text-left leading-[1.9em]">
            <p class="text-primary"> <strong>Markedets førende producent</strong></p>
            Bag disse solceller står verdens førende solcelleproducent, SunPower. Med <b>35 år på markedet</b> har de fastsat deres status som kvalitets udbydere med fokus på kundetilfredshed og bæredygtighed hele vejen igennem deres forretning. Denne dedikation til arbejdet har først til at de gang på gang bliver valgt af verdens største virksomheder, såsom<b> Apple, NASA, Toyota og FedEx.</b>
              <br/>
              <br/>

            <TotalLink><h1 class="text-primary">– Prøv vores prisberegner</h1></TotalLink>
          </span>
        </div>
    </section>

    <div ref="sunPowerSolceller"></div>
    <Parallax :isRight="true" class="bg-solcellersonpowerParallax">
      
      <p class="lg:text-5xl text-xl font-light pb-2 ">SunPower solceller – Performance 3</p>
     
      <p class="flex lg:flex-none w-40 h-60 lg:w-[222px] lg:h-[395px] m-auto lg:float-right">
            <img class="box-border  " src="../assets/img/solcellerForsidebox.webp" alt="">
          </p>
          <p>
            Med hele <b> 380 Wp </b>ligger SunPower Performance 3 godt til i toppen af det danske marked. 
            Dertil har SunPower solceller på grund af den smarte shingled cell teknologi en betydeligt 
            <b>bedre ydeevne i skyggeforhold og diffust lys</b> end normale solceller – hvilket er ekstremt 
            vigtigt her i Danmark hvor sol timerne er begrænsede.
          </p>
          <p>
            Et vigtigt emne når man snakker SunPower solcellepaneler er holdbarheden, 
            og i forlængelse af det; <b>deres garantier</b>. Efterhånden er 25 års 
            garantier blevet mere og mere normale i solcelle branchen, men det der ofte 
            ikke bliver taget in mente er om en given virksomhed kommer til at være der om 
            20 år til at indfri garantien. Her er SunPower et sikkert valg, da de med 35 år på 
            markedet og flere store investorer bag dem, er <b>en enormt stabil virksomhed</b> 
            som forventes at blive på toppen af markedet mange år ud i fremtiden. Dertil har deres 
            solcellepaneler også en<b> forventet levetid på 35 år</b> – så der er en stor chance for 
            at garantien ikke engang behøves indfriet.
          </p>
          <p>
            Her hos Viasol er vi meget stolte af at være<b> ekslusive partnere med SunPower i Danmark</b>.
            Læs mere længere nede på denne side hvor der vil blive gået i dybden med hvad der gør SunPower solcellepaneler så specielle.
          </p>
          <Collapse>
            <template v-slot:collapse-header><span class="">Nøgletal</span></template>
            <template v-slot:collapse-content>
              <div>
                <br>
                <p><b>Mærke:</b></p>
                <p>SunPower</p>
                <br/>

                <p><b>Ydelse:</b></p>
                <p>380 Wp.</p>
                <br>

                <p><b>Type:</b></p>
                <p>Shingled Cell solceller</p>
                <br/>

                <p><b>Produktgaranti:</b></p>
                <p>25 år.</p>
                <br>

                <p><b>Ydelsesgaranti:</b></p>
                <p>25 år – Min. 87% ydelse derefter</p>
                <br/>

                <p><b>Servicegaranti:</b></p>
                <p>25 år.</p>
                <br/>

                <p><b>Dimension:</b></p>
                <p>169/116/3,5  H/W/D cm.</p>
                <br/>
                
                <p><b>Temp. omgivelse:</b></p>
                <p>-40 ºC – +85 ºC</p>
                <br/>
                
                <p><b>Vægt:</b></p>
                <p>21 kg</p>
                <br/>
              </div>

            </template>
          </Collapse>
        
          <div class="flex w-1/2 m-auto py-4">
            <TotalLink><ButtonCom>Kontakt os nu og få et tilbud</ButtonCom></TotalLink>
          </div>
          


    </Parallax>
    
    <section>
      <div class="px-[5%]">
        <span class="inline-block align-top lg:w-1/2 p-[33px]">
          <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/fCfJXvjkoIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </span>
        
        <span class="inline-block lg:w-1/2 p-[33px] text-left leading-[1.9em]">
          <strong>Shingled cell solceller</strong>
          <p>Igennem årene har solceller udviklet sig meget. Her først fra blå polykrystalinske solceller, videre til monokrystalinske solceller, også kaldet mono PERC. Disse er nu de mest normale, men har en række problemer indenfor ydeevne og holdbarhed. Blandt andet er de forholdsvis skrøbelige, skygge påvirker deres ydeevne enormt og hele solcellepanelets overflade kan ikke udnyttes grundet ‘busbars’ som holder solcellerne sammen. </p>
          <br>
          <p>Denne mono PERC teknologi er siden blevet udviklet til det der hedder half-cut paneler, disse som vi sælger som vores lavpris paneler. Nemt forklaret har man halveret alle de individuelle solceller, hvilket fører til at man har en bedre ydeevne og holdbarhed – dog stadig med mange af de samme problemer som normale mono PERC. </p>
          <br>
          <p>Den nyeste udvikling indenfor solceller er shingled cell – som bruger en helt anden måde at sammensætte solcellerne på. Denne nye teknologi tillader for bedre holdbarhed, bedre ydeevne, og fuldkommen udnyttelse af solcellepanelets størrelse.</p>
          <br>
          <p>I denne video forklarer SunPower helt præcis hvad det er der gør shingled cell solcelle teknologi bedre end Mono PERC og Half-Cut solceller.</p>
        </span>
       
      </div>
      </section>

      <section class="">
        <div class="px-[5%]  " >
           <div class="border-solid border-2 border-black">

            <span class="inline-block align-top lg:w-1/2 p-[33px] text-left leading-[1.9em] ">
              <strong>SunPower solceller og holdbarhed</strong>
              <p>Som tidligere nævnt så er SunPower blandt de bedste indenfor holdbarhed af deres solceller; og derfor tilbyder de også industriens bedste garantier. Med 25 års produkt-, ydelses-, og servicegaranti kan man med SunPower solceller nyde godt af besparelser i minimum 25 år. Her hvor selve holdbarheden estimeres til at være flere år mere end 25.</p>
              <br>
              <p>25 år er selvfølgelig en meget lang periode, og en længere periode end størstedelen af virksomheders levetid. Med SunPower har man dog at gøre med en virksomhed som allerede har eksisteret i 35 år. Dertil har SunPower en række af investorer bag dem som gør at de er meget stabile. Her hvor Total S.A., en af de største virksomheder i energibranchen, er hovedinvestor. </p>
              <img src="../assets/img/logobilder.webp" alt="logobilder" style="margie: 20px">
              </span>
            <span class="inline-block lg:w-1/2 p-[33px]">
              <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/8WdSF59khxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
          </div>
        </div>
      </section>

      
      <section class="">
        <div class="px-[5%]  " >
          <span class="inline-block lg:w-1/2 p-[33px]">
            <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/EKWZsrIU13g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </span>
          <span class="inline-block align-top lg:w-1/2 p-[33px] text-left leading-[1.9em] ">
            <strong>Skyggeoptimerede solceller</strong>
            <p>Endnu et punkt hvor SunPower solceller er suveræne, er i skyggeforhold og diffust lys</p>
            <br>  
            <p>Denne video forklarer forskellen mellem hvordan mono PERC solceller og half-cut solceller præsterer i skygge, sammenlignet med shingled cell solceller.</p>
            <br>  
            <p>Med mono PERC og half-cut solceller kan så meget som et blad på solcellerne nemlig betyde at et helt solcellepanel næsten ikke producerer noget elektricitet. Med shingled cell solceller er teknologien derimod så intelligent at den producerede elektricitet i resten af solcellepanelet ikke bliver påvirket af et enkelt punkt med skygge.</p>
            <br>
            <p>Se videoen for at få en forklaring af dette som går helt i detaljerne. </p>
            <br>
            <p>Udover en bedre produktion i skyggeforhold så kan SunPower solceller også præstere bedre i det vi kalder diffust lys – det vil sige den type lys vi har her i Danmark når der er overskyet. Her præsterer shingled cell nemlig betydeligt bedre end f.eks mono PERC, noget som er en betydelig forskel i et land som Danmark hvor mængden af solskinstimer er begrænset.</p>
          </span>
        </div>
    </section>
    
    

    <SunpowerKundetilfredshed/>

   
    <h1 style="font-size: 60px">Block compunent</h1>
    <hr/>
    <Trustpilot></Trustpilot>


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