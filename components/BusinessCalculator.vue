<template>
    <div class="pt-20">
      <form @submit.prevent="sendRequest">
        <button class="text-primary text-xl" @click="prev">	&#60;</button>
        <img src="../assets/img/erhvervsBergner/erhvervsBergner.png" class="m-auto" alt="ViasolTotal">

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
                        <CalculatorButton v-if="roof"> <p @click="next">Fortsæt >></p></CalculatorButton>
                        <CalculatorButton v-else :blackTransparent="true">Fortsæt >></CalculatorButton>
                        
                        <!-- <ButtonCom v-if="roof"  @click="next">Fortsæt >></ButtonCom>
                        <ButtonCom v-else :blackTransparent="true">Fortsæt >> </ButtonCom> -->
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
                    <input type="radio" id="orientationE" name="orientation" value="E" class="hidden peer" v-model="orientation">
                    <label for="orientationE" class="box-border border-[2px] border-solid inline-flex justify-around  items-center p-5 w-full text-gray-500 bg-white rounded-lg border-gray-200 cursor-pointer  peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 ">
                        <div class="block">
                            <div class="w-full text-lg font-semibold">Mod Øst</div>
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
                    <CalculatorButton v-if="orientation"> <p @click="next">Fortsæt >></p></CalculatorButton>
                    <CalculatorButton v-else :blackTransparent="true">Fortsæt >></CalculatorButton>
                </li>
            </ul>

          </slide>

          <slide :key="2">

            <ul class="grid grid-cols-7 gap-6 w-full md:grid-cols-7 text-center">

                <li class="col-span-7">
                    <h1 class="py-3 text-xl">Trin 3: Forbrug og tagareal</h1>
                </li>
                <li class="col-span-3">
                    <h1 class="py-3"> Hvad er det årlig el-forbrug?</h1>
                </li>
                <li class="col-span-2">
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

                <li class="col-span-2">
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
                <li class="col-span-3">
                    <h1 class="py-3"> Hvad er elprisen ekskl. moms?</h1>
                </li>
                <li class="col-span-2">
                    <div class="relative z-0 mb-6 w-full group text-left">
                        <input type="number" id="el_price" v-model.number="el_price" class="
                        block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
                        border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" ">
                        <label for="el_price" class="
                        after:content-['*'] after:ml-0.5 peer-focus:font-medium 
                        absolute text-sm text-gray-500 dark:text-gray-400 duration-300 
                        transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                         peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 
                         peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pris pr. kWh</label>
                    </div>
                </li>
                <li class="col-span-2">

                </li>
                <li class="col-span-3">
                    <h1 class="py-3"> Hvad meget brugbart tagareal?</h1>
                </li>
                <li class="col-span-2">
                    <div class="relative z-0 mb-6 w-full group text-left">
                        <input type="number" id="useful_area" v-model.number="useful_area" class="
                        block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
                        border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" ">
                        <label for="useful_area" class="after:content-['*'] after:ml-0.5 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300
                        transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                         peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 
                         peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Areal kvadratmeter</label>
                    </div>
                </li>
                <li class="col-span-2">

                </li>
                
                <li  class="col-span-7">
                    <CalculatorButton v-if="annual_usage && useful_area && el_price"> <p @click="next">Fortsæt >></p></CalculatorButton>
                    <CalculatorButton v-else :blackTransparent="true">Fortsæt >></CalculatorButton>
                </li>
            </ul>
          </slide>
          <slide :key="3">
            <ul class="grid grid-cols-4 gap-6 w-full md:grid-cols-3 text-center">
                <li class="col-span-3">
                    <p> Trin 4: Hvornår på dagen falder dit forbrug primært?</p> 
                </li>
                <li class="col-span-2">
                    <h1 class="py-3"> Primært forbrug i kontortimer</h1>
                </li>
                <li class="col-span-1">
                    <option value="office">Office</option>
                    <input v-model="pattern_weight" id="disabled-radio-1" type="radio" value="office" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </li>

                <li class="col-span-2">
                    <h1 class="py-3"> Konstant forbrug hele døgnet</h1>
                </li>
                <li class="col-span-1">
                    <option value="constant">Constant</option>
                    <input v-model="pattern_weight" id="disabled-radio-1" type="radio" value="constant" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </li>

                <li class="col-span-2">
                    <h1 class="py-3"> Blandet konstant og kontorid</h1>
                </li>
                <li class="col-span-1">
                    <option value="mix"> Mix</option>
                    <input v-model="pattern_weight" id="disabled-radio-1" type="radio" value="mix" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </li>

                <li  class="col-span-3">

                    <CalculatorButton v-if="pattern_weight"> <p @click="next">Fortsæt >></p></CalculatorButton>
                    <CalculatorButton v-else :blackTransparent="true">Fortsæt >></CalculatorButton>
                    
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
          <template #addons>
            <pagination />
          </template>
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
      <p>first name: {{first_name}}</p>
      <br>
      <p>last name: {{last_name}}</p>
      <br>
      <p>email: {{email}}</p>
      <br>
      <p>phone: {{phone}}</p>
       -->
<form>
  
  
</form>


    </div>
</template>

<script>
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

    
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
        "DKK_kWh": "",
        "first_name": "",
        "last_name": "",
        "email": "",
        "phone": ""

    }

export default {
    props : {
       slides : Array,
       DKK_kWh : Boolean 
    },
    components : {
        Carousel,
        Slide,
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
            DKK_kWh: '',
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
            
            const elpris = 2.71; // skal have fundet en samter måde
            /* console.log(this.type,typeof this.type);
            if (this.type) {
                console.log("DET VAR TRUE");
                prisBergnerJson.annual_usage=this.el_price
            } else {
                console.log("DET VAR FALSE");
                prisBergnerJson.el_price=this.el_price
            } */
            
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
        
            /* postRequestPrisBergner.body = JSON.stringify(prisBergnerJson)
            console.log(postRequestPrisBergner); */
            let res = await fetch("https://europe-west1-viasol-backroom.cloudfunctions.net/Generator_test_HIGH_MEMORY?annual_usage=44&el_price=55&orientation=E&roof_type=flat&useful_area=123&pattern_weight=office").catch((error) => console.log(error));
            console.log(res); 
           
        }

    }
}


</script>

<style>

</style>