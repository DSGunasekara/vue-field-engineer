<template>
  <v-row>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="grey" text dark v-bind="attrs" v-on="on" class="my-5"> <v-icon>mdi-plus-circle</v-icon> Add a job </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create a Job</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="title" label="Job Title" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="date" label="Date" type="datetime-local"></v-text-field>
              </v-col>
<!--              <v-col cols="12">-->
<!--                <v-text-field v-model="startTime" label="Start Time" type="time"></v-text-field>-->
<!--              </v-col>-->
              <v-col cols="12">
                <v-text-field v-model="location" label="Location"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="description" label="Description" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="lconName" label="Customer Name"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="lconContactNo" label="Customer Contact No"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="rate" label="Rate per Hour"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="requiredEngineers" label="Required no of engineers"></v-text-field>
              </v-col>
              <!-- <v-col cols="12">
                <v-select
                  :menu-props="{ offsetY: true }"
                  :items="items"
                  label="Select Engineers to assign"
                  multiple
                ></v-select>
              </v-col> -->
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="submit">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';
// import { mapGetters } from "vuex";

export default {
  name: "AddJob",
  data: () => ({
    dialog: false,
    // selectItems: null
    title: '',
    date:'',
    // startTime: '',
    location: '',
    description:'',
    lconName:'',
    lconContactNo:'',
    rate:'',
    requiredEngineers:''
  }),
  methods: {
    ...mapActions(["addJob"]),
    submit(){
      console.log(this.addJob);
      const job = {
        title: this.title,
        date: this.date,
        // startTime: this.startTime,
        location: this.location,
        description: this.description,
        lconName: this.lconName,
        lconContactNo: this.title,
        rate: this.rate,
        requiredEngineers: this.requiredEngineers,
        status: 'Pending'
      }
      console.log(job)
      this.addJob(job)
      .then((res)=>{
        console.log(res);
        this.dialog = false
      }).catch((err)=>{
        console.log(err);
      })
    }
  },
  // computed:{
  //   ...mapGetters(["allEngineers"]),
  //   items(){
  //     const items = this.allEngineers.filter(engineer=> engineer.availability === true).map(engineer=> engineer.user.name)
  //     console.log(items);
  //     return items
  //   }
  // }
};
</script>
