<template>
    <div class="pb-[100px]">
        <nav class="fixed w-full z-10 bg-[#ffffff] pb-10 ">
            <!-- Left -->
            <div class="float-left absolute">
                <NuxtLink to="/">
                    <img class="w-32 lg:w-40 xl:w-56 mt-2 lg:mt-4 xl:mt-0" src="../assets/img/VIASOL_LOGO.png" alt="source-not-found">
                </NuxtLink>
            </div>
            <!-- Right -->
            <div class="float-right hidden mt-7 lg:block">
                <NuxtLink class="px-3 text-[15px] hover:text-primary" to="/sunpowersolceller">SOLCELLER</NuxtLink>
                <NuxtLink class="px-3 text-[15px] hover:text-primary" to="/batteribanke">BATTERIBANKE</NuxtLink>
                <NuxtLink class="px-3 text-[15px] hover:text-primary" to="/ladestander">LADESTANDER</NuxtLink>
                <NuxtLink class="px-3 text-[15px] hover:text-primary" to="/erhvervsanlaeg">ERHVERSANLÆG</NuxtLink>
                <NuxtLink class="px-3 text-[15px] hover:text-blue-800 text-primary" to="/viasol-total">PRISBERENGER</NuxtLink>
                <NuxtLink class="px-3 text-[15px] hover:text-primary" to="/support">SUPPORT</NuxtLink>
                <NuxtLink class="px-3 text-[15px] hover:text-primary" to="/om">OM OS</NuxtLink>
                <NuxtLink class="px-3 text-[15px] hover:text-primary" to="/blogs">BLOGS</NuxtLink>
                <NuxtLink class="px-3 text-[15px] hover:text-primary" to="/servicesag">Servicesag(WiP)</NuxtLink>
            </div>
        <!-- Mobile -->
        <div class="block lg:hidden">
            <MobileCollapse>
                <template #collapse-header>
                </template>

                <template #collapse-content>
                    <div class="grid col-span-1">
                        <NuxtLink class="py-2 mr-40 w-full active:bg-blue-100 border-solid h-10 border-b-[1px] border-black" to="/sunpowersolceller">SOLCELLER</NuxtLink>
                        <NuxtLink class="py-2 mr-40 w-full active:bg-blue-100 border-solid h-10 border-b-[1px] border-black" to="/batteribanke/batteribanke">BATTERIBANKE</NuxtLink>
                        <NuxtLink class="py-2 mr-40 w-full active:bg-blue-100 border-solid h-10 border-b-[1px] border-black" to="/ladestander">LADESTANDER</NuxtLink>
                        <NuxtLink class="py-2 mr-40 w-full active:bg-blue-100 border-solid h-10 border-b-[1px] border-black" to="erhvervsanlaeg">ERHVERSANLÆG</NuxtLink>
                        <NuxtLink class="py-2 mr-40 w-full active:bg-blue-100 border-solid h-10 border-b-[1px] border-black text-primary" to="/viasol-total">PRISBERENGER</NuxtLink>
                        <NuxtLink class="py-2 mr-40 w-full active:bg-blue-100 border-solid h-10 border-b-[1px] border-black" to="/support">SUPPORT</NuxtLink>
                        <NuxtLink class="py-2 mr-40 w-full active:bg-blue-100 border-solid h-10 border-b-[1px] border-black" to="/om">OM OS</NuxtLink>
                    </div>
                </template>
            </MobileCollapse>
        </div>
        </nav>
        
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>