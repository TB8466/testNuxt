<template>
    <div>
        <section class="fixed z-10 overflow-hidden truncate h-full transition-[width] duration-1000" :class="{ 'w-0' : !active ,'w-1/4' : active}">
            <div class="bg-slate-100 h-full">
                <p class="text-primary text-xl font-black w-[10%] ml-[80%] hover:bg-slate-300 hover:cursor-pointer" @click="openSideNav">&#60;</p>
                <NuxtLink class="hover:text-primary" to="/blogs"><p>Oversigt</p></NuxtLink>
                <div v-for="blog in blogs.slice().reverse()" :key="blog">
                    <br>
                    <NuxtLink :to="blog.url">                    
                        <p class="hover:text-primary truncate">{{blog.name}}</p>
                    </NuxtLink>
                    
                </div>
            </div>
        </section>
        <ButtonCom class="fixed ml-1" @click="openSideNav">Alle blogs</ButtonCom>
        <section class="transition-[margin-left] duration-1000" :class="{ 'ml-[25%]' : active}">
            <NuxtPage/>
        </section>
    </div>
</template>

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
/*     const {data : blogs} = await useFetch('/api/db')
 */</script>

<script>
export default {
    /* 
        {name : '', url : '', img : '', author : 'Rasmus Christiansen', date : '', preview : ''},
    */
    data () {
        return {
            active : false,
           /*  blogs : [
                
                {name : '', url : '', img : '', author : 'Rasmus Christiansen', date : '', preview : ''},
                {name : '', url : '', img : '', author : 'Rasmus Christiansen', date : '', preview : ''},
                {name : '', url : '', img : '', author : 'Rasmus Christiansen', date : '', preview : ''},
                {name : '', url : '', img : '', author : 'Rasmus Christiansen', date : '', preview : ''},
                {year : '2021'},
                {name : 'Fordele & ulemper: Varmepumpe med solceller', url : '/blogs/2022/1_Jan_fordele-og-ulemper-varmepumpe-med-solceller', img : '/assets/img/blogs/Ventilation.webp', author : 'Rasmus Christiansen', date : 'Jun 15, 2022', preview : 'Med det forhøjede forbrug fra en varmepumpe skulle man tro solceller var en no-brainer, men med varmepumpe får man et højere forbrug i vinteren, samt lavere elpris – så hvordan virker forholdet reelt set?'},
                {name : 'Hvor stort skal et solcelleanlæg være?', url : '/blogs/2022/2_Feb_Hvor-Stort-Skal-Et-Solcelleanlæg-Være', img : '/assets/img/blogs/8800-Viborg.webp', author : 'Rasmus Christiansen', date : 'Feb 3, 2022', preview : 'Solcelleanlæg størrelse – hvordan skal solceller dimensioneres? Hvor mange solceller og hvor stor en batteribank passer til dit forbrug; og hvordan påvirker en varmepumpe eller elbil beslutningen?'},
                {name : 'Er solceller en god investering?', url : '/blogs/2022/3_Feb_Er-Solceller-En-God-Investering', img : '/assets/img/blogs/4793-Bogo.webp', author : 'Rasmus Christiansen', date : 'Feb 28, 2022', preview : 'Er solceller en rentabel investering – og hvordan det?  Det har i de seneste år været omdiskuteret om solcelleanlæg er en god investering – i denne blog går vi derfor i gennem alle de forskellige vinkler'},
                {name : 'Hvad betyder en 1 eller 3 faset inverter? Summationsmåler – alt du skal vide', url : '/blogs/2022/4_Jun_Hvad-Betyder-En-Eller-Tre-Faset-Inverter', img : '/assets/img/blogs/living-room.png', author : 'Rasmus Christiansen', date : 'Jun 8, 2022', preview : 'Hvad betyder det at du har 1 eller 3-faset inverter med summationsmåler? Det er et relevant spørgsmål – men hvad betyder inverterens faser egentlig for din husstands evne til at bruge strøm fra solceller'},
                {name : 'Batteribank – kan det betale sig med solceller? Fordele & Ulemper', url : '/blogs/2022/5_Jun_Kan-Det-Betale-Sig-Med-Solceller', img : '/assets/img/battery_bank/SonnenWall_Battery.webp', author : 'Rasmus Christiansen', date : ' Jun 15, 2022', preview : 'Batteribank til solceller – hvordan fungerer det?  I denne blog vil vi gennemgå hvordan du kan gavne af solceller med batteribank I takt med at grøn energi skal blive den dominerende energikilde i Danmark, '},
                {year : '2022'},
            ], */
            hello : [
                
            ]
        }
    },
    methods : {
        openSideNav(){
            this.active = !this.active       
        },
        async getData(){

        }
    }
}
</script>

