import { GA } from "@/init/ga";
import {
  trendingCategories
} from "./TrendingCategories";
import { routes } from "@/router/routeNames";
import { globalMutations, $store } from "./../../store/index";
import Vue from "vue";
import Component from "vue-class-component";
import { Location } from "vue-router";

@Component({
  name: "Navigation"
})
export default class Navigation extends Vue {
  drawer = false;

  categories = trendingCategories;

  homeRoute: Location = {
    name: routes.home.name
  };

  trendingRoute: Location = {
    name: routes.trending.name
  };

  aboutRoute: Location = {
    name: routes.about.name
  };

  updateDrawerState($event: boolean) {
    $store.commit(globalMutations.updateDrawer, $event);
  }

  sendNavigationGA(item: string) {
    GA.sendGeneralEvent("engagement", "navigation-click", item);
  }
}
