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
            <input 
            type="text" 
            v-model.trim="name"
            v-on:input="$v.name.$touch"
            v-bind:class="{error: $v.name.$error, valid: $v.name.$dirty && !$v.name.$invalid}"
            >
            <span class="form-group__message" v-if="!$v.name.required">Field is required</span>
          </div>
          <div class="box box-title">
            <h3>试剂分类: </h3>
          </div>
          <div class="box">
            <select v-model.trim="category" required>
              <option value="" selected="selected">-----select----</option>              
              <option value="antibody">Antibody</option>
              <option value="cellLine">Cell Line</option>
              <option value="chemical">Chemical</option>              
              <option value="enzyme">Enzyme - Restriction</option>              
              <option value="equipment">Equipment</option>              
              <option value="general-supply">General Supply</option>              
              <option value="oligo-or-primer">Oligo or Primer</option>
              <option value="plasmid">Plasmid</option>                                          
              <option value="solutions">Solutions</option>                                                                             
            </select>
          </div>
          <div class="box box-title">
            <h3>品牌: </h3>
          </div>
          <div class="box">
            <input 
            type="text" 
            v-model.trim="brand"
            v-on:input="$v.brand.$touch"
            v-bind:class="{error: $v.brand.$error, valid: $v.brand.$dirty && !$v.brand.$invalid}"
            >    
            <span class="form-group__message" v-if="!$v.brand.required">Field is required</span>                    
          </div>
          <div class="box box-title">
            <h3>数量单位: </h3>
          </div>
          <div class="box">
            <input 
            type="text" 
            v-model.trim="amountUnit"
            v-on:input="$v.amountUnit.$touch"
            v-bind:class="{error: $v.amountUnit.$error, valid: $v.amountUnit.$dirty && !$v.amountUnit.$invalid}"
            >
            <span class="form-group__message" v-if="!$v.amountUnit.required">Field is required</span>                                                        
          </div>
          <div class="box box-title">
            <h3>数量: </h3>
          </div>
          <div class="box">
            <input 
            type="text" 
            placeholder="0" 
            v-model.trim="amount"
            v-on:input="$v.amount.$touch"
            v-bind:class="{error: $v.amount.$error, valid: $v.amount.$dirty && !$v.amount.$invalid}"
            >
            <span class="form-group__message" v-if="!$v.amount.required">Field is required</span>                                                                                                        
          </div>
          <div class="box box-title">
            <h3>供应商: </h3>
          </div>
          <div class="box">
            <input 
            type="text" 
            v-model.trim="provider"
            v-on:input="$v.provider.$touch"
            v-bind:class="{error: $v.provider.$error, valid: $v.provider.$dirty && !$v.name.$invalid}"
            >
            <span class="form-group__message" v-if="!$v.provider.required">Field is required</span>                                                                                                                                                                    
          </div>
          <div class="box box-title">
            <h3>规格: </h3>
          </div>
          <div class="box">
            <input 
            type="text" 
            v-model.trim="specification"
            v-on:input="$v.specification.$touch"
            v-bind:class="{error: $v.specification.$error, valid: $v.specification.$dirty && !$v.specification.$invalid}"
            >
            <span class="form-group__message" v-if="!$v.specification.required">Field is required</span>                                                                                                                                                                                                                                
          </div>
          <div class="box box-title">
            <h3>缺货预警: </h3>
          </div>
          <div class="box">
            <select v-model.trim="stockout" required>
              <option value="" selected="selected">-----select----</option>                            
              <option value="true">True</option>
              <option value="false">False</option>                    
            </select>                                                                        
          </div>
          <div class="box box-title">
            <h3>存放条件: </h3>
          </div>
          <div class="box">
            <input 
            type="text" 
            v-model.trim="depositCondition"
            v-on:input="$v.depositCondition.$touch"
            v-bind:class="{error: $v.depositCondition.$error, valid: $v.depositCondition.$dirty && !$v.depositCondition.$invalid}"
            >
            <span class="form-group__message" v-if="!$v.depositCondition.required">Field is required</span>                                                                                                                                                                                                                                                                                           
          </div>
          <div class="box box-title">
            <h3>存放地: </h3>
          </div>
          <div class="box">
            <input 
            type="text" 
            v-model.trim="depositPlace"
            v-on:input="$v.name.$touch"
            v-bind:class="{error: $v.name.$error, valid: $v.name.$dirty && !$v.name.$invalid}"
            >
            <span class="form-group__message" v-if="!$v.name.required">Field is required</span>                                                                                                                                                                                                                                                                                                                                                      
          </div> 
          <div class="box box-title">
            <h3>货号: </h3>
          </div>
          <div class="box">
            <input 
            type="text" 
            v-model.trim="goodsNum"
            v-on:input="$v.name.$touch"
            v-bind:class="{error: $v.name.$error, valid: $v.name.$dirty && !$v.name.$invalid}"
            >
            <span class="form-group__message" v-if="!$v.name.required">Field is required</span>                                                                                                                                                                                                                                                                                                                                                                                                                  
          </div>
          <div class="box box-title">
            <h3>过期时间: </h3>
          </div>
          <div class="box">
            <v-menu
            ref="menu2"
            :close-on-content-click="false"
            v-model="menu2"
            :nudge-right="40"
            :return-value.sync="date"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
              <v-text-field
              slot="activator"
              v-model="date"
              label="click me"
              prepend-icon="event"
              readonly
            ></v-text-field>
              <v-date-picker v-model="date" @input="$refs.menu2.save(date)"></v-date-picker>
            </v-menu>
            <!-- <input type="text" v-model="expirationTime"> -->                                                
          </div>
          <div class="box box-title">
            <h3>发票号: </h3>
          </div>
          <div class="box">
            <input 
            type="text" 
            v-model.trim="invoiceNum"
            v-on:input="$v.invoiceNum.$touch"
            v-bind:class="{error: $v.invoiceNum.$error, valid: $v.invoiceNum.$dirty && !$v.invoiceNum.$invalid}"
            >
            <span class="form-group__message" v-if="!$v.invoiceNum.required">Field is required</span>                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
          </div>   
        </div>
        <div class="text">
          <div>
            <h3>描述： </h3>            
          </div>
          <textarea name="" rows="6" v-model="description"></textarea>
        </div>  
        <br>
        <v-card-actions>
          <v-alert  outline color="error" icon="warning">
            {{submitError}}
          </v-alert>
          <v-btn color="success" class="submit" @click="submit" >Submit</v-btn>
          <!-- <v-btn color="info" @click="test">Cancel</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import MenuIcon from "vue-material-design-icons/menu.vue"
