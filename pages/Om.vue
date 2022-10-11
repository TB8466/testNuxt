<template>
    <div>
    <!-- TODO:-->
        <section class="bg-about bg-cover bg-center ">
          <div class="text-white">
            <div class="pt-16 pb-80">
              <p class="text-6xl font-bold leading-tight">Hvem er vi?<br/></p>
              <p class="text-2xl">Viasol A/S er en 100% specialiseret dansk solcellevirksomhed.</p>
            </div>
          </div>
           <section class="grid place-items-center  relative lg:mx-[10%] text-left leading-[1.9em]">
          <div class=" rounded-lg shadow-2xl lg:max-w-screen-xl bg-[#f9f9f9] px-20 py-10 lg:absolute h-fit w-fit">
            <div class="" >
              <div class="flex justify-center items-center">
                <div class="shrink w-24 h-[3px] bg-[#2c95c9]"></div>
              </div>
              <div class="text-4xl text-center pb-5">
                  <h1 class="">Totalentreprenør for hele Danmark</h1>
                  <p>– erhverv, offentligt & private</p>
              </div>
              <span>
                Viasol A/S har to strategiske fokusområder.
                Det ene udgør salg af solcelleløsninger til private, her både direkte og gennem forhandlere
                – se mere om private solcelleanlæg & batteribanke:
                <br>
                <NuxtLink to="SunpowerSolceller"><b class="text-primary">Solcelleanlæg.</b></NuxtLink>
                
              </span>
              <br><br>
              <span>
                Det andet fokusområde er koncentreret omkring rådgivning, og salg af større offentlige
                - og kommercielle solcelleanlæg og entrepriser.
                Her agerer Viasol som totalentreprenør – læs mere om erhvervsprojekter og se vores referencer:
                <br>
                
                <NuxtLink to="ErhvervSanlaeg"><b class="text-primary">Erhvervsanlæg.</b></NuxtLink>
              </span>
              <br><br>
              <span class="">
                Viasol A/S er lagerførende via et centralt lager i Nordhavnen,
                og Kvistgaard i Helsingør hvor leverancer fra Kina, Tyskland, og Danmark samles og pakkes til komplette solcelleløsninger.
              </span>
            </div>
          </div>
          </section>
        </section>
        <div class="h-24 bg-dividerlightblue"></div>

        <section class="pt-[15%] leading-[1.9em]">
            <div class="flex justify-center items-center">
                <div class="shrink w-24 h-[3px] bg-[#2c95c9]"></div>
            </div>
            <h1 class="text-4xl py-8">Kontakt os</h1>
                <p>
                Har du brug for hjælp og ønsker rådgivning til et projekt, så kontakt os allerede i dag.
                <br>
                Så kontakter vi dig hurtigst muligt og tager en uforpligtende snak.
                </p>
        </section>

        <section>
          <div class="flex m-auto w-[70%] py-10 ">
            <div class=" inline-block align-top lg:px-[33px]  lg:w-1/6 w-1/2   ">
              <div class=" bg-[#F9F9F9] rounded-lg shadow-2xl h-[300px] w-fit xl:w-48 text-center p-5" >
                  <div class="m-auto bg-[#FFFFFF] rounded-full w-28 h-28 px-[28px] pt-[20px]">
                      <img src="../assets/img/footer/kindpng_1084630.png" alt="Address">
                  </div>
                  <h1 class="py-3">Adresse</h1>
                  <span>
                    Hejrevej 39 3. sal <br>
                    2400 København NV
                  </span>
                </div>
              </div> 

              <div class=" inline-block align-top lg:px-[33px]  lg:w-1/6 w-1/2  ">
                <div class="bg-[#F9F9F9] rounded-lg shadow-2xl h-[300px] w-fit xl:w-48 text-center p-5">
                  <div class="m-auto bg-[#FFFFFF] rounded-full w-28 h-28 px-[28px] pt-[15px]">
                      <img src="../assets/img/footer/NicePng_smartphone-icon-png_1327513.png" alt="Phone">
                  </div>
                  <h1 class="py-3">Telefon</h1>
                  <span>
                    +45 7020 7474
                  </span>
                </div>
              </div>

             
              <div class=" inline-block align-top lg:px-[33px]  lg:w-1/6  w-1/2  ">
                <div class="bg-[#F9F9F9] rounded-lg shadow-2xl h-[300px] w-fit xl:w-48 text-center p-5">
                  <div class="m-auto bg-[#FFFFFF] rounded-full w-28 h-28 px-[15px] pt-[15px]">
                      <img src="../assets/img/footer/mail.png" alt="Email">
                  </div>
                  <h1 class="py-3">Email</h1>
                  <span>
                    info@viasol.dk
                  </span>
                </div>
              </div>


              <div class=" inline-block align-top lg:px-[33px]  lg:w-1/6  w-1/2  ">
                <div class="bg-[#F9F9F9] rounded-lg shadow-2xl h-[300px] w-fit xl:w-48 text-center p-5">
                  <div class="m-auto bg-[#FFFFFF] rounded-full w-28 h-28 px-[15px] pt-[15px]">
                      <img src="../assets/img/footer/ca6.png" alt="CVR">
                  </div>
                  <h1 class="py-3">CVR nr.</h1>
                  <span>
                    34091803
                  </span>
                </div>
              </div>
              
          </div>
        </section>

        
        


        <InlineBlock :wide="true">
          <template #col1>
            <div class="shrink w-24 h-[3px] bg-[#2c95c9]"></div>
            <h1 class="text-4xl pt-5">Kvalitet &<br>Professionalisme</h1>
            <br>
            <span>
              Det har gjort os til Danmarks førende totalentreprenør af solcelleparker. 
              Vores referencer tæller Nordens største offentlige solcellepark, 
              adskillige mindre parker til det offentlige og parker opført for landbrugssegmentet.
            </span>
            <br><br>
            <ButtonCom :whiteAndBlue="true">SE REFERENCER</ButtonCom>

          </template>
          <template #col2>
            <img src="../assets/img/about/House-with-panels.jpg" alt="--Image not found--">
          </template>
        </InlineBlock>

        <ContactUs>
          <div class="flex justify-center items-center pb-2">
              <div class="shrink w-24 h-[3px] bg-[#2c95c9]"></div>
            </div>
      <div class="text-left leading-[1.9em] text-lg">
        <h1 class="text-4xl text-center py-8">Vil du høre mere?</h1>
        <span>
          Har du et projekt du ønsker sparring og rådgivning til, så kontakt os på en af metoderne herunder, 
          eller
            <TotalLink><b class="text-primary">prøv vores prisberegner</b></TotalLink>
        </span>
        <br><br>
        <span>
          Derefter vil du blive ringet op af en af vores konsulenter, som vil gennemgå din situation med dig. 
        </span>
        <br><br>
        <span>
          Alt indledende rådgivning og tilsendt tilbud, er gratis og uforpligtende. 
        </span>
        <div>
          
        </div>
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