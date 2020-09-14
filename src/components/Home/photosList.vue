<template>
    <div class="mt-5">
        <b-container class="bv-example-row">
            <b-row>
                <b-col cols="4" v-for="(photo, i) in photos" :key="i">
                    <div>
                        <b-card
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2"
                        >
                            <b-card-text>
                            {{photo.title}}
                            </b-card-text>

                            <a href=""><router-link
                            :to="{name:'photoDetail',params:{id:photo.id}}"
                            class="hover:text-red-500"
                            >DETAIL |</router-link></a>
                        </b-card>
                    </div>
                </b-col>
                
            </b-row>
        </b-container>
    </div>    
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  created() {
    this.getPhotos();
  },
  methods: {
    ...mapActions(["getPhotos"]),
  },
  computed: {
    ...mapState(["photos"]),
  },
};
</script>
