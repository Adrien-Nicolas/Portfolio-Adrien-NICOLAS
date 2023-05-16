<template>
  <div class="bg">
    <hr>
    <h1 class="text-center mb-5">Gigs</h1>
    <hr>
    <div id="Gigs">
    <br>
  <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
    <SplideSlide v-for="gig in gigArray" :key="gig.id">
      <div class="gig-card">
        <img :src="require(`../assets/${gig.image}`)" alt="" class="gig-image">
        <div class="gig-details">
          <h3 class="gig-title">{{ gig.title }}</h3>
          <p class="gig-description">{{ gig.description }}</p>
          <div class="gig-footer">
            <p class="gig-price">{{ gig.Price }}</p>
            <a :href="gig.link" target="_blank" class="gig-link">View Details</a>
          </div>
        </div>
      </div>
    </SplideSlide>
  </Splide>
  </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/vue-splide/css';

import jsonData from '../../gigs.json';

export default defineComponent( {
  components: { Splide, SplideSlide },
  data() {
    return {
      gigArray: jsonData.GigArray
    };
  },
} );
</script>

<style scoped>


.bg{
    background-color: rgb(46, 42, 42);
    padding: 20px;

}


p{
        color: rgb(0, 0, 0);
        font-size: 1.1em;
        font-family: "Robot_Slab";
        text-align: justify;
        text-justify: auto;
        line-height: 1.4em;
        border-radius: 2%;
        margin: 40px;
    }
hr{
    border: 5px solid rgb(255, 255, 255);
    border-radius: 5px;
    width: 50%;
    position: center;
    margin: auto;
}

h1 {
        font-size: 3rem;
        font-weight: bold;
        color: rgb(255, 255, 255);
  }
.gig-card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #ffffff;
  transition: box-shadow 0.3s ease-in-out;
  width: 100%;
  position: center;
  margin: auto;
}

.gig-card:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  background-color: #f7f9fc;
}

.gig-image {
  max-width: 200px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  object-fit: cover;
}

.gig-details {
  padding: 10px;
}

.gig-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333333;
}

.gig-description {
  font-size: 16px;
  margin-bottom: 10px;
  color: #666666;
}

.gig-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gig-price {
  font-size: 18px;
  font-weight: bold;
  color: #333333;
}

.gig-link {
  display: inline-block;
  padding: 8px 16px;
  color: #ffffff;
  font-weight: bold;
  background-color: #007bff;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.gig-link:hover {
  background-color: #0056b3;
}

@media (min-width: 768px) {
  /* For tablets and larger screens */
  .gig-image {
    max-width: 50%;
  }


  .gig-title {
    font-size: 28px;
  }

  .gig-description {
    font-size: 18px;
  }

  .gig-price {
    font-size: 20px;
  }
}

@media (min-width: 1200px) {
  /* For larger screens */
  .gig-image {
    max-width: 40%;
  }

  .gig-card {
    padding: 20px;
  }

  .gig-title {
    font-size: 32px;
  }

  .gig-description {
    font-size: 20px;
  }

  .gig-price {
    font-size: 22px;
  }
}




</style>
