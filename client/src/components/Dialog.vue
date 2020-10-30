  <template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="400"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn  v-bind="attrs" v-on="on" text class="grey--text">
          <span> Log out</span>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          Are you sure you want to log out?
        </v-card-title>

        <v-card-actions >
            <v-btn color="primary" text @click="userLogout">
            Logout
          </v-btn>
          <v-btn color="error" text @click="dialog = false">
            cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data () {
      return {
        dialog: false,
      }
    },
    methods:{
        ...mapActions(['logout']),
        userLogout(){
            this.logout()
            this.dialog = false
            this.$router.push('/landing')
        }
    }
  }
</script>