import AndroidIcon from "vue-material-design-icons/android.vue"
import InventoryFormSubmit from '@/services/InventoryFormSubmit'
import axios from 'axios'
import { required, maxLength, email, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      Url: require('../assets/head.jpg'),
      name: '',
      category: '',
      brand: '',
      amountUnit: '',
      amount: '',
      provider: '',
      specification: '',
      stockout: '',
      depositCondition: '',
      depositPlace: '', 
      goodsNum: '',
      //  expirationTime: null, -->date 过期时间
      invoiceNum: '',
      description: '',
      //  
      date: null,
      menu: false,
      modal: false,
      menu2: false,

      submitError: 'hhh',
      //  nameErrors: null
      error: null
    
      
    }
  },
  validations: {
    name: { required},
    brand: { required},
    amountUnit: { required},
    amount: { required},
    provider: { required},
    specification: {required},
    depositCondition: {required},
    depositPlace: {required},
    invoiceNum: { required},
  },
  components: {
    MenuIcon,
    AndroidIcon
  },
  watch: {
    
  },
  methods: {
    submit () {
      const postData = new URLSearchParams()
            postData.append('name', this.name)
            postData.append('category', this.category)
            postData.append('brand', this.brand)
            postData.append('amountUnit', this.amountUnit)
            postData.append('amount', this.amount)
            postData.append('provider', this.provider)
            postData.append('specification', this.specification)
            postData.append('stockout', this.stockout)
            postData.append('depositCondition', this.depositCondition)
            postData.append('depositPlace', this.depositPlace) 
            postData.append('goodsNum', this.goodsNum)        
            postData.append('expirationTime', this.expirationTime)        
            postData.append('invoiceNum', this.invoiceNum)        
            postData.append('description', this.description)

      let paraArr = [this.name,this.category,this.brand,this.amountUnit,
        this.amount,this.provider,this.specification,this.stockout,
        this.depositCondition,this.depositPlace,this.goodsNum]
      
      var count = 0

      for (let i = 0; i < paraArr.length; i++) {
       if (paraArr[i] !== '') {
            
            count++
          }else{ 
            alert('Form is not completed,please go back and check.')
            console.log('error')
            return
        }
      }  
      if (count === paraArr.length) {
        axios.post('http://localhost:8081/inventory/create', postData)
            .then(response => {
              if (response.status === 200) {
                console.log('form submitted successfully')
                for (let j = 0; j < paraArr.length; j++) {
                  paraArr[j] = ''
                }
              }
            })
          }
        count = 0
    }
},
    test () {
      console.log(this.name)
      console.log(this.category)
      console.log(this.brand)
      console.log(this.amountUnit)
      console.log(this.amount)
      console.log(this.provider)
      console.log(this.specification)
      console.log(this.stockout)
      console.log(this.depositCondition)
      console.log(this.depositPlace)
      console.log(this.invoiceNum)
      console.log(this.description)
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
select{
  display: block;
  border-style: outset;
  padding: 5px;
  width: 50%;
}

.error {
  border-color: red;
  background: #FDD;
}

.error:focus {
  outline-color: #F99;
}

.valid {
  border-color: #5A5;
  background: #EFE;
}

.valid:focus {
  outline-color: #8E8;
}

.form-group__message {
  color: #3d7e4e;
  background: yellow;
}
</style>

