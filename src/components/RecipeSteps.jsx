import { Pizza } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { format } from "date-fns";

export default function RecipeSteps({
  recommendedTimeRange,
  date,
  time,
  poolishSteps,
  mainDoughSteps,
  toggleStep,
  setPoolishSteps,
  setMainDoughSteps,
  poolishFlour,
  poolishWater,
  poolishYeast,
  poolishHoney,
  remainingFlour,
  remainingWater,
  remainingSalt,
  flourWeight,
  waterWeight,
  saltWeight,
  totalDoughWeight,
}) {
  return (
    <div className="mt-6 p-6 bg-white rounded-lg shadow-inner border-2 border-orange-200">
      <h3 className="text-2xl font-bold mb-4 text-orange-600 flex gap-2">Your Pizza Recipe <Pizza /></h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-xl font-semibold mb-2 text-orange-500">
            ⏰ Recommended Poolish Start Time
          </h4>
          <p className="mb-2 text-gray-700">
            Between {format(recommendedTimeRange.start, "EEE, d MMMM HH:mm")} and{" "}
            {format(recommendedTimeRange.end, "EEE, d MMMM HH:mm")}
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Dinner Time:</strong> {date && format(date, "EEE, d MMMM")} at{" "}
            {time}
          </p>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
          <h4 className="text-xl font-semibold mb-2 text-orange-500">
            1️⃣ Poolish Preparation
          </h4>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Flour: {poolishFlour}g</li>
            <li>Water: {poolishWater}g</li>
            <li>Yeast: {poolishYeast}g</li>
            <li>Honey: {poolishHoney}g</li>
          </ul>
          <div className="space-y-2">
            {poolishSteps.map((step) => (
              <div key={step.id} className="flex items-center space-x-2">
                <Checkbox
                  id={step.id}
                  checked={step.checked}
                  onCheckedChange={() => toggleStep(poolishSteps, setPoolishSteps, step.id)}
                  className="border-orange-400 text-orange-500"
                />
                <label
                  htmlFor={step.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {step.text}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
          <h4 className="text-xl font-semibold mb-2 text-orange-500">
            2️⃣ Main Dough
          </h4>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Remaining Flour: {remainingFlour}g</li>
            <li>Remaining Water: {remainingWater}g</li>
            <li>Salt: {remainingSalt}g</li>
          </ul>
          <div className="space-y-2">
            {mainDoughSteps.map((step) => (
              <div key={step.id} className="flex items-center space-x-2">
                <Checkbox
                  id={step.id}
                  checked={step.checked}
                  onCheckedChange={() => toggleStep(mainDoughSteps, setMainDoughSteps, step.id)}
                  className="border-orange-400 text-orange-500"
                />
                <label
                  htmlFor={step.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {step.text}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
          <h4 className="text-xl font-semibold mb-2 text-orange-500">
            📊 Total Ingredients
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Total Flour: {flourWeight}g</li>
            <li>Total Water: {waterWeight}g</li>
            <li>Total Salt: {saltWeight}g</li>
            <li>Total Dough Weight: {totalDoughWeight}g</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
