<template>
    <div>
        <div class="mt-4">
            <h4>Left and Right (or Start and End)</h4>
            <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
            </b-card>

            <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
            </b-card>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "photoDetail",
  props: ["id"],
  created() {
    console.log({ id: this.id });
    this.setDetailPhotos(this.id);
  },
  computed: {
    ...mapState(["detailPhoto"]),
  },
  methods: {
    ...mapActions(["getDetailPhotos"]),
  },
};
</script>