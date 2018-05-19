<template>
  <v-layout>
    <v-flex xs10 offset-xs1>
      <v-card>
        <v-card-media v-bind:src="Url" height="200px">
        </v-card-media>
        <v-card-title primary-title class="self-title">
          Inventory Form
        </v-card-title>
        <div class="content">
          <div class="box box-title">
            <h3>名称: </h3>
          </div>
          <div class="box">
            <input type="text" v-model="reagent">
          </div>
          <div class="box box-title">
            <h3>试剂分类: </h3>
          </div>
          <div class="box">
            <input type="text">
          </div>
          <div class="box box-title">
            <h3>品牌: </h3>
          </div>
          <div class="box">
            <input type="text">            
          </div>
          <div class="box box-title">
            <h3>数量单位: </h3>
          </div>
          <div class="box">
            <input type="text">                        
          </div>
          <div class="box box-title">
            <h3>数量: </h3>
          </div>
          <div class="box">
            <input type="text">                                    
          </div>
          <div class="box box-title">
            <h3>供应商: </h3>
          </div>
          <div class="box">
            <input type="text">                                                
          </div>
          <div class="box box-title">
            <h3>规格: </h3>
          </div>
          <div class="box">
            <input type="text">                                                
          </div>
          <div class="box box-title">
            <h3>缺货预警: </h3>
          </div>
          <div class="box">
            <input type="text">                                                
          </div>
          <div class="box box-title">
            <h3>存放条件: </h3>
          </div>
          <div class="box">
            <input type="text">                                               
          </div>
          <div class="box box-title">
            <h3>供应商: </h3>
          </div>
          <div class="box">
            <input type="text">                                                
          </div>
          <div class="box box-title">
            <h3>存放地: </h3>
          </div>
          <div class="box">
            <input type="text">                                                
          </div> 
          <div class="box box-title">
            <h3>货号: </h3>
          </div>
          <div class="box">
            <input type="text">                                                
          </div>
          <div class="box box-title">
            <h3>过期时间: </h3>
          </div>
          <div class="box">
            <input type="text">                                                
          </div>
          <div class="box box-title">
            <h3>发票号: </h3>
          </div>
          <div class="box">
            <input type="text">                                                
          </div>   
        </div>
        <div class="text">
          <div>
            <h3>描述： </h3>            
          </div>
          <textarea name="" rows="6"></textarea>
        </div>  
        <br>
        <v-card-actions>
          <v-btn color="success" class="submit" @click="submit" >Submit</v-btn>
          <v-btn color="info">Clear</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import MenuIcon from "vue-material-design-icons/menu.vue"
import AndroidIcon from "vue-material-design-icons/android.vue"
import InventoryFormSubmit from '@/services/InventoryFormSubmit'

export default {
  data () {
    return {
      Url: require('../assets/head.jpg'),
      reagent: ''
    }
  },
  components: {
    MenuIcon,
    AndroidIcon
  },
  methods: {
    async submit () {
      try {
        await InventoryFormSubmit.submit({
          reagent: this.reagent
        })
      }catch (error) {
        this.error = error.response.data.error
      }
    }
  }

}
</script>

<style scoped>
.self-title {
  font-size: 36px;
  font-weight: bolder
}
.content{
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr 3fr);
  grid-gap: 3px;
  
}

.content > div{
  padding: 20px 20px 10px 20px;
  background: #add8e680;
}

.text{
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 11fr;
}

input{
  border-bottom: 1px solid black;
  width: 100%;
  padding-bottom: 10px;
}

textarea{
  background: lightcyan;
}
.card__actions{
  margin-top: 20px;
  float: right;
}

</style>

