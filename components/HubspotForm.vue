<template>
<div>
    <h1> 
        HubSportForm 
        <div id='hubspotForm' v-once></div>        
    </h1>
</div>
</template>

<script>
    export default {
      mounted() {
      const script = document.createElement("script");
      script.src="https://js.hsforms.net/forms/v2.js";
      document.body.appendChild(script);
      script.addEventListener("load", () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "3970749",
            formId: "02f849df-724c-4296-86fb-11b96b47330a",
            target: "#hubspotForm"
          })
        }
      })
    }
  }
  </script>

<style>
      
</style>