// components/pizza/PizzaCalculator.jsx
"use client";
import { useState, useEffect } from "react";
import { format, addDays, subHours } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Pizza, AlertTriangle, InfoIcon, ExternalLink } from "lucide-react";
import TimeSelector from "./TimeSelector";
import IngredientInputs from "./IngredientInputs";
import RecipeSteps from "./RecipeSteps";

export default function PizzaCalculator() {
  const [date, setDate] = useState(() => addDays(new Date(), 1));
  const [time, setTime] = useState("17:00");
  const [portions, setPortions] = useState(6);
  const [portionSize, setPortionSize] = useState(250);
  const [hydration, setHydration] = useState(65);
  const [salt, setSalt] = useState(3);
  const [recommendedTimeRange, setRecommendedTimeRange] = useState(null);
  const [totalDoughWeight, setTotalDoughWeight] = useState(0);
  const [flourWeight, setFlourWeight] = useState(0);
  const [waterWeight, setWaterWeight] = useState(0);
  const [saltWeight, setSaltWeight] = useState(0);
  const [poolishFlour, setPoolishFlour] = useState(0);
  const [poolishWater, setPoolishWater] = useState(0);
  const [poolishYeast, setPoolishYeast] = useState(0);
  const [poolishHoney, setPoolishHoney] = useState(0);
  const [remainingFlour, setRemainingFlour] = useState(0);
  const [remainingWater, setRemainingWater] = useState(0);
  const [remainingSalt, setRemainingSalt] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [poolishSteps, setPoolishSteps] = useState([
    { id: "poolish-1", text: "Mix and let sit for 1 hour at room temperature.", checked: false },
    { id: "poolish-2", text: "Refrigerate for 16-24 hrs (until the time below, depending on when you started)", checked: false },
  ]);
  const [mainDoughSteps, setMainDoughSteps] = useState([
    { id: "main-1", text: "Mix all together by hand or mixer", checked: false },
    { id: "main-2", text: "Cover and let rest for 20-30 minutes (autolyse)", checked: false },
    { id: "main-3", text: "Knead dough and form into ball. Don't worry if dough is still sticky at this stage.", checked: false },
    { id: "main-4", text: "Cover and let rest another 15-20 minutes. Dough will be easier to work with after this period.", checked: false },
    { id: "main-5", text: "Split by portion weight and form into balls. Place on tray and cover.", checked: false },
    { id: "main-6", text: "Form pizza bases and bake!", checked: false },
  ]);

  useEffect(() => {
    if (date && time) {
      const [hours, minutes] = time.split(":").map(Number);
      const dinnerTime = new Date(date);
      dinnerTime.setHours(hours, minutes);
      const rangeStart = subHours(dinnerTime, 28);
      const rangeEnd = subHours(dinnerTime, 20);
      setRecommendedTimeRange({ start: rangeStart, end: rangeEnd });
    }
  }, [date, time]);

  useEffect(() => {
    const totalDoughWeight = Math.round(portions * portionSize);
    const flourWeight = Math.round(totalDoughWeight / ((hydration / 100) + (salt / 100) + 1));
    const waterWeight = Math.round((hydration / 100) * flourWeight);
    const saltWeight = Math.round((salt / 100) * flourWeight);
    let poolishFlour = 100;
    let poolishWater = 100;
    let poolishYeast = 3;
    let poolishHoney = 2;

    setTotalDoughWeight(totalDoughWeight);
    setFlourWeight(flourWeight);
    setWaterWeight(waterWeight);
    setSaltWeight(saltWeight);

    if (waterWeight < 401) {
      setPoolishFlour(poolishFlour);
      setPoolishWater(poolishWater);
      setPoolishYeast(poolishYeast);
      setPoolishHoney(poolishHoney);
    } else if (waterWeight > 400 && waterWeight < 2501) {
      poolishFlour = 300;
      poolishWater = 300;
      poolishYeast = 6;
      poolishHoney = 6;
      setPoolishFlour(poolishFlour);
      setPoolishWater(poolishWater);
      setPoolishYeast(poolishYeast);
      setPoolishHoney(poolishHoney);
    }

    setRemainingFlour(flourWeight - poolishFlour);
    setRemainingWater(waterWeight - poolishWater);
    setRemainingSalt(saltWeight);

    setShowWarning(portions > 12);
  }, [portions, portionSize, hydration, salt]);

  const toggleStep = (steps, setSteps, id) => {
    setSteps(steps.map(step =>
      step.id === id ? { ...step, checked: !step.checked } : step));
  };

  return (
      <Card className="w-full max-w-3xl mx-auto bg-yellow-50 relative z-10">
        <CardHeader className="bg-orange-500 text-white">
          <CardTitle className="text-3xl gap-2 font-extrabold flex items-center justify-center">
            <Pizza />
            <h1>24 Hour Pizza Recipe Calculator</h1>
            <Pizza />
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 p-6">
          <TimeSelector
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
          />

          <IngredientInputs
            portions={portions}
            setPortions={setPortions}
            portionSize={portionSize}
            setPortionSize={setPortionSize}
            hydration={hydration}
            setHydration={setHydration}
            salt={salt}
            setSalt={setSalt}
          />

          {showWarning && (
            <div className="flex items-center p-4 mb-4 text-orange-800 border-2 border-orange-500 rounded-lg bg-orange-100">
              <AlertTriangle className="flex-shrink-0 inline w-4 h-4 mr-3" />
              <span>🤔 Whoa! That's a lot of pizza! More than 12 portions might be tricky to handle.</span>
            </div>
          )}

          {recommendedTimeRange && (
            <RecipeSteps
              recommendedTimeRange={recommendedTimeRange}
              date={date}
              time={time}
              poolishSteps={poolishSteps}
              mainDoughSteps={mainDoughSteps}
              toggleStep={toggleStep}
              setPoolishSteps={setPoolishSteps}
              setMainDoughSteps={setMainDoughSteps}
              poolishFlour={poolishFlour}
              poolishWater={poolishWater}
              poolishYeast={poolishYeast}
              poolishHoney={poolishHoney}
              remainingFlour={remainingFlour}
              remainingWater={remainingWater}
              remainingSalt={remainingSalt}
              flourWeight={flourWeight}
              waterWeight={waterWeight}
              saltWeight={saltWeight}
              totalDoughWeight={totalDoughWeight}
            />
          )}
          <div className="flex items-center p-4 mb-4 text-orange-800 border-2 border-orange-500 rounded-lg bg-orange-100">
            <InfoIcon className="flex-shrink-0 inline w-4 h-4 mr-3" />
            <span>🤤 The calculator for the is inspired by <a className="underline inline-flex items-center gap-2 hover:text-slate-800" href="https://www.youtube.com/channel/UCopxVPFM021dpp8L6euX-qA" target="_blank"><ExternalLink className="size-3" aria-hidden="true" /><span>Vito Iacopelli's youtube videos.</span></a></span>
          </div>
        </CardContent>
      </Card>
  );
}
