<template>
    <section class="bg-center w-full h-fit bg-fixed bg-no-repeat bg-cover px-16 sm:px-20 md:px-40 lg:px-0 py-10">
        <div class="flex lg:flex-none m-auto lg:ml-40 lg:w-[33%]" :class="{'lg:relative lg:ml-0 lg:left-[60%]' : Right, 
                                                                            'lg:relative lg:ml-0 xl:left-[35%] lg:left-[17%]':Center, 
                                                                            'lg:relative lg:ml-0 xl:mx-[10%] lg:left-[17%] lg:w-[50%] py-4':prisbergner}">
            <div class="bg-white rounded-lg pt-4 px-12 lg:pl-10 pb-4 w-full lg:min-w-fit text-left">
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props : {
        isRight : Boolean,
        isCenter : Boolean,
        prisbergner : Boolean

    },
    data() {
        return{
            Right : this.isRight,
            Center : this.isCenter,
            Prisbergner : this.prisbergner
        }
    },
    
}
</script>