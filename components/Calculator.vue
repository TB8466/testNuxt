<template>
    <div>
      <form @submit.prevent="sendRequest">
        <CalculatorButton :back="true"><p @click="prev">&#60;</p></CalculatorButton>
        <img src="../assets/img/Prisbergner/PrisbergnerViasolTotal.png" class="m-auto" alt="ViasolTotal">

        <carousel ref="carousel"  :items-to-show="1" :transition="500" :mouseDrag="false">
          <slide :key="0">
        <ul class="grid grid-cols-2 gap-6 w-full md:grid-cols-2 text-center">

            <li class="col-span-2">
                <h1 class="py-3 text-xl"> <span class="font-thin"> Trin 1: </span> Hvordan skal dit solcelleanlæg monteres?</h1>
            </li>

            <li class="col-span-2">
                <p>Vælg mellem</p>
            </li>

            <li>
                <input type="radio" id="hosting-small" name="roof" value="sloped1" class="hidden peer" v-model="roof">
                <label for="hosting-small" class="box-border border-[2px] border-solid inline-flex justify-around p-5 w-full text-gray-500 bg-white rounded-lg  border-gray-200  cursor-pointer  peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 ">                           
                    <div class="block ">
                        <div class="w-full  text-lg font-semibold">På tag med hældning</div>
                    </div>
                </label>
            </li>
            <li>
                <input type="radio" id="hosting-big" name="roof" value="flat1" class="hidden peer" v-model="roof">
                <label for="hosting-big" class="box-border border-[2px] border-solid inline-flex justify-around  items-center p-5 w-full text-gray-500 bg-white rounded-lg border-gray-200 cursor-pointer  peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 ">
                    <div class="block">
                        <div class="w-full text-lg font-semibold">På fladt tag</div>
                    </div>
                </label>
            </li>
            <li>
                <input type="radio" id="hosting-small1" name="roof" value="sloped2" class="hidden peer" v-model="roof">
                <label for="hosting-small1" class="box-border border-[2px] border-solid inline-flex justify-around  items-center p-5 w-full text-gray-500 bg-white rounded-lg border-gray-200 cursor-pointer  peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 ">                           
                    <div class="block">
                        <div class="w-full text-lg font-semibold">Integreret i tagfladen</div>
                    </div>
                </label>
            </li>
            <li>
                <input type="radio" id="hosting-big2" name="roof" value="flat2" class="hidden peer" v-model="roof">
                <label for="hosting-big2" class="box-border border-[2px] border-solid inline-flex justify-around  items-center p-5 w-full text-gray-500 bg-white rounded-lg border-gray-200 cursor-pointer  peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 ">
                    <div class="block">
                        <div class="w-full text-lg font-semibold">På jorden</div>
                    </div>
                    
                </label>
            </li>
            <li  class="col-span-2">
                <CalculatorButton v-if="roof"><div @click="next"> Fortsæt >></div></CalculatorButton>
                <CalculatorButton v-else :blackTransparent="true"> <p> Fortsæt >></p></CalculatorButton>
                <!-- <ButtonCom v-if="roof" @click="next">Fortsæt >></ButtonCom>
                <ButtonCom v-else :blackTransparent="true">Fortsæt >></ButtonCom> -->
            </li>
            
        </ul>
        </slide>

        
        <slide :key="1" class="px-2">

            <ul class="grid grid-cols-2 gap-6 w-full md:grid-cols-2 text-center">

            <li class="col-span-2">
                <h1 class="py-3 text-xl"> <span class="font-thin"> Trin 2: </span> Solcelleanlæggets orientering?</h1>
            </li>

            <li class="col-span-2">
                <p>Vælg mellem</p>
            </li>

            <li class="">
                <input type="radio" id="orientationS" name="orientation" value="S" class="hidden peer" v-model="orientation">
                <label for="orientationS" class="box-border border-[2px] border-solid inline-flex justify-around  items-center p-5 w-full text-gray-500 bg-white rounded-lg border-gray-200 cursor-pointer  peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 ">                           
                    <div class="block">
                        <div class="w-full text-lg font-semibold">Mod Syd</div>
                    </div>
                </label>
            </li>
            <li class="">
                <input type="radio" id="orientationSE" name="orientation" value="SE" class="hidden peer" v-model="orientation">
                <label for="orientationSE" class="box-border border-[2px] border-solid inline-flex justify-around  items-center p-5 w-full text-gray-500 bg-white rounded-lg border-gray-200 cursor-pointer  peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 ">
                    <div class="block">
                        <div class="w-full text-lg font-semibold">Mod Syd og Med Øst</div>
                    </div>
                </label>
            </li>
           
            <li class="">
                <input type="radio" id="orientationE" name="orientation" value="E" class="hidden peer" v-model="orientation">
                <label for="orientationE" class="box-border border-[2px] border-solid inline-flex justify-around  items-center p-5 w-full text-gray-500 bg-white rounded-lg border-gray-200 cursor-pointer  peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 ">
                    <div class="block">
                        <div class="w-full text-lg font-semibold">Mod Øst</div>
                    </div>
                    
                </label>
            </li>
            <li class="">
                <input type="radio" id="orientationSV" name="orientation" value="SW" class="hidden peer" v-model="orientation">
                <label for="orientationSV" class="box-border border-[2px] border-solid inline-flex justify-around  items-center p-5 w-full text-gray-500 bg-white rounded-lg border-gray-200 cursor-pointer  peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 ">
                    <div class="block">
                        <div class="w-full text-lg font-semibold">Mod Syd og Med Vest</div>
                    </div>
                    
                </label>
            </li>
            
       
            <li class="">
                <input type="radio" id="orientationV" name="orientation" value="W" class="hidden peer" v-model="orientation">
                <label for="orientationV" class="box-border border-[2px] border-solid inline-flex justify-around  items-center p-5 w-full text-gray-500 bg-white rounded-lg border-gray-200 cursor-pointer  peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 ">
                    <div class="block">
                        <div class="w-full text-lg font-semibold">Mod Vest</div>
                    </div>
                    
                </label>
            </li>

            <li class="">
                <input type="radio" id="orientationEV" name="orientation" value="EW" class="hidden peer" v-model="orientation">
                <label for="orientationEV" class="box-border border-[2px] border-solid inline-flex justify-around  items-center p-5 w-full text-gray-500 bg-white rounded-lg border-gray-200 cursor-pointer  peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 ">                           
                    <div class="block">
                        <div class="w-full text-lg font-semibold">Mod Øst og Mod Vest</div>
                    </div>
                </label>
            </li>
            <li  class="col-span-2">
                <CalculatorButton v-if="orientation"><p @click="next"> Fortsæt >></p></CalculatorButton>
                <CalculatorButton v-else :blackTransparent="true"> <p> Fortsæt >></p></CalculatorButton>
            </li>

        </ul>

          </slide>



          <slide :key="2">
            <ul class="grid grid-cols-1 gap-6 w-full md:grid-cols-1 text-center">
                <li>
                    <h1 class="py-3"> Trin 3:  Hvad er dit årlige el-forbrug?</h1>
                </li>
                <li>
                    <div class="relative z-0 mb-6 w-full group text-left">
                        <input type="number" id="annual_usage" v-model.number="annual_usage" class="
                        block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
                        border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" ">
                        <label for="annual_usage" class="
                        after:content-['*'] after:ml-0.5 peer-focus:font-medium 
                        absolute text-sm text-gray-500 dark:text-gray-400 duration-300 
                        transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                         peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 
                         peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Årlig el-forbrug</label>
                    </div>
                </li>
                <li>
                    <p>vælg imellem </p>
                    <p class="py-2 text-xs">DKK/kWh</p>
                </li>
            <li>
                
                <div class="flex p-2 rounded hover:bg-gray-100">
                    <label for="DKK_kWh" class="inline-flex relative items-center w-full cursor-pointer">

                        <input @click="DKK_kWh = !DKK_kWh" type="checkbox" name="DKK_kWh" value="DKK_kWh" v-model="DKK_kWh" id="DKK_kWh" class="sr-only peer">

                        <div class=" w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            <p v-if="DKK_kWh">DKK</p>
                            <p v-else>kWh</p>
                        </span>
                    </label>
                </div>
            </li>
            <li>
                <CalculatorButton v-if="DKK_kWh == true && annual_usage > 4911 || DKK_kWh == false && annual_usage > 1520"><p @click="next"> Fortsæt >></p></CalculatorButton>
                <CalculatorButton @click="isToLow = !isToLow" id="isToLow" value="isToLow" v-model="isToLow" v-else :blackTransparent="true" ><p>Fortsæt >></p></CalculatorButton>

                <!-- <ButtonCom v-if="DKK_kWh == true && annual_usage > 4911 || DKK_kWh == false && annual_usage > 1520" @click="next">Fortsæt >></ButtonCom>
                <ButtonCom @click="isToLow = !isToLow" id="isToLow" value="isToLow" v-model="isToLow" v-else :blackTransparent="true" >Fortsæt >></ButtonCom> -->
                <div v-if=" DKK_kWh == true && annual_usage < 4911 || DKK_kWh == false && annual_usage < 1520">
                    <p class="text-bold text-2xl">OBS</p>
                    <p>Dit årlige el-forbrug er for lavt</p>
                </div>
                
            </li>
           
            </ul>
          </slide>
        
          <slide :key="3">
            <ul class="grid grid-cols-3 gap-6 w-full md:grid-cols-2 text-center">
            <li class="col-span-3"><h1 class="text-base"> 
                <span class="font-thin "> Trin 4: </span>Sæt flueben hvis vi skal medregne at du <i> har</i> eller <i> skal</i> have:</h1>
            </li>

            <li class="col-span-3">
                <p>Vælg mellem</p>
            </li>

            <!-- TODO:HarElbil skal blive falsh nå Elbil bliver falsh -->
            <li class="col-span-2 mr-auto">
                <div class="flex items-center  lg:inline-block ">
                    <input  @click="elbil = !elbil"  id="elbil" type="checkbox" value="" v-model="elbil" class=" w-4 h-4 mb-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="elbil" class="ml-2 text-left text-lg font-medium  ">El&#8209;bil? <p class="italic text-xs">&#8209; medregner forbrug og forbrugsmønstre</p></label>
                </div>
           
                
            </li>
            <li class="ml-auto" >
                <div  class="flex-auto p-2 rounded hover:bg-gray-100 lg:inline-block lg:px-[33px]">
                    <label for="HarElbil" class="inline-flex relative items-center w-full cursor-pointer">

                        <input v-if="elbil"  @click="HarElbil = !HarElbil" type="checkbox" name="HarElbil" value="HarElbil" v-model="HarElbil" id="HarElbil" class="sr-only peer  ">

                        <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            <p v-if="HarElbil">Har</p>
                            <p v-else>Skal have</p>
                        </span>
                    </label>
                </div>
            </li>

            <li class="col-span-3 mr-auto">
                <p class="pl-4 text-xl font-bold italic"> Og/eller</p>
                
            </li>
       

            <!-- TODO:HarVarmepumpe skal blive falsh nå varmepumpe bliver falsh -->
            <li class="col-span-2 mr-auto">
                <div class="flex items-center mb-4 lg:inline-block">
                    <input @click="varmepumpe = !varmepumpe"  id="varmepumpe" type="checkbox" value="" v-model="varmepumpe" class="w-4 h-4 mb-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="varmepumpe" class="ml-2 text-left text-lg font-medium ">Varmepumpe? <p class="italic text-xs">&#8209; medregner forbrug og reduceret elpris</p></label>
                </div>
             
            </li>
            <li class="ml-auto">
                
                <div class="flex p-2 rounded hover:bg-gray-100 lg:inline-block lg:px-[33px]">
                    <label for="harVarmepumpe" class="inline-flex relative items-center w-full cursor-pointer">

                        <input v-if="varmepumpe" @click="harVarmepumpe = !harVarmepumpe" type="checkbox" name="harVarmepumpe" value="harVarmepumpe" v-model="harVarmepumpe" id="harVarmepumpe" class="sr-only peer">

                        <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            <p v-if="harVarmepumpe">Har</p>
                            <p v-else>Skal have</p>
                        </span>
                    </label>
                </div>
            </li>
            <li class="col-span-3">
                <CalculatorButton><span @click="next"> Fortsæt >></span></CalculatorButton>
            </li>
            </ul>
          </slide>
            <slide :key="4">
            
            <ul class="grid grid-cols-2 gap-6 w-full md:grid-cols-2 text-center">
                <li class="col-span-2">
                    <p>Se dit tilbud nu eller på mail efter du har færdiggjort dormularen</p>
                </li>
                <li>
                    <div class="relative z-0 mb-6 w-full group text-left">
                        <input type="text" name="first_name" id="first_name" v-model="first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" ">
                        <label for="first_name" class="after:content-['*'] after:ml-0.5 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fornavn</label>
                    </div>
                    
                </li>
                <li>
                   
                    <div class="relative z-0 mb-6 w-full group text-left">
                        <input type="text" name="last_name" id="last_name" v-model="last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" ">
                        <label for="last_name" class=" after:content-['*'] after:ml-0.5 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Efternavn</label>
                    </div>

                </li>
                <li>
                    
                    <div class="relative z-0 mb-6 w-full group text-left">
                        <input type="email" name="email" id="email" v-model="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" ">
                        <label for="email" class="after:content-['*'] after:ml-0.5 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                </li>
                <li>
                    <div class="relative z-0 mb-6 w-full group text-left">
                        <input type="tel" name="phone" id="phone" v-model="phone" class=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" ">
                        <label for="phone" class=" after:content-['*'] after:ml-0.5 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefonnummer +45 11 22 33 44</label>
                    </div>

                </li>
                <li class="col-span-2">
                    <p class="text-xs pb-4">Vi bruger informationen til at kvalitetssikre tilbuddet, herunder at anlægget matcher dit behov</p>
                    
                    <Modal>
                    <template #openModal>
                      <p class="text-xs">Ved at klikke 'Send' accepterer du vores <span class=" text-primary italic cursor-pointer hover:underline"> vilkår privatlivspolitik </span> </p>
                      
                    </template>
                    <template #body>
                    <PrivacyPolicy/>
                        </template>
                    </Modal>
                </li>
                <li  class="col-span-2">

                    <!-- <ButtonCom v-if="first_name && last_name && email && phone" type="submit" >Send</ButtonCom> -->
                    <CalculatorButton v-if="first_name && last_name && email && phone" :send="true" type="submit"> Send</CalculatorButton>
                    
                    <CalculatorButton v-else :blackTransparent="true">Send</CalculatorButton>
                    

                    
                    
                </li>
            </ul>
          </slide>
        </carousel>

      </form>
      <!-- <p>roof: {{roof}}</p>
      <br>
      <p>orientation: {{orientation}}</p>
      <br>
      <p>el_price: {{el_price}}</p>
      <br>
      <p>pattern_weight: {{pattern_weight}}</p>
      <br>
      <p>annual_usage: {{annual_usage}}</p>
      <br>
      <p>DKK/kWh: {{DKK_kWh}}</p>
      <br>
      <p>Elbil: {{elbil}}</p>
      <br>
      <p>Har Elbil: {{HarElbil}}</p>
      <br>
      <p>varmepumpe: {{varmepumpe}}</p>
      <br>
      <p> Har varmepumpe: {{harVarmepumpe}}</p>
      <br>
      <p>first name: {{first_name}}</p>
      <br>
      <p>last name: {{last_name}}</p>
      <br>
      <p>email: {{email}}</p>
      <br>
      <p>phone: {{phone}}</p> -->
    </div>    
