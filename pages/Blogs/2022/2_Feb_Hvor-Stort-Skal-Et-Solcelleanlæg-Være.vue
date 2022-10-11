<template>
    <div>
        <section class="bg-8800 bg-cover bg-center">
            <p class="text-4xl text-white py-52">Hvor stort skal et solcelleanlæg være?</p>
        </section>

        <section class="text-left leading-[1.9em] sm:mx-20 md:mx-40 lg:mx-96">
            <p class="text-2xl font-black">Solcelleanlæg størrelse – hvordan skal solceller dimensioneres?</p>
            <p class="text-xl">
                Hvor mange solceller og hvor stor en batteribank passer til dit forbrug;
                og hvordan påvirker en varmepumpe eller elbil beslutningen? Vi går igennem det hele i denne blog
            </p>
            <span>
                Der er mange faktorer der har betydning når man skal beslutte størrelse på solcelleanlæg.
                Dette som er værd at sætte sig ind i når du overvejer at anskaffe et solcelleanlæg
                – netop da de nedenstående parametre for et solcelleanlæg er forskellige fra person til person.
            </span>
            <br><br>
            <p>Her er de vigtigste ting ift. hvordan et solcelleanlæg skal dimensioneres:</p>
            <ol class="list-decimal list-inside text-primary font-black cursor-pointer">
                <li @click="scrollMeTo('dimensions')">Hvor højt er dit forbrug i kWh?</li>
                <li @click="scrollMeTo('dimensions')">Hvad er din elpris?</li>
                <li @click="scrollMeTo('dimensions')">Hvordan er dit forbrugsmønster? (Dvs. hvornår på dagen ligger dit forbrug)</li>
                <li @click="scrollMeTo('dimensions')">Hvordan vender dine tagflader – og hvor store er de? </li>
                <li @click="scrollMeTo('electric-car')">Har du elbil eller varmepumpe?</li>
                <li @click="scrollMeTo('effect')">Hvad er effektiviteten på solcellepanelerne – og hvor mange kW solceller vil du have? </li>
                <li @click="scrollMeTo('battery')">Hvor stor skal batteribanken være? </li>
            </ol>
            <br>
            <span>
                Læs med i denne blog for at få dybdegående viden omkring hvert punkt på denne liste, 
                eller kontakt os nu og få gratis uforpligtende rådgivning hvor en af vores eksperter kan gå i gennem alle punkterne 
                <b>– så finder vi det perfekte anlæg til dig.</b> 
            </span>
        </section>

        <OfferBox/>

        <section ref="dimensions" class="text-left leading-[1.9em] sm:mx-20 md:mx-40 lg:mx-96">
            <div class="pb-4 w-fit">
                <div class="xl:inline-block align-top 2xl:w-1/2">
                    <p class="text-2xl">Hvordan dimensioneres solceller ud fra dit forbrug?</p>
                    <span>
                        Udgangspunktet når man skal dimensionere et anlæg, vil altid være husstandens forbrug.
                        Her hvor <b>forbruget i kWh</b> oftest vil være det bedste udgangspunkt.
                    </span>
                    <br><br>
                    <span>
                        Dertil er det også værd at kigge på hvad den årlige elregning ligger på, samt nuværende elpris, da dette vil spille en stor rolle i <b>tilbagebetalingstiden.</b>
                        Det vil sige hvor mange år det tager før solcelleanlægget har betalt sig selv tilbage via besparelser, samt salg af el til elnettet.
                    </span>
                </div>
                <img class="xl:inline-block align-top" src="../../../assets/img/blogs/8800-Viborg.webp" alt="8800-Viborg" width="400">
            </div>
            <span>
                Tilbagebetalingstiden på solcelleanlægget kan blive relevant for dimensioneringen af anlægget, 
                men i vores øjne vil det optimale anlæg altid være det som har en kombination af <b>højst mulig selvforsyning og kortest mulig tilbagebetalingstid</b> 
                – disse som selvfølgelig også har stor sammenhæng.
            </span>
            <br><br>
            <span>
                For at opnå dette vil vi til det gennemsnitlige forbrug – uden et alternativt forbrugsmønster eller varmepumpe – benytte tommelfingerreglen 1:1000.
            </span>
            <br><br>
            <span>
                Det vil sige at for hver 1000 kWh husstanden har i forbrug, vil vi dimensionere med tilsvarende 1 kW i solceller. 
                For at give et eksempel, så er et gennemsnitligt forbrug på omkring de 6000 kWh, dette som skulle komplimenteres med 6 kW solceller.
            </span>
            <br><br>
            <span>
                Det skal dog siges at dette varierer meget – men det er udgangspunktet.
            </span>
        </section>

        <section ref="electric-car" class="text-left leading-[1.9em] sm:mx-20 md:mx-40 lg:mx-96">
            <img src="../../../assets/img/blogs/Myenergi-zappi-header.webp" alt="Myengergi-zappi">
            <p class="text-3xl font-black">Solceller med varmepumpe og elbil</p>
            <span>
                Den ovenstående tommelfingerregel gælder ikke i alle situationer. Har man varmepumpe eller elbil, skal man tænke i andre baner 
                – så hvordan skal et solcelleanlæg dimensioneres, hvis man har varmepumpe eller elbil?
            </span>
            <p class="text-2xl pt-4">Hvor mange solceller skal man have hvis man har elbil?</p>
            <span>
                Hvis vi starter med hvor mange solceller man skal have med elbil, så er det forholdsvis simpelt. 
                Det kommer nemlig helt an på ens opladningsvaner. 
                Langt størstedelen af danskere vil primært oplade deres elbil i løbet af aftenen og natten. 
                I så fald vil solcellerne som sådan stadigt skulle dimensioneres ud fra husstandens forbrug, da elbilens forbrug er indberegnet i dette.
            </span>
            <br><br>
            <span>
                Har man endnu ikke elbil, men regner med at købe en, kan man gå ud fra et tillæg, til ens eksisterende forbrug, på små 3.000 kWh 
                – dette som kommer af en forventning om ca. 15.000 km. kørsel årligt.
            </span>
            <br><br>
            <span>
                Men, med en elbil, vil det for mange kunne svare sig at få en <b>større batteribank</b>, netop da der kommer <b>meget forbrug i løbet af aftenen/natten.</b> 
                Så desto mere du kan lade batteribanken op i løbet af dagen, desto mere af din selvproducerede strøm fra solceller kan benyttes til at lade elbilen.
            </span>
            <br><br>
            <span>
                <b>Lader man derimod sin elbil i løbet af dagen, så kan det modsatte svare sig</b>, da det meste af forbruget i stedet vil falde i løbet af dagen. 
                Derfor kan man benytte den selvproducerede strøm med det samme, uden at skulle lade den på batteribanken først. 
                Det kan stadigt svare sig at installere en batteribank til resten af husstandens forbrug, denne skal dog dimensioneres efter husstandens forbrug, uden forbruget fra elbilen 
                – det vil sige minus de rundt regnet 3.000 kWh.
            </span>
            <p class="text-2xl pt-4">Hvor mange solceller skal man have hvis man har varmepumpe?</p>
            <span>
                Har man varmepumpe så bliver regnestykket en smule mere kompliceret. 
                Mens <b>en varmepumpe oftest vil tilføje omkring 60% mere forbrug</b>, så vil størstedelen af dette ekstra forbrug falde i vintermånederne. 
                Det er netop her at produktionen fra solcellerne er lavest, derfor vil et solcelleanlæg højst sandsynligt ikke have en chance for at dække det forbrug om vinteren.
            </span>
            <br><br>
            <span>
                Derfor kan man ikke, hvis man har varmepumpe, gå ud fra 1:1000kWh reglen ift. ens fulde forbrug. 
                Tager man derimod og <b>kigger udelukkende på sommerhalvåret</b>, så kan man regne med <b>2:1000kWh.</b> 
                Det vil sige at hvis man i sommer halvåret bruger 3.000 kWh, så skal solcelleanlæggets størrelse være på 6 kW solceller.
            </span>
            <br><br>
            <span>
                Dertil er det værd at kigge i en større batteribank som kan købe billig strøm om natten. 
                Det er muligt at man ikke kan dække hele ens forbrug med solceller, 
                men hvis man kan købe den billigst mulige strøm, er der stadigt mange penge at spare med et hybrid solcelleanlæg 
                – selv hvis solcellerne kun producerer lidt. 
                <b>Derfor vil man med en varmepumpe oftest opskalere batteribanken</b>, så den reelt set er en smule overdimensioneret i forhold til mængden af solceller.
            </span>
            
                <TotalLink>
                    <ButtonCom class="text-center">Få et uforpligtende tilbud nu</ButtonCom>
                </TotalLink>
            
        </section>

        <section ref="effect" class="text-left leading-[1.9em] sm:mx-20 md:mx-40 lg:mx-96 pt-10">
            <div class="xl:inline-block align-top 2xl:w-1/2">
                <p class="text-3xl font-black">Hvor effektive er solcellerne?</p>
                <span>
                    Nu har vi beskrevet hvor stor en mængde solceller man skal have, ift. det samlede antal kWh som ender på ens tagflade.
                    Dette er relativt i forhold til solcellepanelets såkaldte <b>‘watt peak’</b> (Wp), som er det maksimale solcellepanelet kan yde.
                </span>
                <br><br>
                <span>
                    Det skal siges at der er mange andre faktorer som spiller ind når man snakker kvalitet og effektivitet.
                    Heriblandt effektivitet i skyggeforhold og solcellepanelets garanti.
                    Vi har skrevet en blog omkring <b>hvad der reelt set gør et solcellepanel godt</b>, læs den her;
                    <!-- TODO: <router-link class="text-primary" :to="{ name : ''}"><b>‘ALT OM SOLCELLER‘.</b></router-link> -->
                </span>
                <br><br>
                <span>
                    Men hvis man bare vil lave en simpel dimensionerings udregning, kan man starte med at forholde sig til Wp og panelets størrelse.
                    Ex. har man et forbrug på 6.000 kWh, så skal man have 6 kW solcellepaneler, hvilket f.eks svarer til ca. 16 styks 380 Wp SunPower Performance paneler.
                </span>
                <br><br>
                <span>
                    Når man har fundet den optimale mængde solceller, så skal man sikre at der er plads til panelerne.
                    Der er mange muligheder for montage, her både på tag med hældning eller fladt tag – jordmontage er også muligt,
                    selvom dette dog er dyrere og kræver en mere besværlig process tilladelses mæssigt.
                </span>
            </div>

            <div class="xl:inline-block align-top text-center">
                <img class="m-auto" src="../../../assets/img/panel-sunpower.webp" alt="sunpower-panel" width="420" height="">
                <p>380 Wp SunPower Performance 3, 116x169cm</p>
                <p>– Kun hos Viasol</p>
            </div>
        </section>

        <section ref="battery" class="text-left leading-[1.9em] sm:mx-20 md:mx-40 lg:mx-96 pt-10">
            <div class="xl:inline-block align-top text-center">
                <img src="../../../assets/img/blogs/sonnen-mål.webp" alt="sonnen-meas" width="420">
                <p>SonnenBatterie 15 kWh</p>
            </div>

            <div class="xl:inline-block align-top 2xl:w-1/2">
                <p class="text-3xl font-black"></p>
                <p class="text-2xl"></p>
                <span>
                    Vi har i denne blog nævnt batteribanke flere gange, og i sammenhæng med dette helt specifikt 
                    <NuxtLink class="text-primary" to="/batteribanke/sonnenbatteri">Sonnen batteribanke</NuxtLink>
                    , netop da denne er den bedste på markedet.
                </span>
                <br><br>
                <span>
                    Men hvorfor en batteribank? 
                    Som en privat husstand vil dit forbrug som tidligere nævnt oftest falde i løbet af morgen og aften timerne, 
                    hvor dit solcelleanlæg i sig selv har meget lidt eller ingen produktion. 
                    Derfor tilkøbes en batteribank oftest til at lagre den selvproducerede energi, <b>så energien er klar til når husstanden har brug for den.</b>
                </span>
                <br><br>
                <span>
                    Dertil kan en Sonnen batteribank lades op med billig strøm fra elnettet, netop ved at lade batteribanken om natten når strømmen er billigst. 
                    Dermed kan du altså selv uden meget produktion fra solcellerne spare en betydeligt del af din elregning. Læs mere her; 
                    <!-- TODO: <router-link class="text-primary" :to="{name : ''}">‘Variable elpriser og solceller‘.</router-link> -->
                </span>
            </div>
            
                <TotalLink>
                    <ButtonCom class="text-center py-5">Prøv vores prisberegner</ButtonCom>
                </TotalLink>
            
        </section>

        <SectionDivider/>

        <BlogCarousel/>

        <ContactUs/>
        </div>
</template>

<script>
export default {
}
</script>

<style>

</style>