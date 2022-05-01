<template>
    <div class="Contat-container">
        <h3>(Currently in test)</h3>
        <h1>Contact me</h1>
        <form @submit="submit" @reset="onReset">
            <div>
            <label>name</label>
            <input v-model="name" />
            </div>

            <div>
            <label>email</label>
            <input v-model="email" />
            </div>

            <div>
            <label>message</label>
            <textarea v-model="message"></textarea>
            </div>

            <button class="contact-button" type="submit">submit</button>
            <button class="contact-button" type="reset">reset</button>
        </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_4uy8anc', 'template_99s1k4m', e.target,
        'YOUR_USER_ID', {
          name: this.name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
};
</script>

<style>

    .Contat-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 50px;
        padding: 10px;
        border-radius: 25px;
        background-color: #071a2b;
        color: #EEF4ED;
    
    }


    input{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 5px;
        padding: 10px;
        border-radius: 25px;
        background-color: #ffffff;
        color: #001742;
    }


    textarea{
        resize: both;
        max-width: 170px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 5px;
        padding: 10px;
        border-radius: 25px;
        background-color: #ffffff;
        color: #001742;
    }

 
    .contact-button{
        background-color: #134c72;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        color: #ffffff;
    }

    .contact-button:hover{
        background-color: #2670a1;
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;       
    }
</style>