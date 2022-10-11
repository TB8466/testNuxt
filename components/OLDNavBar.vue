<template>
    <div class="fixed w-full z-10">
        
        <va-navbar color="white">
            <template #left>
                <va-navbar-item>
                    <router-link :to="{ name: 'frontpage' }">
                        <div class="w-40 lg:w-56 z-10">
                            <img src='../assets/img/VIASOL_LOGO.png' alt="source-not-found"/>
                        </div>
                    </router-link>
                </va-navbar-item>
            </template>
        
                <template #right >
                    <va-navbar-item >
                        <nav class="visible lg:absolute lg:invisible z-9 h-1 left- md:right-20 relative top-[-30px] md:top-[-20px]"><!-- MOBILE VIEW -->
                            <MobileCollapse :btnShow="false" class="border-none">
                                <template v-slot:collapse-header class="visible lg:invisible "></template>
                                <template v-slot:collapse-icon><va-icon name="menu" size="50px" /></template>
                                <template v-slot:collapse-content class="">
                                    <div class="grid bg-[#ffffff] md:relative md:top-1">
                                        <router-link class="p-2 mr-40 w-full active:bg-blue-100 border-solid h-10 border-b-[1px] border-black font-normal" :to="{ name: 'sunpower'}">SOLCELLER</router-link>
                                        <router-link class="p-2 mr-40 w-full active:bg-blue-100 border-solid h-10 border-b-[1px] border-black font-normal" :to="{ name: 'battery'}">BATTERIBANKE</router-link>
                                        <router-link class="p-2 mr-40 w-full active:bg-blue-100 border-solid h-10 border-b-[1px] border-black font-normal" :to="{ name: 'ladestander'}">LADESTANDER</router-link>
                                        <router-link class="p-2 mr-40 w-full active:bg-blue-100 border-solid h-10 border-b-[1px] border-black font-normal" :to="{ name: 'erhvervsanlaeg'}">ERHVERSANLÆG</router-link>
                                        <router-link class="p-2 mr-40 w-full active:bg-blue-100 border-solid h-10 border-b-[1px] border-black font-normal" :to="{ name: 'pricecalculator'}">PRISBERENGER</router-link>
                                        <router-link class="p-2 mr-40 w-full active:bg-blue-100 border-solid h-10 border-b-[1px] border-black font-normal" :to="{ name: 'support'}">SUPPORT</router-link>
                                        <router-link class="p-2 mr-40 w-full active:bg-blue-100 border-solid h-10 border-b-[1px] border-black font-normal" :to="{ name: 'about'}">OM OS</router-link>
                                        <router-link class="p-2 mr-40 w-full active:bg-blue-100 border-solid h-10 border-b-[1px] border-black font-normal" :to="{ name: 'service'}">Servicesag</router-link>
                                    </div>
                                </template>
                            </MobileCollapse>
                        </nav>
                    </va-navbar-item>
                    <va-navbar-item >
                        <nav class="invisible lg:visible"><!-- DESKTOP VIEW -->
                            <router-link class="absolute lg:static lg:p-3 text-[13px] font-normal" :to="{ name: 'sunpower'}">SOLCELLER</router-link>
                            <router-link class="absolute lg:static lg:p-3 text-[13px] font-normal" :to="{ name: 'battery'}">BATTERIBANKE</router-link>
                            <router-link class="absolute lg:static lg:p-3 text-[13px] font-normal" :to="{ name: 'ladestander'}">LADESTANDER</router-link>
                            <router-link class="absolute lg:static lg:p-3 text-[13px] font-normal" :to="{ name: 'erhvervsanlaeg'}">ERHVERSANLÆG</router-link>
                            <router-link class="absolute lg:static lg:p-3 text-[13px] font-normal  text-primary" :to="{ name: 'pricecalculator'}">PRISBERENGER</router-link>
                            <router-link class="absolute lg:static lg:p-3 text-[13px] font-normal" :to="{ name: 'support'}">SUPPORT</router-link>
                            <router-link class="absolute lg:static lg:p-3 text-[13px] font-normal" :to="{ name: 'about'}">OM OS</router-link>
                            <router-link class="absolute lg:static lg:p-3 text-[13px] font-normal" :to="{ name: 'service'}">Servicesag</router-link>
                        </nav>
                        
                    </va-navbar-item>
                </template>        
        </va-navbar>
        <hr>
    </div>
</template>

<script>
import MobileCollapse from './MobileCollapse.vue';
//#2C95C9 Blue
//#333333 Black
//#FFFFFF White(BG)
//F7F7F7 White(Fields)
export default {
    components : {
        MobileCollapse
    },
    props : {
        text : []
    },
    data() {
        return{
        }
    }
}

</script>

<style>
    
</style>