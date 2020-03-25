<template>
  <v-container >

    <div class="main" >
    
    <v-row class="text-center"  justify="center">
      <v-col cols="12">
 <v-toolbar elevation="0">
   <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2 "
          contain
          src="../assets/LogoMakr_6XClbq.png"
          transition="scale-transition"
          width="40"
          height='40'
        />

     
      </div>

      <v-spacer></v-spacer>

        <h2 class="mr-5  font-weight-black"> DJIBARCHIVES </h2>
    
 </v-toolbar>
      </v-col>

      <v-col cols="12" class="imagel">
        <v-img
          :src="require('../assets/LogoMakr_6XClbq.png')"
          class="my-1"
          contain
          height="100"
        />
      </v-col>

      <v-col class="mb-4" cols="12">
        <h1 class="display-1 font-weight-bold mb-3">
         Coronavirus tracker in East Africa
        </h1>

      </v-col>

 <v-col cols="6" v-if="wait">

          <h3 class="mb-5">Getting data </h3>

          <v-progress-linear
            color="blue-grey darken-4"
            indeterminate
            rounded
            height="8"
          ></v-progress-linear>
        </v-col>

      <v-col cols="12" v-if="!wait">
         <v-data-table
    :headers="headers"
    :items="cases"
    sort-by="country"
    class="elevation-1"
  >
     <template v-slot:item.totoal="{ item }">
      <v-chip :color="grey" dark>{{ item.total }}</v-chip>
    </template>
     <template v-slot:item.deaths="{ item }">
      <v-chip :color="getDeath(item.deaths)" dark>{{ item.deaths }}</v-chip>
    </template>
     <template v-slot:item.recovered="{ item }">
      <v-chip :color="getRecover(item.recovered)" dark>{{ item.recovered }}</v-chip>
    </template>
       <template v-slot:item.todayCases="{ item }">
      <v-chip :color="getcases(item.todayCases)" dark>{{ item.todayCases }}</v-chip>
    </template>
 <template v-slot:item.todayDeaths="{ item }">
      <v-chip :color="getNewDeath(item.todayDeaths)" dark>{{ item.todayDeaths }}</v-chip>
    </template>
     <template v-slot:item.active="{ item }">
      <v-chip :color="getTotal(item.active)" dark>{{ item.active }}</v-chip>
    </template>
  </v-data-table>
      </v-col>

     
  
    </v-row>
    </div>
  </v-container>
</template>

<script>
//import axios from 'axios';
const covid = require('novelcovid');
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Country',
            align: 'start',
            sortable: false,
            value: 'country',
          },

          { text: 'New cases', value: 'todayCases' },
          { text: 'Total', value: 'active' },
          { text: 'Recovered', value: 'recovered' },
          { text: 'New deaths', value: 'todayDeaths' },
          { text: 'Total deaths', value: 'deaths' },
        ],
        cases: [
         
        ],
    wait: true,
      }
    },

created(){
this.getData();
},
    methods: {

getTotal (item) {
        if (item > 0) return 'blue-grey darken-4'
      },

getcases (item) {
        if (item > 0) return 'orange darken-4'
      },

       getDeath (deaths) {
        if (deaths > 0) return 'red'
      },


       getNewDeath (deaths) {
        if (deaths > 0) return 'red'
      },

      getRecover (recovered){
        if(recovered > 0) return 'green'
      },

    async  getData(){
      this.wait = true;
let djibouti =  await covid.getCountry({country: "Djibouti"});
let ethiopia = await covid.getCountry({country: "Ethiopia"})
let eritrea = await covid.getCountry({country: "Eritrea"})
let somalia = await covid.getCountry({country: "Somalia"})
let kenya = await covid.getCountry({country: "Kenya"})
let tanzania = await covid.getCountry({country: "Tanzania"})
let sudan = await covid.getCountry({country: "Sudan"})
let rwanda = await covid.getCountry({country: "Rwanda"})
let uganda  = await covid.getCountry({country: "Uganda"})

 
  this.cases.push(djibouti, ethiopia, eritrea, somalia, kenya, tanzania,
  sudan, rwanda, uganda);

  if(this.cases[0]){
    this.wait = false;
  }

    }
    }
  }

</script>

<style lang="scss" scoped>
.container{
  padding-top: 1rem;
 .main{
   background-color: white;
   border-radius: 3rem;
   padding: 1rem;
  // position: absolute;
  // top: 50%;
  // transform: translateY(-50%);
  .row{
    .imagel {

     margin-top: -2rem;
   
    }
  }

   
 }

 
}
</style> 

