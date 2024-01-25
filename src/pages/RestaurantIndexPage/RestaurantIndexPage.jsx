import React from "react";
import RestaruantIndexCard from "../../components/RestaurantIndexCard/RestaurantIndexCard";
import DateSelector from "../../components/DateSelector/DateSelector";

export default function RestaurantIndexPage() {
  return (
    <div className="restaurant_index">
      <DateSelector />
      <div>Restaurants</div>
      <RestaruantIndexCard />
    </div>
  );
}