</template>

<script>
    import 'vue3-carousel/dist/carousel.css';
    
    import { Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';

    
    let postRequestPrisBergner= {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        },
        body: ""
    }
    let prisBergnerJson = {
        "annual_usage": '',
        "roof_type": "",
        "useful_area": "",
        "el_price": '',
        "pattern_weight": "",
        "orientation": "",
    }





export default {
    components : {Carousel, Slide, Pagination, Navigation,
    },
    props : {   
        slides : Array,
        DKK_kWh : Boolean,
        elbil : Boolean,
        HarElbil : Boolean,
        varmepumpe : Boolean,
        harVarmepumpe : Boolean,
        isToLow : Boolean,
        },


    data() {
        return {
            annual_usage: '',
            roof: '',
            useful_area: '',
            el_price: '',
            pattern_weight: '',
            orientation: '',
            roof: null,
            first_name: '',
            last_name: '',
            email: '',
            phone: ''

            }
        },    

        methods: {
            next() {
                this.$refs.carousel.next()
                console.log('next')
                },

            prev() {
                this.$refs.carousel.prev()
                console.log('prev')
                },




            async sendRequest(){    
                const elpris = 2.71; 
                
                prisBergnerJson.annual_usage=this.annual_usage;
                console.log(typeof this.roof)

                if(this.roof=="sloped1" || this.roof=="sloped2"){
                    prisBergnerJson.roof_type="sloped"
                }else{
                    prisBergnerJson.roof_type="flat"
                }
                prisBergnerJson.useful_area=this.useful_area
                prisBergnerJson.el_price = this.annual_usage * elpris;
                prisBergnerJson.pattern_weight=this.pattern_weight
                prisBergnerJson.orientation=this.orientation
                
                const url = "https://europe-west1-viasol-backroom.cloudfunctions.net/Generator_test_HIGH_MEMORY" + "?annual_usage=" + this.annual_usage + "&roof_type=" + prisBergnerJson.roof_type + "&useful_area=" + this.useful_area + "&el_price=" + prisBergnerJson.el_price + "&pattern_weight=" + this.pattern_weight + "&orientation=" + this.orientation
                console.log(url)  

            
                postRequestPrisBergner.body = JSON.stringify(prisBergnerJson)
                console.log(postRequestPrisBergner);
                let res = await fetch("https://europe-west1-viasol-backroom.cloudfunctions.net/Generator_test_HIGH_MEMORY?annual_usage=44&el_price=55&orientation=E&roof_type=flat&useful_area=123&pattern_weight=office").catch((error) => console.log(error));
                console.log(res);
               
            },

    }
}


</script>

<style>


</style>