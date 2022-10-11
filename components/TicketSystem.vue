<template>
  <div class="container">
    <form ref="form" @submit.prevent="sendEmail">
      <label>Name</label>
      <input type="text" name="user_name">
      <label>Adresse</label>
      <input type="text" name="user_adresse">
      <label>Email</label>
      <input type="email" name="user_email">
      <label>Tlf. nr.</label>
      <input type="number" name="tlf_Nr">

      <br>
      <br>
      <h2>Oplysninger i forbindelse med problem på anlæg</h2>
      <br>

      <label>Serienummer Inverter/Batteri:</label>
      <input type="number" name="serienummer">


      <label> Hvornår er problemet opstået:</label>
      <input type="date" name="date">

      <br>
      <br>
      <h2>Beskriv dit problem</h2>
      <br>
      <label>Beskrivelse</label>
      <textarea name="message"></textarea>
      

      <br>
      <p> For at kunne hjælpe bedst muligt må du meget gerne sende et billede eller screenshot af problemet eller skaden</p>
      <br>
      <input type="file" name="fileToUpload">

      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>
  import emailjs from '@emailjs/browser';
  export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_x4d4pfj', 'template_0rtmawl', this.$refs.form, 'CYbM6YG29wXIymjVn')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}
</script>


<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text ], [type=email], [type=number], [type=date], [type=file], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>